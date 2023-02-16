"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_wrap2 = common_vendor.resolveComponent("wrap");
  const _easycom_runinfo2 = common_vendor.resolveComponent("runinfo");
  (_easycom_wrap2 + _easycom_runinfo2)();
}
const _easycom_wrap = () => "../../components/wrap/wrap.js";
const _easycom_runinfo = () => "../../components/runinfo/runinfo.js";
if (!Math) {
  (_easycom_wrap + _easycom_runinfo)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/web/app1/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
