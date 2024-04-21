// import maplibregl from "maplibre-gl";
import leaflet from "leaflet";
import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const myAPIKey = "a6e6d6fb8124449e940e1ceda9378862";
form.addEventListener("submit", searchAddressHandler);

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  addressInput.value = "";

  axios
    .get(
      `https://api.geoapify.com/v1/geocode/search?text=${encodeURI(
        enteredAddress
      )}&apiKey=${myAPIKey}`
    )
    .then((response) => {
      console.log(response);
      const coordinates = response.data.features[0].geometry.coordinates;
      console.log(coordinates);

      var map = leaflet
        .map(document.getElementById("map")!)
        .setView(coordinates, 13);

      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);

      leaflet.marker(coordinates).addTo(map);
    })
    .catch((err) => {
      console.log(err);
    });
}
