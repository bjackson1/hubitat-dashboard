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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ \"./src/components/store/enums.js\");\n\n\nvar demandStatus = function demandStatus(store) {\n  store.on(_enums__WEBPACK_IMPORTED_MODULE_0__[\"default\"].demandStatus.change, function (_ref, newStatus) {\n    var demandStatus = _ref.demandStatus;\n    if (demandStatus === newStatus) return null;\n    return {\n      demandStatus: newStatus\n    };\n  }); // store.on(stateActions.article.set, (_, newArticle) => ({ [`article.${newArticle.id}`]: newArticle }))\n  // store.on(stateActions.article.loadError, (_, errorState) => ({ [`article.${errorState.articleId}`]: errorState }))\n  // store.on(stateActions.article.loadSet, ({ countryGroup }, { articleIds, outletId }) => {\n  // \tif (articleIds.length > 0) {\n  // \t\tconst { get } = getArticlesByIds()\n  // \t\tconst { primaryLanguageLists: language } = countryGroup\n  // \t\tget({ articleIds, outletId, language })\n  // \t\t\t.then(result =>\n  // \t\t\t\tresult.forEach(articleSummary => {\n  // \t\t\t\t\tstore.dispatch(stateActions.article.set, {\n  // \t\t\t\t\t\tid: articleSummary.id,\n  // \t\t\t\t\t\ttitle: articleSummary.headline,\n  // \t\t\t\t\t\tarticleType: articleSummary.publication.typeName,\n  // \t\t\t\t\t\timageUrl: articleSummary.thumbnailImageUrl,\n  // \t\t\t\t\t\tpromoImageUrl: articleSummary.promoImageUrl,\n  // \t\t\t\t\t\tfixtureDate: articleSummary.fixtureDate.ts,\n  // \t\t\t\t\t\tfixture: articleSummary.fixture,\n  // \t\t\t\t\t\tpublishDate: articleSummary.publishedTime.ts,\n  // \t\t\t\t\t\texpiryDate: articleSummary.expireTime,\n  // \t\t\t\t\t\tcompetitions: articleSummary.competitions,\n  // \t\t\t\t\t\tsports: articleSummary.sports,\n  // \t\t\t\t\t\tlanguages: articleSummary.languages,\n  // \t\t\t\t\t\ttranslations: articleSummary.translations,\n  // \t\t\t\t\t})\n  // \t\t\t\t}),\n  // \t\t\t)\n  // \t\t\t.catch(err => {\n  // \t\t\t\tarticleIds.forEach(articleId =>\n  // \t\t\t\t\tstore.dispatch(stateActions.article.loadError, {\n  // \t\t\t\t\t\tarticleId,\n  // \t\t\t\t\t\terror: err.message,\n  // \t\t\t\t\t}),\n  // \t\t\t\t)\n  // \t\t\t})\n  // \t}\n  // })\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (demandStatus);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zdG9yZS9tb2R1bGVzL2RlbWFuZC1zdGF0dXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLLEVBQUk7RUFDMUJBLEtBQUssQ0FBQ0MsRUFBTixDQUFTSCxrRUFBVCxFQUFvQyxnQkFBbUJLLFNBQW5CLEVBQWlDO0lBQUEsSUFBOUJKLFlBQThCLFFBQTlCQSxZQUE4QjtJQUNqRSxJQUFJQSxZQUFZLEtBQUtJLFNBQXJCLEVBQWdDLE9BQU8sSUFBUDtJQUNoQyxPQUFPO01BQUVKLFlBQVksRUFBRUk7SUFBaEIsQ0FBUDtFQUNILENBSEQsRUFEMEIsQ0FNN0I7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0EsQ0EzQ0Q7O0FBNkNBLCtEQUFlSixZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvc3RvcmUvbW9kdWxlcy9kZW1hbmQtc3RhdHVzLmpzPzQ5OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVudW1zIGZyb20gJy4uL2VudW1zJ1xuXG5jb25zdCBkZW1hbmRTdGF0dXMgPSBzdG9yZSA9PiB7XG4gICAgc3RvcmUub24oZW51bXMuZGVtYW5kU3RhdHVzLmNoYW5nZSwgKHsgZGVtYW5kU3RhdHVzIH0sIG5ld1N0YXR1cykgPT4geyBcbiAgICAgICAgaWYgKGRlbWFuZFN0YXR1cyA9PT0gbmV3U3RhdHVzKSByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4geyBkZW1hbmRTdGF0dXM6IG5ld1N0YXR1cyB9XG4gICAgfSlcblxuXHQvLyBzdG9yZS5vbihzdGF0ZUFjdGlvbnMuYXJ0aWNsZS5zZXQsIChfLCBuZXdBcnRpY2xlKSA9PiAoeyBbYGFydGljbGUuJHtuZXdBcnRpY2xlLmlkfWBdOiBuZXdBcnRpY2xlIH0pKVxuXHQvLyBzdG9yZS5vbihzdGF0ZUFjdGlvbnMuYXJ0aWNsZS5sb2FkRXJyb3IsIChfLCBlcnJvclN0YXRlKSA9PiAoeyBbYGFydGljbGUuJHtlcnJvclN0YXRlLmFydGljbGVJZH1gXTogZXJyb3JTdGF0ZSB9KSlcblx0Ly8gc3RvcmUub24oc3RhdGVBY3Rpb25zLmFydGljbGUubG9hZFNldCwgKHsgY291bnRyeUdyb3VwIH0sIHsgYXJ0aWNsZUlkcywgb3V0bGV0SWQgfSkgPT4ge1xuXHQvLyBcdGlmIChhcnRpY2xlSWRzLmxlbmd0aCA+IDApIHtcblx0Ly8gXHRcdGNvbnN0IHsgZ2V0IH0gPSBnZXRBcnRpY2xlc0J5SWRzKClcblx0Ly8gXHRcdGNvbnN0IHsgcHJpbWFyeUxhbmd1YWdlTGlzdHM6IGxhbmd1YWdlIH0gPSBjb3VudHJ5R3JvdXBcblxuXHQvLyBcdFx0Z2V0KHsgYXJ0aWNsZUlkcywgb3V0bGV0SWQsIGxhbmd1YWdlIH0pXG5cdC8vIFx0XHRcdC50aGVuKHJlc3VsdCA9PlxuXHQvLyBcdFx0XHRcdHJlc3VsdC5mb3JFYWNoKGFydGljbGVTdW1tYXJ5ID0+IHtcblx0Ly8gXHRcdFx0XHRcdHN0b3JlLmRpc3BhdGNoKHN0YXRlQWN0aW9ucy5hcnRpY2xlLnNldCwge1xuXHQvLyBcdFx0XHRcdFx0XHRpZDogYXJ0aWNsZVN1bW1hcnkuaWQsXG5cdC8vIFx0XHRcdFx0XHRcdHRpdGxlOiBhcnRpY2xlU3VtbWFyeS5oZWFkbGluZSxcblx0Ly8gXHRcdFx0XHRcdFx0YXJ0aWNsZVR5cGU6IGFydGljbGVTdW1tYXJ5LnB1YmxpY2F0aW9uLnR5cGVOYW1lLFxuXHQvLyBcdFx0XHRcdFx0XHRpbWFnZVVybDogYXJ0aWNsZVN1bW1hcnkudGh1bWJuYWlsSW1hZ2VVcmwsXG5cdC8vIFx0XHRcdFx0XHRcdHByb21vSW1hZ2VVcmw6IGFydGljbGVTdW1tYXJ5LnByb21vSW1hZ2VVcmwsXG5cdC8vIFx0XHRcdFx0XHRcdGZpeHR1cmVEYXRlOiBhcnRpY2xlU3VtbWFyeS5maXh0dXJlRGF0ZS50cyxcblx0Ly8gXHRcdFx0XHRcdFx0Zml4dHVyZTogYXJ0aWNsZVN1bW1hcnkuZml4dHVyZSxcblx0Ly8gXHRcdFx0XHRcdFx0cHVibGlzaERhdGU6IGFydGljbGVTdW1tYXJ5LnB1Ymxpc2hlZFRpbWUudHMsXG5cdC8vIFx0XHRcdFx0XHRcdGV4cGlyeURhdGU6IGFydGljbGVTdW1tYXJ5LmV4cGlyZVRpbWUsXG5cdC8vIFx0XHRcdFx0XHRcdGNvbXBldGl0aW9uczogYXJ0aWNsZVN1bW1hcnkuY29tcGV0aXRpb25zLFxuXHQvLyBcdFx0XHRcdFx0XHRzcG9ydHM6IGFydGljbGVTdW1tYXJ5LnNwb3J0cyxcblx0Ly8gXHRcdFx0XHRcdFx0bGFuZ3VhZ2VzOiBhcnRpY2xlU3VtbWFyeS5sYW5ndWFnZXMsXG5cdC8vIFx0XHRcdFx0XHRcdHRyYW5zbGF0aW9uczogYXJ0aWNsZVN1bW1hcnkudHJhbnNsYXRpb25zLFxuXHQvLyBcdFx0XHRcdFx0fSlcblx0Ly8gXHRcdFx0XHR9KSxcblx0Ly8gXHRcdFx0KVxuXHQvLyBcdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0Ly8gXHRcdFx0XHRhcnRpY2xlSWRzLmZvckVhY2goYXJ0aWNsZUlkID0+XG5cdC8vIFx0XHRcdFx0XHRzdG9yZS5kaXNwYXRjaChzdGF0ZUFjdGlvbnMuYXJ0aWNsZS5sb2FkRXJyb3IsIHtcblx0Ly8gXHRcdFx0XHRcdFx0YXJ0aWNsZUlkLFxuXHQvLyBcdFx0XHRcdFx0XHRlcnJvcjogZXJyLm1lc3NhZ2UsXG5cdC8vIFx0XHRcdFx0XHR9KSxcblx0Ly8gXHRcdFx0XHQpXG5cdC8vIFx0XHRcdH0pXG5cdC8vIFx0fVxuXHQvLyB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZW1hbmRTdGF0dXNcblxuIl0sIm5hbWVzIjpbImVudW1zIiwiZGVtYW5kU3RhdHVzIiwic3RvcmUiLCJvbiIsImNoYW5nZSIsIm5ld1N0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/store/modules/demand-status.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "5a625c6ece7c4e718ae1"; }
/******/ }();
/******/ 
/******/ }
);