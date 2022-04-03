async function getWeather(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6148db30e4f604e4a99b33552cb35346&units=metric`,
    { mode: "cors" }
  )
  return response.json();
};

export default getWeather;
