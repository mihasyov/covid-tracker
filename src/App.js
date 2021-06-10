import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  MenuItem,
  FormControl,
  Select,
  CardContent,
  Card,
} from "@material-ui/core";

import { fetchCountryDetails } from "./redux/actions/actions";
import { fetchCountriesList } from "./redux/actions/actions";

import InfoBoxes from "./components/InfoBoxes";
import Map from "./components/Map";
import Table from "./components/Table";
import Chart from "./components/Chart";

import "leaflet/dist/leaflet.css";
import "./App.css";

const App = ({countriesList, fetchCountriesList, fetchCountryDetails}) => {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("belarus");
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetchCountriesList();
  }, [fetchCountriesList]);

  useEffect(() => {
    fetchCountryDetails(country);
  }, [country, fetchCountryDetails]);

  const onCountryChange = (e) => {
    const country = e.target.value;
    setLoading(true);
    setCountry(country);
    fetchCountryDetails(country);
    setLoading(false);
  }

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
              <MenuItem value="belarus">Belarus</MenuItem>
              {countriesList.map(({country}, i) => {
                return (
                  <MenuItem value={country} key={i}>
                    {country}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          {loading ? <div>loading...</div> :
          <InfoBoxes casesType={casesType} setCasesType={setCasesType}/>}
        </div>
        <Map
          casesType={casesType}
        />
      </div>

      <Card className="app__side">
        <CardContent>
          <h3>Live cases by country</h3>
          <Table />
          <h3 className="app__chartTitle">
            Worldwide new {casesType} (last 6 months)
          </h3>
          <Chart casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

const mapStateToProps = state => {
  const countriesList = state.countriesList.map(countryInfo => ({
    country: countryInfo.country,
    cases: countryInfo.cases
  }));
  countriesList.sort((a, b) => a.country > b.country ? 1 : -1);
  return {countriesList};
}

export default connect(
  mapStateToProps,
  {fetchCountriesList, fetchCountryDetails}
  )(App);
