import React, { useRef, useState } from "react";
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
  const [mapKey, setMapKey] = useState(Date.now()); // Ensure unique key on re-renders
  const mapCenter = [53.3498, -6.2603]; // Center on Dublin, Ireland

  // Function to handle zoom in
  const handleZoomIn = () => {
    setMapKey(Date.now()); // Reset map to avoid reuse issue
  };

  // Function to handle zoom out
  const handleZoomOut = () => {
    setMapKey(Date.now()); // Reset map to avoid reuse issue
  };

  return (
    <div className="map-card">
      {/* Leaflet Map */}
      <MapContainer
        key={mapKey} // Ensure new map instance on re-renders
        center={mapCenter} // Center on Dublin, Ireland
        zoom={12} // Initial zoom level
        scrollWheelZoom={false} // Disable scroll zoom
        dragging={false} // Disable dragging (panning)
        className="map-container"
      >
        {/* Tile Layer (OpenStreetMap) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Avatar Marker */}
        <Marker position={mapCenter} icon={avatarIcon} />
      </MapContainer>

      {/* Zoom Controls */}
      <div className="zoom-controls">
        <button className="zoom-button zoom-out" onClick={handleZoomOut}>
          -
        </button>
        <button className="zoom-button zoom-in" onClick={handleZoomIn}>
          +
        </button>
      </div>
    </div>
  );
};

export default MapCard;
