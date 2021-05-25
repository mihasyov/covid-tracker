import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import generateKey from './generateKey';

const casesTypeColors = {
  cases: {
    hex: "#A533FF",
    multiplier: 150,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 100,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 500,
  },
};

export const showDataOnMap = (data, casesType) => {
  const { hex, multiplier } = casesTypeColors[casesType];
  

  return data.map((country, i) => (
    <Circle
      key={generateKey()}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={hex}
      fillColor={hex}
      radius={Math.sqrt(country[casesType]) * multiplier}
    >
      <Popup>
        <div className="popup">
          <div
            className="popup-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="popup-country">{country.country}</div>
          <div className="popup-cases">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="popup-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="popup-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
};
