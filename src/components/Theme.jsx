import { useWeatherContext } from "../context/weatherProvider";

const Theme = ({ children }) => {
  const { theme } = useWeatherContext();
  return <div className={theme}>{children}</div>;
};

export default Theme;
