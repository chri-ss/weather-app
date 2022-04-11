import getLocation from "./getLocation";
import {
  getWeather,
  getFirstWeather,
  toggleDegrees,
  getForecast,
} from "./callWeatherAPI";
import { fillForecast, fillWeather, updateForecast } from "./DOM";
import { updateMap } from "./map";

const getCoords = (weatherObject) => weatherObject.coord;

const filterWeather = (weatherData) => {
  let newWeather = Object.entries(weatherData);
  newWeather = newWeather.filter(
    ([k, v]) =>
      k === "coord" ||
      k === "weather" ||
      k === "main" ||
      k === "visibility" ||
      k === "clouds" ||
      k === "name"
  );
  newWeather = Object.fromEntries(newWeather);
  return newWeather;
};

const reportWeather = () => {
  const form = document.querySelector("form");
  const search = form.querySelector("input");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newWeather = getWeather(search.value);
    newWeather
      .then((data) => filterWeather(data))
      .then((result) => {
        fillWeather(result);
        updateMap(getCoords(result));
        getForecast(getCoords(result)).then((forecast) => {
          for (let i = 1; i < 8; ++i) {
            updateForecast(forecast.daily[i], i);
          }
        });
        search.value = "";
        search.placeholder = "Enter City";
      });
  });
};

async function reportFirstWeather() {
  const coords = await getLocation().catch((err) => alert(err));
  const search = document.querySelector("form > input");
  const firstWeather = getFirstWeather(coords);
  firstWeather
    .then((data) => filterWeather(data))
    .then((result) => {
      fillWeather(result);
      updateMap(getCoords(result));
      getForecast(getCoords(result)).then((forecast) => {
        for (let i = 1; i < 8; ++i) {
          updateForecast(forecast.daily[i], i);
        }
      });
      search.placeholder = "Enter City";
    });
}

const addToggleListener = () => {
  const toggle = document.getElementById("toggle");
  toggle.addEventListener("change", () => {
    toggleDegrees();
    const city = document.querySelector(".city");
    const newWeather = getWeather(city.textContent);
    newWeather
      .then((data) => filterWeather(data))
      .then((result) => {
        fillWeather(result);
        getForecast(getCoords(result)).then((forecast) => {
          for (let i = 1; i < 8; ++i) {
            updateForecast(forecast.daily[i], i);
          }
        });
      });
  });
};

export { reportWeather, reportFirstWeather, addToggleListener };
