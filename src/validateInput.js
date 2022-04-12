const validateInput = (err) => {
  if (err) {
    const errSpan = document.querySelector(".error");
    errSpan.textContent = "Bad";
    errSpan.style.display = "block";
  }
};

export default validateInput;
