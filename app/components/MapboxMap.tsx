"use client";

import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// On définit la clé d'accès pour Mapbox
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

interface MapboxMapProps {
  longitude: number;
  latitude: number;
  zoom: number;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ longitude, latitude, zoom }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    // Empêche la carte de se ré-initialiser à chaque rendu
    if (map.current || !mapContainer.current) return; 

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12', // Style de la carte
      center: [longitude, latitude],
      zoom: zoom
    });

    // Ajoute un marqueur à la position de la ville
    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map.current);

    // Nettoyage au démontage du composant
    return () => map.current?.remove();
  }, [longitude, latitude, zoom]);

  return <div ref={mapContainer} className="w-full h-[450px] rounded-lg shadow-lg" />;
};

export default MapboxMap;