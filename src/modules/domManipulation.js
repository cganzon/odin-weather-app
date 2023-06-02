import { getWeather } from "./weatherApi";
import { cacheDom } from "./cacheDom";
import { FahrenheitToCelsius, celsiusToFahrenheit } from "./utils";

export function loadContent() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  const tempUnitsBtn = document.createElement("button");
  tempUnitsBtn.classList.add("temp-units-btn");
  tempUnitsBtn.setAttribute("data-units", "F");
  tempUnitsBtn.textContent = "Fahrenheit";

  const credit = document.createElement("div");
  credit.classList.add("credit");

  const creditText = document.createElement("p");
  credit.classList.add("credit");
  credit.textContent = `Image provided by`;

  const creditLink = document.createElement("a");
  creditLink.classList.add("credit-link");
  creditLink.href = "https://unsplash.com/@noaa";
  creditLink.setAttribute("target", "_blank");
  creditLink.textContent = "NOAA";

  mainContent.append(tempUnitsBtn, createForm(), createWeatherCard());
  credit.append(creditText, creditLink);
  document.body.append(mainContent, credit);
}

export function addListeners() {
  const dom = cacheDom();
  addFormListener(dom);
  addTempUnitsBtnListener(dom);
}

function createForm() {
  const locationForm = document.createElement("form");
  locationForm.classList.add("location-form");

  const locationLabel = document.createElement("label");
  locationLabel.classList.add("location-label");
  locationLabel.setAttribute("for", "location");
  locationLabel.textContent = "Location";

  const locationInput = document.createElement("input");
  locationInput.classList.add("location-input");
  locationInput.id = "location";
  locationInput.setAttribute("type", "search");
  locationInput.setAttribute("autocomplete", "off");

  const searchBtn = document.createElement("button");
  searchBtn.classList.add("search-btn");
  searchBtn.setAttribute("type", "submit");
  searchBtn.textContent = "Search";

  const locationError = document.createElement("span");
  locationError.classList.add("error");

  const loading = document.createElement("p");
  loading.classList.add("loading", "hide");
  loading.textContent = "Loading...";

  locationForm.append(
    locationLabel,
    locationInput,
    searchBtn,
    locationError,
    loading
  );
  return locationForm;
}

function createWeatherCard() {
  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");

  const weatherWrapper = document.createElement("div");
  weatherWrapper.classList.add("weather");

  const location = document.createElement("h1");
  location.classList.add("location");

  const condition = document.createElement("h2");
  condition.classList.add("condition");

  const temperature = document.createElement("p");
  temperature.classList.add("temperature");

  const humidity = document.createElement("p");
  humidity.classList.add("humidity");

  weatherWrapper.append(condition, temperature, humidity);
  weatherCard.append(location, weatherWrapper);
  return weatherCard;
}

function addFormListener(dom) {
  dom.locationForm.addEventListener("submit", async (e) => {
    dom.loading.classList.remove("hide");
    e.preventDefault();
    const location = dom.locationInput.value;
    const weatherData = await getWeather(location);
    dom.loading.classList.add("hide");
    checkWeatherData(weatherData, dom);
  });
}

function addTempUnitsBtnListener(dom) {
  dom.tempUnitsBtn.addEventListener("click", () => {
    const currentUnits = dom.tempUnitsBtn.getAttribute("data-units");
    const currentTemperature = dom.temperature.textContent.slice(0, -2);
    changeTemperature(currentUnits, currentTemperature, dom);
  });
}

function checkWeatherData(data, dom) {
  if (data.error && data.error.code === 1003) {
    dom.locationError.textContent = "Please provide a location";
  } else if (data.error && data.error.code === 1006) {
    dom.locationError.textContent = "No location found";
  } else {
    dom.locationError.textContent = "";
    displayWeatherData(data, dom);
  }
}

function displayWeatherData(data, dom) {
  const currentUnits = dom.tempUnitsBtn.getAttribute("data-units");
  dom.condition.textContent = data.current.condition.text;
  dom.humidity.textContent = `Humidity: ${data.current.humidity}%`;

  dom.location.textContent = `${data.location.name}, ${
    data.location.country === "United States of America"
      ? data.location.region
      : data.location.country
  }`;

  dom.temperature.textContent =
    currentUnits === "F"
      ? `${data.current.temp_f}°F`
      : `${data.current.temp_c}°C`;
}

function changeTemperature(units, temp, dom) {
  if (units === "F") {
    dom.tempUnitsBtn.textContent = "Celsius";
    dom.tempUnitsBtn.setAttribute("data-units", "C");
  } else {
    dom.tempUnitsBtn.textContent = "Fahrenheit";
    dom.tempUnitsBtn.setAttribute("data-units", "F");
  }
  if (temp && units === "F") {
    dom.temperature.textContent = `${FahrenheitToCelsius(temp)}°C`;
  } else if (temp && units === "C") {
    dom.temperature.textContent = `${celsiusToFahrenheit(temp)}°F`;
  }
}
