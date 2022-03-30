import getWeather from "./callWeatherAPI";

const filterWeather = (weatherData) => {
  weatherData = Object.entries(weatherData);
  weatherData = weatherData.filter(
    ([k, v]) =>
      k === "weather" ||
      k === "main" ||
      k === "visibility" ||
      k === "clouds" ||
      k === "name"
  );
  weatherData = Object.fromEntries(weatherData);
  // console.log(weatherData);
  // return weatherData;
  const body = document.querySelector("body");
  body.textContent = weatherData.name;
};

const reportWeather = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = form.querySelector("input");
    const newWeather = getWeather(search.value);
    newWeather.then((data) => filterWeather(data));
  });
};

export default reportWeather;
