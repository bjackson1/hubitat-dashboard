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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module ''\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nvar WebSocketDemo = function WebSocketDemo() {\n  //Public API that will echo messages sent to it back to the client\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    style: {\n      color: 'black'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    onClick: handleClickChangeSocketUrl\n  }, \"Click Me to change Socket Url\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    onClick: handleClickSendMessage,\n    disabled: readyState !== ReadyState.OPEN\n  }, \"Click Me to send 'Hello'\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, \"The WebSocket is currently \", connectionStatus), lastMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", null, \"Last message: \", lastMessage.data) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"ul\", null, messageHistory.map(function (message, idx) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", {\n      key: idx\n    }, message ? message.data : null);\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebSocketDemo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXRUZXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07RUFDMUI7RUFFQSxvQkFDRTtJQUFLLEtBQUssRUFBRTtNQUFDQyxLQUFLLEVBQUU7SUFBUjtFQUFaLGdCQUNFO0lBQVEsT0FBTyxFQUFFQztFQUFqQixtQ0FERixlQUlFO0lBQ0UsT0FBTyxFQUFFQyxzQkFEWDtJQUVFLFFBQVEsRUFBRUMsVUFBVSxLQUFLQyxVQUFVLENBQUNDO0VBRnRDLDhCQUpGLGVBVUUsd0dBQWtDQyxnQkFBbEMsQ0FWRixFQVdHQyxXQUFXLGdCQUFHLDJGQUFxQkEsV0FBVyxDQUFDQyxJQUFqQyxDQUFILEdBQW1ELElBWGpFLGVBWUUsdUVBQ0dDLGNBQWMsQ0FBQ0MsR0FBZixDQUFtQixVQUFDWixPQUFELEVBQVVhLEdBQVY7SUFBQSxvQkFDbEI7TUFBTSxHQUFHLEVBQUVBO0lBQVgsR0FBaUJiLE9BQU8sR0FBR0EsT0FBTyxDQUFDVSxJQUFYLEdBQWtCLElBQTFDLENBRGtCO0VBQUEsQ0FBbkIsQ0FESCxDQVpGLENBREY7QUFvQkQsQ0F2QkQ7O0FBeUJBLCtEQUFlVCxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvV2ViU29ja2V0VGVzdC5qc3g/MjJlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBtZXNzYWdlIH0gZnJvbSAnJ1xuXG5jb25zdCBXZWJTb2NrZXREZW1vID0gKCkgPT4ge1xuICAvL1B1YmxpYyBBUEkgdGhhdCB3aWxsIGVjaG8gbWVzc2FnZXMgc2VudCB0byBpdCBiYWNrIHRvIHRoZSBjbGllbnRcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogJ2JsYWNrJ319PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0NoYW5nZVNvY2tldFVybH0+XG4gICAgICAgIENsaWNrIE1lIHRvIGNoYW5nZSBTb2NrZXQgVXJsXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tTZW5kTWVzc2FnZX1cbiAgICAgICAgZGlzYWJsZWQ9e3JlYWR5U3RhdGUgIT09IFJlYWR5U3RhdGUuT1BFTn1cbiAgICAgID5cbiAgICAgICAgQ2xpY2sgTWUgdG8gc2VuZCAnSGVsbG8nXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzcGFuPlRoZSBXZWJTb2NrZXQgaXMgY3VycmVudGx5IHtjb25uZWN0aW9uU3RhdHVzfTwvc3Bhbj5cbiAgICAgIHtsYXN0TWVzc2FnZSA/IDxzcGFuPkxhc3QgbWVzc2FnZToge2xhc3RNZXNzYWdlLmRhdGF9PC9zcGFuPiA6IG51bGx9XG4gICAgICA8dWw+XG4gICAgICAgIHttZXNzYWdlSGlzdG9yeS5tYXAoKG1lc3NhZ2UsIGlkeCkgPT4gKFxuICAgICAgICAgIDxzcGFuIGtleT17aWR4fT57bWVzc2FnZSA/IG1lc3NhZ2UuZGF0YSA6IG51bGx9PC9zcGFuPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWJTb2NrZXREZW1vXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiY29ubmVjdCIsIm1lc3NhZ2UiLCJXZWJTb2NrZXREZW1vIiwiY29sb3IiLCJoYW5kbGVDbGlja0NoYW5nZVNvY2tldFVybCIsImhhbmRsZUNsaWNrU2VuZE1lc3NhZ2UiLCJyZWFkeVN0YXRlIiwiUmVhZHlTdGF0ZSIsIk9QRU4iLCJjb25uZWN0aW9uU3RhdHVzIiwibGFzdE1lc3NhZ2UiLCJkYXRhIiwibWVzc2FnZUhpc3RvcnkiLCJtYXAiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/WebSocketTest.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6dd64616b640d79383ff"; }
/******/ }();
/******/ 
/******/ }
);