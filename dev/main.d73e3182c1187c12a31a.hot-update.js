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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _hooks_use_socket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-socket */ \"./src/hooks/use-socket.js\");\n/* harmony import */ var _tiles_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tiles.module.css */ \"./src/components/tiles/tiles.module.css\");\n\n\n\n\n\n\n\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar HeatStatus = function HeatStatus() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(),\n      _useState2 = _slicedToArray(_useState, 2),\n      demand = _useState2[0],\n      setDemand = _useState2[1];\n\n  var _useSocket = (0,_hooks_use_socket__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({\n    name: 'demand-status'\n  }),\n      message = _useSocket.message;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {\n    if (message.name === 'demand-status') {\n      setDemand();\n    }\n  }, [message]);\n  if (!demand) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react__WEBPACK_IMPORTED_MODULE_10___default().Fragment), null, \"Loading...\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_12__[\"default\"].tile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_12__[\"default\"].tileTitle\n  }, \"Heat Status\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"div\", {\n    className: \"\".concat(_tiles_module_css__WEBPACK_IMPORTED_MODULE_12__[\"default\"].tileBody)\n  }, demand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"img\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_12__[\"default\"].primaryIcon,\n    src: \"https://raw.githubusercontent.com/bjackson1/hubitat-dashboard/main/images/flame-circle.png\"\n  }), !demand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_12__[\"default\"].primaryMetricDisplay\n  }, \"Off\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeatStatus);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90aWxlcy9IZWF0U3RhdHVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtFQUNyQixnQkFBNEJILGdEQUFRLEVBQXBDO0VBQUE7RUFBQSxJQUFPSSxNQUFQO0VBQUEsSUFBZUMsU0FBZjs7RUFDQSxpQkFBb0JKLDhEQUFTLENBQUM7SUFBRUssSUFBSSxFQUFFO0VBQVIsQ0FBRCxDQUE3QjtFQUFBLElBQVFDLE9BQVIsY0FBUUEsT0FBUjs7RUFFQVIsaURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSVEsT0FBTyxDQUFDRCxJQUFSLEtBQWlCLGVBQXJCLEVBQXNDO01BQ2xDRCxTQUFTO0lBQ1o7RUFDSixDQUpRLEVBSU4sQ0FBQ0UsT0FBRCxDQUpNLENBQVQ7RUFNQSxJQUFJLENBQUNILE1BQUwsRUFBYSxvQkFBTyx5SUFBUDtFQUViLG9CQUNJO0lBQUssU0FBUyxFQUFFRiwrREFBYU07RUFBN0IsZ0JBQ0k7SUFBSyxTQUFTLEVBQUVOLG9FQUFrQk87RUFBbEMsaUJBREosZUFFSTtJQUFLLFNBQVMsWUFBS1AsbUVBQUw7RUFBZCxHQUNLRSxNQUFNLGlCQUFJO0lBQUssU0FBUyxFQUFFRixzRUFBaEI7SUFBc0MsR0FBRyxFQUFDO0VBQTFDLEVBRGYsRUFFSyxDQUFDRSxNQUFELGlCQUFXO0lBQUssU0FBUyxFQUFFRiwrRUFBNkJVO0VBQTdDLFNBRmhCLENBRkosQ0FESjtBQVNILENBckJEOztBQXVCQSwrREFBZVQsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL3RpbGVzL0hlYXRTdGF0dXMuanN4Pzk3Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHVzZVNvY2tldCBmcm9tICcuLi8uLi9ob29rcy91c2Utc29ja2V0J1xuaW1wb3J0IHRpbGVzQ3NzIGZyb20gJy4vdGlsZXMubW9kdWxlLmNzcydcblxuY29uc3QgSGVhdFN0YXR1cyA9ICgpID0+IHtcbiAgICBjb25zdCBbZGVtYW5kLCBzZXREZW1hbmRdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdXNlU29ja2V0KHsgbmFtZTogJ2RlbWFuZC1zdGF0dXMnIH0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAobWVzc2FnZS5uYW1lID09PSAnZGVtYW5kLXN0YXR1cycpIHtcbiAgICAgICAgICAgIHNldERlbWFuZCgpXG4gICAgICAgIH1cbiAgICB9LCBbbWVzc2FnZV0pXG5cbiAgICBpZiAoIWRlbWFuZCkgcmV0dXJuIDw+TG9hZGluZy4uLjwvPlxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpbGVzQ3NzLnRpbGV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpbGVzQ3NzLnRpbGVUaXRsZX0+SGVhdCBTdGF0dXM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt0aWxlc0Nzcy50aWxlQm9keX1gfT5cbiAgICAgICAgICAgICAgICB7ZGVtYW5kICYmIDxpbWcgY2xhc3NOYW1lPXt0aWxlc0Nzcy5wcmltYXJ5SWNvbn0gc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2JqYWNrc29uMS9odWJpdGF0LWRhc2hib2FyZC9tYWluL2ltYWdlcy9mbGFtZS1jaXJjbGUucG5nXCIgLz59XG4gICAgICAgICAgICAgICAgeyFkZW1hbmQgJiYgPGRpdiBjbGFzc05hbWU9e3RpbGVzQ3NzLnByaW1hcnlNZXRyaWNEaXNwbGF5fT5PZmY8L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWF0U3RhdHVzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNvY2tldCIsInRpbGVzQ3NzIiwiSGVhdFN0YXR1cyIsImRlbWFuZCIsInNldERlbWFuZCIsIm5hbWUiLCJtZXNzYWdlIiwidGlsZSIsInRpbGVUaXRsZSIsInRpbGVCb2R5IiwicHJpbWFyeUljb24iLCJwcmltYXJ5TWV0cmljRGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/tiles/HeatStatus.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d49ffb55bc748cf49fdb"; }
/******/ }();
/******/ 
/******/ }
);