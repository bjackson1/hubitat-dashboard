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

/***/ "./src/components/tiles/HeatStatus.jsx":
/*!*********************************************!*\
  !*** ./src/components/tiles/HeatStatus.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_use_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-socket */ \"./src/hooks/use-socket.js\");\n/* harmony import */ var _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiles.module.css */ \"./src/components/tiles/tiles.module.css\");\n\n\n\n\nvar HeatStatus = function HeatStatus(_ref) {\n  var room = _ref.room;\n\n  var _useSocket = (0,_hooks_use_socket__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    name: 'demand-status'\n  }),\n      message = _useSocket.message;\n\n  if (!room) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, \"Loading...\");\n  var demand = room.demand;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tileTitle\n  }, \"Heat Status\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\".concat(_tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tileBody)\n  }, demand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].primaryIcon,\n    src: \"https://raw.githubusercontent.com/bjackson1/hubitat-dashboard/main/images/flame-circle.png\"\n  }), !demand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].primaryMetricDisplay\n  }, \"Off\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeatStatus);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90aWxlcy9IZWF0U3RhdHVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFjO0VBQUEsSUFBWEMsSUFBVyxRQUFYQSxJQUFXOztFQUM3QixpQkFBb0JILDZEQUFTLENBQUM7SUFBRUksSUFBSSxFQUFFO0VBQVIsQ0FBRCxDQUE3QjtFQUFBLElBQVFDLE9BQVIsY0FBUUEsT0FBUjs7RUFFQSxJQUFJLENBQUNGLElBQUwsRUFBVyxvQkFBTyx1SUFBUDtFQUVYLElBQVFHLE1BQVIsR0FBbUJILElBQW5CLENBQVFHLE1BQVI7RUFFQSxvQkFDSTtJQUFLLFNBQVMsRUFBRUwsOERBQWFNO0VBQTdCLGdCQUNJO0lBQUssU0FBUyxFQUFFTixtRUFBa0JPO0VBQWxDLGlCQURKLGVBRUk7SUFBSyxTQUFTLFlBQUtQLGtFQUFMO0VBQWQsR0FDS0ssTUFBTSxpQkFBSTtJQUFLLFNBQVMsRUFBRUwscUVBQWhCO0lBQXNDLEdBQUcsRUFBQztFQUExQyxFQURmLEVBRUssQ0FBQ0ssTUFBRCxpQkFBVztJQUFLLFNBQVMsRUFBRUwsOEVBQTZCVTtFQUE3QyxTQUZoQixDQUZKLENBREo7QUFTSCxDQWhCRDs7QUFrQkEsK0RBQWVULFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy90aWxlcy9IZWF0U3RhdHVzLmpzeD85N2NjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHVzZVNvY2tldCBmcm9tICcuLi8uLi9ob29rcy91c2Utc29ja2V0J1xuaW1wb3J0IHRpbGVzQ3NzIGZyb20gJy4vdGlsZXMubW9kdWxlLmNzcydcblxuY29uc3QgSGVhdFN0YXR1cyA9ICh7IHJvb20gfSkgPT4ge1xuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdXNlU29ja2V0KHsgbmFtZTogJ2RlbWFuZC1zdGF0dXMnIH0pXG5cbiAgICBpZiAoIXJvb20pIHJldHVybiA8PkxvYWRpbmcuLi48Lz5cbiAgICBcbiAgICBjb25zdCB7IGRlbWFuZCB9ID0gcm9vbSAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aWxlc0Nzcy50aWxlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aWxlc0Nzcy50aWxlVGl0bGV9PkhlYXQgU3RhdHVzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGlsZXNDc3MudGlsZUJvZHl9YH0+XG4gICAgICAgICAgICAgICAge2RlbWFuZCAmJiA8aW1nIGNsYXNzTmFtZT17dGlsZXNDc3MucHJpbWFyeUljb259IHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9iamFja3NvbjEvaHViaXRhdC1kYXNoYm9hcmQvbWFpbi9pbWFnZXMvZmxhbWUtY2lyY2xlLnBuZ1wiIC8+fVxuICAgICAgICAgICAgICAgIHshZGVtYW5kICYmIDxkaXYgY2xhc3NOYW1lPXt0aWxlc0Nzcy5wcmltYXJ5TWV0cmljRGlzcGxheX0+T2ZmPC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhdFN0YXR1c1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU29ja2V0IiwidGlsZXNDc3MiLCJIZWF0U3RhdHVzIiwicm9vbSIsIm5hbWUiLCJtZXNzYWdlIiwiZGVtYW5kIiwidGlsZSIsInRpbGVUaXRsZSIsInRpbGVCb2R5IiwicHJpbWFyeUljb24iLCJwcmltYXJ5TWV0cmljRGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/tiles/HeatStatus.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b9d2c5e9e894f8ff4ec4"; }
/******/ }();
/******/ 
/******/ }
);