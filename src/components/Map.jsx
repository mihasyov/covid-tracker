import React from "react";
import { connect } from "react-redux";
import {
  MapContainer as LeafletMap,
  useMap,
  TileLayer,
  Marker,
} from "react-leaflet";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import { showDataOnMap } from "../utils/showDataOnMap";

import "../styles/Map.css";

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

const Map = ({ countriesList, casesType, center }) => {
  return (
    <div className="app__map">
      <LeafletMap center={center} zoom={4} icon={Icon}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={center}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        ></Marker>

        {showDataOnMap(countriesList, casesType)}
        <ChangeMapView coords={center} />
      </LeafletMap>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countriesList: state.countriesList,
  center: [
    state.countryDetails?.countryInfo?.lat || 44,
    state.countryDetails?.countryInfo?.long || -40,
  ],
});

export default connect(mapStateToProps)(Map);
