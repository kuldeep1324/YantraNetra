"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// Fix marker icon issue
// Fix marker icon issue safely
const DefaultIcon = L.icon({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

L.Marker.prototype.options.icon = DefaultIcon;
// Recenter map when location updates
function Recenter({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);

  return null;
}

type Props = {
  lat: number;
  lng: number;
};

export default function MapView({ lat, lng }: Props) {
  const position: [number, number] = [lat, lng];
  return (
    <div className="mt-6 rounded-2xl overflow-hidden">
      <MapContainer center={position} zoom={13} style={{ height: "400px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Recenter lat={lat} lng={lng} />

        <Marker position={position}>
          <Popup>Drone Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}