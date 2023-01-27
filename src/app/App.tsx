import { MapContainer, TileLayer, Circle } from "react-leaflet"
import L from "leaflet"
import { useEffect, useState } from "react"

interface PartFields {
  status: number,
  items: [Field]
}

interface Field {
  // I found there was something called a GeoJSON while investigating, never heard of this
  // but the boundaries looks like some.
  boundaries: any
}

export default function App() {
    const [json, setJson] = useState<PartFields>()
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/1-partfields.json`)
            .then(r => r.json())
            .then(setJson)
    }, [json]);

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