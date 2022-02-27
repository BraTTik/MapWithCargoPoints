export type AppEnvKeys = "REACT_APP_MAPBOX_ACCESS_TOKEN";

export const APP_ENV: { [K in AppEnvKeys]: string } = {
  REACT_APP_MAPBOX_ACCESS_TOKEN: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ?? "",
};
