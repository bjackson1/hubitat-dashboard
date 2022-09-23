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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! storeon/react */ \"./node_modules/storeon/react/index.dev.js\");\n/* harmony import */ var _store_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/enums */ \"./src/components/store/enums.js\");\n/* harmony import */ var _hooks_use_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-socket */ \"./src/hooks/use-socket.js\");\n\n\n\n\n\nvar WebSocketDemo = function WebSocketDemo() {\n  var _useSocket = (0,_hooks_use_socket__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      message = _useSocket.message;\n\n  var _useStoreon = (0,storeon_react__WEBPACK_IMPORTED_MODULE_1__.useStoreon)('dispatch'),\n      dispatch = _useStoreon.dispatch; // console.log({message})\n\n\n  if (message) {\n    if (message.name === 'demand-status') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_2__[\"default\"].demandStatus.update, message.value === 'true');\n    if (message.name === 'humidity') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_2__[\"default\"].atmostphere.updateHumidity, message.value);\n    if (message.name === 'temperature') dispatch(_store_enums__WEBPACK_IMPORTED_MODULE_2__[\"default\"].atmosphere.updateTemperature, message.value);\n  } // if (connectionStatus !== 'Open') return <>Connecting...</>\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      color: 'black'\n    }\n  }, 'hi');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebSocketDemo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXRUZXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07RUFDeEIsaUJBQW9CRCw2REFBUyxFQUE3QjtFQUFBLElBQVFFLE9BQVIsY0FBUUEsT0FBUjs7RUFDSCxrQkFBcUJKLHlEQUFVLENBQUMsVUFBRCxDQUEvQjtFQUFBLElBQVFLLFFBQVIsZUFBUUEsUUFBUixDQUYyQixDQUl4Qjs7O0VBRUEsSUFBSUQsT0FBSixFQUFhO0lBQ1QsSUFBSUEsT0FBTyxDQUFDRSxJQUFSLEtBQWlCLGVBQXJCLEVBQXNDRCxRQUFRLENBQUNKLHdFQUFELEVBQTRCRyxPQUFPLENBQUNLLEtBQVIsS0FBa0IsTUFBOUMsQ0FBUjtJQUN0QyxJQUFJTCxPQUFPLENBQUNFLElBQVIsS0FBaUIsVUFBckIsRUFBaUNELFFBQVEsQ0FBQ0osK0VBQUQsRUFBbUNHLE9BQU8sQ0FBQ0ssS0FBM0MsQ0FBUjtJQUNqQyxJQUFJTCxPQUFPLENBQUNFLElBQVIsS0FBaUIsYUFBckIsRUFBb0NELFFBQVEsQ0FBQ0osaUZBQUQsRUFBcUNHLE9BQU8sQ0FBQ0ssS0FBN0MsQ0FBUjtFQUN2QyxDQVZ1QixDQVl4Qjs7O0VBRUEsb0JBQ0k7SUFBSyxLQUFLLEVBQUU7TUFBQ0ssS0FBSyxFQUFFO0lBQVI7RUFBWixHQUNLLElBREwsQ0FESjtBQUtILENBbkJEOztBQXFCQSwrREFBZVgsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1dlYlNvY2tldFRlc3QuanN4PzIyZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RvcmVvbiB9IGZyb20gJ3N0b3Jlb24vcmVhY3QnXG5pbXBvcnQgZW51bXMgZnJvbSAnLi9zdG9yZS9lbnVtcydcblxuaW1wb3J0IHVzZVNvY2tldCBmcm9tICcuLi9ob29rcy91c2Utc29ja2V0J1xuXG5jb25zdCBXZWJTb2NrZXREZW1vID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdXNlU29ja2V0KClcblx0Y29uc3QgeyBkaXNwYXRjaCB9ID0gdXNlU3RvcmVvbignZGlzcGF0Y2gnKVxuXG4gICAgLy8gY29uc29sZS5sb2coe21lc3NhZ2V9KVxuXG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSA9PT0gJ2RlbWFuZC1zdGF0dXMnKSBkaXNwYXRjaChlbnVtcy5kZW1hbmRTdGF0dXMudXBkYXRlLCBtZXNzYWdlLnZhbHVlID09PSAndHJ1ZScpXG4gICAgICAgIGlmIChtZXNzYWdlLm5hbWUgPT09ICdodW1pZGl0eScpIGRpc3BhdGNoKGVudW1zLmF0bW9zdHBoZXJlLnVwZGF0ZUh1bWlkaXR5LCBtZXNzYWdlLnZhbHVlKVxuICAgICAgICBpZiAobWVzc2FnZS5uYW1lID09PSAndGVtcGVyYXR1cmUnKSBkaXNwYXRjaChlbnVtcy5hdG1vc3BoZXJlLnVwZGF0ZVRlbXBlcmF0dXJlLCBtZXNzYWdlLnZhbHVlKVxuICAgIH1cblxuICAgIC8vIGlmIChjb25uZWN0aW9uU3RhdHVzICE9PSAnT3BlbicpIHJldHVybiA8PkNvbm5lY3RpbmcuLi48Lz5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogJ2JsYWNrJ319PlxuICAgICAgICAgICAgeydoaSd9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2ViU29ja2V0RGVtb1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0b3Jlb24iLCJlbnVtcyIsInVzZVNvY2tldCIsIldlYlNvY2tldERlbW8iLCJtZXNzYWdlIiwiZGlzcGF0Y2giLCJuYW1lIiwiZGVtYW5kU3RhdHVzIiwidXBkYXRlIiwidmFsdWUiLCJhdG1vc3RwaGVyZSIsInVwZGF0ZUh1bWlkaXR5IiwiYXRtb3NwaGVyZSIsInVwZGF0ZVRlbXBlcmF0dXJlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/WebSocketTest.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4ad3041e67c5ea921297"; }
/******/ }();
/******/ 
/******/ }
);