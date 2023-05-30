/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domManipulation */ \"./src/modules/domManipulation.js\");\n/* harmony import */ var _modules_cacheDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cacheDom */ \"./src/modules/cacheDom.js\");\n\n\n\n(() => {\n  (0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_0__.loadContent)();\n  const dom = (0,_modules_cacheDom__WEBPACK_IMPORTED_MODULE_1__.cacheDom)();\n  (0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_0__.addFormListener)(dom);\n})();\n\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/cacheDom.js":
/*!*********************************!*\
  !*** ./src/modules/cacheDom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cacheDom: () => (/* binding */ cacheDom)\n/* harmony export */ });\nfunction cacheDom() {\n  const locationForm = document.querySelector(\".location-form\");\n  const locationInput = document.querySelector(\".location-input\");\n  return { locationForm, locationInput };\n}\n\n\n//# sourceURL=webpack://odin-weather-app/./src/modules/cacheDom.js?");

/***/ }),

/***/ "./src/modules/domManipulation.js":
/*!****************************************!*\
  !*** ./src/modules/domManipulation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFormListener: () => (/* binding */ addFormListener),\n/* harmony export */   loadContent: () => (/* binding */ loadContent)\n/* harmony export */ });\n/* harmony import */ var _weatherApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherApi */ \"./src/modules/weatherApi.js\");\n\n\nfunction createForm() {\n  const locationForm = document.createElement(\"form\");\n  locationForm.classList.add(\"location-form\");\n\n  const locationInput = document.createElement(\"input\");\n  locationInput.classList.add(\"location-input\");\n  locationInput.setAttribute(\"type\", \"text\");\n\n  const searchBtn = document.createElement(\"button\");\n  searchBtn.classList.add(\"search-btn\");\n  searchBtn.setAttribute(\"type\", \"submit\");\n  searchBtn.textContent = \"Search\";\n\n  locationForm.append(locationInput, searchBtn);\n  return locationForm;\n}\n\nfunction loadContent() {\n  const mainContent = document.createElement(\"div\");\n  mainContent.classList.add(\"main-content\");\n  mainContent.append(createForm());\n  document.body.append(mainContent);\n}\n\nfunction addFormListener(dom) {\n  dom.locationForm.addEventListener(\"submit\", async (e) => {\n    e.preventDefault();\n    const searchValue = dom.locationInput.value;\n    console.log(await (0,_weatherApi__WEBPACK_IMPORTED_MODULE_0__.getWeather)(searchValue));\n  });\n}\n\n\n//# sourceURL=webpack://odin-weather-app/./src/modules/domManipulation.js?");

/***/ }),

/***/ "./src/modules/weatherApi.js":
/*!***********************************!*\
  !*** ./src/modules/weatherApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(location) {\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/current.json?q=${location}&key=81f814f5795a492392023803232405`\n  );\n  const weatherData = await response.json();\n  return weatherData;\n}\n\n\n//# sourceURL=webpack://odin-weather-app/./src/modules/weatherApi.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;