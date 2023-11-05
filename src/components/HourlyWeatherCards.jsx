import { useForecastContext } from "../context/forecastProvider";
import HourlyWeatherCard from "./HourlyWeatherCard";

const HourlyWeatherCards = ({ option }) => {
  const { hourlyTime } = useForecastContext();
  return (
    <ul className="flexBetween ">
      {hourlyTime.map((time, index) => (
        <HourlyWeatherCard key={time} index={index} option={option} />
      ))}
    </ul>
  );
};

export default HourlyWeatherCards;
