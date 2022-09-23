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

/***/ "./src/components/WebSocketWorker.jsx":
/*!********************************************!*\
  !*** ./src/components/WebSocketWorker.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! storeon/react */ \"./node_modules/storeon/react/index.dev.js\");\n/* harmony import */ var _store_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/enums */ \"./src/components/store/enums.js\");\n/* harmony import */ var _hooks_use_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-socket */ \"./src/hooks/use-socket.js\");\n\n\n\n\nvar WebSocketWorker = function WebSocketWorker() {\n  var _useSocket = (0,_hooks_use_socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      message = _useSocket.message;\n\n  var _useStoreon = (0,storeon_react__WEBPACK_IMPORTED_MODULE_0__.useStoreon)('dispatch'),\n      dispatch = _useStoreon.dispatch; // console.log({message})\n\n\n  if (message) {\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'demand-status') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_1__[\"default\"].demandStatus.update, message.value === 'true');\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'humidity') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_1__[\"default\"].atmosphere.updateHumidity, message.value);\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'temperature') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_1__[\"default\"].atmosphere.updateTemperature, message.value);\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'temperature') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_1__[\"default\"].atmosphere.updateTemperature, message.value);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebSocketWorker);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXRXb3JrZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0VBQzFCLGlCQUFvQkQsNkRBQVMsRUFBN0I7RUFBQSxJQUFRRSxPQUFSLGNBQVFBLE9BQVI7O0VBQ0gsa0JBQXFCSix5REFBVSxDQUFDLFVBQUQsQ0FBL0I7RUFBQSxJQUFRSyxRQUFSLGVBQVFBLFFBQVIsQ0FGNkIsQ0FJMUI7OztFQUVBLElBQUlELE9BQUosRUFBYTtJQUNULElBQUksQ0FBQUEsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVFLElBQVQsTUFBa0IsZUFBdEIsRUFBdUNELFFBQVEsQ0FBQ0osd0VBQUQsRUFBNEJHLE9BQU8sQ0FBQ0ssS0FBUixLQUFrQixNQUE5QyxDQUFSO0lBQ3ZDLElBQUksQ0FBQUwsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVFLElBQVQsTUFBa0IsVUFBdEIsRUFBa0NELFFBQVEsQ0FBQ0osOEVBQUQsRUFBa0NHLE9BQU8sQ0FBQ0ssS0FBMUMsQ0FBUjtJQUNsQyxJQUFJLENBQUFMLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFRSxJQUFULE1BQWtCLGFBQXRCLEVBQXFDRCxRQUFRLENBQUNKLGlGQUFELEVBQXFDRyxPQUFPLENBQUNLLEtBQTdDLENBQVI7SUFDckMsSUFBSSxDQUFBTCxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUUsSUFBVCxNQUFrQixhQUF0QixFQUFxQ0QsUUFBUSxDQUFDSixpRkFBRCxFQUFxQ0csT0FBTyxDQUFDSyxLQUE3QyxDQUFSO0VBQ3hDO0FBQ0osQ0FaRDs7QUFjQSwrREFBZU4sZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1dlYlNvY2tldFdvcmtlci5qc3g/NGViNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdG9yZW9uIH0gZnJvbSAnc3RvcmVvbi9yZWFjdCdcbmltcG9ydCBlbnVtcyBmcm9tICcuL3N0b3JlL2VudW1zJ1xuXG5pbXBvcnQgdXNlU29ja2V0IGZyb20gJy4uL2hvb2tzL3VzZS1zb2NrZXQnXG5cbmNvbnN0IFdlYlNvY2tldFdvcmtlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHVzZVNvY2tldCgpXG5cdGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZVN0b3Jlb24oJ2Rpc3BhdGNoJylcblxuICAgIC8vIGNvbnNvbGUubG9nKHttZXNzYWdlfSlcblxuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgIGlmIChtZXNzYWdlPy5uYW1lID09PSAnZGVtYW5kLXN0YXR1cycpIGRpc3BhdGNoKGVudW1zLmRlbWFuZFN0YXR1cy51cGRhdGUsIG1lc3NhZ2UudmFsdWUgPT09ICd0cnVlJylcbiAgICAgICAgaWYgKG1lc3NhZ2U/Lm5hbWUgPT09ICdodW1pZGl0eScpIGRpc3BhdGNoKGVudW1zLmF0bW9zcGhlcmUudXBkYXRlSHVtaWRpdHksIG1lc3NhZ2UudmFsdWUpXG4gICAgICAgIGlmIChtZXNzYWdlPy5uYW1lID09PSAndGVtcGVyYXR1cmUnKSBkaXNwYXRjaChlbnVtcy5hdG1vc3BoZXJlLnVwZGF0ZVRlbXBlcmF0dXJlLCBtZXNzYWdlLnZhbHVlKVxuICAgICAgICBpZiAobWVzc2FnZT8ubmFtZSA9PT0gJ3RlbXBlcmF0dXJlJykgZGlzcGF0Y2goZW51bXMuYXRtb3NwaGVyZS51cGRhdGVUZW1wZXJhdHVyZSwgbWVzc2FnZS52YWx1ZSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYlNvY2tldFdvcmtlclxuIl0sIm5hbWVzIjpbInVzZVN0b3Jlb24iLCJlbnVtcyIsInVzZVNvY2tldCIsIldlYlNvY2tldFdvcmtlciIsIm1lc3NhZ2UiLCJkaXNwYXRjaCIsIm5hbWUiLCJkZW1hbmRTdGF0dXMiLCJ1cGRhdGUiLCJ2YWx1ZSIsImF0bW9zcGhlcmUiLCJ1cGRhdGVIdW1pZGl0eSIsInVwZGF0ZVRlbXBlcmF0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/WebSocketWorker.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "5490eb8a7f221e1ae4c5"; }
/******/ }();
/******/ 
/******/ }
);