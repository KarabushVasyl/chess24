(this.webpackJsonpchess24=this.webpackJsonpchess24||[]).push([[0],{14:function(e,t,c){e.exports={header:"Header_header__37xgG",header__row:"Header_header__row__3yl-2",header__logo:"Header_header__logo__2qmgN"}},23:function(e,t,c){e.exports={controllers__container:"Main_controllers__container__3-few",reset__button:"Main_reset__button__tuoSf"}},34:function(e,t,c){e.exports={list__item_text:"ListMoreDetails_list__item_text__2EeQ2"}},42:function(e,t,c){},43:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(15),r=c.n(n),s=(c(42),c(2)),a=(c(43),c(14)),o=c.n(a),_=c(1),l=function(e){return Object(_.jsx)("header",{className:o.a.header,children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:o.a.header__row,children:[Object(_.jsx)("div",{className:o.a.header__logo,children:"Logo"}),Object(_.jsx)("div",{className:o.a.header__phone,children:"Mobile phone"})]})})})},j=c(34),d=c.n(j),b=c(11),h=c(13),u=Object(h.b)(Object(b.b)((function(e){return{list:e.mainList.list}}),{}),s.g)((function(e){var t=e.match.params.id;return Object(_.jsx)("div",{className:"container",children:Object(_.jsx)("div",{className:d.a.list__item_text,children:e.list[t]})})})),x=c(22),m=c.n(x),O=c(36),f=c(23),v=c.n(f),p=c(37).create({baseURL:"https://baconipsum.com/api/?type=meat-and-filler"}),w=function(){return p.get("").then((function(e){return e.data}))},g=c(17),L=c(9),N=c.n(L),k=function(e){var t;return null===(t=e.items)||void 0===t?void 0:t.map((function(e,t){var c=null===e||void 0===e?void 0:e.split(". ",1);return Object(_.jsxs)("div",{className:N.a.list__item,children:[Object(_.jsx)("div",{className:N.a.list__item_text,children:c}),Object(_.jsx)("div",{className:N.a.list__item_button,children:Object(_.jsxs)(g.b,{className:N.a.arrow__circle,to:"/details/".concat(t),children:["More details",Object(_.jsx)("svg",{className:N.a.arrow__circle_icon,xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:Object(_.jsxs)("g",{fill:"none",stroke:"#6b8fff",strokeWidth:"1.5",strokeLinejoin:"round",strokeMiterlimit:"10",children:[Object(_.jsx)("circle",{className:N.a.arrow__circle_iconCircle,cx:"16",cy:"16",r:"15.12"}),Object(_.jsx)("path",{className:N.a.arrow_circle__iconArrow,d:"M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"})]})})]})})]},t)}))},M=c(24),C=c(25),y="SET_LIST",E={list:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type===y?Object(C.a)(Object(C.a)({},e),{},{list:[].concat(Object(M.a)(e.list),Object(M.a)(t.list))}):e},H=Object(b.b)((function(e){return{list:e.mainList.list}}),{setList:function(e){return{type:y,list:e}}})((function(e){return Object(i.useEffect)(Object(O.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0===e.list.length&&w().then((function(t){return e.setList(t)}));case 1:case"end":return t.stop()}}),t)}))),[]),Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(k,{items:e.list}),Object(_.jsx)("div",{className:v.a.controllers__container,children:Object(_.jsx)("button",{className:v.a.reset__button,onClick:function(){w().then((function(t){return e.setList(t)}))},children:"More"})})]})})}));var J=Object(s.g)((function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(l,{}),Object(_.jsx)("div",{children:Object(_.jsxs)(s.d,{children:[Object(_.jsx)(s.b,{path:"/",exact:!0,children:Object(_.jsx)(s.a,{to:"/main"})}),Object(_.jsx)(s.b,{path:"/chess24",exact:!0,children:Object(_.jsx)(s.a,{to:"/main"})}),Object(_.jsx)(s.b,{path:"/main",render:function(){return Object(_.jsx)(H,{})}}),Object(_.jsx)(s.b,{path:"/details/:id?",render:function(){return Object(_.jsx)(u,{})}})]})})]})})),B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),r(e),s(e)}))},P=Object(h.a)({mainList:F}),S=Object(h.c)(P),T=S;window.store=S,r.a.render(Object(_.jsx)(g.a,{children:Object(_.jsx)(b.a,{store:T,children:Object(_.jsx)(J,{})})}),document.getElementById("root")),B()},9:function(e,t,c){e.exports={list__item:"List_list__item__JrkGP",list__item_button:"List_list__item_button__JZB2H",arrow__circle:"List_arrow__circle__2PJ7h",arrow__circle_icon:"List_arrow__circle_icon__K7Elw",arrow__circle_iconCircle:"List_arrow__circle_iconCircle__Ern4H"}}},[[70,1,2]]]);
//# sourceMappingURL=main.16fe4640.chunk.js.map