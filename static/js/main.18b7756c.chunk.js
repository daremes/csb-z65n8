(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(6),a=c.n(r),s=c(5),i=c(2),l=c(3),o=c.n(l),j=(c(12),c(0));function u(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(null),l=Object(i.a)(a,2),u=l[0],d=l[1],b=Object(n.useState)(""),h=Object(i.a)(b,2),O=h[0],x=h[1],p=Object(n.useState)(null),f=Object(i.a)(p,2),m=f[0],v=f[1],N=Object(n.useState)(!1),S=Object(i.a)(N,2),g=S[0],k=S[1],y=Object(n.useState)(!1),w=Object(i.a)(y,2),C=w[0],A=w[1],q=Object(n.useState)({fileName:"track.mp3",title:"track"}),L=Object(i.a)(q,2),z=L[0],M=L[1],R=function(){var e=Object(s.a)(o.a.mark((function e(){var t,c,n,a,s,i,l,j,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O){e.next=2;break}return e.abrupt("return");case 2:return A(!0),e.prev=3,e.next=6,fetch(O);case 6:return t=e.sent,e.next=9,t.text();case 9:c=e.sent,n=new DOMParser,a=n.parseFromString(c,"text/html"),(s=a.querySelector("picture > source"))&&(i=s.getAttribute("data-srcset"),d(i||"")),(l=a.querySelector(".sm2-playlist-wrapper"))?(j=Array.from(l.querySelectorAll("a")),u=j.map((function(e,t){var c=e.getAttribute("href").split("?uuid=")[0],n=e.querySelector("div > div").textContent;return{href:c,fileName:"".concat(String(t+1).padStart(2,"0"),"_").concat(n.replaceAll(/[: .]+/g,"-").toLowerCase()),title:n}})),r(u)):console.log("Nic!"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0);case 21:return e.prev=21,A(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[3,18,21,24]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Stahovadlo"}),C&&Object(j.jsx)("div",{className:"overlay",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"/skate.gif",alt:"loading..."})}),Object(j.jsx)("div",{className:"loading-text",children:"Mal\xfd moment. L\xe1duju to tam."})]})}),Object(j.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),R()},children:[Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"link",placeholder:"Vlo\u017e odkaz z Rozhlasu",type:"text",onChange:function(e){return x(e.target.value)}})}),Object(j.jsx)("button",{disabled:!O,type:"submit",onClick:R,children:"Na\u010d\xedst"})]}),!C&&c.length>0&&Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"preview",children:Object(j.jsx)("img",{srcSet:u,alt:"preview"})}),c.map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"item",children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("b",{children:"[".concat(t+1,"] ")}),e.title," "]}),Object(j.jsx)("button",{disabled:C,onClick:function(){!function(e,t,c){var n=function(){var n=Object(s.a)(o.a.mark((function n(){var r,a,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:return r=n.sent,n.next=5,r.blob();case 5:a=n.sent,s=URL.createObjectURL(a),M({title:c,fileName:t}),v(s),k(!0),A(!1);case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();A(!0),n()}(e.href,e.fileName,e.title)},children:" > "})]})},e.fileName)}))]}),g&&Object(j.jsx)("div",{className:"overlay",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("div",{className:"close",children:Object(j.jsx)("button",{onClick:function(){k(!1),v(null)},children:"Zav\u0159\xedt"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"title",children:z.title}),Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:m,onClick:function(){return k(!1)},download:"".concat(z.fileName,".mp3"),children:"St\xe1hnout track"})})]})]})})]})}var d=document.getElementById("root");a.a.render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(u,{})}),d)}},[[14,1,2]]]);
//# sourceMappingURL=main.18b7756c.chunk.js.map