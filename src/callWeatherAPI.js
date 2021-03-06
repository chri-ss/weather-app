let celsius = true;

const toggleDegrees = () => {
  if (celsius) {
    celsius = false;
  } else {
    celsius = true;
  }
};

async function getWeather(city) {
  if (celsius) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6148db30e4f604e4a99b33552cb35346&units=metric`,
      { mode: "cors" }
    );
    return response.json();
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6148db30e4f604e4a99b33552cb35346&units=imperial`,
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

async function getForecast(coordObject) {
  if (celsius) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordObject.lat}&lon=${coordObject.lon}&exclude=current,alerts,hourly,minutely,alerts&appid=6148db30e4f604e4a99b33552cb35346&units=metric`,
      { mode: "cors" }
    );
    return response.json();
  } 
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordObject.lat}&lon=${coordObject.lon}&exclude=current,alerts,hourly,minutely,alerts&appid=6148db30e4f604e4a99b33552cb35346&units=imperial`,
      { mode: "cors" }
    );
    return response.json();
  
}

export { getWeather, getFirstWeather, toggleDegrees, getForecast, celsius };
