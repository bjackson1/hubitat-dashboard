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

/***/ "./src/hooks/use-socket.js":
/*!*********************************!*\
  !*** ./src/hooks/use-socket.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_use_websocket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-use-websocket */ \"./node_modules/react-use-websocket/dist/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar useSocket = function useSocket(filter) {\n  var _ReadyState$CONNECTIN;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(_config__WEBPACK_IMPORTED_MODULE_13__[\"default\"].webSocketUrl),\n      _useState2 = _slicedToArray(_useState, 2),\n      socketUrl = _useState2[0],\n      setSocketUrl = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      message = _useState4[0],\n      setMessage = _useState4[1]; // console.log({ config })\n  // const connect = () => {\n  //     setSocketUrl(config.webSocketUrl)\n  // }\n\n\n  var _useWebSocket = (0,react_use_websocket__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(socketUrl),\n      sendMessage = _useWebSocket.sendMessage,\n      lastMessage = _useWebSocket.lastMessage,\n      readyState = _useWebSocket.readyState;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(function () {\n    if (lastMessage !== null) {\n      var data = JSON.parse(lastMessage.data);\n\n      if (data.source === 'APP' && data.type === 'heating-control') {\n        if (filter && filter !== null && filter !== void 0 && filter.name) {\n          if (filter.name === (data === null || data === void 0 ? void 0 : data.name)) setMessage(data);\n        } else {\n          setMessage(data);\n        }\n      }\n    }\n  }, [lastMessage]);\n  var connectionStatus = (_ReadyState$CONNECTIN = {}, _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.CONNECTING, 'Connecting'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.OPEN, 'Open'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.CLOSING, 'Closing'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.CLOSED, 'Closed'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.UNINSTANTIATED, 'Uninstantiated'), _ReadyState$CONNECTIN)[readyState];\n  return {\n    message: message,\n    connectionStatus: connectionStatus\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSocket);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlLXNvY2tldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxNQUFELEVBQVk7RUFBQTs7RUFDMUIsZ0JBQWtDUCxnREFBUSxDQUFDSyw2REFBRCxDQUExQztFQUFBO0VBQUEsSUFBT0ksU0FBUDtFQUFBLElBQWtCQyxZQUFsQjs7RUFDQSxpQkFBOEJWLGdEQUFRLENBQUMsRUFBRCxDQUF0QztFQUFBO0VBQUEsSUFBT1csT0FBUDtFQUFBLElBQWdCQyxVQUFoQixpQkFGMEIsQ0FJMUI7RUFFQTtFQUNBO0VBQ0E7OztFQUVBLG9CQUFpRFQsZ0VBQVksQ0FBQ00sU0FBRCxDQUE3RDtFQUFBLElBQVFJLFdBQVIsaUJBQVFBLFdBQVI7RUFBQSxJQUFxQkMsV0FBckIsaUJBQXFCQSxXQUFyQjtFQUFBLElBQWtDQyxVQUFsQyxpQkFBa0NBLFVBQWxDOztFQUVBYixpREFBUyxDQUFDLFlBQU07SUFDWixJQUFJWSxXQUFXLEtBQUssSUFBcEIsRUFBMEI7TUFDdEIsSUFBTUUsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osV0FBVyxDQUFDRSxJQUF2QixDQUFiOztNQUNBLElBQUlBLElBQUksQ0FBQ0csTUFBTCxLQUFnQixLQUFoQixJQUF5QkgsSUFBSSxDQUFDSSxJQUFMLEtBQWMsaUJBQTNDLEVBQThEO1FBQzFELElBQUliLE1BQU0sSUFBSUEsTUFBSixhQUFJQSxNQUFKLGVBQUlBLE1BQU0sQ0FBRWMsSUFBdEIsRUFBNEI7VUFDeEIsSUFBSWQsTUFBTSxDQUFDYyxJQUFQLE1BQWdCTCxJQUFoQixhQUFnQkEsSUFBaEIsdUJBQWdCQSxJQUFJLENBQUVLLElBQXRCLENBQUosRUFBZ0NULFVBQVUsQ0FBQ0ksSUFBRCxDQUFWO1FBQ25DLENBRkQsTUFFTztVQUNISixVQUFVLENBQUNJLElBQUQsQ0FBVjtRQUNIO01BQ0o7SUFDSjtFQUNKLENBWFEsRUFXTixDQUFDRixXQUFELENBWE0sQ0FBVDtFQWFBLElBQU1RLGdCQUFnQixHQUFHLG9FQUNwQmxCLHVFQURvQixFQUNJLFlBREosMENBRXBCQSxpRUFGb0IsRUFFRixNQUZFLDBDQUdwQkEsb0VBSG9CLEVBR0MsU0FIRCwwQ0FJcEJBLG1FQUpvQixFQUlBLFFBSkEsMENBS3BCQSwyRUFMb0IsRUFLUSxnQkFMUiwwQkFNdkJXLFVBTnVCLENBQXpCO0VBUUEsT0FBTztJQUFFSixPQUFPLEVBQVBBLE9BQUY7SUFBV1csZ0JBQWdCLEVBQWhCQTtFQUFYLENBQVA7QUFDSCxDQWxDRDs7QUFvQ0EsK0RBQWVoQixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2hvb2tzL3VzZS1zb2NrZXQuanM/MGRlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlV2ViU29ja2V0LCB7IFJlYWR5U3RhdGUgfSBmcm9tICdyZWFjdC11c2Utd2Vic29ja2V0JztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG5cbmNvbnN0IHVzZVNvY2tldCA9IChmaWx0ZXIpID0+IHtcbiAgICBjb25zdCBbc29ja2V0VXJsLCBzZXRTb2NrZXRVcmxdID0gdXNlU3RhdGUoY29uZmlnLndlYlNvY2tldFVybClcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSh7fSlcblxuICAgIC8vIGNvbnNvbGUubG9nKHsgY29uZmlnIH0pXG5cbiAgICAvLyBjb25zdCBjb25uZWN0ID0gKCkgPT4ge1xuICAgIC8vICAgICBzZXRTb2NrZXRVcmwoY29uZmlnLndlYlNvY2tldFVybClcbiAgICAvLyB9XG5cbiAgICBjb25zdCB7IHNlbmRNZXNzYWdlLCBsYXN0TWVzc2FnZSwgcmVhZHlTdGF0ZSB9ID0gdXNlV2ViU29ja2V0KHNvY2tldFVybClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChsYXN0TWVzc2FnZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobGFzdE1lc3NhZ2UuZGF0YSlcbiAgICAgICAgICAgIGlmIChkYXRhLnNvdXJjZSA9PT0gJ0FQUCcgJiYgZGF0YS50eXBlID09PSAnaGVhdGluZy1jb250cm9sJykge1xuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyPy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIubmFtZSA9PT0gZGF0YT8ubmFtZSkgc2V0TWVzc2FnZShkYXRhKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoZGF0YSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbbGFzdE1lc3NhZ2VdKVxuXG4gICAgY29uc3QgY29ubmVjdGlvblN0YXR1cyA9IHtcbiAgICAgICAgW1JlYWR5U3RhdGUuQ09OTkVDVElOR106ICdDb25uZWN0aW5nJyxcbiAgICAgICAgW1JlYWR5U3RhdGUuT1BFTl06ICdPcGVuJyxcbiAgICAgICAgW1JlYWR5U3RhdGUuQ0xPU0lOR106ICdDbG9zaW5nJyxcbiAgICAgICAgW1JlYWR5U3RhdGUuQ0xPU0VEXTogJ0Nsb3NlZCcsXG4gICAgICAgIFtSZWFkeVN0YXRlLlVOSU5TVEFOVElBVEVEXTogJ1VuaW5zdGFudGlhdGVkJyxcbiAgICB9W3JlYWR5U3RhdGVdXG5cbiAgICByZXR1cm4geyBtZXNzYWdlLCBjb25uZWN0aW9uU3RhdHVzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU29ja2V0XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlV2ViU29ja2V0IiwiUmVhZHlTdGF0ZSIsImNvbmZpZyIsInVzZVNvY2tldCIsImZpbHRlciIsIndlYlNvY2tldFVybCIsInNvY2tldFVybCIsInNldFNvY2tldFVybCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic2VuZE1lc3NhZ2UiLCJsYXN0TWVzc2FnZSIsInJlYWR5U3RhdGUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwic291cmNlIiwidHlwZSIsIm5hbWUiLCJjb25uZWN0aW9uU3RhdHVzIiwiQ09OTkVDVElORyIsIk9QRU4iLCJDTE9TSU5HIiwiQ0xPU0VEIiwiVU5JTlNUQU5USUFURUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/use-socket.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "282494df3fc55cfb4507"; }
/******/ }();
/******/ 
/******/ }
);