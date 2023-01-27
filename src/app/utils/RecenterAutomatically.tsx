import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function RecenterAutomatically({ lat, lng }: { lat: number, lng: number }) {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng]);
    });
    return (<></>);
}