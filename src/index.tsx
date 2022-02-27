import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "app/store";
import { Provider } from "react-redux";
import { MapProvider } from "components/map";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MapProvider>
        <App />
      </MapProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
