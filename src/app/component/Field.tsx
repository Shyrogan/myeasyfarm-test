import { LeafletEventHandlerFnMap} from "leaflet";
import { FeatureGroup, GeoJSON, Popup } from "react-leaflet";
import React from "react";
import { FieldData, SoilData } from "../App";
import { Link } from "react-router-dom";

export default function Field({ field, soils }: { field: FieldData, soils: SoilData[] | undefined }) {
    return (<FeatureGroup key={field.id}>
        <GeoJSON style={{ color: `#${field.color_hex}` }} data={field.boundaries}></GeoJSON>
        <Popup>
            <p>Designator: {field.designator}</p>
            Available maps:
            <ul>Type:
            {soils?.map(s => <li key={s.name}>
                <Link to={`/soil/${s.id}`}>{s.name}</Link>
            </li>)}
            </ul>
        </Popup>
    </FeatureGroup>)
}