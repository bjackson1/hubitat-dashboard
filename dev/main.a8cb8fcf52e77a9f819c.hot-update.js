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

/***/ "./src/components/store/modules/atmosphere.js":
/*!****************************************************!*\
  !*** ./src/components/store/modules/atmosphere.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ \"./node_modules/core-js/modules/es.object.define-properties.js\");\n/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums */ \"./src/components/store/enums.js\");\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar atmosphere = function atmosphere(store) {\n  store.on(_enums__WEBPACK_IMPORTED_MODULE_9__[\"default\"].atmosphere.updateHumidity, function (_ref, newHumidity) {\n    var existingAtmosphere = _ref.atmosphere;\n    if ((existingAtmosphere === null || existingAtmosphere === void 0 ? void 0 : existingAtmosphere.humidity) === newHumidity) return null;\n    return {\n      atmosphere: _objectSpread(_objectSpread({}, existingAtmosphere), {}, {\n        humidity: newHumidity\n      })\n    };\n  });\n  store.on(_enums__WEBPACK_IMPORTED_MODULE_9__[\"default\"].atmosphere.updateTemperature, function (_ref2, newTemperature) {\n    var existingAtmosphere = _ref2.atmosphere;\n    if ((atmosphere === null || atmosphere === void 0 ? void 0 : atmosphere.temperature) === newTemperature) return null;\n    return {\n      atmosphere: _objectSpread(_objectSpread({}, existingAtmosphere), {}, {\n        temperature: newTemperature\n      })\n    };\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (atmosphere);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdG9yZS9tb2R1bGVzL2F0bW9zcGhlcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSyxFQUFJO0VBQ3hCQSxLQUFLLENBQUNDLEVBQU4sQ0FBU0gsd0VBQVQsRUFBMEMsZ0JBQXFDSyxXQUFyQyxFQUFxRDtJQUFBLElBQXRDQyxrQkFBc0MsUUFBbERMLFVBQWtEO0lBQzNGLElBQUksQ0FBQUssa0JBQWtCLFNBQWxCLElBQUFBLGtCQUFrQixXQUFsQixZQUFBQSxrQkFBa0IsQ0FBRUMsUUFBcEIsTUFBaUNGLFdBQXJDLEVBQWtELE9BQU8sSUFBUDtJQUVsRCxPQUFPO01BQ0hKLFVBQVUsa0NBQ0hLLGtCQURHO1FBRU5DLFFBQVEsRUFBRUY7TUFGSjtJQURQLENBQVA7RUFNSCxDQVREO0VBV0FILEtBQUssQ0FBQ0MsRUFBTixDQUFTSCwyRUFBVCxFQUE2QyxpQkFBcUNTLGNBQXJDLEVBQXdEO0lBQUEsSUFBekNILGtCQUF5QyxTQUFyREwsVUFBcUQ7SUFDakcsSUFBSSxDQUFBQSxVQUFVLFNBQVYsSUFBQUEsVUFBVSxXQUFWLFlBQUFBLFVBQVUsQ0FBRVMsV0FBWixNQUE0QkQsY0FBaEMsRUFBZ0QsT0FBTyxJQUFQO0lBRWhELE9BQU87TUFDSFIsVUFBVSxrQ0FDSEssa0JBREc7UUFFTkksV0FBVyxFQUFFRDtNQUZQO0lBRFAsQ0FBUDtFQU1ILENBVEQ7QUFVSCxDQXRCRDs7QUF3QkEsK0RBQWVSLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9zdG9yZS9tb2R1bGVzL2F0bW9zcGhlcmUuanM/NDMzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW51bXMgZnJvbSAnLi4vZW51bXMnXG5cbmNvbnN0IGF0bW9zcGhlcmUgPSBzdG9yZSA9PiB7XG4gICAgc3RvcmUub24oZW51bXMuYXRtb3NwaGVyZS51cGRhdGVIdW1pZGl0eSwgKHsgYXRtb3NwaGVyZTogZXhpc3RpbmdBdG1vc3BoZXJlIH0sIG5ld0h1bWlkaXR5KSA9PiB7IFxuICAgICAgICBpZiAoZXhpc3RpbmdBdG1vc3BoZXJlPy5odW1pZGl0eSA9PT0gbmV3SHVtaWRpdHkpIHJldHVybiBudWxsXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF0bW9zcGhlcmU6IHtcbiAgICAgICAgICAgICAgICAuLi5leGlzdGluZ0F0bW9zcGhlcmUsXG4gICAgICAgICAgICAgICAgaHVtaWRpdHk6IG5ld0h1bWlkaXR5LFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHN0b3JlLm9uKGVudW1zLmF0bW9zcGhlcmUudXBkYXRlVGVtcGVyYXR1cmUsICh7IGF0bW9zcGhlcmU6IGV4aXN0aW5nQXRtb3NwaGVyZSB9LCBuZXdUZW1wZXJhdHVyZSkgPT4geyBcbiAgICAgICAgaWYgKGF0bW9zcGhlcmU/LnRlbXBlcmF0dXJlID09PSBuZXdUZW1wZXJhdHVyZSkgcmV0dXJuIG51bGxcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXRtb3NwaGVyZToge1xuICAgICAgICAgICAgICAgIC4uLmV4aXN0aW5nQXRtb3NwaGVyZSxcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZTogbmV3VGVtcGVyYXR1cmUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdG1vc3BoZXJlXG5cbiJdLCJuYW1lcyI6WyJlbnVtcyIsImF0bW9zcGhlcmUiLCJzdG9yZSIsIm9uIiwidXBkYXRlSHVtaWRpdHkiLCJuZXdIdW1pZGl0eSIsImV4aXN0aW5nQXRtb3NwaGVyZSIsImh1bWlkaXR5IiwidXBkYXRlVGVtcGVyYXR1cmUiLCJuZXdUZW1wZXJhdHVyZSIsInRlbXBlcmF0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/store/modules/atmosphere.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "eb7fdd06a2cc4350bf6e"; }
/******/ }();
/******/ 
/******/ }
);