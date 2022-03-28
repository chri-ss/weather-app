const getWeather = (city) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6148db30e4f604e4a99b33552cb35346`
  ).then((response) => console.log(response.json()), {
      mode: 'cors'
  }).catch((err) => {
      console.log(err)
  });
};

export default getWeather;
