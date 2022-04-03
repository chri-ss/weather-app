import "./style.scss";
import "./reset.scss";
import { makeDOM } from "./DOM";
import { reportWeather, initialWeather } from "./processData";

makeDOM();
reportWeather();
