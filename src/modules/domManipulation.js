import { getWeather } from "./weatherApi";
import { cacheDom } from "./cacheDom";

export function loadContent() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  mainContent.append(createForm(), createWeatherCard());
  document.body.append(mainContent);
}

export function addListeners() {
  const dom = cacheDom();
  addFormListener(dom);
}

function createForm() {
  const locationForm = document.createElement("form");
  locationForm.classList.add("location-form");

  const locationInput = document.createElement("input");
  locationInput.classList.add("location-input");
  locationInput.setAttribute("type", "text");

  const searchBtn = document.createElement("button");
  searchBtn.classList.add("search-btn");
  searchBtn.setAttribute("type", "submit");
  searchBtn.textContent = "Search";

  locationForm.append(locationInput, searchBtn);
  return locationForm;
}

function createWeatherCard() {
  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");

  const location = document.createElement("h1");
  location.classList.add("location");

  const condition = document.createElement("h2");
  condition.classList.add("condition");

  const temperature = document.createElement("p");
  temperature.classList.add("temperature");

  const humidity = document.createElement("p");
  humidity.classList.add("humidity");

  weatherCard.append(location, condition, temperature, humidity);
  return weatherCard;
}

function addFormListener(dom) {
  dom.locationForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchValue = dom.locationInput.value;
    console.log(await getWeather(searchValue));
  });
}
