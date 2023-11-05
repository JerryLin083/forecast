import {
  CurrentWeather,
  DailyWeather,
  DailyWeatherAndDetail,
  HourlyWeather,
  WeatherDetail,
  Container,
} from "./components";
import { ForecastProvider } from "./context/forecastProvider";

function App() {
  return (
    <Container>
      <ForecastProvider>
        <CurrentWeather />
        <HourlyWeather />
        <DailyWeatherAndDetail>
          <DailyWeather />
          <WeatherDetail />
        </DailyWeatherAndDetail>
      </ForecastProvider>
    </Container>
  );
}

export default App;
