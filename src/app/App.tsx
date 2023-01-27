import { MapContainer, ZoomControl, TileLayer } from "react-leaflet"
import { latLng } from "leaflet"
import { useEffect, useState } from "react"
import Field from "./component/Field"
import { useParams } from "react-router-dom"
import RecenterAutomatically from "./utils/RecenterAutomatically"

export interface FieldDatas {
  status: number,
  items: FieldData[]
}

export interface FieldData {
  id: string,
  designator: string,
  color_hex: string,
  // I found there was something called a GeoJSON while investigating, never heard of this
  // but the boundaries looks like some.
  boundaries: any
  center: [number, number]
}

export interface SoilDatas {
  items: SoilData[]
}

export interface SoilData {
  id: string,
  name: string,
  partfield_id: string,
  mapdata: { features: [{ geometry: any, properties: { id: string, color: string, analysis: string }, type: string }] }
}

export default function App() {
    const [fields, setFields] = useState<FieldDatas>()
    const [soils, setSoils] = useState<SoilDatas>()

    const fieldMaps = (field: FieldData) => {
      return soils?.items.filter(s => s.partfield_id === field.id);
    }

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/1-partfields.json`)
            .then(r => r.json())
            .then(setFields);
        
        fetch(`${process.env.PUBLIC_URL}/1-soilmaps.json`)
            .then(r => r.json())
            .then(setSoils);
    }, []);

    return (
        <MapContainer className="w-screen min-h-screen z-0" center={latLng([49.6690444111223, 4.98047399519336])} zoom={14} zoomControl={false}>
          <ZoomControl position="topright" />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {fields?.items.map(f => <Field key={f.id} field={f} soils={fieldMaps(f)}></Field>)}
        </MapContainer>
    )
}