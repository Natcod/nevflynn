import React, { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet CSS
import "./MapCard.css";

// Avatar marker icon
const avatarIcon = new L.Icon({
  iconUrl: "/avatar.jpg", // Path to your avatar image
  iconSize: [40, 40], // Size of the icon
  iconAnchor: [20, 40], // Point of the icon that corresponds to the marker's location
});

const MapCard = () => {
  const [mapKey, setMapKey] = useState(Date.now());
  const mapCenter = [53.3498, -6.2603];

  return (
    <div className="map-card" key={mapKey}>
      {/* Unique container for the map */}
      <div id={`map-container-${mapKey}`} style={{ width: "100%", height: "400px" }}>
        <MapContainer
          center={mapCenter}
          zoom={12}
          scrollWheelZoom={false}
          dragging={false}
          className="map-container"
          whenCreated={(map) => map.on("unload", () => map.remove())} // Cleanup on unload
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={mapCenter} icon={avatarIcon} />
        </MapContainer>
      </div>
      <div className="zoom-controls">
        <button className="zoom-button zoom-out" onClick={() => setMapKey(Date.now())}>
          -
        </button>
        <button className="zoom-button zoom-in" onClick={() => setMapKey(Date.now())}>
          +
        </button>
      </div>
    </div>
  );
};
export default MapCard;