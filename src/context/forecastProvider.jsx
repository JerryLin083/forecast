import { createContext, useContext } from "react";

import { getStarter, getRestHoulyDataByStarter } from "../assets/helper";
import { useWeatherContext } from "./weatherProvider";

const ForecastContext = createContext();

const ForecastProvider = ({ children }) => {
  const { country, currentTime, currentWeather, hourlyWeather, dailyWeather } =
    useWeatherContext();

  if (!currentTime) return;

  const {
    temperature_2m: temp,
    relativehumidity_2m: humidity,
    apparent_temperature: appTemp,
    precipitation_probability: precipitation,
    windspeed_10m: windspeed,
    winddirection_10m: windDirection,
    uv_index: uvIndex,
    is_day: isDay,
    cloudcover,
    visibility,
    weathercode,
    time,
  } = hourlyWeather;

  const starter = getStarter(time, currentTime);

  const hourlyTime = getRestHoulyDataByStarter(time, starter);
  const hourlyTemp = getRestHoulyDataByStarter(temp, starter);
  const hourlyHumidity = getRestHoulyDataByStarter(humidity, starter);
  const hourlyAppTemp = getRestHoulyDataByStarter(appTemp, starter);
  const hourlyPrecipitation = getRestHoulyDataByStarter(precipitation, starter);
  const hourlyWindspeed = getRestHoulyDataByStarter(windspeed, starter);
  const hourlyWindDirection = getRestHoulyDataByStarter(windDirection, starter);
  const hourlyUvIndex = getRestHoulyDataByStarter(uvIndex, starter);
  const hourlyCloudcover = getRestHoulyDataByStarter(cloudcover, starter);
  const hourlyVisibility = getRestHoulyDataByStarter(visibility, starter);
  const hourlyIsDay = getRestHoulyDataByStarter(isDay, starter);
  const hourlyWeathercode = getRestHoulyDataByStarter(weathercode, starter);

  return (
    <ForecastContext.Provider
      value={{
        country,
        currentTime,
        currentWeather,
        dailyWeather,
        starter,
        hourlyTime,
        hourlyTemp,
        hourlyHumidity,
        hourlyAppTemp,
        hourlyPrecipitation,
        hourlyWindspeed,
        hourlyWindDirection,
        hourlyCloudcover,
        hourlyUvIndex,
        hourlyVisibility,
        hourlyIsDay,
        hourlyWeathercode,
      }}
    >
      {children}
    </ForecastContext.Provider>
  );
};

const useForecastContext = () => {
  const context = useContext(ForecastContext);

  if (context === undefined) throw new Error("Not in WeatherContextProvider");
  return context;
};

export { ForecastProvider, useForecastContext };
