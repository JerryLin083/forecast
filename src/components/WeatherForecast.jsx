import { getWeatherCodeImg } from "../assets/helper";
import Loading from "./utils/Loading";
import { useForecastContext } from "../context/forecastProvider";

const WeatherForecast = () => {
  const { isLoading, currentWeather } = useForecastContext();

  if (isLoading) return <Loading />;

  return (
    <div className="flexBetween">
      <img
        src={getWeatherCodeImg(
          currentWeather.is_day,
          currentWeather.weathercode
        )}
        alt="weather-icon"
        width={42}
        height={42}
      />
      <p className="text-sm">{currentWeather.temperature} &deg;</p>
    </div>
  );
};

export default WeatherForecast;
