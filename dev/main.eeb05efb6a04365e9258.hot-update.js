"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatesrc"]("main",{

/***/ "./src/components/tiles/TemperatureAndHumidity.jsx":
/*!*********************************************************!*\
  !*** ./src/components/tiles/TemperatureAndHumidity.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! storeon/react */ \"./node_modules/storeon/react/index.dev.js\");\n/* harmony import */ var _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiles.module.css */ \"./src/components/tiles/tiles.module.css\");\n\n\n\n\nvar TemperatureAndHumidity = function TemperatureAndHumidity() {\n  var _useStoreon = (0,storeon_react__WEBPACK_IMPORTED_MODULE_1__.useStoreon)('atmosphere'),\n      atmosphere = _useStoreon.atmosphere;\n\n  if (!atmosphere) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, \"Loading...\");\n  var temperature = atmosphere.temperature,\n      humidity = atmosphere.humidity;\n  var warmthColourCss = temperature < 17.5 ? _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tileCold : temperature > 20 ? _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tileHot : _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tileMedium;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TemperatureAndHumidity);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90aWxlcy9UZW1wZXJhdHVyZUFuZEh1bWlkaXR5LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQU07RUFDakMsa0JBQXVCRix5REFBVSxDQUFDLFlBQUQsQ0FBakM7RUFBQSxJQUFRRyxVQUFSLGVBQVFBLFVBQVI7O0VBRUEsSUFBSSxDQUFDQSxVQUFMLEVBQWlCLG9CQUFPLHVJQUFQO0VBRWpCLElBQVFDLFdBQVIsR0FBa0NELFVBQWxDLENBQVFDLFdBQVI7RUFBQSxJQUFxQkMsUUFBckIsR0FBa0NGLFVBQWxDLENBQXFCRSxRQUFyQjtFQUVBLElBQU1DLGVBQWUsR0FBR0YsV0FBVyxHQUFHLElBQWQsR0FBcUJILGtFQUFyQixHQUF5Q0csV0FBVyxHQUFHLEVBQWQsR0FBbUJILGlFQUFuQixHQUFzQ0Esb0VBQXZHO0FBQ0gsQ0FSRDs7QUFVQSwrREFBZUMsc0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy90aWxlcy9UZW1wZXJhdHVyZUFuZEh1bWlkaXR5LmpzeD84NGQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0b3Jlb24gfSBmcm9tICdzdG9yZW9uL3JlYWN0J1xuaW1wb3J0IHRpbGVzQ3NzIGZyb20gJy4vdGlsZXMubW9kdWxlLmNzcydcblxuY29uc3QgVGVtcGVyYXR1cmVBbmRIdW1pZGl0eSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGF0bW9zcGhlcmUgfSA9IHVzZVN0b3Jlb24oJ2F0bW9zcGhlcmUnKVxuXG4gICAgaWYgKCFhdG1vc3BoZXJlKSByZXR1cm4gPD5Mb2FkaW5nLi4uPC8+XG4gICAgXG4gICAgY29uc3QgeyB0ZW1wZXJhdHVyZSwgaHVtaWRpdHkgfSA9IGF0bW9zcGhlcmVcblxuICAgIGNvbnN0IHdhcm10aENvbG91ckNzcyA9IHRlbXBlcmF0dXJlIDwgMTcuNSA/IHRpbGVzQ3NzLnRpbGVDb2xkIDogdGVtcGVyYXR1cmUgPiAyMCA/IHRpbGVzQ3NzLnRpbGVIb3QgOiB0aWxlc0Nzcy50aWxlTWVkaXVtXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBlcmF0dXJlQW5kSHVtaWRpdHlcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0b3Jlb24iLCJ0aWxlc0NzcyIsIlRlbXBlcmF0dXJlQW5kSHVtaWRpdHkiLCJhdG1vc3BoZXJlIiwidGVtcGVyYXR1cmUiLCJodW1pZGl0eSIsIndhcm10aENvbG91ckNzcyIsInRpbGVDb2xkIiwidGlsZUhvdCIsInRpbGVNZWRpdW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/tiles/TemperatureAndHumidity.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "86809097a13eeff9f38f"; }
/******/ }();
/******/ 
/******/ }
);