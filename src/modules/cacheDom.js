export function cacheDom() {
  const locationForm = document.querySelector(".location-form");
  const locationInput = document.querySelector(".location-input");
  const location = document.querySelector(".location");
  const condition = document.querySelector(".condition");
  const temperature = document.querySelector(".temperature");
  const humidity = document.querySelector(".humidity");
  return {
    locationForm,
    locationInput,
    location,
    condition,
    temperature,
    humidity,
  };
}
