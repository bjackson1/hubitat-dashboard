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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_use_websocket__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-use-websocket */ \"./node_modules/react-use-websocket/dist/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar WebSocketDemo = function WebSocketDemo() {\n  var _ReadyState$CONNECTIN;\n\n  //Public API that will echo messages sent to it back to the client\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)('ws://192.168.50.11/eventsocket'),\n      _useState2 = _slicedToArray(_useState, 2),\n      socketUrl = _useState2[0],\n      setSocketUrl = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      messageHistory = _useState4[0],\n      setMessageHistory = _useState4[1];\n\n  var _useWebSocket = (0,react_use_websocket__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(socketUrl),\n      sendMessage = _useWebSocket.sendMessage,\n      lastMessage = _useWebSocket.lastMessage,\n      readyState = _useWebSocket.readyState;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {\n    if (lastMessage !== null) {\n      setMessageHistory(function (prev) {\n        return prev.concat(lastMessage);\n      });\n    }\n  }, [lastMessage, setMessageHistory]);\n  var handleClickChangeSocketUrl = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(function () {\n    return setSocketUrl('wss://demos.kaazing.com/echo');\n  }, []);\n  var handleClickSendMessage = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(function () {\n    return sendMessage('Hello');\n  }, []);\n  var connectionStatus = (_ReadyState$CONNECTIN = {}, _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_14__.ReadyState.CONNECTING, 'Connecting'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_14__.ReadyState.OPEN, 'Open'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_14__.ReadyState.CLOSING, 'Closing'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_14__.ReadyState.CLOSED, 'Closed'), _defineProperty(_ReadyState$CONNECTIN, react_use_websocket__WEBPACK_IMPORTED_MODULE_14__.ReadyState.UNINSTANTIATED, 'Uninstantiated'), _ReadyState$CONNECTIN)[readyState];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(\"div\", {\n    style: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(\"button\", {\n    onClick: handleClickChangeSocketUrl\n  }, \"Click Me to change Socket Url\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(\"button\", {\n    onClick: handleClickSendMessage,\n    disabled: readyState !== react_use_websocket__WEBPACK_IMPORTED_MODULE_14__.ReadyState.OPEN\n  }, \"Click Me to send 'Hello'\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(\"span\", null, \"The WebSocket is currently \", connectionStatus), lastMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(\"span\", null, \"Last message: \", lastMessage.data) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(\"ul\", null, messageHistory.map(function (message, idx) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement(\"span\", {\n      key: idx\n    }, message ? message.data : null);\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebSocketDemo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWJTb2NrZXRUZXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07RUFBQTs7RUFDMUI7RUFDQSxnQkFBa0NMLGdEQUFRLENBQUMsZ0NBQUQsQ0FBMUM7RUFBQTtFQUFBLElBQU9NLFNBQVA7RUFBQSxJQUFrQkMsWUFBbEI7O0VBQ0EsaUJBQTRDUCxnREFBUSxDQUFDLEVBQUQsQ0FBcEQ7RUFBQTtFQUFBLElBQU9RLGNBQVA7RUFBQSxJQUF1QkMsaUJBQXZCOztFQUVBLG9CQUFpRE4sZ0VBQVksQ0FBQ0csU0FBRCxDQUE3RDtFQUFBLElBQVFJLFdBQVIsaUJBQVFBLFdBQVI7RUFBQSxJQUFxQkMsV0FBckIsaUJBQXFCQSxXQUFyQjtFQUFBLElBQWtDQyxVQUFsQyxpQkFBa0NBLFVBQWxDOztFQUVBVixpREFBUyxDQUFDLFlBQU07SUFDZCxJQUFJUyxXQUFXLEtBQUssSUFBcEIsRUFBMEI7TUFDeEJGLGlCQUFpQixDQUFDLFVBQUNJLElBQUQ7UUFBQSxPQUFVQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUgsV0FBWixDQUFWO01BQUEsQ0FBRCxDQUFqQjtJQUNEO0VBQ0YsQ0FKUSxFQUlOLENBQUNBLFdBQUQsRUFBY0YsaUJBQWQsQ0FKTSxDQUFUO0VBTUEsSUFBTU0sMEJBQTBCLEdBQUdkLG1EQUFXLENBQzVDO0lBQUEsT0FBTU0sWUFBWSxDQUFDLDhCQUFELENBQWxCO0VBQUEsQ0FENEMsRUFFNUMsRUFGNEMsQ0FBOUM7RUFLQSxJQUFNUyxzQkFBc0IsR0FBR2YsbURBQVcsQ0FBQztJQUFBLE9BQU1TLFdBQVcsQ0FBQyxPQUFELENBQWpCO0VBQUEsQ0FBRCxFQUE2QixFQUE3QixDQUExQztFQUVBLElBQU1PLGdCQUFnQixHQUFHLG9FQUN0QmIsdUVBRHNCLEVBQ0UsWUFERiwwQ0FFdEJBLGlFQUZzQixFQUVKLE1BRkksMENBR3RCQSxvRUFIc0IsRUFHRCxTQUhDLDBDQUl0QkEsbUVBSnNCLEVBSUYsUUFKRSwwQ0FLdEJBLDJFQUxzQixFQUtNLGdCQUxOLDBCQU12QlEsVUFOdUIsQ0FBekI7RUFRQSxvQkFDRTtJQUFLLEtBQUssRUFBRTtFQUFaLGdCQUNFO0lBQVEsT0FBTyxFQUFFRztFQUFqQixtQ0FERixlQUlFO0lBQ0UsT0FBTyxFQUFFQyxzQkFEWDtJQUVFLFFBQVEsRUFBRUosVUFBVSxLQUFLUixpRUFBZWU7RUFGMUMsOEJBSkYsZUFVRSx5R0FBa0NGLGdCQUFsQyxDQVZGLEVBV0dOLFdBQVcsZ0JBQUcsNEZBQXFCQSxXQUFXLENBQUNZLElBQWpDLENBQUgsR0FBbUQsSUFYakUsZUFZRSx3RUFDR2YsY0FBYyxDQUFDZ0IsR0FBZixDQUFtQixVQUFDQyxPQUFELEVBQVVDLEdBQVY7SUFBQSxvQkFDbEI7TUFBTSxHQUFHLEVBQUVBO0lBQVgsR0FBaUJELE9BQU8sR0FBR0EsT0FBTyxDQUFDRixJQUFYLEdBQWtCLElBQTFDLENBRGtCO0VBQUEsQ0FBbkIsQ0FESCxDQVpGLENBREY7QUFvQkQsQ0FoREQ7O0FBa0RBLCtEQUFlbEIsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1dlYlNvY2tldFRlc3QuanN4PzIyZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVdlYlNvY2tldCwgeyBSZWFkeVN0YXRlIH0gZnJvbSAncmVhY3QtdXNlLXdlYnNvY2tldCc7XG5cbmNvbnN0IFdlYlNvY2tldERlbW8gPSAoKSA9PiB7XG4gIC8vUHVibGljIEFQSSB0aGF0IHdpbGwgZWNobyBtZXNzYWdlcyBzZW50IHRvIGl0IGJhY2sgdG8gdGhlIGNsaWVudFxuICBjb25zdCBbc29ja2V0VXJsLCBzZXRTb2NrZXRVcmxdID0gdXNlU3RhdGUoJ3dzOi8vMTkyLjE2OC41MC4xMS9ldmVudHNvY2tldCcpO1xuICBjb25zdCBbbWVzc2FnZUhpc3RvcnksIHNldE1lc3NhZ2VIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCB7IHNlbmRNZXNzYWdlLCBsYXN0TWVzc2FnZSwgcmVhZHlTdGF0ZSB9ID0gdXNlV2ViU29ja2V0KHNvY2tldFVybCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGFzdE1lc3NhZ2UgIT09IG51bGwpIHtcbiAgICAgIHNldE1lc3NhZ2VIaXN0b3J5KChwcmV2KSA9PiBwcmV2LmNvbmNhdChsYXN0TWVzc2FnZSkpO1xuICAgIH1cbiAgfSwgW2xhc3RNZXNzYWdlLCBzZXRNZXNzYWdlSGlzdG9yeV0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrQ2hhbmdlU29ja2V0VXJsID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gc2V0U29ja2V0VXJsKCd3c3M6Ly9kZW1vcy5rYWF6aW5nLmNvbS9lY2hvJyksXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBoYW5kbGVDbGlja1NlbmRNZXNzYWdlID0gdXNlQ2FsbGJhY2soKCkgPT4gc2VuZE1lc3NhZ2UoJ0hlbGxvJyksIFtdKTtcblxuICBjb25zdCBjb25uZWN0aW9uU3RhdHVzID0ge1xuICAgIFtSZWFkeVN0YXRlLkNPTk5FQ1RJTkddOiAnQ29ubmVjdGluZycsXG4gICAgW1JlYWR5U3RhdGUuT1BFTl06ICdPcGVuJyxcbiAgICBbUmVhZHlTdGF0ZS5DTE9TSU5HXTogJ0Nsb3NpbmcnLFxuICAgIFtSZWFkeVN0YXRlLkNMT1NFRF06ICdDbG9zZWQnLFxuICAgIFtSZWFkeVN0YXRlLlVOSU5TVEFOVElBVEVEXTogJ1VuaW5zdGFudGlhdGVkJyxcbiAgfVtyZWFkeVN0YXRlXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3t9fT5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tDaGFuZ2VTb2NrZXRVcmx9PlxuICAgICAgICBDbGljayBNZSB0byBjaGFuZ2UgU29ja2V0IFVybFxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU2VuZE1lc3NhZ2V9XG4gICAgICAgIGRpc2FibGVkPXtyZWFkeVN0YXRlICE9PSBSZWFkeVN0YXRlLk9QRU59XG4gICAgICA+XG4gICAgICAgIENsaWNrIE1lIHRvIHNlbmQgJ0hlbGxvJ1xuICAgICAgPC9idXR0b24+XG4gICAgICA8c3Bhbj5UaGUgV2ViU29ja2V0IGlzIGN1cnJlbnRseSB7Y29ubmVjdGlvblN0YXR1c308L3NwYW4+XG4gICAgICB7bGFzdE1lc3NhZ2UgPyA8c3Bhbj5MYXN0IG1lc3NhZ2U6IHtsYXN0TWVzc2FnZS5kYXRhfTwvc3Bhbj4gOiBudWxsfVxuICAgICAgPHVsPlxuICAgICAgICB7bWVzc2FnZUhpc3RvcnkubWFwKChtZXNzYWdlLCBpZHgpID0+IChcbiAgICAgICAgICA8c3BhbiBrZXk9e2lkeH0+e21lc3NhZ2UgPyBtZXNzYWdlLmRhdGEgOiBudWxsfTwvc3Bhbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2ViU29ja2V0RGVtb1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVdlYlNvY2tldCIsIlJlYWR5U3RhdGUiLCJXZWJTb2NrZXREZW1vIiwic29ja2V0VXJsIiwic2V0U29ja2V0VXJsIiwibWVzc2FnZUhpc3RvcnkiLCJzZXRNZXNzYWdlSGlzdG9yeSIsInNlbmRNZXNzYWdlIiwibGFzdE1lc3NhZ2UiLCJyZWFkeVN0YXRlIiwicHJldiIsImNvbmNhdCIsImhhbmRsZUNsaWNrQ2hhbmdlU29ja2V0VXJsIiwiaGFuZGxlQ2xpY2tTZW5kTWVzc2FnZSIsImNvbm5lY3Rpb25TdGF0dXMiLCJDT05ORUNUSU5HIiwiT1BFTiIsIkNMT1NJTkciLCJDTE9TRUQiLCJVTklOU1RBTlRJQVRFRCIsImRhdGEiLCJtYXAiLCJtZXNzYWdlIiwiaWR4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/WebSocketTest.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "897a9dc6d97b0f7a2e79"; }
/******/ }();
/******/ 
/******/ }
);