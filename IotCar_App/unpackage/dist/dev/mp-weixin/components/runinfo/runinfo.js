"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      leftSpeed: 0,
      rightSpeed: 0,
      orientation: "P",
      isBrake: false,
      isOnline: true
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.leftSpeed),
    b: common_vendor.t($data.rightSpeed),
    c: common_vendor.t($data.orientation),
    d: common_vendor.t($data.isBrake ? "\u5236\u52A8" : "\u653E\u677E"),
    e: common_vendor.t($data.isOnline ? "\u5728\u7EBF" : "\u79BB\u7EBF")
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/web/app1/components/runinfo/runinfo.vue"]]);
wx.createComponent(Component);
