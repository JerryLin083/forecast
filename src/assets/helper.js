import clearDay from "./image/clear-day.svg";
import clearNight from "./image/clear-night.svg";
import partlyCloudyDay from "./image/partly-cloudy-day.svg";
import partlyCloudyNight from "./image/partly-cloudy-night.svg";
import fogDay from "./image/fog-day.svg";
import fogNight from "./image/fog-night.svg";
import drizzle from "./image/drizzle.svg";
import rain from "./image/rain.svg";
import snow from "./image/snow.svg";
import snowflake from "./image/snowflake.svg";
import thunderstormsDay from "./image/thunderstorms-day.svg";
import thunderstormsNight from "./image/thunderstorms-night.svg";
import thunderStormsSnowDay from "./image/thunderstorms-day-snow.svg";
import thunderStormsSnowNight from "./image/thunderstorms-night-snow.svg";

export const weatherCode = [
  {
    code: [0],
    description: "Clear sky",
    dayImg: clearDay,
    nightImg: clearNight,
  },
  {
    code: [1, 2, 3],
    description: "Mainly clear, partly cloudy, and overcast",
    dayImg: partlyCloudyDay,
    nightImg: partlyCloudyNight,
  },
  {
    code: [45, 48],
    description: "Fog and depositing rime fog",
    dayImg: fogDay,
    nightImg: fogNight,
  },
  {
    code: [51, 53, 55],
    description: "Drizzle: Light, moderate, and dense intensity",
    dayImg: drizzle,
    nightImg: drizzle,
  },
  {
    code: [56, 57],
    description: "Freezing Drizzle: Light and dense intensity",
    dayImg: drizzle,
    nightImg: drizzle,
  },
  {
    code: [61, 63, 65],
    description: "Rain: Slight, moderate and heavy intensity",
    dayImg: rain,
    nightImg: rain,
  },
  {
    code: [66, 67],
    description: "Freezing Rain: Light and heavy intensity",
    dayImg: drizzle,
    nightImg: drizzle,
  },
  {
    code: [71, 73, 75],
    description: "Snow fall: Slight, moderate, and heavy intensity",
    dayImg: snow,
    nightImg: snow,
  },
  {
    code: [77],
    description: "Snow grains",
    dayImg: snowflake,
    nightImg: snowflake,
  },
  {
    code: [80, 81, 82],
    description: "Rain showers: Slight, moderate, and violent",
    dayImg: rain,
    nightImg: rain,
  },
  {
    code: [85, 86],
    description: "Snow showers slight and heavy",
    dayImg: snow,
    nightImg: snow,
  },
  {
    code: [95],
    description: "Thunderstorm: Slight or moderate",
    dayImg: thunderstormsDay,
    nightImg: thunderstormsNight,
  },
  {
    code: [96, 99],
    description: "Thunderstorm with slight and heavy hail",
    dayImg: thunderStormsSnowDay,
    nightImg: thunderStormsSnowNight,
  },
];

export const getWeatherCodeImg = (isDay, code) => {
  const timing = isDay ? "dayImg" : "nightImg";
  const weatherIcon = weatherCode.find((item) => item.code.includes(code));
  if (weatherIcon) {
    return weatherIcon[timing];
  } else {
    return "";
  }
};

export const getFormatTime = (time) => {
  const formatTime = new Intl.DateTimeFormat("zw-tw", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(time));

  return formatTime;
};

const timeStampConverter = (timeString) => {
  return new Date(timeString).getTime();
};

export const getStarter = (data, timeString) => {
  if (!data || !timeString) return;

  const starter = data.findIndex(
    (val) => timeStampConverter(val) > timeStampConverter(timeString)
  );
  return starter;
};

export const getRestHoulyDataByStarter = (data, starter) => {
  if (!data || !starter) return;
  return data.slice(starter, starter + 12);
};

export const getGeoLocation = (dispatch) => {
  const success = (pos) => {
    const crd = pos.coords;

    dispatch({
      type: "coordinate/change",
      payload: { lat: crd.latitude, lng: crd.longitude },
    });
  };

  const err = (err) => {
    console.log(err);
  };

  navigator.geolocation.getCurrentPosition(success, err);
};

export const uvRange = (uvIndex) => {
  if (uvIndex <= 2) return "低";
  if (uvIndex > 2 && uvIndex <= 5) return "中等";
  if (uvIndex > 5 && uvIndex <= 7) return "高";
  if (uvIndex > 7 && uvIndex <= 10) return "非常高";
  if (uvIndex > 10) return "過量";
};
