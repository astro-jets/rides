"use client"
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

export default function Map() {
  const userIcon = new L.Icon({ iconUrl: "../images/person.png" });
  const carIcon = new L.Icon({ iconUrl: "../images/car.png" });
  const locationIcon = new L.Icon({ iconUrl: "../images/marker.png" });
  const initialPosition = [-15.7741, 35.0319]; // Initial marker position
  const finalPosition = [-15.8136, 35.0964]; // Final marker position
  const duration = 1000*60*12; // Animation duration in milliseconds

  const [currentPosition, setCurrentPosition] = useState(initialPosition);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const startTime = Date.now();
    const animationInterval = 50; // Update every 50 milliseconds

    const updatePosition = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const lat = initialPosition[0] + progress * (finalPosition[0] - initialPosition[0]);
        const lng = initialPosition[1] + progress * (finalPosition[1] - initialPosition[1]);
        setCurrentPosition([lat, lng]);
      } else {
        setCurrentPosition(finalPosition);
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(updatePosition, animationInterval);

    return () => clearInterval(intervalId);
  }, []);

  
  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Astro Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  {/*  -15.7908992 35.0322688 */}

  return (
    <div className="flex flex-col w-full h-screen items-center">
      <MapContainer
        className="w-full h-[80vh]"
        center={[-15.7626, 35.01632]}
        zoom={15}
        style={{ width: "100%", height: "400px" }}
        maxZoom={18}
        minZoom={3}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[-15.7741, 35.0319]} icon={userIcon}>
          <Popup>You.</Popup>
        </Marker>

        <Marker position={[-15.8136, 35.0964]} icon={locationIcon} >
          <Popup>Destination.</Popup>
        </Marker>

        <Marker position={currentPosition} icon={carIcon}>
          <Popup>Taxi</Popup>
        </Marker>
        <RoutingComponent />
      </MapContainer>
      <p className="p-8 bg-secondary text-white cursor-pointer w-[60%] text-center mt-5" onClick={handleLocationClick}>Get Your location</p>

     {location && <div className="mt-5 flex flex-col items-center">
        <p>Location is {location.latitude} {location.longitude} </p>
      </div>
      }
    </div>
  );
}

function RoutingComponent() {
  const map = useMap();

  console.log(L.Routing)
  L.Routing.control({
    waypoints: [
      L.latLng(-15.7741, 35.0319),
      L.latLng(-15.8136, 35.0964),
    ],
    createMarker: function () {
      return null; // Hide the extra markers
    },
  }).addTo(map);

  return null;
}