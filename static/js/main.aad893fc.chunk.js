(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{117:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(34),c=r.n(a),o=r(85),s=r(157),u=r(166),i=r(162),l=r(161),p=r(16),b=r.n(p),d=r(25),j=r(12),f=r(86),O=r(80),x=r(87),h=r(2),m=function(e){var t=e.raw;return Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:Object(O.sanitize)(Object(x.a)(t))}})},v=r(70),w=r(163),k=r(164),y=function(e){var t=e.repo,r=e.onSelected,a=Object(n.useState)(!0),c=Object(j.a)(a,2),o=c[0],s=c[1],u=Object(n.useState)([]),i=Object(j.a)(u,2),l=i[0],p=i[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,t.ls("public/list");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),s(!1)}),[t]),Object(h.jsx)(w.a,{autoHighlight:!0,autoSelect:!0,fullWidth:!0,getOptionLabel:function(e){return e.name.replace(/\.md$/,"")},options:l,renderInput:function(e){return Object(h.jsx)(k.a,Object(v.a)(Object(v.a)({},e),{},{placeholder:o?"Loading...":"Select a Recipe",sx:{"&.MuiOutlinedInput-root":{color:"primary.contrastText","& fieldset":{borderColor:"primary.contrastText"},"&:hover fieldset":{borderColor:"primary.contrastText"},"&.Mui-focused fieldset":{borderColor:"primary.contrastText"}}}}))},onChange:function(e,t){return r(t)}})},S=r(168),g=r(169),C=r(165),M=r(84),T=r.n(M),_=new f.a("deek80/recipes"),I=function(){var e=Object(n.useState)("No recipe selected"),t=Object(j.a)(e,2),r=t[0],a=t[1],c=function(){var e=Object(d.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.download_url);case 2:if((r=e.sent).ok){e.next=6;break}return console.error("Failed to fetch:",t.download_url),e.abrupt("return",null);case 6:return e.abrupt("return",r.text());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(d.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=3;break}return a("No recipe selected"),e.abrupt("return");case 3:return e.next=5,c(t);case 5:if(null!==(r=e.sent)){e.next=9;break}return a("Error: failed to download recipe"),e.abrupt("return");case 9:a(r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(S.a,{position:"sticky",children:Object(h.jsxs)(g.a,{children:[Object(h.jsx)(T.a,{sx:{mr:2}}),Object(h.jsx)(y,{repo:_,onSelected:o})]})}),Object(h.jsx)(C.a,{sx:{m:4},children:Object(h.jsx)(m,{raw:r})})]})},L=Object(o.a)({palette:{primary:{main:l.a[100]}}});L.components={MuiAutocomplete:{styleOverrides:{option:{"&.Mui-focused":{backgroundColor:Object(s.a)(L.palette.primary.dark,.5)+"!important"}}}}},c.a.render(Object(h.jsxs)(u.a,{theme:L,children:[Object(h.jsx)(i.a,{}),Object(h.jsx)(I,{})]}),document.querySelector("#root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.aad893fc.chunk.js.map