import { createContext, useContext, useReducer } from "react";
import useFetchWeather from "../hook/useFetchWeather";
import useReverseGeo from "../hook/useReverseGeo";

const WeatherContext = createContext();

const initalState = {
  coordinate: { lat: 25.0478, lng: 121.5319 },
  country: { countryName: "", city: "", locality: "" },
  currentTime: "",
  currentWeather: {},
  hourlyWeather: {},
  dailyWeather: {},
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "coordinate/change":
      return {
        ...state,
        coordinate: action.payload,
      };
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "country/load":
      return {
        ...state,
        country: action.payload,
      };
    case "update/weather":
      return {
        ...state,
        currentTime: action.payload.current_weather?.time,
        currentWeather: action.payload?.current_weather,
        hourlyWeather: action.payload?.hourly,
        dailyWeather: action.payload?.daily,
        isLoading: false,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      throw new Error("action type is not exist");
  }
};

const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const {
    coordinate,
    country,
    currentTime,
    currentWeather,
    hourlyWeather,
    dailyWeather,
    isLoading,
  } = state;

  const theme = currentWeather.is_day ? "light" : "dark";

  useFetchWeather(coordinate, dispatch);
  useReverseGeo(coordinate, dispatch);

  return (
    <WeatherContext.Provider
      value={{
        dispatch,
        theme,
        country,
        currentTime,
        currentWeather,
        hourlyWeather,
        dailyWeather,
        isLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (context === undefined) throw new Error("Not in the weatherProvider");
  return context;
};

export { WeatherProvider, useWeatherContext };
