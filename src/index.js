import { loadContent, addFormListener } from "./modules/domManipulation";
import { cacheDom } from "./modules/cacheDom";

(() => {
  loadContent();
  const dom = cacheDom();
  addFormListener(dom);
})();
