import "./style.scss";
import "./reset.scss";
import { makeDOM } from "./DOM";
import { buildMap } from "./map";
import { reportWeather, reportFirstWeather, addToggleListener } from "./processData";
import getLocation from "./getLocation";

makeDOM();
// buildMap({ lat: 49, lon: -123 });
reportWeather();
reportFirstWeather();
addToggleListener();
getLocation().then((data) => console.log(data.coords.longitude));
