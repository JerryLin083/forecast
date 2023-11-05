import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Theme } from "./components";
import { WeatherProvider } from "./context/weatherProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherProvider>
      <Theme>
        <App />
      </Theme>
    </WeatherProvider>
  </React.StrictMode>
);
