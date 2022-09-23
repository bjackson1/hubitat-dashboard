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

/***/ "./src/components/WebSocketTest.jsx":
/*!******************************************!*\
  !*** ./src/components/WebSocketTest.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! storeon/react */ \"./node_modules/storeon/react/index.dev.js\");\n/* harmony import */ var _store_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/enums */ \"./src/components/store/enums.js\");\n/* harmony import */ var _hooks_use_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-socket */ \"./src/hooks/use-socket.js\");\n\n\n\n\nvar WebSocketDemo = function WebSocketDemo() {\n  var _useSocket = (0,_hooks_use_socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      message = _useSocket.message;\n\n  var _useStoreon = (0,storeon_react__WEBPACK_IMPORTED_MODULE_0__.useStoreon)('dispatch'),\n      dispatch = _useStoreon.dispatch; // console.log({message})\n\n\n  if (message) {\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'demand-status') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_1__[\"default\"].demandStatus.update, message.value === 'true');\n    if (message.name === 'humidity') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_1__[\"default\"].atmosphere.updateHumidity, message.value);\n    if (message.name === 'temperature') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_1__[\"default\"].atmosphere.updateTemperature, message.value);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebSocketDemo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXRUZXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtFQUN4QixpQkFBb0JELDZEQUFTLEVBQTdCO0VBQUEsSUFBUUUsT0FBUixjQUFRQSxPQUFSOztFQUNILGtCQUFxQkoseURBQVUsQ0FBQyxVQUFELENBQS9CO0VBQUEsSUFBUUssUUFBUixlQUFRQSxRQUFSLENBRjJCLENBSXhCOzs7RUFFQSxJQUFJRCxPQUFKLEVBQWE7SUFDVCxJQUFJLENBQUFBLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFRSxJQUFULE1BQWtCLGVBQXRCLEVBQXVDRCxRQUFRLENBQUNKLHdFQUFELEVBQTRCRyxPQUFPLENBQUNLLEtBQVIsS0FBa0IsTUFBOUMsQ0FBUjtJQUN2QyxJQUFJTCxPQUFPLENBQUNFLElBQVIsS0FBaUIsVUFBckIsRUFBaUNELFFBQVEsQ0FBQ0osOEVBQUQsRUFBa0NHLE9BQU8sQ0FBQ0ssS0FBMUMsQ0FBUjtJQUNqQyxJQUFJTCxPQUFPLENBQUNFLElBQVIsS0FBaUIsYUFBckIsRUFBb0NELFFBQVEsQ0FBQ0osaUZBQUQsRUFBcUNHLE9BQU8sQ0FBQ0ssS0FBN0MsQ0FBUjtFQUN2QztBQUNKLENBWEQ7O0FBYUEsK0RBQWVOLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXRUZXN0LmpzeD8yMmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0b3Jlb24gfSBmcm9tICdzdG9yZW9uL3JlYWN0J1xuaW1wb3J0IGVudW1zIGZyb20gJy4vc3RvcmUvZW51bXMnXG5cbmltcG9ydCB1c2VTb2NrZXQgZnJvbSAnLi4vaG9va3MvdXNlLXNvY2tldCdcblxuY29uc3QgV2ViU29ja2V0RGVtbyA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHVzZVNvY2tldCgpXG5cdGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZVN0b3Jlb24oJ2Rpc3BhdGNoJylcblxuICAgIC8vIGNvbnNvbGUubG9nKHttZXNzYWdlfSlcblxuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgIGlmIChtZXNzYWdlPy5uYW1lID09PSAnZGVtYW5kLXN0YXR1cycpIGRpc3BhdGNoKGVudW1zLmRlbWFuZFN0YXR1cy51cGRhdGUsIG1lc3NhZ2UudmFsdWUgPT09ICd0cnVlJylcbiAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSA9PT0gJ2h1bWlkaXR5JykgZGlzcGF0Y2goZW51bXMuYXRtb3NwaGVyZS51cGRhdGVIdW1pZGl0eSwgbWVzc2FnZS52YWx1ZSlcbiAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSA9PT0gJ3RlbXBlcmF0dXJlJykgZGlzcGF0Y2goZW51bXMuYXRtb3NwaGVyZS51cGRhdGVUZW1wZXJhdHVyZSwgbWVzc2FnZS52YWx1ZSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYlNvY2tldERlbW9cbiJdLCJuYW1lcyI6WyJ1c2VTdG9yZW9uIiwiZW51bXMiLCJ1c2VTb2NrZXQiLCJXZWJTb2NrZXREZW1vIiwibWVzc2FnZSIsImRpc3BhdGNoIiwibmFtZSIsImRlbWFuZFN0YXR1cyIsInVwZGF0ZSIsInZhbHVlIiwiYXRtb3NwaGVyZSIsInVwZGF0ZUh1bWlkaXR5IiwidXBkYXRlVGVtcGVyYXR1cmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/WebSocketTest.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "dece62a9d17ad020d9ea"; }
/******/ }();
/******/ 
/******/ }
);