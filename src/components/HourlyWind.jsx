import { FaArrowDownLong } from "react-icons/fa6";
import { useForecastContext } from "../context/forecastProvider";

const HourlyWind = ({ index }) => {
  const { hourlyTime, hourlyWindspeed, hourlyWindDirection } =
    useForecastContext();

  const direction = hourlyWindDirection.at(index);
  const formatTime = new Date(hourlyTime.at(index) + ":00Z").toLocaleString(
    "en-US",
    {
      hour: "numeric",
    }
  );

  return (
    <>
      <p className="text-sm">{formatTime}</p>
      <p className="py-1" style={{ rotate: `${direction}deg` }}>
        <FaArrowDownLong size={24} />
      </p>
      <p className="text-sm">
        {Number(hourlyWindspeed.at(index)).toFixed(0)}{" "}
        <span className="text-[10px]">m/s</span>
      </p>
    </>
  );
};

export default HourlyWind;
