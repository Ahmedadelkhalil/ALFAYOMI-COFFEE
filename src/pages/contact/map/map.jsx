import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
// Leaflet CSS Style File
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [21.599, 39.1599];
  return (
    <div className="contact-map-container mb-4 mt-2">
      <h1 className="text-uppercase main-color-green text-center mb-3">
        our location
      </h1>
      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={position}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
            })
          }
        >
          <Popup>PRIMECUT Restaurant.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
