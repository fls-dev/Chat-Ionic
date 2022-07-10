"use strict";(self["webpackChunkmyApp"]=self["webpackChunkmyApp"]||[]).push([[990],{8990:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>i});var r=n(6587),s=n(545),a=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=(t,e,n,i,o)=>{const c=t.ownerDocument.defaultView,u=(0,s.i)(t),h=t=>{const e=50,{startX:n}=t;return u?n>=c.innerWidth-e:n<=e},l=t=>u?-t.deltaX:t.deltaX,d=t=>u?-t.velocityX:t.velocityX,p=t=>h(t)&&e(),k=t=>{const e=l(t),n=e/c.innerWidth;i(n)},w=t=>{const e=l(t),n=c.innerWidth,s=e/n,a=d(t),i=n/2,u=a>=0&&(a>.2||e>i),h=u?1-s:s,p=h*n;let k=0;if(p>5){const t=p/Math.abs(a);k=Math.min(t,540)}o(u,s<=0?.01:(0,r.j)(0,s,.9999),k)};return(0,a.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:n,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=990.5bab669f.js.map