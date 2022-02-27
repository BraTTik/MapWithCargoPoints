import { useMap } from "components/map/map.context";
import { useEffect, useState } from "react";
import { useSelectedBid } from "components/map/hooks/hooks/use-selected-bid";

export const Map = () => {
  const { mapContainer, map } = useMap();
  const [height, setHeight] = useState<number | string>("100%");

  useEffect(() => {
    if (mapContainer.current) {
      const parent = mapContainer.current.parentElement;
      if (parent) setHeight(parent.offsetHeight);
    }
  }, [mapContainer]);

  useSelectedBid(map);

  return <div id="map" ref={mapContainer} style={{ height }} />;
};
