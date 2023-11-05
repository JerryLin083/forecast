const WeatherDetailList = ({ children }) => {
  return (
    <li className="flexBetween px-4 mt-2 border-b-[1px] border-slate-600">
      {children}
    </li>
  );
};

export default WeatherDetailList;
