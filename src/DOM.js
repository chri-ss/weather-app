import tempIcon from "./images/snowflake-thermometer.svg";
import highLowIcon from "./images/swap-vertical-bold.svg";
import weatherIcon from "./images/white-balance-sunny.svg";
import cloudIcon from "./images/cloud-percent.svg";
import humidityIcon from "./images/water-opacity.svg";
import visibilityIcon from "./images/eye-arrow-right-outline.svg";
import { celsius } from "./callWeatherAPI";

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
  city.textContent = "-";
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

const makeToggle = () => {
  const toggle = document.createElement("input");
  const toggleLabel = document.createElement("label");
  toggle.type = "checkbox";
  toggle.id = "toggle";
  toggle.name = "toggle";
  toggleLabel.setAttribute("for", "toggle");
  weatherContainer.appendChild(toggle);
  weatherContainer.appendChild(toggleLabel);
};

const makeWeatherContainer = () => {
  weatherContainer.classList.add("weather-container");
  main.appendChild(weatherContainer);
};

const makeTemp = () => {
  temp.textContent = "-";
  const wrapper = document.createElement("div");
  const tempLabel = document.createElement("div");
  tempLabel.textContent = "Temperature";
  const tempImg = document.createElement("img");
  tempImg.src = tempIcon;
  temp.classList.add("temp");
  wrapper.appendChild(tempLabel);
  wrapper.appendChild(tempImg);
  wrapper.appendChild(temp);
  weatherContainer.appendChild(wrapper);
};

const makeHighLow = () => {
  highLow.textContent = "-";
  const wrapper = document.createElement("div");
  const highLowLabel = document.createElement("div");
  highLowLabel.textContent = "High & Low";
  const highLowImg = document.createElement("img");
  highLowImg.src = highLowIcon;
  highLow.classList.add("high-low");
  wrapper.appendChild(highLowLabel);
  wrapper.appendChild(highLowImg);
  wrapper.appendChild(highLow);
  weatherContainer.appendChild(wrapper);
};

const makeWeather = () => {
  weather.textContent = "-";
  const wrapper = document.createElement("div");
  const weatherLabel = document.createElement("div");
  weatherLabel.textContent = "Weather";
  const weatherImg = document.createElement("img");
  weather.classList.add("weather");
  weatherImg.src = weatherIcon;
  wrapper.appendChild(weatherLabel);
  wrapper.appendChild(weatherImg);
  wrapper.appendChild(weather);
  weatherContainer.appendChild(wrapper);
};

const makeHumidity = () => {
  humidity.textContent = "-";
  const wrapper = document.createElement("div");
  const humidityLabel = document.createElement("div");
  humidityLabel.textContent = "Humidity";
  const humidityImg = document.createElement("img");
  humidity.classList.add("humidity");
  humidityImg.src = humidityIcon;
  wrapper.appendChild(humidityLabel);
  wrapper.appendChild(humidityImg);
  wrapper.appendChild(humidity);
  weatherContainer.appendChild(wrapper);
};

const makeVisibility = () => {
  visibility.textContent = "-";
  const wrapper = document.createElement("div");
  const visibilityLabel = document.createElement("div");
  visibilityLabel.textContent = "Visibility";
  const visibilityImg = document.createElement("img");
  visibility.classList.add("visibility");
  visibilityImg.src = visibilityIcon;
  wrapper.appendChild(visibilityLabel);
  wrapper.appendChild(visibilityImg);
  wrapper.appendChild(visibility);
  weatherContainer.appendChild(wrapper);
};

const makeClouds = () => {
  clouds.textContent = "-";
  const wrapper = document.createElement("div");
  const cloudLabel = document.createElement("div");
  cloudLabel.textContent = "Cloud Percentage";
  const cloudsImg = document.createElement("img");
  clouds.classList.add("clouds");
  cloudsImg.src = cloudIcon;
  wrapper.appendChild(cloudLabel);
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
  makeWeatherContainer();
  makeTemp();
  makeHighLow();
  makeWeather();
  makeHumidity();
  makeVisibility();
  makeClouds();
  makeToggle();
  makeMap();
};

const fillDOM = (weatherData) => {
  city.textContent = weatherData.name;
  if (celsius) {
    temp.textContent = `${weatherData.main.temp}°C`;
    highLow.textContent = `HI: ${weatherData.main.temp_max}°C LOW: ${weatherData.main.temp_min}°C`;
  } else {
    temp.textContent = `${weatherData.main.temp}°F`;
    highLow.textContent = `HI: ${weatherData.main.temp_max}°F LOW: ${weatherData.main.temp_min}°F`;
  }
  weather.textContent = weatherData.weather[0].description;
  humidity.textContent = weatherData.main.humidity;
  visibility.textContent = weatherData.visibility;
  clouds.textContent = weatherData.clouds.all;
};

export { makeDOM, fillDOM, makeMap };
