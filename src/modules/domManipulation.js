import { getWeather } from "./weatherApi";

export function createForm() {
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

export function addFormListener(dom) {
  dom.locationForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchValue = dom.locationInput.value;
    console.log(await getWeather(searchValue));
  });
}
