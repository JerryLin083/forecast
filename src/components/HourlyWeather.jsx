import { useState } from "react";
import Option from "./utils/Option";
import HourlyWeatherCards from "./HourlyWeatherCards";

const options = ["溫度", "降雨機率", "風速"];

const HourlyWeather = () => {
  const [option, setOption] = useState("溫度");
  return (
    <section className="bg-transparentSecondary p-2 mt-8">
      <p className="w-full border-b-[1px] border-slate-200 font-semibold text-xl">
        氣象預報
      </p>

      <Option
        options={options}
        onChange={(e) => setOption(e.target.value)}
        value={option}
      />

      <div className="overflow-auto py-4">
        <HourlyWeatherCards option={option} />
      </div>
    </section>
  );
};

export default HourlyWeather;
