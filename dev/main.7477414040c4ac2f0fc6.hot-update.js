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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_use_websocket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-use-websocket */ \"./node_modules/react-use-websocket/dist/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar useSocket = function useSocket() {\n  var _ReadyState$CONNECTIN;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(_config__WEBPACK_IMPORTED_MODULE_13__[\"default\"].webSocketUrl),\n      _useState2 = _slicedToArray(_useState, 2),\n      socketUrl = _useState2[0],\n      setSocketUrl = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      message = _useState4[0],\n      setMessage = _useState4[1]; // console.log({ config })\n  // const connect = () => {\n  //     setSocketUrl(config.webSocketUrl)\n  // }\n\n\n  var _useWebSocket = (0,react_use_websocket__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(socketUrl),\n      sendMessage = _useWebSocket.sendMessage,\n      lastMessage = _useWebSocket.lastMessage,\n      readyState = _useWebSocket.readyState; //   useEffect(() => {\n  //     if (lastMessage !== null) {\n  //       setMessageHistory((prev) => prev.concat(lastMessage));\n  //     }\n  //   }, [lastMessage, setMessageHistory]);\n  // const handleClickChangeSocketUrl = useCallback(\n  //     () => setSocketUrl('wss://demos.kaazing.com/echo'),\n  //     []\n  // );\n  // const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);\n\n\n  var connectionStatus = (_ReadyState$CONNECTIN = {}, _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.CONNECTING, 'Connecting'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.OPEN, 'Open'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.CLOSING, 'Closing'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.CLOSED, 'Closed'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_12__.ReadyState.UNINSTANTIATED, 'Uninstantiated'), _ReadyState$CONNECTIN)[readyState];\n  return {\n    message: message,\n    connectionStatus: connectionStatus\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSocket);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlLXNvY2tldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0VBQUE7O0VBQ3BCLGdCQUFrQ04sZ0RBQVEsQ0FBQ0ssNkRBQUQsQ0FBMUM7RUFBQTtFQUFBLElBQU9HLFNBQVA7RUFBQSxJQUFrQkMsWUFBbEI7O0VBQ0EsaUJBQThCVCxnREFBUSxDQUFDLEVBQUQsQ0FBdEM7RUFBQTtFQUFBLElBQU9VLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEIsaUJBRm9CLENBSXBCO0VBRUE7RUFDQTtFQUNBOzs7RUFFQSxvQkFBaURSLGdFQUFZLENBQUNLLFNBQUQsQ0FBN0Q7RUFBQSxJQUFRSSxXQUFSLGlCQUFRQSxXQUFSO0VBQUEsSUFBcUJDLFdBQXJCLGlCQUFxQkEsV0FBckI7RUFBQSxJQUFrQ0MsVUFBbEMsaUJBQWtDQSxVQUFsQyxDQVZvQixDQVlwQjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFFQTs7O0VBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsb0VBQ3BCWCx1RUFEb0IsRUFDSSxZQURKLDBDQUVwQkEsaUVBRm9CLEVBRUYsTUFGRSwwQ0FHcEJBLG9FQUhvQixFQUdDLFNBSEQsMENBSXBCQSxtRUFKb0IsRUFJQSxRQUpBLDBDQUtwQkEsMkVBTG9CLEVBS1EsZ0JBTFIsMEJBTXZCVSxVQU51QixDQUF6QjtFQVFBLE9BQU87SUFBRUosT0FBTyxFQUFQQSxPQUFGO0lBQVdLLGdCQUFnQixFQUFoQkE7RUFBWCxDQUFQO0FBQ0gsQ0FsQ0Q7O0FBb0NBLCtEQUFlVCxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2hvb2tzL3VzZS1zb2NrZXQuanM/MGRlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlV2ViU29ja2V0LCB7IFJlYWR5U3RhdGUgfSBmcm9tICdyZWFjdC11c2Utd2Vic29ja2V0JztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG5cbmNvbnN0IHVzZVNvY2tldCA9ICgpID0+IHtcbiAgICBjb25zdCBbc29ja2V0VXJsLCBzZXRTb2NrZXRVcmxdID0gdXNlU3RhdGUoY29uZmlnLndlYlNvY2tldFVybClcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSh7fSlcblxuICAgIC8vIGNvbnNvbGUubG9nKHsgY29uZmlnIH0pXG5cbiAgICAvLyBjb25zdCBjb25uZWN0ID0gKCkgPT4ge1xuICAgIC8vICAgICBzZXRTb2NrZXRVcmwoY29uZmlnLndlYlNvY2tldFVybClcbiAgICAvLyB9XG5cbiAgICBjb25zdCB7IHNlbmRNZXNzYWdlLCBsYXN0TWVzc2FnZSwgcmVhZHlTdGF0ZSB9ID0gdXNlV2ViU29ja2V0KHNvY2tldFVybClcblxuICAgIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgaWYgKGxhc3RNZXNzYWdlICE9PSBudWxsKSB7XG4gICAgLy8gICAgICAgc2V0TWVzc2FnZUhpc3RvcnkoKHByZXYpID0+IHByZXYuY29uY2F0KGxhc3RNZXNzYWdlKSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0sIFtsYXN0TWVzc2FnZSwgc2V0TWVzc2FnZUhpc3RvcnldKTtcblxuICAgIC8vIGNvbnN0IGhhbmRsZUNsaWNrQ2hhbmdlU29ja2V0VXJsID0gdXNlQ2FsbGJhY2soXG4gICAgLy8gICAgICgpID0+IHNldFNvY2tldFVybCgnd3NzOi8vZGVtb3Mua2FhemluZy5jb20vZWNobycpLFxuICAgIC8vICAgICBbXVxuICAgIC8vICk7XG5cbiAgICAvLyBjb25zdCBoYW5kbGVDbGlja1NlbmRNZXNzYWdlID0gdXNlQ2FsbGJhY2soKCkgPT4gc2VuZE1lc3NhZ2UoJ0hlbGxvJyksIFtdKTtcblxuICAgIGNvbnN0IGNvbm5lY3Rpb25TdGF0dXMgPSB7XG4gICAgICAgIFtSZWFkeVN0YXRlLkNPTk5FQ1RJTkddOiAnQ29ubmVjdGluZycsXG4gICAgICAgIFtSZWFkeVN0YXRlLk9QRU5dOiAnT3BlbicsXG4gICAgICAgIFtSZWFkeVN0YXRlLkNMT1NJTkddOiAnQ2xvc2luZycsXG4gICAgICAgIFtSZWFkeVN0YXRlLkNMT1NFRF06ICdDbG9zZWQnLFxuICAgICAgICBbUmVhZHlTdGF0ZS5VTklOU1RBTlRJQVRFRF06ICdVbmluc3RhbnRpYXRlZCcsXG4gICAgfVtyZWFkeVN0YXRlXVxuXG4gICAgcmV0dXJuIHsgbWVzc2FnZSwgY29ubmVjdGlvblN0YXR1cyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNvY2tldFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVdlYlNvY2tldCIsIlJlYWR5U3RhdGUiLCJjb25maWciLCJ1c2VTb2NrZXQiLCJ3ZWJTb2NrZXRVcmwiLCJzb2NrZXRVcmwiLCJzZXRTb2NrZXRVcmwiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwibGFzdE1lc3NhZ2UiLCJyZWFkeVN0YXRlIiwiY29ubmVjdGlvblN0YXR1cyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0lORyIsIkNMT1NFRCIsIlVOSU5TVEFOVElBVEVEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/use-socket.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "330098dcde31287bf39e"; }
/******/ }();
/******/ 
/******/ }
);