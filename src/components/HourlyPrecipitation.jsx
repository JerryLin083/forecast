import { BsDropletHalf } from "react-icons/bs";
import { useForecastContext } from "../context/forecastProvider";

const HourlyPrecipitation = ({ index }) => {
  const { hourlyTime, hourlyPrecipitation } = useForecastContext();
  const formatTime = new Date(hourlyTime.at(index) + ":00Z").toLocaleString(
    "en-US",
    {
      hour: "numeric",
    }
  );

  return (
    <>
      <p className="text-sm">{formatTime}</p>
      <p className="py-2">
        <BsDropletHalf color="#3b82f6" />
      </p>
      <p className="text-sm">
        {Number(hourlyPrecipitation.at(index)).toFixed(0)}%
      </p>
    </>
  );
};

export default HourlyPrecipitation;
