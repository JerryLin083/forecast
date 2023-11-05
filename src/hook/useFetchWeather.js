import { useEffect } from "react";

const useFetchWeather = (coordinate, dispatch) => {
  useEffect(() => {
    const fetchWeather = async () => {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coordinate.lat}&longitude=${coordinate.lng}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,visibility,weathercode,windspeed_10m,winddirection_10m,uv_index,is_day,cloudcover&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&current_weather=true&timezone=GMT`
        );
        const data = await res.json();

        dispatch({ type: "update/weather", payload: data });
      } catch (err) {
        dispatch({ type: "error", payload: err.message });
      }
    };

    fetchWeather();
  }, [coordinate.lat, coordinate.lng, dispatch]);

  return;
};

export default useFetchWeather;
