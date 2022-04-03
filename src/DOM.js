import tempIcon from "./images/snowflake-thermometer.svg";
import highLowIcon from "./images/swap-vertical-bold.svg";
import weatherIcon from "./images/white-balance-sunny.svg";
import cloudIcon from "./images/cloud-percent.svg";
import humidityIcon from "./images/water-opacity.svg";
import visibilityIcon from "./images/eye-arrow-right-outline.svg";

const content = document.getElementById("content");
const header = document.createElement("div");
const main = document.createElement("div");
const weatherContainer = document.createElement("div");
const city = document.createElement("h1");
const temp = document.createElement("div");
const highLow = document.createElement("div");
const weather = document.createElement("div");
const humidity = document.createElement("div");
const visibility = document.createElement("div");
const clouds = document.createElement("div");


const makeHeader = () => {
  header.classList.add("header");
  content.appendChild(header);
};

const makeCity = () => {
  city.classList.add("city");
  header.appendChild(city);
};

const makeSearch = () => {
  const searchForm = document.createElement("form");
  const search = document.createElement("input");
  const searchButton = document.createElement("button");
  search.type = "search";
  searchButton.type = "submit";
  searchButton.textContent = "search";
  searchButton.setAttribute("placeholder", "Search for your city");
  searchForm.appendChild(search);
  searchForm.appendChild(searchButton);
  header.appendChild(searchForm);
};

const makeMain = () => {
  main.classList.add("main");
  content.appendChild(main);
};

const makeWeatherContainer = () => {
  weatherContainer.classList.add("weather-container");
  main.appendChild(weatherContainer);
};

const makeTemp = () => {
  const wrapper = document.createElement("div");
  const tempImg = document.createElement("img");
  tempImg.src = tempIcon;
  temp.classList.add("temp");
  wrapper.appendChild(tempImg);
  wrapper.appendChild(temp);
  weatherContainer.appendChild(wrapper);
};

const makeHighLow = () => {
  const wrapper = document.createElement("div");
  const highLowImg = document.createElement("img");
  highLowImg.src = highLowIcon;
  highLow.classList.add("high-low");
  wrapper.appendChild(highLowImg);
  wrapper.appendChild(highLow);
  weatherContainer.appendChild(wrapper);
};

const makeWeather = () => {
  const wrapper = document.createElement("div");
  const weatherImg = document.createElement("img");
  weather.classList.add("weather");
  weatherImg.src = weatherIcon;
  wrapper.appendChild(weatherImg);
  wrapper.appendChild(weather);
  weatherContainer.appendChild(wrapper);
};

const makeHumidity = () => {
  const wrapper = document.createElement("div");
  const humidityImg = document.createElement("img");
  humidity.classList.add("humidity");
  humidityImg.src = humidityIcon;
  wrapper.appendChild(humidityImg);
  wrapper.appendChild(humidity);
  weatherContainer.appendChild(wrapper);
};

const makeVisibility = () => {
  const wrapper = document.createElement("div");
  const visibilityImg = document.createElement("img");
  visibility.classList.add("visibility");
  visibilityImg.src = visibilityIcon;
  wrapper.appendChild(visibilityImg);
  wrapper.appendChild(visibility);
  weatherContainer.appendChild(wrapper);
};

const makeClouds = () => {
  const wrapper = document.createElement("div");
  const cloudsImg = document.createElement("img");
  clouds.classList.add("clouds");
  cloudsImg.src = cloudIcon;
  wrapper.appendChild(cloudsImg);
  wrapper.appendChild(clouds);
  weatherContainer.appendChild(wrapper);
};

const makeMap = () => {
  const map = document.createElement("div");
  map.id = "map";
  main.appendChild(map);
};

const makeDOM = () => {
  makeHeader();
  makeMain();
  makeSearch();
  makeCity();
  makeTemp();
  makeHighLow();
  makeWeatherContainer();
  makeWeather();
  makeHumidity();
  makeVisibility();
  makeClouds();
  makeMap();
};

const fillDOM = (weatherData) => {
  city.textContent = weatherData.name;
  temp.textContent = weatherData.main.temp;
  highLow.textContent = `HI: ${weatherData.main.temp_max}°F LOW: ${weatherData.main.temp_min}°F`;
  weather.textContent = weatherData.weather[0].description;
  humidity.textContent = weatherData.main.humidity;
  visibility.textContent = weatherData.visibility;
  clouds.textContent = weatherData.clouds.all;
};

export { makeDOM, fillDOM };
