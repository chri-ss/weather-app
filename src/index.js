import "./style.scss";

const content = document.getElementById("content");

const newDiv = document.createElement("div");
newDiv.textContent = "Hello";

content.appendChild(newDiv);
console.log(content);
