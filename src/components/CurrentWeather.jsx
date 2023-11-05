import { BiCurrentLocation } from "react-icons/bi";

import CurrentWeatherCard from "./CurrentWeatherCard";
import Button from "./utils/Button";
import { getFormatTime } from "../assets/helper";
import { getGeoLocation } from "../assets/helper";
import { useForecastContext } from "../context/forecastProvider";
import { useWeatherContext } from "../context/weatherProvider";

const CurrentWeather = () => {
  const { dispatch } = useWeatherContext();
  const {
    country: { city, locality },
  } = useForecastContext();

  const localTime = new Date().toString();

  return (
    <header>
      <div className="flex items-center gap-6">
        <h3 className="font-bold text-5xl">{city}</h3>
        <Button onClickHandler={() => getGeoLocation(dispatch)}>
          <BiCurrentLocation size={32} color="#fbbf24" />
        </Button>
      </div>

      <p className="mt-4 font-semibold text-2xl">{locality}</p>
      <p className="mt-6">{getFormatTime(localTime)}</p>

      <CurrentWeatherCard />
    </header>
  );
};

export default CurrentWeather;
