import "./style.scss";
import "./reset.scss";
import { makeDOM, makeGithubLogo } from "./DOM";
import { reportWeather, reportFirstWeather, addToggleListener } from "./processData";
import getLocation from "./getLocation";

makeDOM();
reportWeather();
reportFirstWeather();
addToggleListener();
getLocation().then((data) => console.log(data.coords.longitude));
makeGithubLogo();
