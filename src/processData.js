import getWeather from "./callWeatherAPI";

const reportWeather = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = form.querySelector("input");
    const newWeather = getWeather(search.value);
    newWeather.then((data) => console.log(Object.entries(data)));
  });
};

export default reportWeather;
