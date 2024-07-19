"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FeaturedComponent.jsx":
/*!******************************************!*\
  !*** ./components/FeaturedComponent.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst FeaturedComponent = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/globe-data\").then((response)=>{\n            setData(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"solar-system\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"center-circle\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Income Proof\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Salary slips of the last 3 months\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Form 16\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Income Tax Returns (ITR)\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"ITR, Profit & Loss account, Balance Sheet, and/or Business Proof\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"orbit orbit-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"circle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Photographs\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Details about Photographs\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"circle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Property Documents\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Details about Property Documents\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"circle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Bank Statements\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Details about Bank Statements\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"circle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Academic Records\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Details about Academic Records\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"orbit orbit-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"circle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Application Form\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Details about Application Form\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"circle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Identity Proof\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Details about Identity Proof\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"circle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Additional Documents\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Details about Additional Documents\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"circle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Residence Proof\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Details about Residence Proof\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"orbit orbit-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"circle\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Guarantor Form\"\n                        }, void 0, false, {\n                            fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Details about Guarantor Form\"\n                        }, void 0, false, {\n                            fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/Storage/Repositories/github/epischolar_project/frontend/components/FeaturedComponent.jsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FeaturedComponent, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = FeaturedComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturedComponent);\nvar _c;\n$RefreshReg$(_c, \"FeaturedComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVkQ29tcG9uZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUN6QjtBQUUxQixNQUFNSSxvQkFBb0I7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DRCxnREFBU0EsQ0FBQztRQUNORSxpREFBUyxDQUFDLG9DQUNMSyxJQUFJLENBQUNDLENBQUFBO1lBQ0ZILFFBQVFHLFNBQVNKLElBQUk7UUFDekIsR0FDQ0ssS0FBSyxDQUFDQyxDQUFBQTtZQUNIQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUMxQztJQUNSLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzs7MENBQ0csOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVQLDhEQUFDTjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNJOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDOzBDQUFFOzs7Ozs7Ozs7Ozs7a0NBRVAsOERBQUNOO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFUCw4REFBQ047d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdYLDhEQUFDTjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFUCw4REFBQ047d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVQLDhEQUFDTjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNJOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDOzBDQUFFOzs7Ozs7Ozs7Ozs7a0NBRVAsOERBQUNOO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHWCw4REFBQ047Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0k7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZCO0dBcEVNZjtLQUFBQTtBQXNFTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmVhdHVyZWRDb21wb25lbnQuanN4P2UwZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBGZWF0dXJlZENvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9nbG9iZS1kYXRhJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbGFyLXN5c3RlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgPGgyPkluY29tZSBQcm9vZjwvaDI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+U2FsYXJ5IHNsaXBzIG9mIHRoZSBsYXN0IDMgbW9udGhzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkZvcm0gMTY8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+SW5jb21lIFRheCBSZXR1cm5zIChJVFIpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPklUUiwgUHJvZml0ICYgTG9zcyBhY2NvdW50LCBCYWxhbmNlIFNoZWV0LCBhbmQvb3IgQnVzaW5lc3MgUHJvb2Y8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JiaXQgb3JiaXQtMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5QaG90b2dyYXBoczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRldGFpbHMgYWJvdXQgUGhvdG9ncmFwaHM8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlByb3BlcnR5IERvY3VtZW50czwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRldGFpbHMgYWJvdXQgUHJvcGVydHkgRG9jdW1lbnRzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5CYW5rIFN0YXRlbWVudHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5EZXRhaWxzIGFib3V0IEJhbmsgU3RhdGVtZW50czwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+QWNhZGVtaWMgUmVjb3JkczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRldGFpbHMgYWJvdXQgQWNhZGVtaWMgUmVjb3JkczwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmJpdCBvcmJpdC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkFwcGxpY2F0aW9uIEZvcm08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5EZXRhaWxzIGFib3V0IEFwcGxpY2F0aW9uIEZvcm08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPklkZW50aXR5IFByb29mPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+RGV0YWlscyBhYm91dCBJZGVudGl0eSBQcm9vZjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+QWRkaXRpb25hbCBEb2N1bWVudHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5EZXRhaWxzIGFib3V0IEFkZGl0aW9uYWwgRG9jdW1lbnRzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5SZXNpZGVuY2UgUHJvb2Y8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5EZXRhaWxzIGFib3V0IFJlc2lkZW5jZSBQcm9vZjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmJpdCBvcmJpdC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkd1YXJhbnRvciBGb3JtPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+RGV0YWlscyBhYm91dCBHdWFyYW50b3IgRm9ybTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRmVhdHVyZWRDb21wb25lbnQiLCJkYXRhIiwic2V0RGF0YSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ1bCIsImxpIiwiaDMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FeaturedComponent.jsx\n"));

/***/ })

});