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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _hooks_use_socket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-socket */ \"./src/hooks/use-socket.js\");\n/* harmony import */ var _tiles_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tiles.module.css */ \"./src/components/tiles/tiles.module.css\");\n\n\n\n\n\n\n\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar HeatStatus = function HeatStatus() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(),\n      _useState2 = _slicedToArray(_useState, 2),\n      demand = _useState2[0],\n      setDemand = _useState2[1];\n\n  var _useSocket = (0,_hooks_use_socket__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({\n    name: 'demand-status'\n  }),\n      message = _useSocket.message;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {\n    console.log('use-effect', {\n      message: message\n    });\n\n    if (message.name === 'demand-status') {\n      setDemand(message.value === 'true');\n    }\n  }, [message]);\n  if (!demand) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react__WEBPACK_IMPORTED_MODULE_10___default().Fragment), null, \"Loading...\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_12__[\"default\"].tile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_12__[\"default\"].tileTitle\n  }, \"Heat Status\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"div\", {\n    className: \"\".concat(_tiles_module_css__WEBPACK_IMPORTED_MODULE_12__[\"default\"].tileBody)\n  }, demand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"img\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_12__[\"default\"].primaryIcon,\n    src: \"https://raw.githubusercontent.com/bjackson1/hubitat-dashboard/main/images/flame-circle.png\"\n  }), !demand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(\"div\", {\n    className: _tiles_module_css__WEBPACK_IMPORTED_MODULE_12__[\"default\"].primaryMetricDisplay\n  }, \"Off\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeatStatus);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90aWxlcy9IZWF0U3RhdHVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtFQUNyQixnQkFBNEJILGdEQUFRLEVBQXBDO0VBQUE7RUFBQSxJQUFPSSxNQUFQO0VBQUEsSUFBZUMsU0FBZjs7RUFDQSxpQkFBb0JKLDhEQUFTLENBQUM7SUFBRUssSUFBSSxFQUFFO0VBQVIsQ0FBRCxDQUE3QjtFQUFBLElBQVFDLE9BQVIsY0FBUUEsT0FBUjs7RUFFQVIsaURBQVMsQ0FBQyxZQUFNO0lBQ1pTLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEI7TUFBQ0YsT0FBTyxFQUFQQTtJQUFELENBQTFCOztJQUNBLElBQUlBLE9BQU8sQ0FBQ0QsSUFBUixLQUFpQixlQUFyQixFQUFzQztNQUNsQ0QsU0FBUyxDQUFDRSxPQUFPLENBQUNHLEtBQVIsS0FBa0IsTUFBbkIsQ0FBVDtJQUNIO0VBQ0osQ0FMUSxFQUtOLENBQUNILE9BQUQsQ0FMTSxDQUFUO0VBT0EsSUFBSSxDQUFDSCxNQUFMLEVBQWEsb0JBQU8seUlBQVA7RUFFYixvQkFDSTtJQUFLLFNBQVMsRUFBRUYsK0RBQWFTO0VBQTdCLGdCQUNJO0lBQUssU0FBUyxFQUFFVCxvRUFBa0JVO0VBQWxDLGlCQURKLGVBRUk7SUFBSyxTQUFTLFlBQUtWLG1FQUFMO0VBQWQsR0FDS0UsTUFBTSxpQkFBSTtJQUFLLFNBQVMsRUFBRUYsc0VBQWhCO0lBQXNDLEdBQUcsRUFBQztFQUExQyxFQURmLEVBRUssQ0FBQ0UsTUFBRCxpQkFBVztJQUFLLFNBQVMsRUFBRUYsK0VBQTZCYTtFQUE3QyxTQUZoQixDQUZKLENBREo7QUFTSCxDQXRCRDs7QUF3QkEsK0RBQWVaLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy90aWxlcy9IZWF0U3RhdHVzLmpzeD85N2NjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB1c2VTb2NrZXQgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXNvY2tldCdcbmltcG9ydCB0aWxlc0NzcyBmcm9tICcuL3RpbGVzLm1vZHVsZS5jc3MnXG5cbmNvbnN0IEhlYXRTdGF0dXMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2RlbWFuZCwgc2V0RGVtYW5kXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHVzZVNvY2tldCh7IG5hbWU6ICdkZW1hbmQtc3RhdHVzJyB9KVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZS1lZmZlY3QnLCB7bWVzc2FnZX0pXG4gICAgICAgIGlmIChtZXNzYWdlLm5hbWUgPT09ICdkZW1hbmQtc3RhdHVzJykge1xuICAgICAgICAgICAgc2V0RGVtYW5kKG1lc3NhZ2UudmFsdWUgPT09ICd0cnVlJylcbiAgICAgICAgfVxuICAgIH0sIFttZXNzYWdlXSlcblxuICAgIGlmICghZGVtYW5kKSByZXR1cm4gPD5Mb2FkaW5nLi4uPC8+XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGlsZXNDc3MudGlsZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGlsZXNDc3MudGlsZVRpdGxlfT5IZWF0IFN0YXR1czwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RpbGVzQ3NzLnRpbGVCb2R5fWB9PlxuICAgICAgICAgICAgICAgIHtkZW1hbmQgJiYgPGltZyBjbGFzc05hbWU9e3RpbGVzQ3NzLnByaW1hcnlJY29ufSBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vYmphY2tzb24xL2h1Yml0YXQtZGFzaGJvYXJkL21haW4vaW1hZ2VzL2ZsYW1lLWNpcmNsZS5wbmdcIiAvPn1cbiAgICAgICAgICAgICAgICB7IWRlbWFuZCAmJiA8ZGl2IGNsYXNzTmFtZT17dGlsZXNDc3MucHJpbWFyeU1ldHJpY0Rpc3BsYXl9Pk9mZjwvZGl2Pn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYXRTdGF0dXNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU29ja2V0IiwidGlsZXNDc3MiLCJIZWF0U3RhdHVzIiwiZGVtYW5kIiwic2V0RGVtYW5kIiwibmFtZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJ0aWxlIiwidGlsZVRpdGxlIiwidGlsZUJvZHkiLCJwcmltYXJ5SWNvbiIsInByaW1hcnlNZXRyaWNEaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tiles/HeatStatus.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8b401fdcb2ffb7cf2c00"; }
/******/ }();
/******/ 
/******/ }
);