import { MapContainer, TileLayer, Polyline, Circle, CircleMarker, Polygon, Rectangle } from "react-leaflet"
import L from "leaflet"

export default function App() {
    const center = L.latLng([51.505, -0.09])
    const fillBlueOptions = { fillColor: 'blue' }

    return (
        <MapContainer className="w-screen min-h-screen z-0" center={center} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
      </MapContainer>
    )
}