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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_use_websocket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-use-websocket */ \"./node_modules/react-use-websocket/dist/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar useSocket = function useSocket() {\n  var _ReadyState$CONNECTIN;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(_config__WEBPACK_IMPORTED_MODULE_13__[\"default\"].webSocketUrl),\n      _useState2 = _slicedToArray(_useState, 2),\n      socketUrl = _useState2[0],\n      setSocketUrl = _useState2[1]; // console.log({ config })\n  // const connect = () => {\n  //     setSocketUrl(config.webSocketUrl)\n  // }\n\n\n  var _useWebSocket = (0,react_use_websocket__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(socketUrl),\n      sendMessage = _useWebSocket.sendMessage,\n      lastMessage = _useWebSocket.lastMessage,\n      readyState = _useWebSocket.readyState; //   useEffect(() => {\n  //     if (lastMessage !== null) {\n  //       setMessageHistory((prev) => prev.concat(lastMessage));\n  //     }\n  //   }, [lastMessage, setMessageHistory]);\n  // const handleClickChangeSocketUrl = useCallback(\n  //     () => setSocketUrl('wss://demos.kaazing.com/echo'),\n  //     []\n  // );\n  // const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);\n\n\n  var connectionStatus = (_ReadyState$CONNECTIN = {}, _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.CONNECTING, 'Connecting'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.OPEN, 'Open'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.CLOSING, 'Closing'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.CLOSED, 'Closed'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.UNINSTANTIATED, 'Uninstantiated'), _ReadyState$CONNECTIN)[readyState];\n  return {\n    message: message,\n    connectionStatus: connectionStatus\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSocket);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlLXNvY2tldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0VBQUE7O0VBQ3BCLGdCQUFrQ04sZ0RBQVEsQ0FBQ0ssNkRBQUQsQ0FBMUM7RUFBQTtFQUFBLElBQU9HLFNBQVA7RUFBQSxJQUFrQkMsWUFBbEIsaUJBRG9CLENBSXBCO0VBRUE7RUFDQTtFQUNBOzs7RUFFQSxvQkFBaUROLGdFQUFZLENBQUNLLFNBQUQsQ0FBN0Q7RUFBQSxJQUFRRSxXQUFSLGlCQUFRQSxXQUFSO0VBQUEsSUFBcUJDLFdBQXJCLGlCQUFxQkEsV0FBckI7RUFBQSxJQUFrQ0MsVUFBbEMsaUJBQWtDQSxVQUFsQyxDQVZvQixDQVlwQjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFFQTs7O0VBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsb0VBQ3BCVCx1RUFEb0IsRUFDSSxZQURKLDBDQUVwQkEsaUVBRm9CLEVBRUYsTUFGRSwwQ0FHcEJBLG9FQUhvQixFQUdDLFNBSEQsMENBSXBCQSxtRUFKb0IsRUFJQSxRQUpBLDBDQUtwQkEsMkVBTG9CLEVBS1EsZ0JBTFIsMEJBTXZCUSxVQU51QixDQUF6QjtFQVFBLE9BQU87SUFBRU8sT0FBTyxFQUFQQSxPQUFGO0lBQVdOLGdCQUFnQixFQUFoQkE7RUFBWCxDQUFQO0FBQ0gsQ0FsQ0Q7O0FBb0NBLCtEQUFlUCxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2hvb2tzL3VzZS1zb2NrZXQuanM/MGRlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlV2ViU29ja2V0LCB7IFJlYWR5U3RhdGUgfSBmcm9tICdyZWFjdC11c2Utd2Vic29ja2V0JztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG5cbmNvbnN0IHVzZVNvY2tldCA9ICgpID0+IHtcbiAgICBjb25zdCBbc29ja2V0VXJsLCBzZXRTb2NrZXRVcmxdID0gdXNlU3RhdGUoY29uZmlnLndlYlNvY2tldFVybCk7XG4gICAgXG5cbiAgICAvLyBjb25zb2xlLmxvZyh7IGNvbmZpZyB9KVxuXG4gICAgLy8gY29uc3QgY29ubmVjdCA9ICgpID0+IHtcbiAgICAvLyAgICAgc2V0U29ja2V0VXJsKGNvbmZpZy53ZWJTb2NrZXRVcmwpXG4gICAgLy8gfVxuXG4gICAgY29uc3QgeyBzZW5kTWVzc2FnZSwgbGFzdE1lc3NhZ2UsIHJlYWR5U3RhdGUgfSA9IHVzZVdlYlNvY2tldChzb2NrZXRVcmwpO1xuXG4gICAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBpZiAobGFzdE1lc3NhZ2UgIT09IG51bGwpIHtcbiAgICAvLyAgICAgICBzZXRNZXNzYWdlSGlzdG9yeSgocHJldikgPT4gcHJldi5jb25jYXQobGFzdE1lc3NhZ2UpKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSwgW2xhc3RNZXNzYWdlLCBzZXRNZXNzYWdlSGlzdG9yeV0pO1xuXG4gICAgLy8gY29uc3QgaGFuZGxlQ2xpY2tDaGFuZ2VTb2NrZXRVcmwgPSB1c2VDYWxsYmFjayhcbiAgICAvLyAgICAgKCkgPT4gc2V0U29ja2V0VXJsKCd3c3M6Ly9kZW1vcy5rYWF6aW5nLmNvbS9lY2hvJyksXG4gICAgLy8gICAgIFtdXG4gICAgLy8gKTtcblxuICAgIC8vIGNvbnN0IGhhbmRsZUNsaWNrU2VuZE1lc3NhZ2UgPSB1c2VDYWxsYmFjaygoKSA9PiBzZW5kTWVzc2FnZSgnSGVsbG8nKSwgW10pO1xuXG4gICAgY29uc3QgY29ubmVjdGlvblN0YXR1cyA9IHtcbiAgICAgICAgW1JlYWR5U3RhdGUuQ09OTkVDVElOR106ICdDb25uZWN0aW5nJyxcbiAgICAgICAgW1JlYWR5U3RhdGUuT1BFTl06ICdPcGVuJyxcbiAgICAgICAgW1JlYWR5U3RhdGUuQ0xPU0lOR106ICdDbG9zaW5nJyxcbiAgICAgICAgW1JlYWR5U3RhdGUuQ0xPU0VEXTogJ0Nsb3NlZCcsXG4gICAgICAgIFtSZWFkeVN0YXRlLlVOSU5TVEFOVElBVEVEXTogJ1VuaW5zdGFudGlhdGVkJyxcbiAgICB9W3JlYWR5U3RhdGVdXG5cbiAgICByZXR1cm4geyBtZXNzYWdlLCBjb25uZWN0aW9uU3RhdHVzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU29ja2V0XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlV2ViU29ja2V0IiwiUmVhZHlTdGF0ZSIsImNvbmZpZyIsInVzZVNvY2tldCIsIndlYlNvY2tldFVybCIsInNvY2tldFVybCIsInNldFNvY2tldFVybCIsInNlbmRNZXNzYWdlIiwibGFzdE1lc3NhZ2UiLCJyZWFkeVN0YXRlIiwiY29ubmVjdGlvblN0YXR1cyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0lORyIsIkNMT1NFRCIsIlVOSU5TVEFOVElBVEVEIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/use-socket.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "57f810b9a732263b74ff"; }
/******/ }();
/******/ 
/******/ }
);