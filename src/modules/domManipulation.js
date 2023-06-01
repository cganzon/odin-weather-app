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

  mainContent.append(createForm(), tempUnitsBtn, createWeatherCard());
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

  const locationInput = document.createElement("input");
  locationInput.classList.add("location-input");
  locationInput.setAttribute("type", "text");

  const searchBtn = document.createElement("button");
  searchBtn.classList.add("search-btn");
  searchBtn.setAttribute("type", "submit");
  searchBtn.textContent = "Search";

  const locationError = document.createElement("span");
  locationError.classList.add("error");

  locationForm.append(locationInput, searchBtn, locationError);
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
    const location = dom.locationInput.value;
    const weatherData = await getWeather(location);
    checkWeatherData(weatherData, dom);
  });
}

function addTempUnitsBtnListener(dom) {
  dom.tempUnitsBtn.addEventListener("click", () => {
    const currentUnits = dom.tempUnitsBtn.getAttribute("data-units");
    const currentTemperature = dom.temperature.textContent.slice(0, -1);
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
  dom.location.textContent = data.location.name;
  dom.condition.textContent = data.current.condition.text;
  if (currentUnits === "F") {
    dom.temperature.textContent = `${data.current.temp_f}°`;
  } else {
    dom.temperature.textContent = `${data.current.temp_c}°`;
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
    dom.temperature.textContent = `${FahrenheitToCelsius(temp)}°`;
  } else if (temp && units === "C") {
    dom.temperature.textContent = `${celsiusToFahrenheit(temp)}°`;
  }
}
