"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/navbar/index.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/navbar/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Navbar = (param)=>{\n    let {} = param;\n    _s();\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const isScrolled = window.scrollY > 0;\n            setScrolled(isScrolled);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed z-[9999] w-full bg-black  font-mono shadow-sm\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex  py-6  \".concat(scrolled ? \"border-b\" : \"border-none\", \" \"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto flex w-full max-w-[1400px] min-[1280px]:px-[70px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-1/3 flex-row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"LINGO\"\n                        }, void 0, false, {\n                            fileName: \"/Users/marcin/Desktop/lingo/src/app/components/navbar/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/marcin/Desktop/lingo/src/app/components/navbar/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-2/3 flex-row justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/marcin/Desktop/lingo/src/app/components/navbar/index.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Why LINGO?\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/marcin/Desktop/lingo/src/app/components/navbar/index.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Why LINGO?\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/marcin/Desktop/lingo/src/app/components/navbar/index.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Why LINGO?\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/marcin/Desktop/lingo/src/app/components/navbar/index.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Why LINGO?\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/marcin/Desktop/lingo/src/app/components/navbar/index.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/marcin/Desktop/lingo/src/app/components/navbar/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/marcin/Desktop/lingo/src/app/components/navbar/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marcin/Desktop/lingo/src/app/components/navbar/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/marcin/Desktop/lingo/src/app/components/navbar/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/marcin/Desktop/lingo/src/app/components/navbar/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"tQtW9FyKD+Ut/6k+f0BCbABprL4=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUU0QztBQUk1QyxNQUFNRSxTQUFnQztRQUFDLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxlQUFlO1lBQ25CLE1BQU1DLGFBQWFDLE9BQU9DLE9BQU8sR0FBRztZQUNwQ0osWUFBWUU7UUFDZDtRQUNBQyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUNsQyxPQUFPO1lBQ0xFLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVMO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUlELFdBQVcsZUFBcUQsT0FBdENULFdBQVksYUFBYSxlQUFhO3NCQUNuRSw0RUFBQ1U7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0U7c0NBQUc7Ozs7Ozs7Ozs7O2tDQUVOLDhEQUFDRDt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDRzs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDQTs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDQTs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDQTs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDQTs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pCO0dBbENNYjtLQUFBQTtBQW9DTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL2luZGV4LnRzeD80Y2NjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBOYXZiYXJQcm9wcyB7fVxuXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZDPE5hdmJhclByb3BzPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlzU2Nyb2xsZWQgPSB3aW5kb3cuc2Nyb2xsWSA+IDA7XG4gICAgICBzZXRTY3JvbGxlZChpc1Njcm9sbGVkKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmaXhlZCB6LVs5OTk5XSB3LWZ1bGwgYmctYmxhY2sgIGZvbnQtbW9ubyBzaGFkb3ctc21cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCAgcHktNiAgJHtzY3JvbGxlZCA/IGBib3JkZXItYmAgOiBgYm9yZGVyLW5vbmVgfSBgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggdy1mdWxsIG1heC13LVsxNDAwcHhdIG1pbi1bMTI4MHB4XTpweC1bNzBweF1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy0xLzMgZmxleC1yb3dcIj5cbiAgICAgICAgICAgIDxoMT5MSU5HTzwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctMi8zIGZsZXgtcm93IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC0xNlwiPlxuICAgICAgICAgICAgICA8cD5Ib21lPC9wPlxuICAgICAgICAgICAgICA8cD5XaHkgTElOR08/PC9wPlxuICAgICAgICAgICAgICA8cD5XaHkgTElOR08/PC9wPlxuICAgICAgICAgICAgICA8cD5XaHkgTElOR08/PC9wPlxuICAgICAgICAgICAgICA8cD5XaHkgTElOR08/PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZiYXIiLCJzY3JvbGxlZCIsInNldFNjcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwiaXNTY3JvbGxlZCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/navbar/index.tsx\n"));

/***/ })

});