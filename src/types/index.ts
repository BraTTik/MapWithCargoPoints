export type Bid = {
  bid: number;
  startPoint: CargoPoint["id"];
  endPoint: CargoPoint["id"];
};

export type Lat = number;
export type Lng = number;
export type LatLng = [Lat, Lng];

export type CargoPoint = {
  coordinates: LatLng;
  id: number;
};

export type RouteResponse = {
  distance: number;
  duration: number;
  geometry: {
    coordinates: LatLng[];
  };
};

export type RoutesResponse = {
  routes: RouteResponse[];
};
