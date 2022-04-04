import { makeMap } from "./DOM";

function buildMap(coordObject) {
  var map = L.map("map").setView([coordObject.lat, coordObject.lon], 13);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hyaS1zcyIsImEiOiJjbDFmeHJhdGEwMzlkM2lyMmE0anh5enp2In0.PqiAc2VKdIeR4BaGQ7yyFw",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiY2hyaS1zcyIsImEiOiJjbDFmeHJhdGEwMzlkM2lyMmE0anh5enp2In0.PqiAc2VKdIeR4BaGQ7yyFw",
    }
  ).addTo(map);

  L.tileLayer(
    "https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=6148db30e4f604e4a99b33552cb35346",
    {
      attribution: "",
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(map);
}

function updateMap(coordObject) {
  map.remove();
  makeMap();
  buildMap(coordObject);
}

export { buildMap, updateMap };
