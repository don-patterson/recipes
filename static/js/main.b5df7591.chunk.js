(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{118:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(33),a=r.n(c),o=r(88),i=r(159),s=r(169),u=r(164),l=r(163),p=r(21),b=r.n(p),d=r(34),j=r(12),O=r(172),x=r(173),f=r(170),h=r(168),m=r(87),v=r.n(m),w=r(86),g=r.n(w),y=r(89),k=r(70),S=r(165),C=r(166),L=r(2),M=function(e){var t=e.options,r=e.getLabel,n=e.placeholder,c=e.onSelected;return Object(L.jsx)(S.a,{autoHighlight:!0,autoSelect:!0,blurOnSelect:!0,clearOnBlur:!0,fullWidth:!0,openOnFocus:!0,getOptionLabel:r,options:t,renderInput:function(e){return Object(L.jsx)(C.a,Object(k.a)(Object(k.a)({},e),{},{placeholder:t.length?n:"Loading...",sx:{"&.MuiOutlinedInput-root":{color:"primary.contrastText","& fieldset":{borderColor:"primary.contrastText"},"&:hover fieldset":{borderColor:"primary.contrastText"},"&.Mui-focused fieldset":{borderColor:"primary.contrastText"}}}}))},onChange:function(e,t,r){return"blur"===r&&c(t)},ListboxProps:{sx:{maxHeight:"75vh"}}})},T=r(85),H=r(90),I=function(e){var t=e.raw;return Object(L.jsx)("div",{dangerouslySetInnerHTML:{__html:Object(T.sanitize)(Object(H.a)(t))}})},_=new y.a("don-patterson/recipes"),E=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(null),o=Object(j.a)(a,2),i=o[0],s=o[1],u=Object(n.useState)("No recipe selected"),l=Object(j.a)(u,2),p=l[0],m=l[1];Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,_.ls("public/list");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[_]);var w=function(){var e=Object(d.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=4;break}return s(null),m("No recipe selected"),e.abrupt("return");case 4:return s(t.edit_url),e.next=7,t.download();case 7:if(null!==(r=e.sent)){e.next=11;break}return m("Error: failed to download recipe"),e.abrupt("return");case 11:m(r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(O.a,{position:"sticky",children:Object(L.jsxs)(x.a,{children:[Object(L.jsx)(g.a,{sx:{mr:2}}),Object(L.jsx)(M,{options:r,getLabel:function(e){return e.name.replace(/\.md$/,"")},onSelected:w,placeholder:"Select a Recipe"}),Object(L.jsx)(f.a,{color:"inherit",disabled:!i,onClick:function(){window.open(i)},sx:{ml:2,p:0},children:Object(L.jsx)(v.a,{})})]})}),Object(L.jsx)(h.a,{sx:{m:4},children:Object(L.jsx)(I,{raw:p})})]})},F=Object(o.a)({palette:{primary:{main:l.a[100]}}});F.components={MuiAutocomplete:{styleOverrides:{option:{"&.Mui-focused":{backgroundColor:Object(i.a)(F.palette.primary.dark,.5)+"!important"}}}}},a.a.render(Object(L.jsxs)(s.a,{theme:F,children:[Object(L.jsx)(u.a,{}),Object(L.jsx)(E,{})]}),document.querySelector("#root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.b5df7591.chunk.js.map