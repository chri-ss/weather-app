import getLocation from "./getLocation";
import {
  getWeather,
  getFirstWeather,
  toggleDegrees,
  getForecast,
} from "./callWeatherAPI";
import { fillWeather, updateForecast } from "./DOM";
import { updateMap } from "./map";
import validateInput from "./validateInput";

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

const updateWeather = (weatherInfo, search) => {
  weatherInfo
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
    })
    .catch((err) => {
      validateInput(err);
    });
};

const reportWeather = () => {
  const form = document.querySelector("form");
  const search = form.querySelector("input");
  const errSpan = document.querySelector(".error");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    errSpan.style.display = "none";
    const weather = getWeather(search.value);
    updateWeather(weather, search);
  });
};

async function reportFirstWeather() {
  const coords = await getLocation().catch((err) => validateInput(err));
  const search = document.querySelector("form > input");
  const weather = getFirstWeather(coords);
  updateWeather(weather, search);
}

const addToggleListener = () => {
  const toggle = document.getElementById("toggle");
  toggle.addEventListener("change", () => {
    toggleDegrees();
    const city = document.querySelector(".city");
    const weather = getWeather(city.textContent);
    weather
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
