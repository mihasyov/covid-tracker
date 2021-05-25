import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  CardContent,
  Card,
  CircularProgress,
} from "@material-ui/core";

import InfoBox from "./components/InfoBox";
import Map from "./components/Map";
import Table from "./components/Table";
import LineGraph from "./components/LineGraph";

import { sortTableData } from "./utils/sortTableData";
import { formatStats } from "./utils/formatStats";

import "leaflet/dist/leaflet.css";
import "./App.css";

const covidURL = "https://disease.sh/v3/covid-19";
function App() {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("worldwide");
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState([44, -40]);
  const [mapZoom, setMapZoom] = useState(2);
  const [countries, setCountries] = useState([]);
  const [infoBoxData, setInfoBoxData] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    fetch(`${covidURL}/all`)
      .then((resp) => resp.json())
      .then((data) => setInfoBoxData(data));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`${covidURL}/countries`)
      .then((resp) => resp.json())
      .then((data) => {
        setLoading(false);
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));
        const sortedData = sortTableData(data);
        setTableData(sortedData);
        setCountries(countries);
        setMapCountries(data);
      });
  }, []);

  const onCountryChange = (e) => {
    const country = e.target.value;
    const coords = country === "worldwide" ? [44, -40] : null;
    const url =
      country === "worldwide"
        ? `${covidURL}/all`
        : `${covidURL}/countries/${country}?yesterday=true`;


    setLoading(true);
    setCountry(country);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setInfoBoxData(data);
        setMapCenter(coords || [data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(8);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        
      });
    };

  console.log("app render");
  return (
    <div className="app">
      <div className="app__main">
        <div className="app__header">
          <h1>COVID-19 tracker</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map(({ value, name }, i) => {
                return (
                  <MenuItem value={value} key={i}>
                    {name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <InfoBox
                active={casesType === "cases"}
                onClick={(e) => setCasesType("cases")}
                title="Coronavirus cases"
                cases={formatStats(infoBoxData.todayCases)}
                total={formatStats(infoBoxData.cases)}
              />
              <InfoBox
                isGreen
                active={casesType === "recovered"}
                onClick={(e) => setCasesType("recovered")}
                title="Recovered"
                cases={formatStats(infoBoxData.todayRecovered)}
                total={formatStats(infoBoxData.recovered)}
              />
              <InfoBox
                active={casesType === "deaths"}
                onClick={(e) => setCasesType("deaths")}
                title="Deaths"
                cases={formatStats(infoBoxData.todayDeaths)}
                total={formatStats(infoBoxData.deaths)}
              />
            </>
          )}
        </div>
        <Map
          casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>

      <Card className="app__side">
        <CardContent>
          <h3>Live cases by country</h3>
          <Table countries={tableData}></Table>
          <h3 className="app__graphTitle">
            Worldwide new {casesType} (last 6 months)
          </h3>
          <LineGraph casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
