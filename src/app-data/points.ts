import { CargoPoint } from "types";

export const cargoPoints: CargoPoint[] = [
  {
    id: 10,
    coordinates: [55.784875094551765, 37.56624440022432],
  },
  {
    id: 11,
    coordinates: [55.73039667735172, 37.68446364028884],
  },
  {
    id: 20,
    coordinates: [55.66991337557652, 37.577205747866124],
  },
  {
    id: 21,
    coordinates: [55.75134261292831, 37.586829110471875],
  },
  {
    id: 30,
    coordinates: [55.81799889014253, 37.81759856480839],
  },
  {
    id: 31,
    coordinates: [55.675377600887245, 37.790700360946566],
  },
  {
    id: 40,
    coordinates: [55.5991701865561, 37.63674653042208],
  },
  {
    id: 41,
    coordinates: [55.75062119091926, 37.40873451821835],
  },
];

export const getPoint = (id: number) => cargoPoints.find((item) => item.id === id);
