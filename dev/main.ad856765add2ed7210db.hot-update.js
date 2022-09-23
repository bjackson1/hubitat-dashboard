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

/***/ "./src/components/Dashboard.jsx":
/*!**************************************!*\
  !*** ./src/components/Dashboard.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! storeon/react */ \"./node_modules/storeon/react/index.dev.js\");\n/* harmony import */ var _hooks_use_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-app */ \"./src/hooks/use-app.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./src/components/store/index.js\");\n/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tiles */ \"./src/components/tiles/index.js\");\n/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Clock */ \"./src/components/Clock.jsx\");\n/* harmony import */ var _WebSocketTest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebSocketTest */ \"./src/components/WebSocketTest.jsx\");\n/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dashboard.module.css */ \"./src/components/Dashboard.module.css\");\n\n\n\n\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  var _useApp = (0,_hooks_use_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(15),\n      room = _useApp.room,\n      setTargetTemperature = _useApp.setTargetTemperature;\n\n  var refresh = function refresh() {\n    return window.location.reload();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(storeon_react__WEBPACK_IMPORTED_MODULE_1__.StoreContext.Provider, {\n    value: _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dashboard\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].titleBar\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Living Room\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Clock__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].tiles\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tiles__WEBPACK_IMPORTED_MODULE_4__.TemperatureAndHumidity, {\n    room: room\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tiles__WEBPACK_IMPORTED_MODULE_4__.HeatStatus, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tiles__WEBPACK_IMPORTED_MODULE_4__.TargetTemperature, {\n    room: room,\n    setTargetTemperature: setTargetTemperature\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_WebSocketTest__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_7__[\"default\"].refreshButton,\n    onClick: refresh\n  }, \"\\xA0\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1XLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07RUFDcEIsY0FBdUNULDBEQUFNLENBQUMsRUFBRCxDQUE3QztFQUFBLElBQVFVLElBQVIsV0FBUUEsSUFBUjtFQUFBLElBQWNDLG9CQUFkLFdBQWNBLG9CQUFkOztFQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0lBQUEsT0FBTUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixFQUFOO0VBQUEsQ0FBaEI7O0VBRUEsb0JBQ0ksMkRBQUMsZ0VBQUQ7SUFBdUIsS0FBSyxFQUFFZCw4Q0FBS0E7RUFBbkMsZ0JBQ0k7SUFBSyxTQUFTLEVBQUVPLHVFQUFhUTtFQUE3QixnQkFDSTtJQUFLLFNBQVMsRUFBRVIsc0VBQVlTO0VBQTVCLGdCQUNJLHNGQURKLGVBRUkscUZBQUssMkRBQUMsOENBQUQsT0FBTCxDQUZKLENBREosZUFLSTtJQUFLLFNBQVMsRUFBRVQsbUVBQVNVO0VBQXpCLGdCQUNJLDJEQUFDLDBEQUFEO0lBQXdCLElBQUksRUFBRVI7RUFBOUIsRUFESixlQUVJLDJEQUFDLDhDQUFELE9BRkosZUFHSSwyREFBQyxxREFBRDtJQUFtQixJQUFJLEVBQUVBLElBQXpCO0lBQStCLG9CQUFvQixFQUFFQztFQUFyRCxFQUhKLGVBSUksMkRBQUMsc0RBQUQsT0FKSixDQUxKLGVBWUk7SUFBUSxTQUFTLEVBQUVILDJFQUFuQjtJQUFzQyxPQUFPLEVBQUVJO0VBQS9DLFVBWkosQ0FESixDQURKO0FBa0JILENBdkJEOztBQXlCQSwrREFBZUgsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3g/NzllYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFN0b3JlQ29udGV4dCB9IGZyb20gJ3N0b3Jlb24vcmVhY3QnXG5pbXBvcnQgdXNlQXBwIGZyb20gJy4uL2hvb2tzL3VzZS1hcHAnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuaW1wb3J0IHsgQm9vc3QsIEhlYXRTdGF0dXMsIFRhcmdldFRlbXBlcmF0dXJlLCBUZW1wZXJhdHVyZUFuZEh1bWlkaXR5IH0gZnJvbSAnLi90aWxlcydcbmltcG9ydCBDbG9jayBmcm9tICcuL0Nsb2NrJ1xuaW1wb3J0IFdlYlNvY2tldFRlc3QgZnJvbSAnLi9XZWJTb2NrZXRUZXN0J1xuXG5pbXBvcnQgY3NzIGZyb20gJy4vRGFzaGJvYXJkLm1vZHVsZS5jc3MnXG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJvb20sIHNldFRhcmdldFRlbXBlcmF0dXJlIH0gPSB1c2VBcHAoMTUpXG5cbiAgICBjb25zdCByZWZyZXNoID0gKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RvcmVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdG9yZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmRhc2hib2FyZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy50aXRsZUJhcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TGl2aW5nIFJvb208L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48Q2xvY2sgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnRpbGVzfT5cbiAgICAgICAgICAgICAgICAgICAgPFRlbXBlcmF0dXJlQW5kSHVtaWRpdHkgcm9vbT17cm9vbX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlYXRTdGF0dXMgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRhcmdldFRlbXBlcmF0dXJlIHJvb209e3Jvb219IHNldFRhcmdldFRlbXBlcmF0dXJlPXtzZXRUYXJnZXRUZW1wZXJhdHVyZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFdlYlNvY2tldFRlc3QgLz5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxCb29zdCAvPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3NzLnJlZnJlc2hCdXR0b259IG9uQ2xpY2s9e3JlZnJlc2h9PiZuYnNwOzwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU3RvcmVDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdG9yZUNvbnRleHQiLCJ1c2VBcHAiLCJzdG9yZSIsIkJvb3N0IiwiSGVhdFN0YXR1cyIsIlRhcmdldFRlbXBlcmF0dXJlIiwiVGVtcGVyYXR1cmVBbmRIdW1pZGl0eSIsIkNsb2NrIiwiV2ViU29ja2V0VGVzdCIsImNzcyIsIkRhc2hib2FyZCIsInJvb20iLCJzZXRUYXJnZXRUZW1wZXJhdHVyZSIsInJlZnJlc2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRhc2hib2FyZCIsInRpdGxlQmFyIiwidGlsZXMiLCJyZWZyZXNoQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Dashboard.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "abd3dcc46e8faa52a983"; }
/******/ }();
/******/ 
/******/ }
);