import getWeather from "./callWeatherAPI";
import { fillDOM } from "./DOM";
import { updateMap } from "./map";

const getCoords = (weatherObject) => (weatherObject.coord);

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
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = form.querySelector("input");
    const newWeather = getWeather(search.value);
    newWeather
      .then((data) => filterWeather(data))
      .then((result) => {
        fillDOM(result);
        updateMap(getCoords(result));
      });
  });
};

export { reportWeather };
