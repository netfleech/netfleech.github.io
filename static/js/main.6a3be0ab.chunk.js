(this.webpackJsonpnetfleech=this.webpackJsonpnetfleech||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/netf.61f12706.svg"},26:function(e,t,a){e.exports=a.p+"static/media/leech.b5ad0c82.svg"},31:function(e,t,a){e.exports=a(47)},36:function(e,t,a){},41:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),o=a(10),l=a(9),i=a(11),m=a(12),u=a(22),p=function(){function e(){Object(m.a)(this,e),this.digits=void 0,this.digitsMap=void 0;this.digits="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ+-".split(""),this.digitsMap=new Map;for(var t=0;t<this.digits.length;t++)this.digitsMap.set(this.digits[t],t)}return Object(u.a)(e,[{key:"fromInt",value:function(e,t){for(var a="";a=this.digits[63&e]+a,0!==(e>>>=6););return t&&(a=a.padStart(t,this.digits[0])),a}},{key:"toInt",value:function(e){for(var t=0,a=0;a<e.length;a++)t=(t<<6)+(this.digitsMap.get(e[a])||0);return t}}]),e}(),h=[new function e(){Object(m.a)(this,e),this.name="Netflix",this.startDate=new Date("2013-08-01"),this.pricePerPersonInEur=2.798},new function e(){Object(m.a)(this,e),this.name="Spotify",this.startDate=new Date("2014-10-01"),this.pricePerPersonInEur=7.99/6}];var d=new p,f=function(e){var t=e.result,a=Object(n.useState)(),c=Object(i.a)(a,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){try{o(function(e){if(!e)throw new Error("result params is empty!");if(e.length%3!==0)throw new Error("result param length is invalid - not multiple of ".concat(3));for(var t=e.length/3,a=[],n=0;n<t;n++){var r=3*n,c=e.substr(r,3);try{var s=E(c);a.push(s)}catch(o){console.log("Couldn't parse item: ".concat(c),o)}}return console.log("parsedItems",a),a}(t))}catch(e){console.log("Result error",e)}}),[t]),r.a.createElement("div",{className:"App row p-3"},r.a.createElement("div",{className:"col App-header"},r.a.createElement("p",null,"Result:"),s&&s.map((function(e,t){return r.a.createElement("div",{key:e.encoded},r.a.createElement("pre",{style:{textAlign:"left",backgroundColor:"gray",borderRadius:"25px",padding:"10px"}},JSON.stringify(e,null,2)))}))))};function E(e){var t=e.charAt(0),a=e.substr(1,2),n=d.toInt(t),r=d.toInt(a);console.log("Decode params:",{serviceTypeX64:t,serviceTypeId:n,monthsElapsedX64:a,monthsElapsed:r});var c=function(e){var t=h[e];if(!t)throw new Error("ServiceType not found by ID: ".concat(e));return t}(n);return{encoded:e,serviceTypeId:n,serviceType:c,monthsElapsed:r,price:r*c.pricePerPersonInEur,startDate:v(r)}}function v(e){var t=new Date;return t.setMonth(-e),t.setHours(0,0,0,0),t}a(36),a(49),a(24),a(30),a(29),a(37),new p;var g=function(){},b=a(25),w=a.n(b),y=a(26),N=a.n(y);a(41);var x=function(){return r.a.createElement(o.a,null,r.a.createElement("header",null,r.a.createElement("div",{className:"header-logo center"},r.a.createElement("img",{src:w.a,className:"netf",alt:"netf"}),r.a.createElement("img",{src:N.a,className:"leech",alt:"leech"}),r.a.createElement("p",{className:"header-text"},"Free streaming budget calculator"))),r.a.createElement("div",{className:"body"},r.a.createElement(o.b,{exact:!0,to:"/",className:"m-1"},"Home"),r.a.createElement(o.b,{exact:!0,to:"/create",className:"m-1"},"Create"),r.a.createElement("span",{className:"m-2"},"Tests:"),r.a.createElement(o.b,{exact:!0,to:"/a3f",className:"m-1"},"/a3f"),r.a.createElement(o.b,{exact:!0,to:"/b52",className:"m-1"},"/b52"),r.a.createElement(o.b,{exact:!0,to:"/aaZb52",className:"m-1"},"/aaZb52"),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/create",component:function(){return r.a.createElement(g,null)}}),r.a.createElement(l.a,{path:"/:result([\\w+-]{3,})",component:function(e){var t,a;return r.a.createElement(f,{result:null===(t=e.match)||void 0===t||null===(a=t.params)||void 0===a?void 0:a.result})}}),r.a.createElement(l.a,{path:"/"},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-description row d-flex justify-content-center"},r.a.createElement("p",{className:"col-md-4"},"Ever wondered how much you ",r.a.createElement("span",{className:"highlight"},"spent")," on streaming?"),r.a.createElement("div",{className:"w-100"}),r.a.createElement("p",{className:"col-md-4"},"Calculate for free your Netflix, Spotify, HBO Go or other streaming service budgets with Netfleech.")))))),r.a.createElement("footer",null,r.a.createElement("p",{className:"center"},'build: "',"166515b1",'"'),r.a.createElement("p",null,r.a.createElement("span",null,"Photo by ",r.a.createElement("a",{href:"https://unsplash.com/@wesleyphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Wesley Tingey")," on ",r.a.createElement("a",{href:"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45),a(46);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.6a3be0ab.chunk.js.map