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

  mainContent.append(tempUnitsBtn, createForm(), createWeatherCard());
  document.body.append(mainContent);
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

  locationForm.append(locationLabel, locationInput, searchBtn, locationError);
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
    e.preventDefault();
    const location = dom.locationInput.value;
    const weatherData = await getWeather(location);
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
    console.log(data);
    displayWeatherData(data, dom);
  }
}

function displayWeatherData(data, dom) {
  const currentUnits = dom.tempUnitsBtn.getAttribute("data-units");
  dom.location.textContent = `${data.location.name}, ${
    data.location.country === "United States of America"
      ? data.location.region
      : data.location.country
  }`;
  dom.condition.textContent = data.current.condition.text;
  if (currentUnits === "F") {
    dom.temperature.textContent = `${data.current.temp_f}°F`;
  } else {
    dom.temperature.textContent = `${data.current.temp_c}°C`;
  }
  dom.humidity.textContent = `Humidity: ${data.current.humidity}%`;
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
