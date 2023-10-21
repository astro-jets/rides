"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
        // <MapContainer className="w-full h-[80%]"
        //   center={[-13.2543, 34.3015]}
        //   zoom={9}
        //   style={{ width: '100%', height: '400px' }}
        //   maxZoom={18}
        //   minZoom={3}
        // >
        //   <TileLayer
        //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //   />
        //   {/* Add markers and other map features here */}
        // </MapContainer>

        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

        </MapContainer>
  );
};

export default Map;
