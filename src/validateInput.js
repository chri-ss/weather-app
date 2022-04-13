const validateInput = (err) => {
  const errSpan = document.querySelector(".error");
  if (err.code === 1) {
    errSpan.textContent =
      "Please enter a city or enable geolocation and try again";
  } else {
    errSpan.textContent = "Please enter a city name";
  }

  errSpan.style.display = "grid";
};

export default validateInput;
