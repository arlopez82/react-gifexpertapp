(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n(7),i=n.n(c),s=n(2),u=n(9),j=function(t){var e=t.setCategorias,n=Object(r.useState)(""),c=Object(s.a)(n,2),i=c[0],j=c[1];return Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),e((function(t){return[i].concat(Object(u.a)(t))}))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(t){j(t.target.value)}})})},o=n(6),d=n.n(o),p=n(8),l=function(){var t=Object(p.a)(d.a.mark((function t(e){var n,a,r,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q= ".concat(encodeURI(e),"&api_key=NjKj3dD0UTaJXVaz4fLspkylZCuHkPMy&limit=10"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.img;return Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:e.url,alt:e.title}),Object(a.jsx)("p",{children:e.title})]})},b=function(t){var e=t.categoria,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){l(t).then((function(t){c({data:t,loading:!1})}))}),[t]),a}(e),c=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:e}),i&&Object(a.jsx)("p",{children:"Cargando"}),Object(a.jsx)("div",{className:"animate__animated animate__fadeIn animate__delay-2s",children:c.map((function(t){return Object(a.jsx)(f,{img:t},t.id)}))})]})},O=function(){var t=Object(r.useState)(["Naruto"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(j,{setCategorias:c}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(t){return Object(a.jsx)(b,{categoria:t,children:t},t)}))})]})};n(16);i.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6281369c.chunk.js.map