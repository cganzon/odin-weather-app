export function cacheDom() {
  const locationForm = document.querySelector(".location-form");
  const locationInput = document.querySelector(".location-input");
  return { locationForm, locationInput };
}
