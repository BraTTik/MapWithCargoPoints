import { useCallback, useEffect, useRef } from "react";
import L, { Map, Marker } from "leaflet";
import { useSelectedBidSelector } from "features/bids/bids.selectors";
import { getPoint } from "app-data/points";
import { LatLng } from "types";
import { APP_ENV } from "app-env";
import "leaflet-routing-machine";

export const useSelectedBid = (map?: Map) => {
  const { startPoint, endPoint } = useSelectedBidSelector() ?? {};
  const markers = useRef<Marker[]>([]);
  const route = useRef<L.Routing.Control>();

  const getCoordinates = useCallback((startPoint: number, endPoint: number) => {
    const start = getPoint(startPoint);
    const end = getPoint(endPoint);

    if (start && end) {
      return {
        startCoords: start.coordinates,
        endCoords: end.coordinates,
      };
    }
  }, []);

  const removeMarkers = useCallback(() => {
    markers.current?.forEach((marker) => {
      marker.remove();
    });
    markers.current = [];
  }, []);

  const addMarker = useCallback(
    (coordinates: LatLng) => {
      if (!map) return;
      markers.current.push(L.marker(coordinates).addTo(map));
    },
    [map],
  );

  const makeRoute = useCallback(
    (startPoint: LatLng, endPoint: LatLng) => {
      if (!map) return;
      if (route.current) {
        route.current.remove();
      }
      route.current = L.Routing.control({
        waypoints: [L.latLng(startPoint), L.latLng(endPoint)],
        router: L.Routing.mapbox(APP_ENV.REACT_APP_MAPBOX_ACCESS_TOKEN, {
          serviceUrl: "https://api.mapbox.com/directions/v5",
        }),
        show: false,
      }).addTo(map);
    },
    [map],
  );

  useEffect(() => {
    if (startPoint && endPoint) {
      const { startCoords, endCoords } = getCoordinates(startPoint, endPoint) ?? {};
      removeMarkers();
      if (startCoords && endCoords) {
        addMarker(startCoords);
        addMarker(endCoords);
        makeRoute(startCoords, endCoords);
        map?.fitBounds([startCoords, endCoords]);
      }
    }

    return removeMarkers;
  }, [getCoordinates, startPoint, endPoint, removeMarkers, addMarker, map, makeRoute]);
};
