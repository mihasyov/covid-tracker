import React from "react";
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

function Map({ countries, casesType, center, zoom }) {
  console.log("map render")
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom} icon={Icon}>
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

        {showDataOnMap(countries, casesType)}
        <ChangeMapView coords={center} />
      </LeafletMap>
    </div>
  );
}

export default Map;
