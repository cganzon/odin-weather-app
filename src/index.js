import { createForm, addFormListener } from "./modules/dom";

(() => {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  mainContent.append(createForm());
  document.body.append(mainContent);
  addFormListener()
})();
