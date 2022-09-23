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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_use_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-socket */ \"./src/hooks/use-socket.js\");\n/* harmony import */ var _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiles.module.css */ \"./src/components/tiles/tiles.module.css\");\n\n\n\n\nvar HeatStatus = function HeatStatus(_ref) {\n  var room = _ref.room;\n\n  var _useSocket = (0,_hooks_use_socket__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    type: ''\n  }),\n      message = _useSocket.message;\n\n  if (!room) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, \"Loading...\");\n  var demand = room.demand;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tileTitle\n  }, \"Heat Status\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"\".concat(_tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tileBody)\n  }, demand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].primaryIcon,\n    src: \"https://raw.githubusercontent.com/bjackson1/hubitat-dashboard/main/images/flame-circle.png\"\n  }), !demand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].primaryMetricDisplay\n  }, \"Off\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeatStatus);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90aWxlcy9IZWF0U3RhdHVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFjO0VBQUEsSUFBWEMsSUFBVyxRQUFYQSxJQUFXOztFQUM3QixpQkFBb0JILDZEQUFTLENBQUM7SUFBRUksSUFBSSxFQUFFO0VBQVIsQ0FBRCxDQUE3QjtFQUFBLElBQVFDLE9BQVIsY0FBUUEsT0FBUjs7RUFFQSxJQUFJLENBQUNGLElBQUwsRUFBVyxvQkFBTyx1SUFBUDtFQUVYLElBQVFHLE1BQVIsR0FBbUJILElBQW5CLENBQVFHLE1BQVI7RUFFQSxvQkFDSTtJQUFLLFNBQVMsRUFBRUwsOERBQWFNO0VBQTdCLGdCQUNJO0lBQUssU0FBUyxFQUFFTixtRUFBa0JPO0VBQWxDLGlCQURKLGVBRUk7SUFBSyxTQUFTLFlBQUtQLGtFQUFMO0VBQWQsR0FDS0ssTUFBTSxpQkFBSTtJQUFLLFNBQVMsRUFBRUwscUVBQWhCO0lBQXNDLEdBQUcsRUFBQztFQUExQyxFQURmLEVBRUssQ0FBQ0ssTUFBRCxpQkFBVztJQUFLLFNBQVMsRUFBRUwsOEVBQTZCVTtFQUE3QyxTQUZoQixDQUZKLENBREo7QUFTSCxDQWhCRDs7QUFrQkEsK0RBQWVULFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy90aWxlcy9IZWF0U3RhdHVzLmpzeD85N2NjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHVzZVNvY2tldCBmcm9tICcuLi8uLi9ob29rcy91c2Utc29ja2V0J1xuaW1wb3J0IHRpbGVzQ3NzIGZyb20gJy4vdGlsZXMubW9kdWxlLmNzcydcblxuY29uc3QgSGVhdFN0YXR1cyA9ICh7IHJvb20gfSkgPT4ge1xuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdXNlU29ja2V0KHsgdHlwZTogJycgfSlcblxuICAgIGlmICghcm9vbSkgcmV0dXJuIDw+TG9hZGluZy4uLjwvPlxuICAgIFxuICAgIGNvbnN0IHsgZGVtYW5kIH0gPSByb29tICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpbGVzQ3NzLnRpbGV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpbGVzQ3NzLnRpbGVUaXRsZX0+SGVhdCBTdGF0dXM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aWxlc0Nzcy50aWxlQm9keX1gfT5cbiAgICAgICAgICAgICAgICB7ZGVtYW5kICYmIDxpbWcgY2xhc3NOYW1lPXt0aWxlc0Nzcy5wcmltYXJ5SWNvbn0gc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2JqYWNrc29uMS9odWJpdGF0LWRhc2hib2FyZC9tYWluL2ltYWdlcy9mbGFtZS1jaXJjbGUucG5nXCIgLz59XG4gICAgICAgICAgICAgICAgeyFkZW1hbmQgJiYgPGRpdiBjbGFzc05hbWU9e3RpbGVzQ3NzLnByaW1hcnlNZXRyaWNEaXNwbGF5fT5PZmY8L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWF0U3RhdHVzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTb2NrZXQiLCJ0aWxlc0NzcyIsIkhlYXRTdGF0dXMiLCJyb29tIiwidHlwZSIsIm1lc3NhZ2UiLCJkZW1hbmQiLCJ0aWxlIiwidGlsZVRpdGxlIiwidGlsZUJvZHkiLCJwcmltYXJ5SWNvbiIsInByaW1hcnlNZXRyaWNEaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tiles/HeatStatus.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3919ba0ef22b15da5168"; }
/******/ }();
/******/ 
/******/ }
);