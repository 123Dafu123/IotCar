"use strict";var e=require("../../common/vendor.js");const t={data:()=>({greaList:["P","R","N","D"],grea:"P",isBrake:!1,isConnected:!0,leftOp:{id:"left",min:0,max:40,value:0,status:!1,startAngle:.75,endAngele:.35,padding:0,name:"<",width:200,axisTick:{color:"#aa488f,#aa909d",number:10,subNumber:10,width:20,subWidth:10,subHeight:2,padding:20},detail:{title:{offsetCenter:[0,0],color:"#aa488f",fontSize:36,fontWeight:1e3},value:{color:"#aa488f",fontSize:20,fontSize:18}}},rightOp:{id:"gaugeRight",min:0,max:40,value:0,status:!1,startAngle:.75,endAngele:.35,padding:0,name:">",width:200,axisTick:{color:"#aa488f,#aa909d",number:10,subNumber:10,width:20,subWidth:10,subHeight:2,padding:20},detail:{title:{offsetCenter:[0,0],color:"#aa488f",fontSize:36,fontWeight:1e3},value:{color:"#aa488f",fontSize:20,fontSize:18}}}}),methods:{changeGrea(e){this.grea=this.greaList[e.detail.current]}}};if(!Array){e.resolveComponent("best-gauge")()}Math;var a=e._export_sfc(t,[["render",function(t,a,i,n,r,o){return{a:e.p({config:r.leftOp}),b:r.isConnected?1:"",c:r.isConnected?"":1,d:r.isBrake?1:"",e:r.isBrake?"":1,f:e.f(r.greaList,((t,a,i)=>({a:e.t(t)}))),g:e.o(((...e)=>o.changeGrea&&o.changeGrea(...e))),h:e.t(r.grea),i:e.p({config:r.rightOp})}}],["__scopeId","data-v-437bb600"]]);wx.createComponent(a);