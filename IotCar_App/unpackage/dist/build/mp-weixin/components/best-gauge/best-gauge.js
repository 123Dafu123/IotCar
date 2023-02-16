"use strict";var t=Object.defineProperty,e=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(e,i,n)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n,s=(t,e)=>{for(var i in e||(e={}))r.call(e,i)&&o(t,i,e[i]);if(n)for(var i of n(e))a.call(e,i)&&o(t,i,e[i]);return t},l=(t,n)=>e(t,i(n)),d=require("../../common/vendor.js");const u={bgColor:"rgba(255,255,255,1)",startAngle:.75,endAngle:.25,width:d.index.upx2px(350),status:0,padding:10,min:0,max:100,value:0,unit:!1,name:"图例标题",detail:{},axisTick:[]},c={title:{offsetCenter:[0,d.index.upx2px(-40)],color:"#888888",fontSize:d.index.upx2px(24),fontWeight:"normal",textAlign:"center"},value:{color:"#323232",fontSize:d.index.upx2px(48),fontWeight:"bolder",offsetCenter:[0,d.index.upx2px(40)],textAlign:"center"},unit:{color:"#323232",fontSize:d.index.upx2px(22),fontWeight:"normal",offsetCenter:[0,d.index.upx2px(40)],textAlign:"center"}},x={width:d.index.upx2px(25),number:6,color:"#369c96,#d5d5d5",subNumber:10,subWidth:d.index.upx2px(25),subHeight:1,padding:d.index.upx2px(10)},f={width:d.index.upx2px(10),number:6,color:"#d5d5d5",subNumber:10,subWidth:d.index.upx2px(6),subHeight:1,padding:d.index.upx2px(25)},h={data:function(){return{gaugeOption:{}}},props:{config:{type:Object,default:()=>({})},bgColor:{type:String,default:"#fff"}},computed:{_width:function(){return this.config.width||u.width},_status:function(){return"false"!==String(this.config.status)},_dStatus:function(){return"true"===String(this.config.status)||1===this.config.status?1:0}},watch:{config:{handler(t,e){this.initCharts()},deep:!0}},mounted:function(){this.initCharts()},methods:{initCharts:function(){var t=this.fillInData(),e=null;(e=d.index.createCanvasContext(t.id,this)).fillStyle=t.bgColor,e.fillRect(0,0,t.width,t.width),e.save(),this.drawGauge(t,e)},drawGauge:function(t,e){var i={x:t.width/2,y:t.width/2},n=t.startAngle-t.endAngle+1,r=Math.min(i.x,i.y);for(let v=0,S=t.axisTick.length;v<S;v++){var a=t.axisTick[v];r-=a.padding+a.width/2;var o=Math.floor(t.value/(t.max/a.number)),d=Math.floor(t.value/(t.max/a.subNumber/a.number));1*t.value==0&&(o=-1,d=-1);var u=a.color.split(",");u[1]=u[1]||u[0];var c=n/a.number,x=n/a.number/a.subNumber,f=-r-.5*a.width,h=-r-.5*a.width+a.width,g=-r-.5*a.width+a.subWidth;let p=l(s({},i),{startX:f,endX:h,splitAngle:c,criticalPoint:o,colors:u,startAngle:t.startAngle,width:a.subHeight,number:a.number});this.drawScale(e,p);let b=l(s({},i),{startX:f,colors:u,criticalPoint:d,endX:g,splitAngle:x,startAngle:t.startAngle,width:a.subHeight,number:a.number*a.subNumber});this.drawScale(e,b)}var p=l(s(s({},t.detail.title),i),{name:t.name});this.drawText(e,p);var b=1*t.value==0?0:(1*t.value).toFixed(1),m=l(s(s({},t.detail.value),i),{name:b});if(this.drawText(e,m),"false"!==String(t.unit)){let n=l(s(s({},t.detail.unit),i),{name:t.unit});var w=((1*t.value).toFixed(1).length-1.5)/2*m.fontSize;n.offsetCenter[0]+=w,this.drawText(e,n)}e.draw()},drawText:function(t,e){let{fontSize:i,fontWeight:n,color:r,textAlign:a,offsetCenter:o,x:s,y:l,name:d}=e;t.beginPath(),t.font=n+" "+i+"px MicrosoftYaHei",t.fillStyle=r,t.textAlign=a,t.translate(s,l),t.fillText(d,...o),t.closePath(),t.stroke(),t.restore(),t.save()},drawScale:function(t,e){let{number:i,criticalPoint:n,startX:r,endX:a,splitAngle:o,width:s,x:l,y:d,startAngle:u,colors:c}=e;t.translate(l,d),t.rotate((u-1)*Math.PI);for(let x=0;x<=i;x++)t.beginPath(),t.setStrokeStyle(x<=n?c[0]:c[1]),t.setLineWidth(s),t.moveTo(r,0),t.lineTo(a,0),t.stroke(),t.rotate(o*Math.PI);t.restore(),t.save()},fillInData:function(){var t=this.deepClone(u,this.config);for(var e in c)t.detail[e]=this.deepClone(c[e],t.detail[e]);void 0===t.axisTickLength||null===t.axisTickLength?t.axisTick instanceof Array||(t.axisTick=[t.axisTick]):t.axisTick=t.axisTick||[];for(var i=t.axisTickLength||t.axisTick.length||1,n=[].concat(t.axisTick),r=0,a=i;r<a;r++){var o=0==r?x:f;n[r]=n[r]||{},r>0&&!n[r].padding&&(n[r].padding=+n[r-1].width),n[r]=this.deepClone(o,n[r])}return t.axisTick=n,t},deepClone:function(t,e){var i={};return t=t||{},e=e||{},Object.assign(i,t,e),JSON.parse(JSON.stringify(i))}}};var g=d._export_sfc(h,[["render",function(t,e,i,n,r,a){return d.e({a:i.config.id,b:a._width+"px",c:a._width+"px",d:a._status},a._status?{e:d.t(a._dStatus?"在线":"离线"),f:a._dStatus?1:""}:{},{g:i.bgColor})}]]);wx.createComponent(g);