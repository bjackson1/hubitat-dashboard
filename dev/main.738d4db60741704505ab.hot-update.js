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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _tiles_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tiles.module.css */ \"./src/components/tiles/tiles.module.css\");\n\n\n\n\n\n\n\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar HeatStatus = function HeatStatus(_ref) {\n  var message = _ref.message;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      demand = _useState2[0],\n      setDemand = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {\n    if (message.name === 'demand-status') {\n      var newState = message.value === 'true';\n      console.log('use-effect', {\n        message: message\n      });\n      setDemand();\n    }\n  }, [message]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_11__[\"default\"].tile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_11__[\"default\"].tileTitle\n  }, \"Heat Status\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"div\", {\n    className: \"\".concat(_tiles_module_css__WEBPACK_IMPORTED_MODULE_11__[\"default\"].tileBody)\n  }, demand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"img\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_11__[\"default\"].primaryIcon,\n    src: \"https://raw.githubusercontent.com/bjackson1/hubitat-dashboard/main/images/flame-circle.png\"\n  }), !demand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_11__[\"default\"].primaryMetricDisplay\n  }, \"Off\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeatStatus);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90aWxlcy9IZWF0U3RhdHVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBaUI7RUFBQSxJQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0VBQ2hDLGdCQUE0QkgsZ0RBQVEsQ0FBQyxLQUFELENBQXBDO0VBQUE7RUFBQSxJQUFPSSxNQUFQO0VBQUEsSUFBZUMsU0FBZjs7RUFFQU4saURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSUksT0FBTyxDQUFDRyxJQUFSLEtBQWlCLGVBQXJCLEVBQXNDO01BQ2xDLElBQU1DLFFBQVEsR0FBR0osT0FBTyxDQUFDSyxLQUFSLEtBQWtCLE1BQW5DO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEI7UUFBQ1AsT0FBTyxFQUFQQTtNQUFELENBQTFCO01BQ0FFLFNBQVM7SUFDWjtFQUNKLENBTlEsRUFNTixDQUFDRixPQUFELENBTk0sQ0FBVDtFQVFBLG9CQUNJO0lBQUssU0FBUyxFQUFFRiwrREFBYVU7RUFBN0IsZ0JBQ0k7SUFBSyxTQUFTLEVBQUVWLG9FQUFrQlc7RUFBbEMsaUJBREosZUFFSTtJQUFLLFNBQVMsWUFBS1gsbUVBQUw7RUFBZCxHQUNLRyxNQUFNLGlCQUFJO0lBQUssU0FBUyxFQUFFSCxzRUFBaEI7SUFBc0MsR0FBRyxFQUFDO0VBQTFDLEVBRGYsRUFFSyxDQUFDRyxNQUFELGlCQUFXO0lBQUssU0FBUyxFQUFFSCwrRUFBNkJjO0VBQTdDLFNBRmhCLENBRkosQ0FESjtBQVNILENBcEJEOztBQXNCQSwrREFBZWIsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL3RpbGVzL0hlYXRTdGF0dXMuanN4Pzk3Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHRpbGVzQ3NzIGZyb20gJy4vdGlsZXMubW9kdWxlLmNzcydcblxuY29uc3QgSGVhdFN0YXR1cyA9ICh7IG1lc3NhZ2UgfSkgPT4ge1xuICAgIGNvbnN0IFtkZW1hbmQsIHNldERlbWFuZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlLm5hbWUgPT09ICdkZW1hbmQtc3RhdHVzJykge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBtZXNzYWdlLnZhbHVlID09PSAndHJ1ZSdcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2UtZWZmZWN0Jywge21lc3NhZ2V9KVxuICAgICAgICAgICAgc2V0RGVtYW5kKClcbiAgICAgICAgfVxuICAgIH0sIFttZXNzYWdlXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aWxlc0Nzcy50aWxlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aWxlc0Nzcy50aWxlVGl0bGV9PkhlYXQgU3RhdHVzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGlsZXNDc3MudGlsZUJvZHl9YH0+XG4gICAgICAgICAgICAgICAge2RlbWFuZCAmJiA8aW1nIGNsYXNzTmFtZT17dGlsZXNDc3MucHJpbWFyeUljb259IHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9iamFja3NvbjEvaHViaXRhdC1kYXNoYm9hcmQvbWFpbi9pbWFnZXMvZmxhbWUtY2lyY2xlLnBuZ1wiIC8+fVxuICAgICAgICAgICAgICAgIHshZGVtYW5kICYmIDxkaXYgY2xhc3NOYW1lPXt0aWxlc0Nzcy5wcmltYXJ5TWV0cmljRGlzcGxheX0+T2ZmPC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhdFN0YXR1c1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0aWxlc0NzcyIsIkhlYXRTdGF0dXMiLCJtZXNzYWdlIiwiZGVtYW5kIiwic2V0RGVtYW5kIiwibmFtZSIsIm5ld1N0YXRlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwidGlsZSIsInRpbGVUaXRsZSIsInRpbGVCb2R5IiwicHJpbWFyeUljb24iLCJwcmltYXJ5TWV0cmljRGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/tiles/HeatStatus.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1050ce08ebad0a1cc88f"; }
/******/ }();
/******/ 
/******/ }
);