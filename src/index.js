import "./style.scss";
import "./reset.scss";
import { makeDOM } from "./DOM";
import {
  reportWeather,
  reportFirstWeather,
  addToggleListener,
} from "./processData";

makeDOM();
reportWeather();
reportFirstWeather();
addToggleListener();
