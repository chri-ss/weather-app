async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6148db30e4f604e4a99b33552cb35346&units=metric`,
    { mode: "cors" }
  );
  return response.json();
}

async function getFirstWeather(position) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=6148db30e4f604e4a99b33552cb35346&units=metric`,
    { mode: "cors" }
  );
  return response.json();
}

export { getWeather, getFirstWeather };
