import { HourlyPrecipitation, HourlyTemp, HourlyWind } from ".";

const HourlyWeatherCard = ({ option, index }) => {
  return (
    <li className="flexCenter flex-col px-4 shrink-0">
      {option === "溫度" && <HourlyTemp index={index} />}

      {option === "降雨機率" && <HourlyPrecipitation index={index} />}

      {option === "風速" && <HourlyWind index={index} />}
    </li>
  );
};

export default HourlyWeatherCard;
