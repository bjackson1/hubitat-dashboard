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

/***/ "./src/components/store/modules/demand-status.js":
/*!*******************************************************!*\
  !*** ./src/components/store/modules/demand-status.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ \"./src/components/store/enums.js\");\n\n\nvar demandStatus = function demandStatus(store) {\n  store.on(_enums__WEBPACK_IMPORTED_MODULE_0__[\"default\"].demandStatus.change, function (_ref, newStatus) {\n    var demandStatus = _ref.demandStatus;\n\n    redemandStatus: newStatus;\n  }); // store.on(stateActions.article.set, (_, newArticle) => ({ [`article.${newArticle.id}`]: newArticle }))\n  // store.on(stateActions.article.loadError, (_, errorState) => ({ [`article.${errorState.articleId}`]: errorState }))\n  // store.on(stateActions.article.loadSet, ({ countryGroup }, { articleIds, outletId }) => {\n  // \tif (articleIds.length > 0) {\n  // \t\tconst { get } = getArticlesByIds()\n  // \t\tconst { primaryLanguageLists: language } = countryGroup\n  // \t\tget({ articleIds, outletId, language })\n  // \t\t\t.then(result =>\n  // \t\t\t\tresult.forEach(articleSummary => {\n  // \t\t\t\t\tstore.dispatch(stateActions.article.set, {\n  // \t\t\t\t\t\tid: articleSummary.id,\n  // \t\t\t\t\t\ttitle: articleSummary.headline,\n  // \t\t\t\t\t\tarticleType: articleSummary.publication.typeName,\n  // \t\t\t\t\t\timageUrl: articleSummary.thumbnailImageUrl,\n  // \t\t\t\t\t\tpromoImageUrl: articleSummary.promoImageUrl,\n  // \t\t\t\t\t\tfixtureDate: articleSummary.fixtureDate.ts,\n  // \t\t\t\t\t\tfixture: articleSummary.fixture,\n  // \t\t\t\t\t\tpublishDate: articleSummary.publishedTime.ts,\n  // \t\t\t\t\t\texpiryDate: articleSummary.expireTime,\n  // \t\t\t\t\t\tcompetitions: articleSummary.competitions,\n  // \t\t\t\t\t\tsports: articleSummary.sports,\n  // \t\t\t\t\t\tlanguages: articleSummary.languages,\n  // \t\t\t\t\t\ttranslations: articleSummary.translations,\n  // \t\t\t\t\t})\n  // \t\t\t\t}),\n  // \t\t\t)\n  // \t\t\t.catch(err => {\n  // \t\t\t\tarticleIds.forEach(articleId =>\n  // \t\t\t\t\tstore.dispatch(stateActions.article.loadError, {\n  // \t\t\t\t\t\tarticleId,\n  // \t\t\t\t\t\terror: err.message,\n  // \t\t\t\t\t}),\n  // \t\t\t\t)\n  // \t\t\t})\n  // \t}\n  // })\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (demandStatus);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdG9yZS9tb2R1bGVzL2RlbWFuZC1zdGF0dXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLLEVBQUk7RUFDMUJBLEtBQUssQ0FBQ0MsRUFBTixDQUFTSCxrRUFBVCxFQUFxQyxnQkFBbUJLLFNBQW5CLEVBQWlDO0lBQUEsSUFBOUJKLFlBQThCLFFBQTlCQSxZQUE4Qjs7SUFDbEVLLGNBQWMsRUFBRUQsU0FBUztFQUFFLENBRC9CLEVBRDBCLENBSTdCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNBLENBekNEOztBQTJDQSwrREFBZUosWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL3N0b3JlL21vZHVsZXMvZGVtYW5kLXN0YXR1cy5qcz80OTlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbnVtcyBmcm9tICcuLi9lbnVtcydcblxuY29uc3QgZGVtYW5kU3RhdHVzID0gc3RvcmUgPT4ge1xuICAgIHN0b3JlLm9uKGVudW1zLmRlbWFuZFN0YXR1cy5jaGFuZ2UsICgoeyBkZW1hbmRTdGF0dXMgfSwgbmV3U3RhdHVzKSA9PiB7IFxuICAgICAgICByZWRlbWFuZFN0YXR1czogbmV3U3RhdHVzIH0pKVxuXG5cdC8vIHN0b3JlLm9uKHN0YXRlQWN0aW9ucy5hcnRpY2xlLnNldCwgKF8sIG5ld0FydGljbGUpID0+ICh7IFtgYXJ0aWNsZS4ke25ld0FydGljbGUuaWR9YF06IG5ld0FydGljbGUgfSkpXG5cdC8vIHN0b3JlLm9uKHN0YXRlQWN0aW9ucy5hcnRpY2xlLmxvYWRFcnJvciwgKF8sIGVycm9yU3RhdGUpID0+ICh7IFtgYXJ0aWNsZS4ke2Vycm9yU3RhdGUuYXJ0aWNsZUlkfWBdOiBlcnJvclN0YXRlIH0pKVxuXHQvLyBzdG9yZS5vbihzdGF0ZUFjdGlvbnMuYXJ0aWNsZS5sb2FkU2V0LCAoeyBjb3VudHJ5R3JvdXAgfSwgeyBhcnRpY2xlSWRzLCBvdXRsZXRJZCB9KSA9PiB7XG5cdC8vIFx0aWYgKGFydGljbGVJZHMubGVuZ3RoID4gMCkge1xuXHQvLyBcdFx0Y29uc3QgeyBnZXQgfSA9IGdldEFydGljbGVzQnlJZHMoKVxuXHQvLyBcdFx0Y29uc3QgeyBwcmltYXJ5TGFuZ3VhZ2VMaXN0czogbGFuZ3VhZ2UgfSA9IGNvdW50cnlHcm91cFxuXG5cdC8vIFx0XHRnZXQoeyBhcnRpY2xlSWRzLCBvdXRsZXRJZCwgbGFuZ3VhZ2UgfSlcblx0Ly8gXHRcdFx0LnRoZW4ocmVzdWx0ID0+XG5cdC8vIFx0XHRcdFx0cmVzdWx0LmZvckVhY2goYXJ0aWNsZVN1bW1hcnkgPT4ge1xuXHQvLyBcdFx0XHRcdFx0c3RvcmUuZGlzcGF0Y2goc3RhdGVBY3Rpb25zLmFydGljbGUuc2V0LCB7XG5cdC8vIFx0XHRcdFx0XHRcdGlkOiBhcnRpY2xlU3VtbWFyeS5pZCxcblx0Ly8gXHRcdFx0XHRcdFx0dGl0bGU6IGFydGljbGVTdW1tYXJ5LmhlYWRsaW5lLFxuXHQvLyBcdFx0XHRcdFx0XHRhcnRpY2xlVHlwZTogYXJ0aWNsZVN1bW1hcnkucHVibGljYXRpb24udHlwZU5hbWUsXG5cdC8vIFx0XHRcdFx0XHRcdGltYWdlVXJsOiBhcnRpY2xlU3VtbWFyeS50aHVtYm5haWxJbWFnZVVybCxcblx0Ly8gXHRcdFx0XHRcdFx0cHJvbW9JbWFnZVVybDogYXJ0aWNsZVN1bW1hcnkucHJvbW9JbWFnZVVybCxcblx0Ly8gXHRcdFx0XHRcdFx0Zml4dHVyZURhdGU6IGFydGljbGVTdW1tYXJ5LmZpeHR1cmVEYXRlLnRzLFxuXHQvLyBcdFx0XHRcdFx0XHRmaXh0dXJlOiBhcnRpY2xlU3VtbWFyeS5maXh0dXJlLFxuXHQvLyBcdFx0XHRcdFx0XHRwdWJsaXNoRGF0ZTogYXJ0aWNsZVN1bW1hcnkucHVibGlzaGVkVGltZS50cyxcblx0Ly8gXHRcdFx0XHRcdFx0ZXhwaXJ5RGF0ZTogYXJ0aWNsZVN1bW1hcnkuZXhwaXJlVGltZSxcblx0Ly8gXHRcdFx0XHRcdFx0Y29tcGV0aXRpb25zOiBhcnRpY2xlU3VtbWFyeS5jb21wZXRpdGlvbnMsXG5cdC8vIFx0XHRcdFx0XHRcdHNwb3J0czogYXJ0aWNsZVN1bW1hcnkuc3BvcnRzLFxuXHQvLyBcdFx0XHRcdFx0XHRsYW5ndWFnZXM6IGFydGljbGVTdW1tYXJ5Lmxhbmd1YWdlcyxcblx0Ly8gXHRcdFx0XHRcdFx0dHJhbnNsYXRpb25zOiBhcnRpY2xlU3VtbWFyeS50cmFuc2xhdGlvbnMsXG5cdC8vIFx0XHRcdFx0XHR9KVxuXHQvLyBcdFx0XHRcdH0pLFxuXHQvLyBcdFx0XHQpXG5cdC8vIFx0XHRcdC5jYXRjaChlcnIgPT4ge1xuXHQvLyBcdFx0XHRcdGFydGljbGVJZHMuZm9yRWFjaChhcnRpY2xlSWQgPT5cblx0Ly8gXHRcdFx0XHRcdHN0b3JlLmRpc3BhdGNoKHN0YXRlQWN0aW9ucy5hcnRpY2xlLmxvYWRFcnJvciwge1xuXHQvLyBcdFx0XHRcdFx0XHRhcnRpY2xlSWQsXG5cdC8vIFx0XHRcdFx0XHRcdGVycm9yOiBlcnIubWVzc2FnZSxcblx0Ly8gXHRcdFx0XHRcdH0pLFxuXHQvLyBcdFx0XHRcdClcblx0Ly8gXHRcdFx0fSlcblx0Ly8gXHR9XG5cdC8vIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbWFuZFN0YXR1c1xuXG4iXSwibmFtZXMiOlsiZW51bXMiLCJkZW1hbmRTdGF0dXMiLCJzdG9yZSIsIm9uIiwiY2hhbmdlIiwibmV3U3RhdHVzIiwicmVkZW1hbmRTdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/store/modules/demand-status.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "05e1936671d6161658ca"; }
/******/ }();
/******/ 
/******/ }
);