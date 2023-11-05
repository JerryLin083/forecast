import { BsDropletHalf, BsThermometerHalf } from "react-icons/bs";

import { getWeatherCodeImg } from "../assets/helper";
import { useForecastContext } from "../context/forecastProvider";

const DailyWeatherCard = ({ index }) => {
  const {
    dailyWeather: {
      time,
      weathercode,
      temperature_2m_max: max,
      temperature_2m_min: min,
      precipitation_probability_max: precipitation,
    },
  } = useForecastContext();

  const formatTime = new Date(time.at(index)).toLocaleDateString("zh-TW", {
    weekday: "short",
  });

  return (
    <li className="mt-2 flexBetween border-b border-slate-600">
      <p className="flex-1">{formatTime}</p>

      <div className="flex-1">
        <img
          src={getWeatherCodeImg(true, weathercode.at(index))}
          width={28}
          height={28}
        />
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:gap-4">
        <BsDropletHalf color="#3b82f6" size={24} />

        <span className="float-right flex-shrink-0">
          {precipitation.at(index)} %
        </span>
      </div>

      <div className="flexCenter flex-1 gap-2 ">
        <div className="flex-shrink-0">
          <BsThermometerHalf size={24} />
        </div>

        <p className="flex gap-1 flex-shrink-0">
          <span className="text-red-400">
            {Math.floor(max.at(index))} &deg;
          </span>

          <span>-</span>

          <span className="text-sky-300">
            {Math.floor(min.at(index))} &deg;
          </span>
        </p>
      </div>
    </li>
  );
};

export default DailyWeatherCard;
