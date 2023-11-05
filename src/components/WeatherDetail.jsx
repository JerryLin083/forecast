import { getWeatherCodeImg, uvRange } from "../assets/helper";
import { useForecastContext } from "../context/forecastProvider";

import WeatherDetailList from "./WeatherDetailList";

const WeatherDetail = () => {
  const {
    hourlyHumidity,
    hourlyUvIndex,
    hourlyCloudcover,
    hourlyIsDay,
    hourlyWeathercode,
    hourlyAppTemp,
    hourlyVisibility,
  } = useForecastContext();

  return (
    <section className="bg-transparentSecondary p-2 mt-8 flex-1">
      <p className="border-b-[1px] border-slate-200 font-semibold text-xl">
        詳細資訊
      </p>
      <div className="mt-4 px-4 flexBetween">
        <div className="flexCenter flex-1">
          <img
            src={getWeatherCodeImg(hourlyIsDay[0], hourlyWeathercode[0])}
            width={120}
            height={120}
          />
        </div>

        <ul className="flex-1 min-w-[180px]">
          <WeatherDetailList>
            <span>體感溫度</span>
            <span>{hourlyAppTemp[0]} &deg;C</span>
          </WeatherDetailList>

          <WeatherDetailList>
            <span>相對濕度</span>
            <span>{hourlyHumidity[0]} %</span>
          </WeatherDetailList>

          <WeatherDetailList>
            <span>能見度</span>
            <span>{hourlyVisibility[0] / 1000} 公里</span>
          </WeatherDetailList>

          <WeatherDetailList>
            <span>紫外線指數</span>
            <span>
              {hourlyUvIndex[0]} ({uvRange(hourlyUvIndex[0])})
            </span>
          </WeatherDetailList>

          <WeatherDetailList>
            <span>雲量</span>
            <span>{hourlyCloudcover[0]} %</span>
          </WeatherDetailList>
        </ul>
      </div>
    </section>
  );
};

export default WeatherDetail;
