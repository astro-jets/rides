"use client"

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  const userIcon = new L.Icon({ iconUrl: "../images/person.png" });
  const carIcon = new L.Icon({ iconUrl: "../images/car.png" });

  const [center, setCenter] = useState(null);

  useEffect(() => {
    // Use the Geolocation API to get the user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  function getLocationInfo(latitude, longitude) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=7cd555d3ae4f4f41ad0f9ef85396246a`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status.code === 200) {
        console.log("results:", data.results);
        setCenter(data.results[0].formatted);
      } else {
        console.log("Reverse geolocation request failed.");
      }
    })
    .catch((error) => console.error(error));
}

  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setCenter({lat,lon});
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <div className="location-map">
      {center && (
        <MapContainer className="w-full h-[60vh]" center={center} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center} icon={userIcon}>
            <Popup>Your Location</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default LocationMap;
