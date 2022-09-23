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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! storeon/react */ \"./node_modules/storeon/react/index.dev.js\");\n/* harmony import */ var _store_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/enums */ \"./src/components/store/enums.js\");\n/* harmony import */ var _hooks_use_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-socket */ \"./src/hooks/use-socket.js\");\n\n\n\n\nvar WebSocketWorker = function WebSocketWorker() {\n  var _useSocket = (0,_hooks_use_socket__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      message = _useSocket.message;\n\n  var _useStoreon = (0,storeon_react__WEBPACK_IMPORTED_MODULE_0__.useStoreon)('dispatch'),\n      dispatch = _useStoreon.dispatch; // console.log({message})\n\n\n  if (message) {\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'demand-status') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_1__[\"default\"].demandStatus.update, message.value === 'true');\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'humidity') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_1__[\"default\"].atmosphere.updateHumidity, message.value);\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'temperature') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_1__[\"default\"].atmosphere.updateTemperature, message.value);\n    if ((message === null || message === void 0 ? void 0 : message.name) === 'targetTemperature') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_1__[\"default\"].targetTemperature.updateTemperature, message.value);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebSocketWorker);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXRXb3JrZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0VBQzFCLGlCQUFvQkQsNkRBQVMsRUFBN0I7RUFBQSxJQUFRRSxPQUFSLGNBQVFBLE9BQVI7O0VBQ0gsa0JBQXFCSix5REFBVSxDQUFDLFVBQUQsQ0FBL0I7RUFBQSxJQUFRSyxRQUFSLGVBQVFBLFFBQVIsQ0FGNkIsQ0FJMUI7OztFQUVBLElBQUlELE9BQUosRUFBYTtJQUNULElBQUksQ0FBQUEsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVFLElBQVQsTUFBa0IsZUFBdEIsRUFBdUNELFFBQVEsQ0FBQ0osd0VBQUQsRUFBNEJHLE9BQU8sQ0FBQ0ssS0FBUixLQUFrQixNQUE5QyxDQUFSO0lBQ3ZDLElBQUksQ0FBQUwsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVFLElBQVQsTUFBa0IsVUFBdEIsRUFBa0NELFFBQVEsQ0FBQ0osOEVBQUQsRUFBa0NHLE9BQU8sQ0FBQ0ssS0FBMUMsQ0FBUjtJQUNsQyxJQUFJLENBQUFMLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFRSxJQUFULE1BQWtCLGFBQXRCLEVBQXFDRCxRQUFRLENBQUNKLGlGQUFELEVBQXFDRyxPQUFPLENBQUNLLEtBQTdDLENBQVI7SUFDckMsSUFBSSxDQUFBTCxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUUsSUFBVCxNQUFrQixtQkFBdEIsRUFBMkNELFFBQVEsQ0FBQ0osd0ZBQUQsRUFBNENHLE9BQU8sQ0FBQ0ssS0FBcEQsQ0FBUjtFQUM5QztBQUNKLENBWkQ7O0FBY0EsK0RBQWVOLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXRXb3JrZXIuanN4PzRlYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RvcmVvbiB9IGZyb20gJ3N0b3Jlb24vcmVhY3QnXG5pbXBvcnQgZW51bXMgZnJvbSAnLi9zdG9yZS9lbnVtcydcblxuaW1wb3J0IHVzZVNvY2tldCBmcm9tICcuLi9ob29rcy91c2Utc29ja2V0J1xuXG5jb25zdCBXZWJTb2NrZXRXb3JrZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB1c2VTb2NrZXQoKVxuXHRjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VTdG9yZW9uKCdkaXNwYXRjaCcpXG5cbiAgICAvLyBjb25zb2xlLmxvZyh7bWVzc2FnZX0pXG5cbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICBpZiAobWVzc2FnZT8ubmFtZSA9PT0gJ2RlbWFuZC1zdGF0dXMnKSBkaXNwYXRjaChlbnVtcy5kZW1hbmRTdGF0dXMudXBkYXRlLCBtZXNzYWdlLnZhbHVlID09PSAndHJ1ZScpXG4gICAgICAgIGlmIChtZXNzYWdlPy5uYW1lID09PSAnaHVtaWRpdHknKSBkaXNwYXRjaChlbnVtcy5hdG1vc3BoZXJlLnVwZGF0ZUh1bWlkaXR5LCBtZXNzYWdlLnZhbHVlKVxuICAgICAgICBpZiAobWVzc2FnZT8ubmFtZSA9PT0gJ3RlbXBlcmF0dXJlJykgZGlzcGF0Y2goZW51bXMuYXRtb3NwaGVyZS51cGRhdGVUZW1wZXJhdHVyZSwgbWVzc2FnZS52YWx1ZSlcbiAgICAgICAgaWYgKG1lc3NhZ2U/Lm5hbWUgPT09ICd0YXJnZXRUZW1wZXJhdHVyZScpIGRpc3BhdGNoKGVudW1zLnRhcmdldFRlbXBlcmF0dXJlLnVwZGF0ZVRlbXBlcmF0dXJlLCBtZXNzYWdlLnZhbHVlKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2ViU29ja2V0V29ya2VyXG4iXSwibmFtZXMiOlsidXNlU3RvcmVvbiIsImVudW1zIiwidXNlU29ja2V0IiwiV2ViU29ja2V0V29ya2VyIiwibWVzc2FnZSIsImRpc3BhdGNoIiwibmFtZSIsImRlbWFuZFN0YXR1cyIsInVwZGF0ZSIsInZhbHVlIiwiYXRtb3NwaGVyZSIsInVwZGF0ZUh1bWlkaXR5IiwidXBkYXRlVGVtcGVyYXR1cmUiLCJ0YXJnZXRUZW1wZXJhdHVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/WebSocketWorker.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a0912e1339a328795731"; }
/******/ }();
/******/ 
/******/ }
);