(this["webpackJsonpclient-gallery"]=this["webpackJsonpclient-gallery"]||[]).push([[0],{113:function(e,n){},190:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t(0),r=t.n(c),s=t(22),i=t.n(s),l=t(32),o=(t(95),t(14)),d=t(81),p=t(82),x=t(88),j=t(86),u=t(4),b=t(5),h=t.n(b),m=t(10),O=t(19),g={albumIDs:{Campus:"pG2FFNwAcLiw8GS29","Tirutsava Day 1":"pZwkHfva5oemQWs46","Tirutsava Day 2":"ATQuaC3nKqfx1ByL8"},albumPreviews:{Campus:"https://picsum.photos/600/400","Tirutsava Day 1":"https://picsum.photos/600/400","Tirutsava Day 2":"https://picsum.photos/600/400"},maxWidth:"=w1024",previewWidth:"=w300"},f=t(25),v=t.n(f);var y=function(){var e=Object(m.a)(h.a.mark((function e(n){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()(Object.keys(n).map(function(){var e=Object(m.a)(h.a.mark((function e(t){var a,c,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t,c=n[t],e.prev=2,e.next=5,fetch("".concat("","/api/").concat(c));case 5:return r=e.sent,e.next=8,r.json();case 8:return s=e.sent,e.abrupt("return",{name:a,data:s});case 12:e.prev=12,e.t0=e.catch(2),console.error("Server data fetch failure: ".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}()));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=t(16),N=t(34),k=t.n(N),I=t(71),C=function(e){return I.findKey(g.albumIDs,(function(n){return n===e}))},D=function(e){var n=g.albumPreviews["".concat(e)];return n||g.albumPreviews["".concat(C(e))]},F=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"".concat(e).concat(n?g.previewWidth:g.maxWidth)},P=function(){var e=Object(m.a)(h.a.mark((function e(n){var t,a,c=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:parseInt(g.previewWidth.substring(2)),e.next=3,v()(n.map(function(){var e=Object(m.a)(h.a.mark((function e(n){var a,c,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Image).src=n+"=w10",e.next=4,a.decode();case 4:return c=a.height,r=a.width,s=c/r*t,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),T=t(89),A=t(35),W=t.n(A),L=t.p+"static/media/camera.39610b47.png";function M(){var e=Object(o.a)(["\n    // margin:15px 15px 30px 15px;\n    padding:0px !important;\n    margin: 0px !important;\n    // border-radius:10px;\n    background: \n    linear-gradient(\n    rgba(0, 0, 250, 0.25), \n    rgba(125, 250, 250, 0.45)\n    ),\n    url(https://source.unsplash.com/1600x1050/?nature);\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    color:white !important;\n    max-height:calc(100vh - 30px);\n"]);return M=function(){return e},e}function H(){var e=Object(o.a)(["\n   \n    // margin: 15px 15px 60px 30px;\n    border-radius:10px; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    \n    .setHeight{\n        margin: 5px 0px 15px 0px;\n        width: 100%;\n        padding-bottom: calc(67.67% - 20px);\n    }\n\n    .card-body{\n        padding:0px 5px 0px 5px;\n    }\n    .card-deck{\n        padding: 15px;\n        // padding:5px 8px 5px 8px;\n        border-radius:0px; \n        background-color: transparent;\n    }\n    .card{\n        margin: auto 16px auto 16px;\n        padding:0px 0px 0px 0px;\n        background-color: white;\n        border-radius:0px;\n    }\n    .card-img-top{\n        // padding:20px 0px 15px 0px;\n        padding: 5px 0px 15px 0px;\n        border-radius:0px;\n    }\n    .entireCard{\n        padding:10px 8px 20px 8px;\n        background-color: transparent;\n        color: black;\n        text-align: center;\n        margin:0px 0px 0px 0px;\n        transition: all 0.5s ease;\n    }\n    .entireCard:hover{\n        // box-shadow: 10px 10px 5px grey;\n        box-shadow:\n        0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n        0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n        0 12.5px 10px rgba(0, 0, 0, 0.06),\n        0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n        0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n        0 100px 80px rgba(0, 0, 0, 0.12);\n        \n        background-color: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));;\n        color: black;\n        text-align: center;\n        margin:0px 0px 0px 0px;\n        text-decoration: none;\n        transform: scale(1.02);\n    }\n    .title{\n        font-family: 'Permanent Marker', cursive;\n        text-decoration: none;\n    }\n"]);return H=function(){return e},e}var B=w.b.div(H()),S=w.b.div(M()),K=function(){var e=Object(c.useState)(!0),n=Object(O.a)(e,2),t=n[0],r=n[1],s=Object(c.useRef)(0),i=function(){s.current+=1,s.current>=Object.keys(g.albumIDs).length&&r(!1)};return Object(c.useEffect)((function(){Object(m.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=g.albumIDs,y(n);case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("header",{id:"header",className:"header",style:{backgroundColor:"#5f4def",padding:"15px 15px 0px 15px"},children:Object(a.jsxs)(S,{id:"home",className:"jumbotron",style:{position:"relative"},children:[Object(a.jsx)("img",{className:"img-fluid",style:{width:"100%",maxHeight:"calc(100vh - 30px)"},src:L,alt:"alternative"}),Object(a.jsx)("div",{className:"info2",children:Object(a.jsx)("div",{className:"circle red"})}),Object(a.jsx)("div",{className:"infoi",children:Object(a.jsx)("div",{className:"header-content",style:{height:"100%",display:"flex",alignItems:"center"},children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{style:{width:"100%",display:"flex",alignItems:"center"},children:Object(a.jsxs)("div",{className:"text-container",style:{width:"100%",padding:"10px 20px"},children:[Object(a.jsx)("p",{className:"hint",children:"Welcome to"}),Object(a.jsx)("p",{className:"logo",style:{textAlign:"center"},children:"PFC"}),Object(a.jsx)("p",{className:"hint",children:"Photography & Films Club, IIT Tirupati"})]})})})})})]})}),Object(a.jsxs)("svg",{className:"header-frame","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",viewBox:"0 0 1920 310",children:[Object(a.jsx)("defs",{children:Object(a.jsx)("style",{dangerouslySetInnerHTML:{__html:".cls-1{fill:#5f4def;}"}})}),Object(a.jsx)("title",{children:"header-frame"}),Object(a.jsx)("path",{className:"cls-1",d:"M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z"})]}),Object(a.jsx)(B,{children:Object(a.jsx)(T.a,{fluid:!0,children:Object(a.jsx)(k.a,{delay:100,className:"justify-content-center row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1",children:Object.keys(g.albumIDs).map((function(e,n){return Object(a.jsx)("div",{className:"card-deck",children:Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("a",{className:"entireCard",style:{display:"block"},href:"/gallery/".concat(g.albumIDs[e]),children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)(W.a,{style:{display:t?"block":"none"},className:"setHeight"}),Object(a.jsx)("img",{style:{display:t?"none":"block"},className:"card-img-top",src:D(e),alt:"Placeholder preview",onLoad:i}),Object(a.jsx)("h5",{className:"title",children:e})]})})})},n)}))})})}),Object(a.jsx)("footer",{id:"footer",className:"footer-area pt-120",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"footer-widget pb-100",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-8",children:Object(a.jsxs)("div",{className:"footer-about mt-50 wow fadeIn","data-wow-duration":"1s","data-wow-delay":"0.2s",children:[Object(a.jsx)("a",{className:"logo",href:"/logo",children:Object(a.jsx)("img",{src:"/assets/images/logo.png",alt:"logo"})}),Object(a.jsxs)("ul",{className:"social",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"# ",children:Object(a.jsx)("i",{className:"lni lni-facebook-filled"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"# ",children:Object(a.jsx)("i",{className:"lni lni-twitter-filled"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"# ",children:Object(a.jsx)("i",{className:"lni lni-instagram-filled"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"# ",children:Object(a.jsx)("i",{className:"lni lni-linkedin-original"})})})]})]})}),Object(a.jsx)("div",{className:"col-lg-4 col-md-7 col-sm-7"}),Object(a.jsx)("div",{className:"col-lg-3 col-md-5 col-sm-5",children:Object(a.jsx)("div",{className:"footer-contact mt-50 wow fadeIn","data-wow-duration":"1s","data-wow-delay":"0.8s",children:Object(a.jsxs)("div",{className:"cardc",style:{background:"#5f4def"},children:[Object(a.jsx)("h3",{style:{color:"white"},children:"Contact"}),Object(a.jsx)("p",{className:"cardc-text",children:"+91-"}),Object(a.jsx)("p",{className:"cardc-text",children:"pfc@iitp.ac.in"}),Object(a.jsx)("p",{className:"cardc-text",children:"Nischal K"}),Object(a.jsxs)("div",{className:"cardc-text",children:[Object(a.jsx)("p",{children:"Indian Institute of Technology Tirupati,"}),Object(a.jsx)("p",{children:"Venkatagiri Road , Yerpedu Mandal,"}),Object(a.jsx)("p",{children:"Chittoor - 517 619,"}),Object(a.jsx)("p",{children:"Andhra Pradesh, India."})]})]})})})]})}),Object(a.jsx)("div",{className:"footer-copyright",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-lg-12",children:Object(a.jsx)("div",{className:"copyright mx-auto",style:{textAlign:"center"},children:Object(a.jsx)("div",{className:"copyright-content",children:Object(a.jsxs)("p",{className:"text",children:["Built by ",Object(a.jsx)("a",{href:"# ",rel:"nofollow",children:"Fantastic Four"})]})})})})})})]})})]})},R=t(87),U=t(46),Y=t.n(U),_=t(47),z=t(40);function Q(){var e=Object(o.a)(["\n    background-color: white;\n    opacity: 1;\n    background-repeat: no-repeat;\n    height: 100%;\n    background-position: center;\n    background-size: cover;\n    overflow: hidden;\n    color: white;\n    font-weight: bold;\n    font-family: verdana;\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 0px 0px 5px #232323, -1px 1px 6px #acacac;\n    // url(https://lh3.googleusercontent.com/rUxRcUW34A3AUt6BCt7LrDXqR8xPQ1Dy1T5Qr3DAjbUUufMCiH6p_ThFiuK67xekyrK8aTsTDDCzW_tGP_hhnJaty5BpbrYm0LHvFONyVt-U4o3vW0zkLAFLYIPK4YWyMO0z5YFvcA);\n"]);return Q=function(){return e},e}function V(){var e=Object(o.a)(["\n    background-color: var(--color-primary);\n    // background-color: gray;\n    padding: 20px;\n    margin: 0;\n"]);return V=function(){return e},e}function E(){var e=Object(o.a)(["\n    .sticky {\n        position: sticky;\n        top: 0;\n        margin: 0;\n        padding: 50px;\n        height: 240px;\n        width: 100%;\n    }\n"]);return E=function(){return e},e}var G=t(71),J="",q=w.b.div(E()),Z=w.b.div(V()),X=w.b.div(Q()),$=function(){var e=Object(c.useState)([]),n=Object(O.a)(e,2),t=n[0],r=n[1],s=Object(c.useState)([]),i=Object(O.a)(s,2),l=i[0],o=i[1],d=Object(c.useState)([]),p=Object(O.a)(d,2),x=p[0],j=p[1],b=Object(u.e)().id,g=C(b);return Object(c.useEffect)((function(){Object(m.a)(h.a.mark((function e(){var n,t,a,c,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y([b]),e.next=4,n;case 4:return t=e.sent,a=G(t).filter((function(e){return"fulfilled"===e.status})).map("value").value(),c=Math.floor(Math.random()*a[0].data.length),e.next=9,P(a[0].data);case 9:r=e.sent,s=r.map((function(e){return e.value})),j(s),J=a[0].data[c],o(a);case 14:case"end":return e.stop()}}),e)})))()}),[b]),Object(a.jsx)(q,{children:Object(a.jsxs)(_.ParallaxProvider,{children:[Object(a.jsx)(X,{className:"sticky",style:{backgroundImage:"linear-gradient(\n                rgba(0, 0, 0, 0.55), \n                rgba(0, 0, 0, 0.55)\n                ),\n                url(".concat(J,")")},children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("h1",{className:"display-2",children:Object(a.jsx)("b",{children:g})})})}),Object(a.jsx)(_.Parallax,{y:[0,0],children:Object(a.jsx)(Z,{children:Object(a.jsx)(z.a,{children:Object(a.jsx)(U.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,750:2,900:3},children:l.map((function(e){var n=e.data;return Object(a.jsx)(Y.a,{gutter:"15px",children:n.map((function(e,n){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(W.a,{style:{display:t[n]?"none":"block",paddingBottom:"".concat(1.2*x[n],"px"),width:"100%"}},"skeleton"+n),Object(a.jsx)("a",{href:F(e,!1),children:Object(a.jsx)("img",{alt:"".concat(g,"#").concat(n),style:{width:"100%",display:t[n]?"block":"none"},src:F(e,!0),onLoad:function(){return function(e){var n=Object(R.a)(t);n[e]=!0,r(n)}(n)}},n)})]})}))})}))},x.length)})})})]})})},ee=t(85);function ne(){var e=Object(o.a)(["\n  html {\n    --color-primary: #F2F2F2;\n    --color-accent: #F75743;\n  }\n"]);return ne=function(){return e},e}var te=function(e){Object(x.a)(t,e);var n=Object(j.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"outer-container",className:"App",style:{background:"var(--color-primary)",height:"100%"},children:[Object(a.jsx)(ae,{}),Object(a.jsx)(ee.stack,{pageWrapId:"page-wrap",outerContainerId:"outer-container",children:Object(a.jsxs)("a",{href:"/",className:"menu-item",tabIndex:"0",children:[Object(a.jsx)("i",{className:"lni lni-home"}),Object(a.jsx)("span",{children:"Home"})]})}),Object(a.jsx)("div",{id:"page-wrap",style:{height:"100%"},children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/gallery/:id",component:$}),Object(a.jsx)(u.a,{exact:!0,path:"/",component:K})]})})]})}}]),t}(c.Component),ae=Object(w.a)(ne());t(189);i.a.render(Object(a.jsx)(l.a,{children:Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(z.b,{children:Object(a.jsx)(te,{})})})}),document.getElementById("root"))},95:function(e,n,t){}},[[190,1,2]]]);
//# sourceMappingURL=main.2a139cd2.chunk.js.map