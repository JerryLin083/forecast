import DailyWeatherCards from "./DailyWeatherCards";

const DailyWeather = () => {
  return (
    <section className="bg-transparentSecondary p-2 mt-8 flex-1">
      <p className="border-b-[1px] border-slate-200 font-semibold text-xl">
        本周天氣
      </p>
      <DailyWeatherCards />
    </section>
  );
};

export default DailyWeather;
