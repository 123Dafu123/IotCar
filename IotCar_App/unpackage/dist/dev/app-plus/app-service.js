var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$9 = {
    data() {
      return {
        log: true,
        logId: "",
        logPswd: "",
        regId: "",
        regName: "",
        regPhone: "",
        regPswd: ""
      };
    },
    methods: {
      sliderBoxCheckHandler() {
        this.log = !this.log;
      },
      logHandler() {
        this.$emit("log", {
          id: this.logId,
          pswd: this.logPswd
        });
      },
      regHanler() {
        this.$emit("reg", {
          id: this.regId,
          name: this.regName,
          pswd: this.regPswd
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "log-reg" }, [
      vue.createElementVNode("view", { class: "log-reg-box" }, [
        vue.createElementVNode("text", { class: "title" }, "\u767B\u5F55"),
        vue.withDirectives(vue.createElementVNode("input", {
          class: "loginfo",
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.logId = $event)
        }, null, 512), [
          [vue.vModelText, $data.logId]
        ]),
        vue.withDirectives(vue.createElementVNode("input", {
          class: "loginfo safe",
          type: "password",
          placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.logPswd = $event)
        }, null, 512), [
          [vue.vModelText, $data.logPswd]
        ]),
        vue.createElementVNode("button", {
          class: "check",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.logHandler && $options.logHandler(...args))
        }, "\u767B\u5F55")
      ]),
      vue.createElementVNode("view", { class: "log-reg-box reg" }, [
        vue.createElementVNode("text", { class: "title" }, "\u6CE8\u518C"),
        vue.withDirectives(vue.createElementVNode("input", {
          class: "loginfo",
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7",
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.regId = $event)
        }, null, 512), [
          [vue.vModelText, $data.regId]
        ]),
        vue.withDirectives(vue.createElementVNode("input", {
          class: "loginfo",
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u6635\u79F0",
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.regName = $event)
        }, null, 512), [
          [vue.vModelText, $data.regName]
        ]),
        vue.withDirectives(vue.createElementVNode("input", {
          class: "loginfo",
          type: "text",
          placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.regPswd = $event)
        }, null, 512), [
          [vue.vModelText, $data.regPswd]
        ]),
        vue.createElementVNode("button", {
          class: "check",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.regHanler && $options.regHanler(...args))
        }, "\u6CE8\u518C")
      ]),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["sliderBox", { "sliderleft": $data.log, "sliderright": !$data.log }])
      }, [
        vue.createElementVNode("text", { class: "title" }, vue.toDisplayString($data.log ? "\u8FD8\u672A\u6CE8\u518C?" : "\u6B22\u8FCE\u6CE8\u518C!"), 1),
        vue.createElementVNode("button", {
          class: "check",
          onClick: _cache[7] || (_cache[7] = (...args) => $options.sliderBoxCheckHandler && $options.sliderBoxCheckHandler(...args))
        }, vue.toDisplayString($data.log ? "\u53BB\u6CE8\u518C" : "\u53BB\u767B\u5F55") + "> ", 1)
      ], 2)
    ]);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-281ea71c"], ["__file", "D:/project/SmartCar/SmartCar_App/components/log-reg/log-reg.vue"]]);
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$8 = {
    data() {
      return {};
    },
    onShow() {
      plus.navigator.setFullscreen(true);
    },
    methods: {
      logHandler(log) {
        uni.request({
          url: `http://192.168.43.84:8088/logReg/api/logCheck?id=${log.id}&pswd=${log.pswd}`,
          method: "GET",
          success(res) {
            if (res.data) {
              uni.redirectTo({
                url: `/pages/index/index?id=${log.id}`
              });
              uni.showToast({
                title: "\u767B\u5F55\u6210\u529F",
                icon: "success"
              });
            } else {
              uni.showToast({
                title: "\u5BC6\u7801\u6216\u8D26\u53F7\u9519\u8BEF",
                icon: "error"
              });
            }
          },
          timeout: 1e3,
          fail() {
            uni.showToast({
              title: "\u7F51\u7EDC\u5F02\u5E38",
              icon: "error"
            });
          }
        });
      },
      regHandler(reg) {
        uni.request({
          url: `http://192.168.43.84:8088/logReg/api/reg?id=${reg.id}&name=${reg.name}&pswd=${reg.pswd}`,
          method: "GET",
          timeout: 1e3,
          success(res) {
            if (res.data) {
              uni.showToast({
                title: "\u6CE8\u518C\u6210\u529F",
                icon: "success"
              });
            } else {
              uni.showToast({
                title: "\u8BE5id\u5DF2\u6CE8\u518C",
                icon: "error"
              });
            }
          },
          fail() {
            uni.showToast({
              title: "\u7F51\u7EDC\u5F02\u5E38",
              icon: "error"
            });
          }
        });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_log_reg = resolveEasycom(vue.resolveDynamicComponent("log-reg"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_log_reg, {
        class: "content",
        onLog: $options.logHandler,
        onReg: $options.regHandler
      }, null, 8, ["onLog", "onReg"])
    ]);
  }
  var PagesLogLog = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-7e685510"], ["__file", "D:/project/SmartCar/SmartCar_App/pages/log/log.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        speed: 0
      };
    },
    methods: {
      acc(e) {
        if (this.speed < 20)
          this.speed++;
        this.$emit("speed", this.speed);
        uni.vibrateShort();
      },
      brake(e) {
        this.$emit("brake");
        this.speed = 0;
        this.$emit("speed", this.speed);
        uni.vibrateShort();
      },
      disBrake(e) {
        this.$emit("disBrake");
        uni.vibrateShort();
      },
      dec(e) {
        if (this.speed > 0)
          this.speed--;
        this.$emit("speed", this.speed);
        uni.vibrateShort();
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "speedControler" }, [
      vue.createElementVNode("view", {
        class: "acc",
        onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.acc && $options.acc(...args))
      }, null, 32),
      vue.createElementVNode("view", {
        class: "stop",
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.brake && $options.brake(...args)),
        onTouchend: _cache[2] || (_cache[2] = (...args) => $options.disBrake && $options.disBrake(...args))
      }, null, 32),
      vue.createElementVNode("view", {
        class: "dec",
        onTouchstart: _cache[3] || (_cache[3] = (...args) => $options.dec && $options.dec(...args))
      }, null, 32)
    ]);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-309b4e38"], ["__file", "D:/project/SmartCar/SmartCar_App/components/speedControler/speedControler.vue"]]);
  const mainDefault = {
    bgColor: "rgba(255,255,255,1)",
    startAngle: 0.75,
    endAngle: 0.25,
    width: uni.upx2px(350),
    status: 0,
    padding: 10,
    min: 0,
    max: 100,
    value: 0,
    unit: false,
    name: "\u56FE\u4F8B\u6807\u9898",
    detail: {},
    axisTick: []
  };
  const detailDefault = {
    title: {
      offsetCenter: [0, uni.upx2px(-40)],
      color: "#888888",
      fontSize: uni.upx2px(24),
      fontWeight: "normal",
      textAlign: "center"
    },
    value: {
      color: "#323232",
      fontSize: uni.upx2px(48),
      fontWeight: "bolder",
      offsetCenter: [0, uni.upx2px(40)],
      textAlign: "center"
    },
    unit: {
      color: "#323232",
      fontSize: uni.upx2px(22),
      fontWeight: "normal",
      offsetCenter: [0, uni.upx2px(40)],
      textAlign: "center"
    }
  };
  const axisTickDefault = {
    width: uni.upx2px(25),
    number: 6,
    color: "#369c96,#d5d5d5",
    subNumber: 10,
    subWidth: uni.upx2px(25),
    subHeight: 1,
    padding: uni.upx2px(10)
  };
  const axisTickDefaultSmall = {
    width: uni.upx2px(10),
    number: 6,
    color: "#d5d5d5",
    subNumber: 10,
    subWidth: uni.upx2px(6),
    subHeight: 1,
    padding: uni.upx2px(25)
  };
  const _sfc_main$6 = {
    data: function() {
      return {
        gaugeOption: {}
      };
    },
    props: {
      config: {
        type: Object,
        default: () => {
          return {};
        }
      },
      bgColor: {
        type: String,
        default: "#fff"
      }
    },
    computed: {
      _width: function() {
        return this.config.width || mainDefault.width;
      },
      _status: function() {
        return String(this.config.status) !== "false" ? true : false;
      },
      _dStatus: function() {
        return String(this.config.status) === "true" || this.config.status === 1 ? 1 : 0;
      }
    },
    watch: {
      config: {
        handler(newVal, oldVal) {
          this.initCharts();
        },
        deep: true
      }
    },
    mounted: function() {
      this.initCharts();
    },
    methods: {
      initCharts: function() {
        var gaugeOption = this.fillInData();
        var uChartsGauge = null;
        uChartsGauge = uni.createCanvasContext(gaugeOption.id, this);
        uChartsGauge.fillStyle = gaugeOption.bgColor;
        uChartsGauge.fillRect(0, 0, gaugeOption.width, gaugeOption.width);
        uChartsGauge.save();
        this.drawGauge(gaugeOption, uChartsGauge);
      },
      drawGauge: function(options, ctx) {
        var centerPosition = {
          x: options.width / 2,
          y: options.width / 2
        };
        var totalAngle = options.startAngle - options.endAngle + 1;
        var radius = Math.min(centerPosition.x, centerPosition.y);
        for (let idx = 0, len = options.axisTick.length; idx < len; idx++) {
          var gaugeOption = options.axisTick[idx];
          radius -= gaugeOption.padding + gaugeOption.width / 2;
          var criticalPoint = Math.floor(options.value / (options.max / gaugeOption.number));
          var subCriticalPoint = Math.floor(options.value / (options.max / gaugeOption.subNumber / gaugeOption.number));
          if (options.value * 1 === 0) {
            criticalPoint = -1;
            subCriticalPoint = -1;
          }
          var colors = gaugeOption.color.split(",");
          colors[1] = colors[1] || colors[0];
          var splitAngle = totalAngle / gaugeOption.number;
          var childAngle = totalAngle / gaugeOption.number / gaugeOption.subNumber;
          var startX = -radius - gaugeOption.width * 0.5;
          var endX = -radius - gaugeOption.width * 0.5 + gaugeOption.width;
          var childEndX = -radius - gaugeOption.width * 0.5 + gaugeOption.subWidth;
          let maxScaleData = __spreadProps(__spreadValues({}, centerPosition), {
            startX,
            endX,
            splitAngle,
            criticalPoint,
            colors,
            startAngle: options.startAngle,
            width: gaugeOption.subHeight,
            number: gaugeOption.number
          });
          this.drawScale(ctx, maxScaleData);
          let minScaleData = __spreadProps(__spreadValues({}, centerPosition), {
            startX,
            colors,
            criticalPoint: subCriticalPoint,
            endX: childEndX,
            splitAngle: childAngle,
            startAngle: options.startAngle,
            width: gaugeOption.subHeight,
            number: gaugeOption.number * gaugeOption.subNumber
          });
          this.drawScale(ctx, minScaleData);
        }
        var titleObj = __spreadProps(__spreadValues(__spreadValues({}, options.detail.title), centerPosition), {
          name: options.name
        });
        this.drawText(ctx, titleObj);
        var _fillText = options.value * 1 === 0 ? 0 : (options.value * 1).toFixed(1);
        var valueObj = __spreadProps(__spreadValues(__spreadValues({}, options.detail.value), centerPosition), {
          name: _fillText
        });
        this.drawText(ctx, valueObj);
        if (String(options.unit) !== "false") {
          let unitObj = __spreadProps(__spreadValues(__spreadValues({}, options.detail.unit), centerPosition), {
            name: options.unit
          });
          var valueLength = (options.value * 1).toFixed(1).length;
          var _oftX = (valueLength - 1.5) / 2 * valueObj.fontSize;
          unitObj.offsetCenter[0] += _oftX;
          this.drawText(ctx, unitObj);
        }
        ctx.draw();
      },
      drawText: function(ctx, data) {
        let {
          fontSize,
          fontWeight,
          color,
          textAlign,
          offsetCenter,
          x,
          y,
          name
        } = data;
        ctx.beginPath();
        ctx.font = fontWeight + " " + fontSize + "px MicrosoftYaHei";
        ctx.fillStyle = color;
        ctx.textAlign = textAlign;
        ctx.translate(x, y);
        ctx.fillText(name, ...offsetCenter);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        ctx.save();
      },
      drawScale: function(ctx, data) {
        let {
          number,
          criticalPoint,
          startX,
          endX,
          splitAngle,
          width,
          x,
          y,
          startAngle,
          colors
        } = data;
        ctx.translate(x, y);
        ctx.rotate((startAngle - 1) * Math.PI);
        for (let i = 0; i <= number; i++) {
          ctx.beginPath();
          ctx.setStrokeStyle(i <= criticalPoint ? colors[0] : colors[1]);
          ctx.setLineWidth(width);
          ctx.moveTo(startX, 0);
          ctx.lineTo(endX, 0);
          ctx.stroke();
          ctx.rotate(splitAngle * Math.PI);
        }
        ctx.restore();
        ctx.save();
      },
      fillInData: function() {
        var gaugeOption = this.deepClone(mainDefault, this.config);
        for (var _k in detailDefault) {
          gaugeOption.detail[_k] = this.deepClone(detailDefault[_k], gaugeOption.detail[_k]);
        }
        if (gaugeOption.axisTickLength === void 0 || gaugeOption.axisTickLength === null) {
          if (!(gaugeOption.axisTick instanceof Array)) {
            gaugeOption.axisTick = [gaugeOption.axisTick];
          }
        } else {
          gaugeOption.axisTick = gaugeOption.axisTick || [];
        }
        var axisTickLength = gaugeOption.axisTickLength || gaugeOption.axisTick.length || 1;
        var axisTick = [].concat(gaugeOption.axisTick);
        for (var idx = 0, len = axisTickLength; idx < len; idx++) {
          var defaultData = idx == 0 ? axisTickDefault : axisTickDefaultSmall;
          axisTick[idx] = axisTick[idx] || {};
          if (idx > 0 && !axisTick[idx].padding) {
            axisTick[idx].padding = +axisTick[idx - 1].width;
          }
          axisTick[idx] = this.deepClone(defaultData, axisTick[idx]);
        }
        gaugeOption.axisTick = axisTick;
        return gaugeOption;
      },
      deepClone: function(source, target) {
        var _obj = {};
        source = source || {};
        target = target || {};
        Object.assign(_obj, source, target);
        return JSON.parse(JSON.stringify(_obj));
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "gauge-box",
      style: vue.normalizeStyle({ "background-color": $props.bgColor })
    }, [
      vue.createElementVNode("canvas", {
        "canvas-id": $props.config.id,
        style: vue.normalizeStyle({ "width": $options._width + "px", "height": $options._width + "px" })
      }, null, 12, ["canvas-id"]),
      $options._status ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["gauge-btn", { "gauge-btn-active": $options._dStatus }])
      }, vue.toDisplayString($options._dStatus ? "\u5728\u7EBF" : "\u79BB\u7EBF"), 3)) : vue.createCommentVNode("v-if", true)
    ], 4);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-0b57f1c4"], ["__file", "D:/project/SmartCar/SmartCar_App/components/best-gauge/best-gauge.vue"]]);
  var _imports_0 = "/static/ini.png";
  const _sfc_main$5 = {
    data() {
      return {};
    },
    props: {
      isBrake: {
        type: Boolean,
        default: false
      },
      isConnected: {
        type: Boolean,
        default: true
      },
      leftSpeedPanel: {
        type: Object,
        default: {}
      },
      rightSpeedPanel: {
        type: Object,
        default: {}
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_best_gauge = resolveEasycom(vue.resolveDynamicComponent("best-gauge"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "runinfo" }, [
      vue.createVNode(_component_best_gauge, {
        class: "left",
        config: $props.leftSpeedPanel
      }, null, 8, ["config"]),
      vue.createElementVNode("view", { class: "staAndGerainfo" }, [
        vue.createElementVNode("image", {
          src: _imports_0,
          class: "logo"
        }),
        vue.createElementVNode("view", { class: "staView" }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["wifiSta", { "connected": $props.isConnected, "disConnected": !$props.isConnected }])
          }, null, 2),
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["brakeSta", { "brake": $props.isBrake, "disBrake": !$props.isBrake }])
          }, null, 2)
        ])
      ]),
      vue.createVNode(_component_best_gauge, {
        class: "right",
        config: $props.rightSpeedPanel
      }, null, 8, ["config"])
    ]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-632cb178"], ["__file", "D:/project/SmartCar/SmartCar_App/components/runinfo/runinfo.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        greaList: ["P", "R", "N", "D"],
        grea: "P"
      };
    },
    methods: {
      changeGrea(e) {
        this.grea = this.greaList[e.detail.current];
        this.$emit("changeGrea", this.grea);
        uni.vibrateShort();
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "geraView" }, [
      vue.createElementVNode("swiper", {
        class: "gera",
        onChange: _cache[0] || (_cache[0] = (...args) => $options.changeGrea && $options.changeGrea(...args)),
        "easing-function": "linear"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.greaList, (grea) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", null, vue.toDisplayString(grea), 1);
        }), 256))
      ], 32),
      vue.createElementVNode("view", { class: "nowGera" }, vue.toDisplayString($data.grea), 1)
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-5a7e7ae4"], ["__file", "D:/project/SmartCar/SmartCar_App/components/grea/grea.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    props: {
      isBind: {
        type: Boolean,
        default: false
      },
      bindId: {
        type: String,
        default: ""
      }
    },
    methods: {
      bindHandler(e) {
        this.$emit("bind");
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "bind-car" }, [
      vue.createTextVNode(vue.toDisplayString($props.isBind ? `\u5DF2\u7ED1\u5B9A:` : `\u672A\u7ED1\u5B9A`) + " " + vue.toDisplayString($props.bindId) + " ", 1),
      vue.createElementVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.bindHandler && $options.bindHandler(...args))
      }, vue.toDisplayString($props.isBind ? `\u6539\u7ED1` : `\u53BB\u7ED1\u5B9A`), 1)
    ]);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-9ee252f8"], ["__file", "D:/project/SmartCar/SmartCar_App/components/bind-car/bind-car.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        id: "",
        name: "",
        pswd: "",
        seen: false
      };
    },
    methods: {
      seenHandler(e) {
        this.seen = !this.seen;
        uni.request({
          url: `http://192.168.43.84:8088/user/api/getUser?id=${this.userId}`,
          method: "GET",
          success: (res) => {
            this.id = res.data[0].id;
            this.name = res.data[0].name;
            this.phone = res.data[0].phone;
            this.pswd = res.data[0].pswd;
          }
        });
      },
      modHandler(e) {
        uni.request({
          url: `http://192.168.43.84:8088/user/api/modUser?id=${this.id}&name=${this.name}&pswd=${this.pswd}&oldId=${this.userId}`,
          method: "GET",
          timeout: 1e3,
          fail: (e2) => {
            uni.showToast({
              title: "\u7F51\u7EDC\u5F02\u5E38",
              icon: "error"
            });
          },
          success: (e2) => {
            if (e2.data) {
              this.flashUser();
              uni.showToast({
                title: "\u4FEE\u6539\u6210\u529F",
                icon: "success"
              });
            } else {
              this.flashUser();
              uni.showToast({
                title: "\u4FEE\u6539\u5931\u8D25",
                icon: "error"
              });
            }
          }
        });
      },
      flashUser() {
        uni.request({
          url: `http://192.168.43.84:8088/user/api/getUser?id=${this.userId}`,
          method: "GET",
          success: (res) => {
            this.id = res.data[0].id;
            this.name = res.data[0].name;
            this.phone = res.data[0].phone;
            this.pswd = res.data[0].pswd;
          }
        });
      }
    },
    mounted() {
      this.flashUser();
    },
    props: {
      userId: {
        type: String,
        default: ""
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "user-info" }, [
      vue.createElementVNode("button", {
        class: "info",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.seenHandler && $options.seenHandler(...args))
      }),
      vue.createElementVNode("view", {
        class: vue.normalizeClass([{ "yes": $data.seen, "no": !$data.seen }, "box"])
      }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("span", null, "\u8D26\u53F7\xA0:"),
          vue.withDirectives(vue.createElementVNode("input", {
            type: "text",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.id = $event)
          }, null, 512), [
            [vue.vModelText, $data.id]
          ])
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("span", null, "\u6635\u79F0\xA0:"),
          vue.withDirectives(vue.createElementVNode("input", {
            type: "text",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.name = $event)
          }, null, 512), [
            [vue.vModelText, $data.name]
          ])
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("span", null, "\u5BC6\u7801\xA0:"),
          vue.withDirectives(vue.createElementVNode("input", {
            type: "text",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.pswd = $event)
          }, null, 512), [
            [vue.vModelText, $data.pswd]
          ])
        ]),
        vue.createElementVNode("button", {
          class: "mod",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.modHandler && $options.modHandler(...args))
        }, "\u4FEE\u6539")
      ], 2)
    ]);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-ba61afb4"], ["__file", "D:/project/SmartCar/SmartCar_App/components/user-info/user-info.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        id: "",
        bindId: "",
        isBind: false,
        isBrake: false,
        isConnected: false,
        leftSpeed: 0,
        rightSpeed: 0,
        grea: "P",
        leftSpeedPanel: {
          id: "left",
          min: 0,
          max: 20,
          value: 0,
          status: false,
          startAngle: 0.75,
          endAngele: 0.35,
          padding: 0,
          name: "<",
          width: 200,
          axisTick: {
            color: "#aa488f,#aa909d",
            number: 10,
            subNumber: 10,
            width: 20,
            subWidth: 10,
            subHeight: 2,
            padding: 20
          },
          detail: {
            title: {
              offsetCenter: [0, 0],
              color: "#aa488f",
              fontSize: 36,
              fontWeight: 1e3
            },
            value: {
              color: "#aa488f",
              fontSize: 20,
              fontSize: 18
            }
          }
        },
        rightSpeedPanel: {
          id: "right",
          min: 0,
          max: 20,
          value: 0,
          status: false,
          startAngle: 0.75,
          endAngele: 0.35,
          padding: 0,
          name: ">",
          width: 200,
          axisTick: {
            color: "#aa488f,#aa909d",
            number: 10,
            subNumber: 10,
            width: 20,
            subWidth: 10,
            subHeight: 2,
            padding: 20
          },
          detail: {
            title: {
              offsetCenter: [0, 0],
              color: "#aa488f",
              fontSize: 36,
              fontWeight: 1e3
            },
            value: {
              color: "#aa488f",
              fontSize: 20,
              fontSize: 18
            }
          }
        }
      };
    },
    methods: {
      changeGrea(grea) {
        this.grea = grea;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
      },
      setSpeed(direct, speed) {
        if (direct == "left")
          this.leftSpeed = speed;
        if (direct == "right")
          this.rightSpeed = speed;
      },
      brake(direct) {
        this.isBrake = true;
      },
      disBrake(direct) {
        this.isBrake = false;
      },
      bindHandler(e) {
        uni.scanCode({
          success: (res) => {
            var carId = res.result;
            uni.request({
              url: `http://192.168.43.84:8088/bind/api/bindCar?uid=${this.id}&cid=${carId}`,
              method: "GET",
              success: (res2) => {
                if (res2.data) {
                  this.isBind = true;
                  this.bindId = carId;
                  uni.showToast({
                    title: "\u7ED1\u5B9A\u6210\u529F",
                    icon: "success"
                  });
                } else {
                  uni.showToast({
                    title: "\u7ED1\u5B9A\u5931\u8D25",
                    icon: "error"
                  });
                }
              },
              timeout: 1e3,
              fail() {
                uni.showToast({
                  title: "\u7F51\u7EDC\u5F02\u5E38",
                  icon: "error"
                });
              }
            });
          }
        });
      }
    },
    onLoad(option) {
      this.id = option.id;
    },
    mounted() {
      uni.request({
        url: `http://192.168.43.84:8088/bind/api/checkBind?uid=${this.id}`,
        method: "GET",
        success: (res) => {
          if (res.data.length == 0) {
            this.isBind = false;
            this.bindId = "";
          } else {
            this.isBind = true;
            this.bindId = res.data[0].id;
          }
        }
      });
      setInterval(() => {
        uni.request({
          url: `http://192.168.43.84:8088/appSta/api/getSta?id=${this.id}`,
          method: "GET",
          success: (res) => {
            if (res.data[0] != void 0) {
              this.isConnected = res.data[0].connectedSta;
              this.leftSpeedPanel.value = res.data[0].leftSpeed;
              this.rightSpeedPanel.value = res.data[0].rightSpeed;
            }
          }
        });
        uni.request({
          url: `http://192.168.43.84:8088/appSta/api/setSta?leftS=${this.leftSpeed}&rightS=${this.rightSpeed}&grea=${this.grea}&id=${this.id}`,
          method: "GET"
        });
      }, 10);
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_speedControler = resolveEasycom(vue.resolveDynamicComponent("speedControler"), __easycom_0$1);
    const _component_runinfo = resolveEasycom(vue.resolveDynamicComponent("runinfo"), __easycom_1);
    const _component_grea = resolveEasycom(vue.resolveDynamicComponent("grea"), __easycom_2);
    const _component_bind_car = resolveEasycom(vue.resolveDynamicComponent("bind-car"), __easycom_3);
    const _component_user_info = resolveEasycom(vue.resolveDynamicComponent("user-info"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "content" }, [
        vue.createVNode(_component_speedControler, {
          name: "left",
          onSpeed: _cache[0] || (_cache[0] = (speed) => {
            $options.setSpeed(`left`, speed);
          }),
          onBrake: _cache[1] || (_cache[1] = () => {
            $options.brake(`left`);
          }),
          onDisBrake: _cache[2] || (_cache[2] = () => {
            $options.disBrake(`left`);
          })
        }),
        vue.createVNode(_component_runinfo, {
          isBrake: $data.isBrake,
          isConnected: $data.isConnected,
          leftSpeedPanel: $data.leftSpeedPanel,
          rightSpeedPanel: $data.rightSpeedPanel
        }, null, 8, ["isBrake", "isConnected", "leftSpeedPanel", "rightSpeedPanel"]),
        vue.createVNode(_component_speedControler, {
          name: "right ",
          onSpeed: _cache[3] || (_cache[3] = (speed) => {
            $options.setSpeed(`right`, speed);
          }),
          onBrake: _cache[4] || (_cache[4] = () => {
            $options.brake(`right`);
          }),
          onDisBrake: _cache[5] || (_cache[5] = () => {
            $options.disBrake(`right`);
          })
        })
      ]),
      vue.createVNode(_component_grea, {
        class: "bottom",
        onChangeGrea: $options.changeGrea
      }, null, 8, ["onChangeGrea"]),
      vue.createVNode(_component_bind_car, {
        class: "bind",
        onBind: $options.bindHandler,
        bindId: $data.bindId,
        isBind: $data.isBind
      }, null, 8, ["onBind", "bindId", "isBind"]),
      vue.createVNode(_component_user_info, {
        class: "info",
        userId: $data.id
      }, null, 8, ["userId"])
    ], 64);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-57280228"], ["__file", "D:/project/SmartCar/SmartCar_App/pages/index/index.vue"]]);
  __definePage("pages/log/log", PagesLogLog);
  __definePage("pages/index/index", PagesIndexIndex);
  const _sfc_main = {};
  function _sfc_render(_ctx, _cache) {
    return null;
  }
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/project/SmartCar/SmartCar_App/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
