import { createContext, FC, RefObject, useContext, useEffect, useRef, useState } from "react";
import L, { Map } from "leaflet";
import { APP_ENV } from "app-env";

type MapContext = {
  map?: Map;
  mapContainer: RefObject<HTMLDivElement>;
};

const MapContext = createContext({} as MapContext);

export const MapProvider: FC = ({ children }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map>();

  useEffect(() => {
    if (mapContainer.current) {
      const currentMap = L.map(mapContainer.current, {
        center: [55.751244, 37.618423],
        zoom: 12,
      });

      L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: APP_ENV.REACT_APP_MAPBOX_ACCESS_TOKEN,
      }).addTo(currentMap);

      setMap(currentMap);
    }
  }, []);

  return <MapContext.Provider value={{ map, mapContainer }}>{children}</MapContext.Provider>;
};

export const useMap = () => useContext(MapContext);
