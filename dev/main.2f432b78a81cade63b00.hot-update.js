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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ \"./node_modules/core-js/modules/es.parse-float.js\");\n/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! storeon/react */ \"./node_modules/storeon/react/index.dev.js\");\n/* harmony import */ var _store_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/enums */ \"./src/components/store/enums.js\");\n/* harmony import */ var _hooks_use_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-socket */ \"./src/hooks/use-socket.js\");\n\n\n\n\n\nvar WebSocketWorker = function WebSocketWorker() {\n  var _useSocket = (0,_hooks_use_socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      message = _useSocket.message;\n\n  var _useStoreon = (0,storeon_react__WEBPACK_IMPORTED_MODULE_1__.useStoreon)('dispatch'),\n      dispatch = _useStoreon.dispatch;\n\n  if (message) {\n    console.log({\n      message: message\n    });\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'demand-status') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_2__[\"default\"].demandStatus.update, message.value === 'true');\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'humidity') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_2__[\"default\"].atmosphere.updateHumidity, message.value);\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'temperature') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_2__[\"default\"].atmosphere.updateTemperature, message.value);\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'targetTemperature') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_2__[\"default\"].targetTemperature.update, parseFloat(message.value, 10));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebSocketWorker);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXRXb3JrZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0VBQzFCLGlCQUFvQkQsNkRBQVMsRUFBN0I7RUFBQSxJQUFRRSxPQUFSLGNBQVFBLE9BQVI7O0VBQ0gsa0JBQXFCSix5REFBVSxDQUFDLFVBQUQsQ0FBL0I7RUFBQSxJQUFRSyxRQUFSLGVBQVFBLFFBQVI7O0VBR0csSUFBSUQsT0FBSixFQUFhO0lBQ1RFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO01BQUNILE9BQU8sRUFBUEE7SUFBRCxDQUFaO0lBQ0EsSUFBSSxDQUFBQSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUksSUFBVCxNQUFrQixlQUF0QixFQUF1Q0gsUUFBUSxDQUFDSix3RUFBRCxFQUE0QkcsT0FBTyxDQUFDTyxLQUFSLEtBQWtCLE1BQTlDLENBQVI7SUFDdkMsSUFBSSxDQUFBUCxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUksSUFBVCxNQUFrQixVQUF0QixFQUFrQ0gsUUFBUSxDQUFDSiw4RUFBRCxFQUFrQ0csT0FBTyxDQUFDTyxLQUExQyxDQUFSO0lBQ2xDLElBQUksQ0FBQVAsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVJLElBQVQsTUFBa0IsYUFBdEIsRUFBcUNILFFBQVEsQ0FBQ0osaUZBQUQsRUFBcUNHLE9BQU8sQ0FBQ08sS0FBN0MsQ0FBUjtJQUNyQyxJQUFJLENBQUFQLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFSSxJQUFULE1BQWtCLG1CQUF0QixFQUEyQ0gsUUFBUSxDQUFDSiw2RUFBRCxFQUFpQ2UsVUFBVSxDQUFDWixPQUFPLENBQUNPLEtBQVQsRUFBZ0IsRUFBaEIsQ0FBM0MsQ0FBUjtFQUM5QztBQUNKLENBWkQ7O0FBY0EsK0RBQWVSLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXRXb3JrZXIuanN4PzRlYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RvcmVvbiB9IGZyb20gJ3N0b3Jlb24vcmVhY3QnXG5pbXBvcnQgZW51bXMgZnJvbSAnLi9zdG9yZS9lbnVtcydcblxuaW1wb3J0IHVzZVNvY2tldCBmcm9tICcuLi9ob29rcy91c2Utc29ja2V0J1xuXG5jb25zdCBXZWJTb2NrZXRXb3JrZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB1c2VTb2NrZXQoKVxuXHRjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VTdG9yZW9uKCdkaXNwYXRjaCcpXG5cbiAgICBcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmxvZyh7bWVzc2FnZX0pXG4gICAgICAgIGlmIChtZXNzYWdlPy5uYW1lID09PSAnZGVtYW5kLXN0YXR1cycpIGRpc3BhdGNoKGVudW1zLmRlbWFuZFN0YXR1cy51cGRhdGUsIG1lc3NhZ2UudmFsdWUgPT09ICd0cnVlJylcbiAgICAgICAgaWYgKG1lc3NhZ2U/Lm5hbWUgPT09ICdodW1pZGl0eScpIGRpc3BhdGNoKGVudW1zLmF0bW9zcGhlcmUudXBkYXRlSHVtaWRpdHksIG1lc3NhZ2UudmFsdWUpXG4gICAgICAgIGlmIChtZXNzYWdlPy5uYW1lID09PSAndGVtcGVyYXR1cmUnKSBkaXNwYXRjaChlbnVtcy5hdG1vc3BoZXJlLnVwZGF0ZVRlbXBlcmF0dXJlLCBtZXNzYWdlLnZhbHVlKVxuICAgICAgICBpZiAobWVzc2FnZT8ubmFtZSA9PT0gJ3RhcmdldFRlbXBlcmF0dXJlJykgZGlzcGF0Y2goZW51bXMudGFyZ2V0VGVtcGVyYXR1cmUudXBkYXRlLCBwYXJzZUZsb2F0KG1lc3NhZ2UudmFsdWUsIDEwKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYlNvY2tldFdvcmtlclxuIl0sIm5hbWVzIjpbInVzZVN0b3Jlb24iLCJlbnVtcyIsInVzZVNvY2tldCIsIldlYlNvY2tldFdvcmtlciIsIm1lc3NhZ2UiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiZGVtYW5kU3RhdHVzIiwidXBkYXRlIiwidmFsdWUiLCJhdG1vc3BoZXJlIiwidXBkYXRlSHVtaWRpdHkiLCJ1cGRhdGVUZW1wZXJhdHVyZSIsInRhcmdldFRlbXBlcmF0dXJlIiwicGFyc2VGbG9hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/WebSocketWorker.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1c21278e144f7bea0a4c"; }
/******/ }();
/******/ 
/******/ }
);