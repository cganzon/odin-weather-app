import { getWeather } from "./modules/weatherApi";
import { createForm } from "./modules/dom";

console.log(await getWeather("San Diego"));

(() => {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  mainContent.append(createForm());
  document.body.append(mainContent);
})();
