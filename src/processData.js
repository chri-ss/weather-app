import getWeather from "./callWeatherAPI";

const content = document.getElementById("content");

const reportWeather = () => {
  const newQuery = "Vancouver";
  console.log(getWeather(newQuery));
};

export default reportWeather;
