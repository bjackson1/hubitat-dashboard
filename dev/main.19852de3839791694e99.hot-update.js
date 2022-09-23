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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! storeon/react */ \"./node_modules/storeon/react/index.dev.js\");\n/* harmony import */ var _store_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/enums */ \"./src/components/store/enums.js\");\n/* harmony import */ var _hooks_use_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-socket */ \"./src/hooks/use-socket.js\");\n\n\n\n\n\nvar WebSocketDemo = function WebSocketDemo() {\n  var _useSocket = (0,_hooks_use_socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      message = _useSocket.message;\n\n  var _useStoreon = (0,storeon_react__WEBPACK_IMPORTED_MODULE_1__.useStoreon)('dispatch'),\n      dispatch = _useStoreon.dispatch; // console.log({message})\n\n\n  if (message) {\n    if (message.name === 'demand-status') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_2__[\"default\"].demandStatus.update, message.value === 'true');\n    if (message.name === 'humidity') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_2__[\"default\"].atmosphere.updateHumidity, message.value);\n    if (message.name === 'temperature') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_2__[\"default\"].atmosphere.updateTemperature, message.value);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebSocketDemo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXRUZXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07RUFDeEIsaUJBQW9CRCw2REFBUyxFQUE3QjtFQUFBLElBQVFFLE9BQVIsY0FBUUEsT0FBUjs7RUFDSCxrQkFBcUJKLHlEQUFVLENBQUMsVUFBRCxDQUEvQjtFQUFBLElBQVFLLFFBQVIsZUFBUUEsUUFBUixDQUYyQixDQUl4Qjs7O0VBRUEsSUFBSUQsT0FBSixFQUFhO0lBQ1QsSUFBSUEsT0FBTyxDQUFDRSxJQUFSLEtBQWlCLGVBQXJCLEVBQXNDRCxRQUFRLENBQUNKLHdFQUFELEVBQTRCRyxPQUFPLENBQUNLLEtBQVIsS0FBa0IsTUFBOUMsQ0FBUjtJQUN0QyxJQUFJTCxPQUFPLENBQUNFLElBQVIsS0FBaUIsVUFBckIsRUFBaUNELFFBQVEsQ0FBQ0osOEVBQUQsRUFBa0NHLE9BQU8sQ0FBQ0ssS0FBMUMsQ0FBUjtJQUNqQyxJQUFJTCxPQUFPLENBQUNFLElBQVIsS0FBaUIsYUFBckIsRUFBb0NELFFBQVEsQ0FBQ0osaUZBQUQsRUFBcUNHLE9BQU8sQ0FBQ0ssS0FBN0MsQ0FBUjtFQUN2QztBQUVKLENBWkQ7O0FBY0EsK0RBQWVOLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXRUZXN0LmpzeD8yMmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0b3Jlb24gfSBmcm9tICdzdG9yZW9uL3JlYWN0J1xuaW1wb3J0IGVudW1zIGZyb20gJy4vc3RvcmUvZW51bXMnXG5cbmltcG9ydCB1c2VTb2NrZXQgZnJvbSAnLi4vaG9va3MvdXNlLXNvY2tldCdcblxuY29uc3QgV2ViU29ja2V0RGVtbyA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHVzZVNvY2tldCgpXG5cdGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZVN0b3Jlb24oJ2Rpc3BhdGNoJylcblxuICAgIC8vIGNvbnNvbGUubG9nKHttZXNzYWdlfSlcblxuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgIGlmIChtZXNzYWdlLm5hbWUgPT09ICdkZW1hbmQtc3RhdHVzJykgZGlzcGF0Y2goZW51bXMuZGVtYW5kU3RhdHVzLnVwZGF0ZSwgbWVzc2FnZS52YWx1ZSA9PT0gJ3RydWUnKVxuICAgICAgICBpZiAobWVzc2FnZS5uYW1lID09PSAnaHVtaWRpdHknKSBkaXNwYXRjaChlbnVtcy5hdG1vc3BoZXJlLnVwZGF0ZUh1bWlkaXR5LCBtZXNzYWdlLnZhbHVlKVxuICAgICAgICBpZiAobWVzc2FnZS5uYW1lID09PSAndGVtcGVyYXR1cmUnKSBkaXNwYXRjaChlbnVtcy5hdG1vc3BoZXJlLnVwZGF0ZVRlbXBlcmF0dXJlLCBtZXNzYWdlLnZhbHVlKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWJTb2NrZXREZW1vXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RvcmVvbiIsImVudW1zIiwidXNlU29ja2V0IiwiV2ViU29ja2V0RGVtbyIsIm1lc3NhZ2UiLCJkaXNwYXRjaCIsIm5hbWUiLCJkZW1hbmRTdGF0dXMiLCJ1cGRhdGUiLCJ2YWx1ZSIsImF0bW9zcGhlcmUiLCJ1cGRhdGVIdW1pZGl0eSIsInVwZGF0ZVRlbXBlcmF0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/WebSocketTest.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0391150c09fe53b295e0"; }
/******/ }();
/******/ 
/******/ }
);