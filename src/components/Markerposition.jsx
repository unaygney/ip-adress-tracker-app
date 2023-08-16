import React, { useEffect } from "react";
import { Marker , useMap } from "react-leaflet";
import icon from './icon'



export default function Markerposition({ data }) {

    const map = useMap();
  const position = data
    ? [data.location.lat, data.location.lng]
    : [51.505, -0.09];

    useEffect(() => {
        map.flyTo(position , 17 , {
            animate:true,
        })
    }, [map , position])

  return (
    <>
    
    <Marker icon={icon} position={position} />;
    </>


  )}
