import getWeather from "./callWeatherAPI";

const reportWeather = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = form.querySelector("input");
    const newWeather = getWeather(search.value);
    newWeather.then(
      (data) => {
        data = Object.entries(data);
        data = data.filter(
          ([k, v]) =>
            k === "weather" ||
            k === "main" ||
            k === "visibility" ||
            k === "clouds" ||
            k === "name"
        );
        data = Object.fromEntries(data);
        console.log(data);
      }
    );
  });
};

export default reportWeather;
