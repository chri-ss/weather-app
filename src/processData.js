import getWeather from "./callWeatherAPI";

const content = document.getElementById("content");

const reportWeather = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = form.querySelector("input");
    getWeather(search.value);
  });
};

export default reportWeather;
