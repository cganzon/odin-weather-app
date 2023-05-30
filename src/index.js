import { createForm, addFormListener } from "./modules/domManipulation";
import { cacheDom } from "./modules/cacheDom";

(() => {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  mainContent.append(createForm());
  document.body.append(mainContent);
  const dom = cacheDom();
  addFormListener(dom);
})();
