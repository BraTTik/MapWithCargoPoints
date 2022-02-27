import { useMap } from "components/map/map.context";
import { useEffect, useState } from "react";

export const Map = () => {
  const { mapContainer } = useMap();
  const [height, setHeight] = useState<number>(400);

  useEffect(() => {
    if (mapContainer.current) {
      const parent = mapContainer.current.parentElement;
      if (parent) setHeight(parent.offsetHeight);
    }
  }, []);

  return <div id="map" ref={mapContainer} style={{ height }} />;
};
