var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,n)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,__spreadValues=(e,t)=>{for(var n in t||(t={}))__hasOwnProp.call(t,n)&&__defNormalProp(e,n,t[n]);if(__getOwnPropSymbols)for(var n of __getOwnPropSymbols(t))__propIsEnum.call(t,n)&&__defNormalProp(e,n,t[n]);return e},__spreadProps=(e,t)=>__defProps(e,__getOwnPropDescs(t));if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){const t=this.constructor;return this.then((n=>t.resolve(e()).then((()=>n))),(n=>t.resolve(e()).then((()=>{throw n}))))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){const e=uni.requireGlobal();ArrayBuffer=e.ArrayBuffer,Int8Array=e.Int8Array,Uint8Array=e.Uint8Array,Uint8ClampedArray=e.Uint8ClampedArray,Int16Array=e.Int16Array,Uint16Array=e.Uint16Array,Int32Array=e.Int32Array,Uint32Array=e.Uint32Array,Float32Array=e.Float32Array,Float64Array=e.Float64Array,BigInt64Array=e.BigInt64Array,BigUint64Array=e.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(Vue,weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),function(e,t){"use strict";var n=(e,t)=>{const n=e.__vccOpts||e;for(const[a,i]of t)n[a]=i;return n};var a=n({data:()=>({log:!0,logId:"",logPswd:"",regId:"",regName:"",regPhone:"",regPswd:""}),methods:{sliderBoxCheckHandler(){this.log=!this.log},logHandler(){this.$emit("log",{id:this.logId,pswd:this.logPswd})},regHanler(){this.$emit("reg",{id:this.regId,name:this.regName,pswd:this.regPswd})}}},[["render",function(t,n,a,i,r,s){return e.openBlock(),e.createElementBlock("view",{class:"log-reg"},[e.createElementVNode("view",{class:"log-reg-box"},[e.createElementVNode("text",{class:"title"},"登录"),e.withDirectives(e.createElementVNode("input",{class:"loginfo",type:"text",placeholder:"请输入账号","onUpdate:modelValue":n[0]||(n[0]=e=>r.logId=e)},null,512),[[e.vModelText,r.logId]]),e.withDirectives(e.createElementVNode("input",{class:"loginfo safe",type:"password",placeholder:"请输入密码","onUpdate:modelValue":n[1]||(n[1]=e=>r.logPswd=e)},null,512),[[e.vModelText,r.logPswd]]),e.createElementVNode("button",{class:"check",onClick:n[2]||(n[2]=(...e)=>s.logHandler&&s.logHandler(...e))},"登录")]),e.createElementVNode("view",{class:"log-reg-box reg"},[e.createElementVNode("text",{class:"title"},"注册"),e.withDirectives(e.createElementVNode("input",{class:"loginfo",type:"text",placeholder:"请输入账号","onUpdate:modelValue":n[3]||(n[3]=e=>r.regId=e)},null,512),[[e.vModelText,r.regId]]),e.withDirectives(e.createElementVNode("input",{class:"loginfo",type:"text",placeholder:"请输入昵称","onUpdate:modelValue":n[4]||(n[4]=e=>r.regName=e)},null,512),[[e.vModelText,r.regName]]),e.withDirectives(e.createElementVNode("input",{class:"loginfo",type:"text",placeholder:"请输入密码","onUpdate:modelValue":n[5]||(n[5]=e=>r.regPswd=e)},null,512),[[e.vModelText,r.regPswd]]),e.createElementVNode("button",{class:"check",onClick:n[6]||(n[6]=(...e)=>s.regHanler&&s.regHanler(...e))},"注册")]),e.createElementVNode("view",{class:e.normalizeClass(["sliderBox",{sliderleft:r.log,sliderright:!r.log}])},[e.createElementVNode("text",{class:"title"},e.toDisplayString(r.log?"还未注册?":"欢迎注册!"),1),e.createElementVNode("button",{class:"check",onClick:n[7]||(n[7]=(...e)=>s.sliderBoxCheckHandler&&s.sliderBoxCheckHandler(...e))},e.toDisplayString(r.log?"去注册":"去登录")+"> ",1)],2)])}],["__scopeId","data-v-26474edf"]]);function i(e,n){return t.isString(e)?n:e}var r=n({data:()=>({}),onShow(){plus.navigator.setFullscreen(!0)},methods:{logHandler(e){uni.request({url:`http://192.168.43.84:8088/logReg/api/logCheck?id=${e.id}&pswd=${e.pswd}`,method:"GET",success(t){t.data?(uni.redirectTo({url:`/pages/index/index?id=${e.id}`}),uni.showToast({title:"登录成功",icon:"success"})):uni.showToast({title:"密码或账号错误",icon:"error"})},timeout:1e3,fail(){uni.showToast({title:"网络异常",icon:"error"})}})},regHandler(e){uni.request({url:`http://192.168.43.84:8088/logReg/api/reg?id=${e.id}&name=${e.name}&pswd=${e.pswd}`,method:"GET",timeout:1e3,success(e){e.data?uni.showToast({title:"注册成功",icon:"success"}):uni.showToast({title:"该id已注册",icon:"error"})},fail(){uni.showToast({title:"网络异常",icon:"error"})}})}}},[["render",function(t,n,r,s,o,l){const d=i(e.resolveDynamicComponent("log-reg"),a);return e.openBlock(),e.createElementBlock("view",null,[e.createVNode(d,{class:"content",onLog:l.logHandler,onReg:l.regHandler},null,8,["onLog","onReg"])])}],["__scopeId","data-v-1a509253"]]);var s=n({data:()=>({speed:0}),methods:{acc(e){this.speed<20&&this.speed++,this.$emit("speed",this.speed),uni.vibrateShort()},brake(e){this.$emit("brake"),this.speed=0,this.$emit("speed",this.speed),uni.vibrateShort()},disBrake(e){this.$emit("disBrake"),uni.vibrateShort()},dec(e){this.speed>0&&this.speed--,this.$emit("speed",this.speed),uni.vibrateShort()}}},[["render",function(t,n,a,i,r,s){return e.openBlock(),e.createElementBlock("view",{class:"speedControler"},[e.createElementVNode("view",{class:"acc",onTouchstart:n[0]||(n[0]=(...e)=>s.acc&&s.acc(...e))},null,32),e.createElementVNode("view",{class:"stop",onTouchstart:n[1]||(n[1]=(...e)=>s.brake&&s.brake(...e)),onTouchend:n[2]||(n[2]=(...e)=>s.disBrake&&s.disBrake(...e))},null,32),e.createElementVNode("view",{class:"dec",onTouchstart:n[3]||(n[3]=(...e)=>s.dec&&s.dec(...e))},null,32)])}],["__scopeId","data-v-ad59d5ea"]]);const o={bgColor:"rgba(255,255,255,1)",startAngle:.75,endAngle:.25,width:uni.upx2px(350),status:0,padding:10,min:0,max:100,value:0,unit:!1,name:"图例标题",detail:{},axisTick:[]},l={title:{offsetCenter:[0,uni.upx2px(-40)],color:"#888888",fontSize:uni.upx2px(24),fontWeight:"normal",textAlign:"center"},value:{color:"#323232",fontSize:uni.upx2px(48),fontWeight:"bolder",offsetCenter:[0,uni.upx2px(40)],textAlign:"center"},unit:{color:"#323232",fontSize:uni.upx2px(22),fontWeight:"normal",offsetCenter:[0,uni.upx2px(40)],textAlign:"center"}},d={width:uni.upx2px(25),number:6,color:"#369c96,#d5d5d5",subNumber:10,subWidth:uni.upx2px(25),subHeight:1,padding:uni.upx2px(10)},c={width:uni.upx2px(10),number:6,color:"#d5d5d5",subNumber:10,subWidth:uni.upx2px(6),subHeight:1,padding:uni.upx2px(25)};var u=n({data:function(){return{gaugeOption:{}}},props:{config:{type:Object,default:()=>({})},bgColor:{type:String,default:"#fff"}},computed:{_width:function(){return this.config.width||o.width},_status:function(){return"false"!==String(this.config.status)},_dStatus:function(){return"true"===String(this.config.status)||1===this.config.status?1:0}},watch:{config:{handler(e,t){this.initCharts()},deep:!0}},mounted:function(){this.initCharts()},methods:{initCharts:function(){var e=this.fillInData(),t=null;(t=uni.createCanvasContext(e.id,this)).fillStyle=e.bgColor,t.fillRect(0,0,e.width,e.width),t.save(),this.drawGauge(e,t)},drawGauge:function(e,t){var n={x:e.width/2,y:e.width/2},a=e.startAngle-e.endAngle+1,i=Math.min(n.x,n.y);for(let v=0,b=e.axisTick.length;v<b;v++){var r=e.axisTick[v];i-=r.padding+r.width/2;var s=Math.floor(e.value/(e.max/r.number)),o=Math.floor(e.value/(e.max/r.subNumber/r.number));1*e.value==0&&(s=-1,o=-1);var l=r.color.split(",");l[1]=l[1]||l[0];var d=a/r.number,c=a/r.number/r.subNumber,u=-i-.5*r.width,p=-i-.5*r.width+r.width,h=-i-.5*r.width+r.subWidth;let g=__spreadProps(__spreadValues({},n),{startX:u,endX:p,splitAngle:d,criticalPoint:s,colors:l,startAngle:e.startAngle,width:r.subHeight,number:r.number});this.drawScale(t,g);let m=__spreadProps(__spreadValues({},n),{startX:u,colors:l,criticalPoint:o,endX:h,splitAngle:c,startAngle:e.startAngle,width:r.subHeight,number:r.number*r.subNumber});this.drawScale(t,m)}var g=__spreadProps(__spreadValues(__spreadValues({},e.detail.title),n),{name:e.name});this.drawText(t,g);var m=1*e.value==0?0:(1*e.value).toFixed(1),f=__spreadProps(__spreadValues(__spreadValues({},e.detail.value),n),{name:m});if(this.drawText(t,f),"false"!==String(e.unit)){let a=__spreadProps(__spreadValues(__spreadValues({},e.detail.unit),n),{name:e.unit});var w=((1*e.value).toFixed(1).length-1.5)/2*f.fontSize;a.offsetCenter[0]+=w,this.drawText(t,a)}t.draw()},drawText:function(e,t){let{fontSize:n,fontWeight:a,color:i,textAlign:r,offsetCenter:s,x:o,y:l,name:d}=t;e.beginPath(),e.font=a+" "+n+"px MicrosoftYaHei",e.fillStyle=i,e.textAlign=r,e.translate(o,l),e.fillText(d,...s),e.closePath(),e.stroke(),e.restore(),e.save()},drawScale:function(e,t){let{number:n,criticalPoint:a,startX:i,endX:r,splitAngle:s,width:o,x:l,y:d,startAngle:c,colors:u}=t;e.translate(l,d),e.rotate((c-1)*Math.PI);for(let p=0;p<=n;p++)e.beginPath(),e.setStrokeStyle(p<=a?u[0]:u[1]),e.setLineWidth(o),e.moveTo(i,0),e.lineTo(r,0),e.stroke(),e.rotate(s*Math.PI);e.restore(),e.save()},fillInData:function(){var e=this.deepClone(o,this.config);for(var t in l)e.detail[t]=this.deepClone(l[t],e.detail[t]);void 0===e.axisTickLength||null===e.axisTickLength?e.axisTick instanceof Array||(e.axisTick=[e.axisTick]):e.axisTick=e.axisTick||[];for(var n=e.axisTickLength||e.axisTick.length||1,a=[].concat(e.axisTick),i=0,r=n;i<r;i++){var s=0==i?d:c;a[i]=a[i]||{},i>0&&!a[i].padding&&(a[i].padding=+a[i-1].width),a[i]=this.deepClone(s,a[i])}return e.axisTick=a,e},deepClone:function(e,t){var n={};return e=e||{},t=t||{},Object.assign(n,e,t),JSON.parse(JSON.stringify(n))}}},[["render",function(t,n,a,i,r,s){return e.openBlock(),e.createElementBlock("view",{class:"gauge-box",style:e.normalizeStyle({"background-color":a.bgColor})},[e.createElementVNode("canvas",{"canvas-id":a.config.id,style:e.normalizeStyle({width:s._width+"px",height:s._width+"px"})},null,12,["canvas-id"]),s._status?(e.openBlock(),e.createElementBlock("view",{key:0,class:e.normalizeClass(["gauge-btn",{"gauge-btn-active":s._dStatus}])},e.toDisplayString(s._dStatus?"在线":"离线"),3)):e.createCommentVNode("",!0)],4)}],["__scopeId","data-v-ffbd3cac"]]);var p=n({data:()=>({}),props:{isBrake:{type:Boolean,default:!1},isConnected:{type:Boolean,default:!0},leftSpeedPanel:{type:Object,default:{}},rightSpeedPanel:{type:Object,default:{}}}},[["render",function(t,n,a,r,s,o){const l=i(e.resolveDynamicComponent("best-gauge"),u);return e.openBlock(),e.createElementBlock("view",{class:"runinfo"},[e.createVNode(l,{class:"left",config:a.leftSpeedPanel},null,8,["config"]),e.createElementVNode("view",{class:"staAndGerainfo"},[e.createElementVNode("image",{src:"/static/ini.png",class:"logo"}),e.createElementVNode("view",{class:"staView"},[e.createElementVNode("view",{class:e.normalizeClass(["wifiSta",{connected:a.isConnected,disConnected:!a.isConnected}])},null,2),e.createElementVNode("view",{class:e.normalizeClass(["brakeSta",{brake:a.isBrake,disBrake:!a.isBrake}])},null,2)])]),e.createVNode(l,{class:"right",config:a.rightSpeedPanel},null,8,["config"])])}],["__scopeId","data-v-2cc40214"]]);var h=n({data:()=>({greaList:["P","R","N","D"],grea:"P"}),methods:{changeGrea(e){this.grea=this.greaList[e.detail.current],this.$emit("changeGrea",this.grea),uni.vibrateShort()}}},[["render",function(t,n,a,i,r,s){return e.openBlock(),e.createElementBlock("view",{class:"geraView"},[e.createElementVNode("swiper",{class:"gera",onChange:n[0]||(n[0]=(...e)=>s.changeGrea&&s.changeGrea(...e)),"easing-function":"linear"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.greaList,(t=>(e.openBlock(),e.createElementBlock("swiper-item",null,e.toDisplayString(t),1)))),256))],32),e.createElementVNode("view",{class:"nowGera"},e.toDisplayString(r.grea),1)])}],["__scopeId","data-v-3da29517"]]);var g=n({data:()=>({}),props:{isBind:{type:Boolean,default:!1},bindId:{type:String,default:""}},methods:{bindHandler(e){this.$emit("bind")}}},[["render",function(t,n,a,i,r,s){return e.openBlock(),e.createElementBlock("view",{class:"bind-car"},[e.createTextVNode(e.toDisplayString(a.isBind?"已绑定:":"未绑定")+" "+e.toDisplayString(a.bindId)+" ",1),e.createElementVNode("button",{onClick:n[0]||(n[0]=(...e)=>s.bindHandler&&s.bindHandler(...e))},e.toDisplayString(a.isBind?"改绑":"去绑定"),1)])}],["__scopeId","data-v-2ccaf816"]]);var m=n({data:()=>({id:"",name:"",pswd:"",seen:!1}),methods:{seenHandler(e){this.seen=!this.seen,uni.request({url:`http://192.168.43.84:8088/user/api/getUser?id=${this.userId}`,method:"GET",success:e=>{this.id=e.data[0].id,this.name=e.data[0].name,this.phone=e.data[0].phone,this.pswd=e.data[0].pswd}})},modHandler(e){uni.request({url:`http://192.168.43.84:8088/user/api/modUser?id=${this.id}&name=${this.name}&pswd=${this.pswd}&oldId=${this.userId}`,method:"GET",timeout:1e3,fail:e=>{uni.showToast({title:"网络异常",icon:"error"})},success:e=>{e.data?(this.flashUser(),uni.showToast({title:"修改成功",icon:"success"})):(this.flashUser(),uni.showToast({title:"修改失败",icon:"error"}))}})},flashUser(){uni.request({url:`http://192.168.43.84:8088/user/api/getUser?id=${this.userId}`,method:"GET",success:e=>{this.id=e.data[0].id,this.name=e.data[0].name,this.phone=e.data[0].phone,this.pswd=e.data[0].pswd}})}},mounted(){this.flashUser()},props:{userId:{type:String,default:""}}},[["render",function(t,n,a,i,r,s){return e.openBlock(),e.createElementBlock("view",{class:"user-info"},[e.createElementVNode("button",{class:"info",onClick:n[0]||(n[0]=(...e)=>s.seenHandler&&s.seenHandler(...e))}),e.createElementVNode("view",{class:e.normalizeClass([{yes:r.seen,no:!r.seen},"box"])},[e.createElementVNode("view",null,[e.createElementVNode("span",null,"账号 :"),e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=e=>r.id=e)},null,512),[[e.vModelText,r.id]])]),e.createElementVNode("view",null,[e.createElementVNode("span",null,"昵称 :"),e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":n[2]||(n[2]=e=>r.name=e)},null,512),[[e.vModelText,r.name]])]),e.createElementVNode("view",null,[e.createElementVNode("span",null,"密码 :"),e.withDirectives(e.createElementVNode("input",{type:"text","onUpdate:modelValue":n[3]||(n[3]=e=>r.pswd=e)},null,512),[[e.vModelText,r.pswd]])]),e.createElementVNode("button",{class:"mod",onClick:n[4]||(n[4]=(...e)=>s.modHandler&&s.modHandler(...e))},"修改")],2)])}],["__scopeId","data-v-4c468522"]]);var f=n({data:()=>({id:"",bindId:"",isBind:!1,isBrake:!1,isConnected:!1,leftSpeed:0,rightSpeed:0,grea:"P",leftSpeedPanel:{id:"left",min:0,max:20,value:0,status:!1,startAngle:.75,endAngele:.35,padding:0,name:"<",width:200,axisTick:{color:"#aa488f,#aa909d",number:10,subNumber:10,width:20,subWidth:10,subHeight:2,padding:20},detail:{title:{offsetCenter:[0,0],color:"#aa488f",fontSize:36,fontWeight:1e3},value:{color:"#aa488f",fontSize:20,fontSize:18}}},rightSpeedPanel:{id:"right",min:0,max:20,value:0,status:!1,startAngle:.75,endAngele:.35,padding:0,name:">",width:200,axisTick:{color:"#aa488f,#aa909d",number:10,subNumber:10,width:20,subWidth:10,subHeight:2,padding:20},detail:{title:{offsetCenter:[0,0],color:"#aa488f",fontSize:36,fontWeight:1e3},value:{color:"#aa488f",fontSize:20,fontSize:18}}}}),methods:{changeGrea(e){this.grea=e,this.leftSpeed=0,this.rightSpeed=0},setSpeed(e,t){"left"==e&&(this.leftSpeed=t),"right"==e&&(this.rightSpeed=t)},brake(e){this.isBrake=!0},disBrake(e){this.isBrake=!1},bindHandler(e){uni.scanCode({success:e=>{var t=e.result;uni.request({url:`http://192.168.43.84:8088/bind/api/bindCar?uid=${this.id}&cid=${t}`,method:"GET",success:e=>{e.data?(this.isBind=!0,this.bindId=t,uni.showToast({title:"绑定成功",icon:"success"})):uni.showToast({title:"绑定失败",icon:"error"})},timeout:1e3,fail(){uni.showToast({title:"网络异常",icon:"error"})}})}})}},onLoad(e){this.id=e.id},mounted(){uni.request({url:`http://192.168.43.84:8088/bind/api/checkBind?uid=${this.id}`,method:"GET",success:e=>{0==e.data.length?(this.isBind=!1,this.bindId=""):(this.isBind=!0,this.bindId=e.data[0].id)}}),setInterval((()=>{uni.request({url:`http://192.168.43.84:8088/appSta/api/getSta?id=${this.id}`,method:"GET",success:e=>{null!=e.data[0]&&(this.isConnected=e.data[0].connectedSta,this.leftSpeedPanel.value=e.data[0].leftSpeed,this.rightSpeedPanel.value=e.data[0].rightSpeed)}}),uni.request({url:`http://192.168.43.84:8088/appSta/api/setSta?leftS=${this.leftSpeed}&rightS=${this.rightSpeed}&grea=${this.grea}&id=${this.id}`,method:"GET"})}),10)}},[["render",function(t,n,a,r,o,l){const d=i(e.resolveDynamicComponent("speedControler"),s),c=i(e.resolveDynamicComponent("runinfo"),p),u=i(e.resolveDynamicComponent("grea"),h),f=i(e.resolveDynamicComponent("bind-car"),g),w=i(e.resolveDynamicComponent("user-info"),m);return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("view",{class:"content"},[e.createVNode(d,{name:"left",onSpeed:n[0]||(n[0]=e=>{l.setSpeed("left",e)}),onBrake:n[1]||(n[1]=()=>{l.brake("left")}),onDisBrake:n[2]||(n[2]=()=>{l.disBrake("left")})}),e.createVNode(c,{isBrake:o.isBrake,isConnected:o.isConnected,leftSpeedPanel:o.leftSpeedPanel,rightSpeedPanel:o.rightSpeedPanel},null,8,["isBrake","isConnected","leftSpeedPanel","rightSpeedPanel"]),e.createVNode(d,{name:"right ",onSpeed:n[3]||(n[3]=e=>{l.setSpeed("right",e)}),onBrake:n[4]||(n[4]=()=>{l.brake("right")}),onDisBrake:n[5]||(n[5]=()=>{l.disBrake("right")})})]),e.createVNode(u,{class:"bottom",onChangeGrea:l.changeGrea},null,8,["onChangeGrea"]),e.createVNode(f,{class:"bind",onBind:l.bindHandler,bindId:o.bindId,isBind:o.isBind},null,8,["onBind","bindId","isBind"]),e.createVNode(w,{class:"info",userId:o.id},null,8,["userId"])],64)}],["__scopeId","data-v-2ba1078a"]]);__definePage("pages/log/log",r),__definePage("pages/index/index",f);var w=n({},[["render",function(e,t){return null}]]);const{app:v,Vuex:b,Pinia:x}={app:e.createVueApp(w)};uni.Vuex=b,uni.Pinia=x,v.provide("__globalStyles",__uniConfig.styles),v._component.mpType="app",v._component.render=()=>{},v.mount("#app")}(Vue,uni.VueShared);