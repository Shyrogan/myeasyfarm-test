import { FieldData, FieldDatas, SoilData, SoilDatas } from "./App";
import { MapContainer, ZoomControl, TileLayer, GeoJSON, FeatureGroup, Popup, useMap } from "react-leaflet"
import { latLng } from "leaflet"
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import RecenterAutomatically from "./utils/RecenterAutomatically";

export default function FieldApp() {
    const { id } = useParams();
    const [soil, setSoil] = useState<SoilData>()
    const [field, setField] = useState<FieldData>()

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/1-soilmaps.json`)
            .then(r => r.json())
            .then(r => r as SoilDatas)
            .then(r => r.items.filter((s: SoilData) => s.id === id)[0])
            .then(soil => {
                fetch(`${process.env.PUBLIC_URL}/1-partfields.json`)
                    .then(r => r.json())
                    .then(r => r as FieldDatas)
                    .then(r => r.items.filter((f: FieldData) => f.id === soil.partfield_id)[0])
                    .then(setField);
                setSoil(soil);
            });
    }, []);

    return (
        <>
           <Link className="fixed z-10 bg-primary outline outline-secondary outline-2
              px-4 py-3 rounded-lg hover:outline-4 font-semibold text-xl transition-all left-1/2 bottom-10 -translate-x-1/2" to="/app">
              Revenir à l'application
            </Link>

            <MapContainer className="w-screen min-h-screen z-0" center={latLng(field?.center ?? [49.5, 4.5])} zoom={17} zoomControl={false}>
                <ZoomControl position="topright" />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {soil?.mapdata.features.map(feature => {
                    return <FeatureGroup key={feature.properties.id}>
                        <GeoJSON style={{ fillOpacity: 1, color: feature.properties.color }} data={feature.geometry}></GeoJSON>
                        <Popup>{feature.properties.analysis}</Popup>
                    </FeatureGroup>
                })}

                <RecenterAutomatically lat={field?.center[1] ?? 49.6} lng={field?.center[0] ?? 4.9}  />
            </MapContainer>
        </>
    )
}