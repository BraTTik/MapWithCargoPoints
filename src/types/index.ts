export type Bid = {
  bid: number;
  startPoint: CargoPoint["id"];
  endPoint: CargoPoint["id"];
};

export type CargoPoint = {
  coordinates: [number, number];
  id: number;
};
