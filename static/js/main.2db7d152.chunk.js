(this.webpackJsonptip_hookem=this.webpackJsonptip_hookem||[]).push([[0],{19:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(10),j=c.n(n),l=c(14),b=c(35),r=(c(19),c(11)),i=c.n(r),o=(c(24),c(1));var O=()=>Object(o.jsxs)("div",{className:"all",children:[Object(o.jsx)("div",{className:"text",children:"Signature"}),Object(o.jsx)("br",{}),Object(o.jsx)(i.a,{penColor:"orange",canvasProps:{width:"500%",height:"200%",className:"signature_pad"}})]});c(26);var d=e=>{let{onNumberSelect:t}=e;const[c,a]=Object(s.useState)("");Object(s.useEffect)((()=>{t(c)}),[c,t]);return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("input",{type:"text",value:c,readOnly:!0,className:"input",placeholder:"Enter number"}),Object(o.jsx)("div",{children:Object(o.jsx)("br",{})}),Object(o.jsx)("div",{className:"pad",children:["1","2","3","4","5","6","7","8","9",".","0","Clear"].map((e=>Object(o.jsx)("button",{onClick:()=>{var t;"Clear"===e?a(""):(t=e,a((e=>e+t)))},className:"numpadbutton",children:e},e)))})]})})};var u=()=>{const[e,t]=Object(s.useState)(!1),[c,a]=Object(s.useState)(!1),[n,j]=Object(s.useState)(""),l=e=>{j(e),r()},r=Object(s.useCallback)((()=>{t(!e),e&&alert(n+" was taken from your BevoBucks Account!")}),[t,e]),[i,u]=Object(s.useState)(""),x=Object(s.useCallback)((()=>{a(!c),c&&i&&alert("$"+i+" was taken from your BevoBucks Account!")}),[a,c,i]);let h=0;return Object(o.jsxs)("div",{className:"all",children:[e||c?null:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"text",children:"Leave a tip?"}),Object(o.jsx)("br",{}),Object(o.jsx)(b.a,{onClick:()=>l("$10"),className:"button",children:"15%"})," ",Object(o.jsx)(b.a,{onClick:()=>l("$20"),className:"button",children:"20%"})," ",Object(o.jsx)(b.a,{onClick:()=>l("$40"),className:"button",children:"25%"})," ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{children:[Object(o.jsx)(b.a,{onClick:x,className:"custom_button",children:"Custom"})," ",Object(o.jsx)("div",{children:Object(o.jsx)("br",{})}),Object(o.jsx)(b.a,{onClick:()=>{h+=1,3==h&&(h=0,alert("MOOOOO! TIP OR GET THE HORNS!"))},className:"custom_button2",children:"No Tip"})," "]})]}),e?Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(b.a,{onClick:r,className:"done_button",children:"Done"})]}):null,c?Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{onNumberSelect:e=>{u(e)}}),Object(o.jsx)("div",{children:Object(o.jsx)("br",{})}),Object(o.jsx)(b.a,{onClick:x,className:"done_button_custom",children:"Done"})]}):null,Object(o.jsx)("div",{className:"padding"})]})};j.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(u,{})})}),document.getElementById("react-root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.2db7d152.chunk.js.map