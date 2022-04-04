import "./style.scss";
import "./reset.scss";
import { makeDOM } from "./DOM";
import { buildMap } from "./map";
import { reportWeather } from "./processData";

makeDOM();
buildMap({lat: 49.2497, lon: -123.1193});
reportWeather();
