import { getWeatherCodeImg } from "../assets/helper";
import { useForecastContext } from "../context/forecastProvider";

const CurrentWeatherCard = () => {
  const {
    currentWeather: { is_day, weathercode, temperature },
  } = useForecastContext();

  return (
    <div className="mt-20">
      <img
        src={getWeatherCodeImg(is_day, weathercode)}
        width={80}
        height={80}
      />
      <p className="font-semibold text-8xl">{temperature} &deg;</p>
    </div>
  );
};

export default CurrentWeatherCard;
