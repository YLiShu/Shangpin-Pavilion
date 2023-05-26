(global["webpackChunkuni_shop"] = global["webpackChunkuni_shop"] || []).push([["subpkg/search/search"],{

/***/ "./src/subpkg/search/search.vue":
/*!**************************************!*\
  !*** ./src/subpkg/search/search.vue ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=1480e53a& */ "./src/subpkg/search/search.vue?vue&type=template&id=1480e53a&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "./src/subpkg/search/search.vue?vue&type=script&lang=js&");
/* harmony import */ var _search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.vue?vue&type=style&index=0&lang=scss& */ "./src/subpkg/search/search.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js");

var renderjs
;

;


/* normalize component */

var component = (0,_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__.render,
  _search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  _search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__.components,
  renderjs
)

component.options.__file = "subpkg/search/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/subpkg/search/search.vue?vue&type=template&id=1480e53a&":
/*!*********************************************************************!*\
  !*** ./src/subpkg/search/search.vue?vue&type=template&id=1480e53a& ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: function() { return /* reexport safe */ _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_42_0_rules_0_use_0_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__.components; },
/* harmony export */   recyclableRender: function() { return /* reexport safe */ _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_42_0_rules_0_use_0_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__.recyclableRender; },
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_42_0_rules_0_use_0_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_42_0_rules_0_use_0_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_42_0_rules_0_use_0_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=template&id=1480e53a& */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/subpkg/search/search.vue?vue&type=template&id=1480e53a&");


/***/ }),

/***/ "./src/subpkg/search/search.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/subpkg/search/search.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_0_rules_0_use_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_40_0_rules_0_use_1_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/subpkg/search/search.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_0_rules_0_use_0_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_40_0_rules_0_use_1_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/subpkg/search/search.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************!*\
  !*** ./src/subpkg/search/search.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_22_0_rules_0_use_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[5]!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/subpkg/search/search.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_22_0_rules_0_use_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_22_0_rules_0_use_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_22_0_rules_0_use_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_22_0_rules_0_use_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ __webpack_exports__["default"] = ((_node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_clonedRuleSet_22_0_rules_0_use_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/subpkg/search/search.vue?vue&type=template&id=1480e53a&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/subpkg/search/search.vue?vue&type=template&id=1480e53a& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: function() { return /* binding */ components; },
/* harmony export */   recyclableRender: function() { return /* binding */ recyclableRender; },
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var components
try {
  components = {
    uniSearchBar: function () {
      return Promise.all(/*! import() | node-modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar")]).then(__webpack_require__.bind(__webpack_require__, /*! @dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue */ "./node_modules/@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar.vue"))
    },
    uniIcons: function () {
      return Promise.all(/*! import() | node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons")]).then(__webpack_require__.bind(__webpack_require__, /*! @dcloudio/uni-ui/lib/uni-icons/uni-icons.vue */ "./node_modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue"))
    },
    uniTag: function () {
      return __webpack_require__.e(/*! import() | node-modules/@dcloudio/uni-ui/lib/uni-tag/uni-tag */ "node-modules/@dcloudio/uni-ui/lib/uni-tag/uni-tag").then(__webpack_require__.bind(__webpack_require__, /*! @dcloudio/uni-ui/lib/uni-tag/uni-tag.vue */ "./node_modules/@dcloudio/uni-ui/lib/uni-tag/uni-tag.vue"))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/main.js?{\"page\":\"subpkg%2Fsearch%2Fsearch\"}":
/*!*********************************************************!*\
  !*** ./src/main.js?{"page":"subpkg%2Fsearch%2Fsearch"} ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uni_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-pages */ "./src/pages.json");
/* harmony import */ var uni_pages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_pages__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js");
/* harmony import */ var _subpkg_search_search_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subpkg/search/search.vue */ "./src/subpkg/search/search.vue");
/* provided dependency */ var wx = __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js")["default"];
/* provided dependency */ var createPage = __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["createPage"];

// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;


createPage(_subpkg_search_search_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/subpkg/search/search.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/subpkg/search/search.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var uni = __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"];


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // 延时器的timerId
      timer: null,
      // 搜索关键词
      kw: "",
      // 搜索结果数据列表
      searchResults: [],
      // 搜索关键词的历史记录
      historyList: []
    };
  },
  methods: {
    // 输入事件的处理函数
    input: function input(e) {
      var _this = this;
      // 清除 timer 对应的延时器
      clearTimeout(this.timer);
      // 重新启动一个延时器，并把 timerId 赋值给this.timer
      this.timer = setTimeout(function () {
        // 如果 500 毫秒内，没有触发新的输入事件，则为搜索关键词赋值
        _this.kw = e;
        _this.getSearchResults();
      }, 1000);
    },
    getSearchResults: function getSearchResults() {
      var _this2 = this;
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var _yield$uni$$http$get, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this2.kw.trim() === "")) {
                _context.next = 3;
                break;
              }
              _this2.searchResults = [];
              return _context.abrupt("return");
            case 3:
              _context.next = 5;
              return uni.$http.get("/api/public/v1/goods/qsearch", {
                query: _this2.kw
              });
            case 5:
              _yield$uni$$http$get = _context.sent;
              res = _yield$uni$$http$get.data;
              if (!(res.meta.status != 200)) {
                _context.next = 9;
                break;
              }
              return _context.abrupt("return", uni.$showMsg());
            case 9:
              _this2.searchResults = res.message;

              // 保存搜索关键词
              _this2.saveSearchHistory();
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    gotoDetail: function gotoDetail(item) {
      uni.navigateTo({
        url: "/subpkg/goods_detail/goods_detail?goods_id=" + item.goods_id
      });
    },
    saveSearchHistory: function saveSearchHistory() {
      if (this.historyList.includes(this.kw)) {
        var indexToRemove = this.historyList.indexOf(this.kw);
        this.historyList.splice(indexToRemove, 1);
        this.historyList.unshift(this.kw);
      } else {
        this.historyList.unshift(this.kw);
      }
      uni.setStorageSync('search_history', JSON.stringify(this.historyList));
    },
    cleanHistory: function cleanHistory() {
      this.historyList = [];
      uni.setStorageSync('search_history', JSON.stringify(this.historyList));
    },
    gotoGoodsList: function gotoGoodsList(kw) {
      uni.navigateTo({
        url: '/subpkg/goods_list/goods_list?query=' + kw
      });
    }
  },
  onLoad: function onLoad() {
    this.historyList = JSON.parse(uni.getStorageSync('search_history') || '[]');
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/subpkg/search/search.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/subpkg/search/search.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["common/vendor"], function() { return __webpack_exec__("./src/main.js?{\"page\":\"subpkg%2Fsearch%2Fsearch\"}"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/subpkg/search/search.js.map