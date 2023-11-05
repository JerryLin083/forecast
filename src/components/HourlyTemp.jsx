import { getWeatherCodeImg } from "../assets/helper";
import { useForecastContext } from "../context/forecastProvider";

const HourlyTemp = ({ index }) => {
  const { hourlyTime, hourlyIsDay, hourlyWeathercode, hourlyTemp } =
    useForecastContext();

  const formatTime = new Date(hourlyTime.at(index) + ":00Z").toLocaleString(
    "en-US",
    {
      hour: "numeric",
    }
  );

  return (
    <>
      <p className="text-sm">{formatTime}</p>
      <img
        src={getWeatherCodeImg(
          hourlyIsDay.at(index),
          hourlyWeathercode.at(index)
        )}
        alt="weather icon"
        width={32}
        height={32}
      />
      <p className="text-sm">{Number(hourlyTemp.at(index)).toFixed(0)} &deg;</p>
    </>
  );
};

export default HourlyTemp;
