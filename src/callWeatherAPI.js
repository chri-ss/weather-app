const getWeather = (city) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6148db30e4f604e4a99b33552cb35346`,
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => {
      console.log(err);
    });
};

export default getWeather;
