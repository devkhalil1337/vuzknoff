!function(){var e,t,n,r={863:function(e,t,n){"use strict";var r=n(791),o=n(250),i=n(689),u=(n(632),n(165)),c=n(413),a=n(861),f=n(439),s=n(321),d=n(755),l=(0,n(702).ZF)({apiKey:"AIzaSyDFS4SMZJd_W_pUQsOzbfOMjvigZFe8taI",authDomain:"magnetod4.firebaseapp.com",projectId:"magnetod4",storageBucket:"magnetod4.appspot.com",messagingSenderId:"623788883823",appId:"1:623788883823:web:05b2d78ff3793b50f5b29a",measurementId:"G-VM9EC1KG2Y"}),p=(0,s.ad)(l),h=n(184),v=function(){var e=(0,r.useState)(void 0),t=(0,f.Z)(e,2),n=t[0],o=t[1],i=(0,r.useState)(void 0),l=(0,f.Z)(i,2),v=l[0],b=l[1],m=(0,r.useState)(!1),g=(0,f.Z)(m,2),j=(g[0],g[1]),x=(0,r.useState)(!1),y=(0,f.Z)(x,2),O=y[0],Z=y[1],w=function(){var e=(0,a.Z)((0,u.Z)().mark((function e(t){var r,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.PL)((0,s.hJ)(p,"user_pages"));case 2:r=e.sent,o=r.docs.map((function(e){return(0,c.Z)((0,c.Z)({},e.data()),{},{id:e.id})})),0===o.filter((function(e){if(e.ip===n)return j(!0),b(e),e})).length&&_();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=(0,a.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==n){e.next=10;break}return e.t0=console,e.next=4,(0,d.zk)();case 4:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.next=8,(0,d.zk)();case 8:t=e.sent,o(t);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();S(),(0,r.useEffect)((function(){n&&(0,s.cf)((0,s.hJ)(p,"user_pages"),(function(e){var t=!1;e.docs.map((function(e){return(0,c.Z)((0,c.Z)({},e.data()),{},{id:e.id})})).filter((function(e){e.ip===n&&fetch("./data.json").then((function(e){return e.json()})).then((function(n){n.url_data.filter((function(n){if(n.id===e.number)return Z(n.url),void(t=!0)}))})).catch((function(e){console.log(e," error")}))})),t||Z(!1)}))}),[n]),(0,r.useEffect)((function(){}),[v,O]);var _=function(){var e=(0,a.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.ET)((0,s.hJ)(p,"user_pages"),{ip:n,number:-1});case 3:t=e.sent,console.log("Document written with ID: ",t.id),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error adding document: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){n&&w()}),[n]),O&&(window.location=O),(0,h.jsxs)("div",{children:["Please wait...",(0,h.jsx)("h1",{})]})},b=function(){return(0,h.jsx)("div",{className:"container",children:(0,h.jsx)(i.Z5,{children:(0,h.jsx)(i.AW,{path:"/contact/1003784549657034/d4",element:(0,h.jsx)(v,{})})})})},m=n(87);o.createRoot(document.getElementById("root13")).render((0,h.jsx)(r.StrictMode,{children:(0,h.jsx)(m.VK,{children:(0,h.jsxs)(i.Z5,{children:[(0,h.jsx)(i.AW,{path:"/contact/1003784549657034/d4",element:(0,h.jsx)(v,{})}),(0,h.jsx)(i.AW,{path:"/",element:(0,h.jsx)(b,{})})]})})}))},696:function(){}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.m=r,e=[],i.O=function(t,n,r,o){if(!n){var u=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var c=!0,a=0;a<n.length;a++)(!1&o||u>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[a])}))?n.splice(a--,1):(c=!1,o<u&&(u=o));if(c){e.splice(s--,1);var f=r();void 0!==f&&(t=f)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var u={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){u[t]=function(){return e[t]}}));return u.default=function(){return e},i.d(o,u),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,u=n[0],c=n[1],a=n[2],f=0;if(u.some((function(t){return 0!==e[t]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(a)var s=a(i)}for(t&&t(n);f<u.length;f++)o=u[f],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(s)},n=self.webpackChunkDemo=self.webpackChunkDemo||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var u=i.O(void 0,[60],(function(){return i(863)}));u=i.O(u)}();
//# sourceMappingURL=main.7c552268.js.map