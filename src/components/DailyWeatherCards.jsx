import { useForecastContext } from "../context/forecastProvider";
import DailyWeatherCard from "./DailyWeatherCard";

const DailyWeatherCards = () => {
  const { dailyWeather } = useForecastContext();

  const weeks = dailyWeather.time;

  return (
    <ul className="mt-4 px-4">
      {weeks.map((day, index) => (
        <DailyWeatherCard key={`${day}Forcast`} index={index} />
      ))}
    </ul>
  );
};

export default DailyWeatherCards;
