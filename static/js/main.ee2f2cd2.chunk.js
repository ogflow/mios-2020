(this["webpackJsonpmios-website"]=this["webpackJsonpmios-website"]||[]).push([[0],{37:function(e,t,a){e.exports=a(78)},47:function(e,t,a){},48:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),s=a(11),o=(a(46),a(47),a(18)),i=a(36),m={assets:null,projects:null,home:null,offices:null,aboutUs:null,teamMembers:null,contact:null,services:null},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ASSETS":return Object.assign({},e,{assets:t.payload});case"GET_HOME_PAGE":return Object.assign({},e,{home:t.payload});case"GET_OFFICES":return Object.assign({},e,{offices:t.payload});case"GET_ABOUT_US_PAGE":return Object.assign({},e,{aboutUs:t.payload});case"GET_TEAM_MEMBERS":return Object.assign({},e,{teamMembers:t.payload});case"GET_CONTACT_PAGE":return Object.assign({},e,{contact:t.payload});default:return e}},f=Object(o.c)(u,Object(o.a)(i.a)),d=a(9),E=a(10),p=a(13),h=a(12),b=a(3),v=a(2),g=(a(48),a(15)),y=a.n(g),O="95z9rp3tvig7";y.a.defaults.baseURL="https://cdn.contentful.com",y.a.defaults.headers.common.Authorization="Bearer ".concat("I8cuB1T0wFgNt166CxthT_37hYJCZ0wW9WBt9zvsfSo");var N={getAssets:function(){return y.a.get("/spaces/".concat(O,"/environments/").concat("master","/assets")).then((function(e){return e.data.items}))},getHomePage:function(){return y.a.get("/spaces/".concat(O,"/environments/").concat("master","/entries/").concat("6MuhwTeJiNrUvzedcC0SQY")).then((function(e){return e.data.fields}))},getOffices:function(){return y.a.get("/spaces/".concat(O,"/environments/").concat("master","/entries?content_type=officeItem")).then((function(e){return e.data.items}))},getAbousUsPage:function(){return y.a.get("/spaces/".concat(O,"/environments/").concat("master","/entries/").concat("1f9tcPCs97tuqaz24wC0x7")).then((function(e){return e.data.fields}))},getTeamMembers:function(){return y.a.get("/spaces/".concat(O,"/environments/").concat("master","/entries?content_type=teamMember")).then((function(e){return e.data.items}))},getContactPage:function(){return y.a.get("/spaces/".concat(O,"/environments/").concat("master","/entries/").concat("4aq9l0ubiQYzLPKFHnbtgP")).then((function(e){return e.data.fields}))}};var C={findAsset:function(e,t){if(e&&e.length)return e.find((function(e){return e.sys&&e.sys.id?e.sys.id===t.sys.id:null}))},returnPromise:function(e){return new Promise((function(t,a){t(e)}))},renderPlainTextParagraphs:function(e){return e.content.map((function(e,t){var a;return e.content.forEach((function(e,t){"text"===e.nodeType&&(a+=e.value)})),r.a.createElement("p",{key:t},a)}))}},j=(a(66),function(e){var t=e.children;return r.a.createElement("button",Object.assign({className:"button"},e),r.a.createElement("span",null,t))}),k=a(5),T=(a(67),function(e){var t=e.label,a=e.name,c=e.options,l=e.required,s=Object(n.useState)(!1),o=Object(k.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)(null),f=Object(k.a)(u,2),d=f[0],E=f[1],p=Object(n.useRef)();return r.a.createElement("div",{className:"dropdown"+(i?" is-focused":"")},r.a.createElement("div",{className:"text-field"+(d?" has-value":"")+(i?" is-focused":"")},r.a.createElement("p",{className:"label text-caption"},t),r.a.createElement("p",{className:"placeholder"},t),r.a.createElement("div",{className:"select",onClick:function(e){!1===i&&document.addEventListener("click",(function(){m(!1)}),{once:!0}),m(!i)}},d),r.a.createElement("div",{className:"border"})),r.a.createElement("ul",{className:"option-list"},c.map((function(e,t){var a=e===d;return r.a.createElement("li",{className:"option"+(a?" is-selected":""),onClick:function(){return function(e){m(!1),E(e),p.current.value=e}(e)},key:t},e)}))),r.a.createElement("select",{required:!!l,name:a,ref:p},r.a.createElement("option",null),c.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))});a(68);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var S=r.a.createElement("title",null,"Group Copy 2"),w=r.a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Desktop-/-Footer",transform:"translate(-105.000000, -61.000000)",fill:"#444444",fillRule:"nonzero"},r.a.createElement("g",{id:"Group-Copy-2",transform:"translate(105.000000, 61.000000)"},r.a.createElement("path",{d:"M9.32502653,25 C11.0928531,25 12.632723,25.3736174 13.9446364,26.1208522 C15.2565498,26.868087 16.2660718,27.9433761 16.9732024,29.3467195 C17.680333,30.7500628 18.0338983,32.399447 18.0338983,34.2948718 C18.0338983,36.1902966 17.680333,37.8396807 16.9732024,39.2430241 C16.2660718,40.6463675 15.2565498,41.7216566 13.9446364,42.4688914 C12.632723,43.2161262 11.0928531,43.5897436 9.32502653,43.5897436 C7.55719999,43.5897436 6.02198221,43.2161262 4.71937318,42.4688914 C3.41676415,41.7216566 2.41189433,40.6463675 1.70476372,39.2430241 C0.997633104,37.8396807 0.644067797,36.1902966 0.644067797,34.2948718 C0.644067797,32.399447 0.997633104,30.7500628 1.70476372,29.3467195 C2.41189433,27.9433761 3.41676415,26.868087 4.71937318,26.1208522 C6.02198221,25.3736174 7.55719999,25 9.32502653,25 Z M9.38185444,27.5450244 C7.65104686,27.5450244 6.29245597,28.1371163 5.30608175,29.3213 C4.31970754,30.5054838 3.82652044,32.163341 3.82652044,34.2948718 C3.82652044,36.4264025 4.31970754,38.0842598 5.30608175,39.2684435 C6.29245597,40.4526273 7.65104686,41.0447192 9.38185444,41.0447192 C11.1312728,41.0447192 12.4991692,40.4526273 13.4855434,39.2684435 C14.4719176,38.0842598 14.9651047,36.4264025 14.9651047,34.2948718 C14.9651047,32.163341 14.4719176,30.5054838 13.4855434,29.3213 C12.4991692,28.1371163 11.1312728,27.5450244 9.38185444,27.5450244 Z",id:"Combined-Shape"}),r.a.createElement("path",{d:"M30.8775757,50 C32.2858117,50 33.5270453,49.7858534 34.6012766,49.3575603 C35.6755079,48.9292672 36.5105196,48.3141654 37.1063118,47.5122549 C37.7021039,46.7103444 38,45.7808572 38,44.7237934 C38,43.7396305 37.7833483,42.9149384 37.3500449,42.2497172 C36.9167415,41.584496 36.2261643,41.0286262 35.2783131,40.5821078 C34.330462,40.1355895 33.0531197,39.7665284 31.4462864,39.4749246 C29.7311272,39.1650955 28.5395429,38.7960344 27.8715335,38.3677413 C27.2035241,37.9394482 26.8695194,37.3607969 26.8695194,36.6317873 C26.8695194,35.8481021 27.2125513,35.2056624 27.8986149,34.7044683 C28.5846786,34.2032743 29.5505841,33.9526772 30.7963313,33.9526772 C32.0601328,33.9526772 33.071174,34.1987179 33.829455,34.6907994 C34.5877359,35.1828808 35.2196366,35.9756787 35.7251573,37.0691931 L35.7251573,37.0691931 L37.9187556,35.0735294 C37.1243661,33.8342132 36.1449199,32.9138386 34.9804171,32.3124057 C33.8159142,31.7109729 32.4121918,31.4102564 30.7692498,31.4102564 C29.3610139,31.4102564 28.1288074,31.6562971 27.0726304,32.1483786 C26.0164534,32.64046 25.2085231,33.3056812 24.6488396,34.1440422 C24.0891561,34.9824032 23.8093143,35.9118904 23.8093143,36.9325038 C23.8093143,37.8984414 24.0304796,38.7185772 24.4728101,39.392911 C24.9151406,40.0672448 25.6237722,40.6322272 26.5987048,41.0878582 C27.5736374,41.5434892 28.8825747,41.9262192 30.5255167,42.2360483 C32.1684587,42.5458773 33.3194208,42.9012695 33.978403,43.3022247 C34.6373852,43.70318 34.9668763,44.2317119 34.9668763,44.8878205 C34.9668763,45.7079563 34.6012766,46.3412833 33.8700772,46.7878017 C33.1388777,47.23432 32.1323501,47.4575792 30.8504942,47.4575792 C29.4964212,47.4575792 28.3635134,47.2024258 27.4517708,46.6921192 C26.5400283,46.1818125 25.7952881,45.379902 25.2175503,44.2863876 L25.2175503,44.2863876 L23.1864407,46.336727 C24.6849482,48.778909 27.2486599,50 30.8775757,50 Z",id:"Path"}),r.a.createElement("polygon",{id:"Path",points:"2.73943503 17.3076923 2.73943503 7.29020979 2.51806654 2.51748252 2.5457376 2.51748252 8.10762084 17.3076923 10.5703453 17.3076923 16.1322285 2.51748252 16.1598996 2.51748252 15.9662021 7.29020979 15.9662021 17.3076923 18.6779661 17.3076923 18.6779661 0 14.3612806 0 10.7087006 10.0174825 9.4081607 14.1346154 9.35281858 14.1346154 8.07994978 10.0174825 4.39969868 0 0 0 0 17.3076923"}),r.a.createElement("polygon",{id:"Path",points:"31.559322 25 31.559322 7.05128205 28.9830508 7.05128205 28.9830508 25"})))),A=function(e){var t=e.svgRef,a=e.title,n=P(e,["svgRef","title"]);return r.a.createElement("svg",x({width:"38px",height:"50px",viewBox:"0 0 38 50",ref:t},n),void 0===a?S:a?r.a.createElement("title",null,a):null,w)},M=r.a.forwardRef((function(e,t){return r.a.createElement(A,x({svgRef:t},e))}));a.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var G=r.a.createElement("title",null,"Group Copy"),I=r.a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Desktop-/-Footer",transform:"translate(-1285.000000, -57.000000)",stroke:"#444444"},r.a.createElement("g",{id:"Group-Copy",transform:"translate(1285.000000, 57.000000)"},r.a.createElement("circle",{id:"Oval",cx:25,cy:25,r:24.5}),r.a.createElement("path",{d:"M19,23.2997271 L25.3813588,17 L31.8360888,23.2997271 M25.4180444,17 L25.4180444,33.6897823",id:"Combined-Shape"})))),R=function(e){var t=e.svgRef,a=e.title,n=L(e,["svgRef","title"]);return r.a.createElement("svg",_({width:"50px",height:"50px",viewBox:"0 0 50 50",ref:t},n),void 0===a?G:a?r.a.createElement("title",null,a):null,I)},F=r.a.forwardRef((function(e,t){return r.a.createElement(R,_({svgRef:t},e))})),U=(a.p,function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){var e=B.map((function(e){return r.a.createElement("li",{key:e.href},r.a.createElement("a",{href:e.href},e.name))})),t="/mios-2020";return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"logotype"},r.a.createElement(b.b,{to:t},r.a.createElement(M,null))),r.a.createElement("div",{className:"contacts"},r.a.createElement("h3",{className:"text-subheading"},"Mios Agency"),r.a.createElement("p",{className:"text-caption"},r.a.createElement("a",{href:"tel:+358451235678"},"+358 45 123 56 78")),r.a.createElement("p",{className:"text-caption"},r.a.createElement("a",{href:"mailto:hello@mios.fi"},"hello@mios.fi"))),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",{className:"menu-links text-h2"},r.a.createElement("li",null,r.a.createElement(b.b,{to:t+"/services"},"Services")),r.a.createElement("li",null,r.a.createElement(b.b,{to:t+"/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement(b.b,{to:t+"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(b.b,{to:t+"/about"},"About")))),r.a.createElement("div",{className:"aside-block"},r.a.createElement("div",{className:"scroll-trigger",onClick:this.scrollToPageTop},r.a.createElement(F,null)),r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("span",{className:"text-caption"},"\xa9 Mios Agency. All Rights Reserved")))}},{key:"scrollToPageTop",value:function(){window.scroll({top:0,behavior:"smooth"})}}]),a}(r.a.Component)),B=[{name:"Instagram",href:"https://instagram.com"},{name:"Facebook",href:"https://facebook.com"},{name:"LinkedIn",href:"https://linkedin.com"},{name:"Behance",href:"https://behance.com"}],q=U,H=(a(70),function(e){var t=e.isBlack,a="/mios-2020";return r.a.createElement("header",{className:"header "+(t?"is-black":"")},r.a.createElement("div",{className:"logotype"},r.a.createElement(b.b,{to:a},r.a.createElement(M,null))),r.a.createElement("nav",{className:"menu"},r.a.createElement("ul",{className:"menu-links text-label text-uppercase"},r.a.createElement("li",null,r.a.createElement(b.b,{to:a+"/services"},"Services")),r.a.createElement("li",null,r.a.createElement(b.b,{to:a+"/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement(b.b,{to:a+"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(b.b,{to:a+"/about"},"About")))))});a(71);var z=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={isLoaded:!1},n}return Object(E.a)(a,[{key:"render",value:function(){var e=this.state.isLoaded,t=this.props,a=t.assets,n=t.offices,c=t.officesRefs;return e?r.a.createElement(D,{data:n,officesRefs:c,assets:a}):r.a.createElement("p",null,"is loading.....")}},{key:"componentDidMount",value:function(){var e=this;(0,this.props.getOffices)().then((function(){e.setState({isLoaded:!0})}))}}]),a}(r.a.Component),D=function(e){var t=e.data,a=e.officesRefs,n=e.assets;return r.a.createElement("div",{className:"offices-list"},a.map((function(e){var a=C.findAsset(t,e);if(!a)return null;var c=C.findAsset(n,a.fields.mapImage),l=a.fields,s=l.title,o=l.mapLinkUrl,i=l.fullAddress;return a&&c&&r.a.createElement("div",{className:"office",key:a.sys.id},r.a.createElement("a",{className:"map-image",href:o,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:c.fields.file.url,alt:c.fields.title})),r.a.createElement("p",{className:"text-h2"},s),r.a.createElement("div",{className:"divider"}),i.content.map((function(e){return r.a.createElement("p",{key:e.content[0].value},e.content[0].value)})))})))},W=Object(s.b)((function(e){return{assets:e.assets,offices:e.offices}}),{getOffices:function(){return function(e,t){var a=t().offices;return a?C.returnPromise(e({type:"GET_OFFICES",payload:a})):N.getOffices().then((function(t){e({type:"GET_OFFICES",payload:t})}))}}})(z),J=(a(72),function(e){var t=e.label,a=e.name,c=e.required,l=e.rows,s=void 0===l?6:l,o=Object(n.useState)(!1),i=Object(k.a)(o,2),m=i[0],u=i[1],f=Object(n.useState)(""),d=Object(k.a)(f,2),E=d[0],p=d[1];return r.a.createElement("div",{className:"text-field text-area"+(m?" is-focused":"")+(E.length?" has-value":"")},r.a.createElement("p",{className:"label text-caption"},t),r.a.createElement("p",{className:"placeholder"},t),r.a.createElement("textarea",{name:a,required:!!c,rows:s,onFocus:function(){return u(!0)},onBlur:function(){return u(!1)},onInput:function(e){return p(e.target.value)}}))}),Z=(a(73),function(e){var t=e.label,a=e.name,c=e.required,l=e.autocomplete,s=void 0===l?"off":l,o=Object(n.useState)(!1),i=Object(k.a)(o,2),m=i[0],u=i[1],f=Object(n.useState)(""),d=Object(k.a)(f,2),E=d[0],p=d[1];return r.a.createElement("div",{className:"text-field"+(m?" is-focused":"")+(E.length?" has-value":"")},r.a.createElement("p",{className:"label text-caption"},t),r.a.createElement("p",{className:"placeholder"},t),r.a.createElement("input",{type:"text",name:a,required:!!c,autoComplete:s,onFocus:function(){return u(!0)},onBlur:function(){return u(!1)},onInput:function(e){return p(e.target.value)}}),r.a.createElement("div",{className:"border"}))}),Y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={isLoaded:!1},n}return Object(E.a)(a,[{key:"render",value:function(){var e=this.state.isLoaded,t=this.props,a=t.assets,n=t.aboutUs,c=t.teamMembers;return e?r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(Q,{data:n,assets:a,teamMembers:c}),r.a.createElement(q,null)):r.a.createElement("p",null,"is loading.....")}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.getAboutUsPage,n=t.getTeamMembers;a().then((function(){n().then((function(){e.setState({isLoaded:!0})}))}))}}]),a}(r.a.Component),Q=function(e){var t=e.data,a=e.assets,n=e.teamMembers,c=t.pageCover,l=t.motto,s=t.aboutUsTitle,o=t.aboutUsText,i=t.teamTitle,m=t.teamMembersItems,u=C.findAsset(a,c);return r.a.createElement("main",{className:"about-us"},r.a.createElement("div",{className:"page-cover"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:u.fields.file.url,alt:u.fields.title})),r.a.createElement("div",{className:"motto"},r.a.createElement("p",{className:"text-xl"},l))),r.a.createElement("section",{className:"description"},r.a.createElement("p",{className:"text-h1"},s),r.a.createElement("div",{className:"content"},C.renderPlainTextParagraphs(o))),r.a.createElement("section",{className:"team"},r.a.createElement("p",{className:"text-h1"},i),r.a.createElement("div",{className:"content"},m.map((function(e,t){var c=C.findAsset(n,e);if(!c)return null;var l=c.fields,s=l.fullName,o=l.jobPosition,i=l.photo,m=l.photoMask,u=C.findAsset(a,i),f=C.findAsset(a,m);return r.a.createElement("div",{className:"member",key:c.sys.id},r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"mask",src:f.fields.file.url,alt:f.fields.title}),r.a.createElement("img",{className:"photo",src:u.fields.file.url,alt:u.fields.title})),r.a.createElement("p",{className:"text-h2"},s),r.a.createElement("p",{className:"job-position"},o))})))))},K=Object(s.b)((function(e){return{assets:e.assets,aboutUs:e.aboutUs,teamMembers:e.teamMembers}}),{getAboutUsPage:function(){return function(e,t){var a=t().aboutUs;return a?C.returnPromise(e({type:"GET_ABOUT_US_PAGE",payload:a})):N.getAbousUsPage().then((function(t){e({type:"GET_ABOUT_US_PAGE",payload:t})}))}},getTeamMembers:function(){return function(e,t){var a=t().teamMembers;return a?C.returnPromise(e({type:"GET_TEAM_MEMBERS",payload:a})):N.getTeamMembers().then((function(t){e({type:"GET_TEAM_MEMBERS",payload:t})}))}}})(Y),$=(a(74),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={isLoaded:!1},n}return Object(E.a)(a,[{key:"render",value:function(){var e=this.state.isLoaded,t=this.props,a=t.assets,n=t.contact;return e?r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(V,{data:n,assets:a}),r.a.createElement(q,null)):r.a.createElement("p",null,"is loading.....")}},{key:"componentDidMount",value:function(){var e=this;(0,this.props.getContactPage)().then((function(){e.setState({isLoaded:!0})}))}}]),a}(r.a.Component)),V=function(e){var t=e.data,a=e.assets,n=t.wantToTalkTitle,c=t.sendEmailText,l=t.email,s=t.callPhoneText,o=t.phone,i=t.getInTouchTitle,m=t.firstNameLabel,u=t.lastNameLabel,f=t.emailLabel,d=t.topicLabel,E=t.topicItems,p=t.companyLabel,h=t.roleLabel,b=t.messageFieldLabel,v=t.sendButtonText,g=t.officesTitle,y=t.officesItems;return r.a.createElement("main",{className:"contact"},r.a.createElement("section",{className:"want-to-talk"},r.a.createElement("p",{className:"text-h1"},n),r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("p",{className:"text-subheading"},c),r.a.createElement("a",{className:"link",href:"mailto:"+{email:l}},l)),r.a.createElement("div",null,r.a.createElement("p",{className:"text-subheading"},s),r.a.createElement("a",{className:"link",href:"tel:"+{phone:o}},o)))),r.a.createElement("section",{className:"get-in-touch"},r.a.createElement("p",{className:"text-h1"},i),r.a.createElement("div",{className:"content"},r.a.createElement("form",{id:"contact-form",method:"POST",action:"/"},r.a.createElement("div",{className:"inline-fields"},r.a.createElement(Z,{label:m,name:"firstName",required:!0}),r.a.createElement(Z,{label:u,name:"lastName",required:!0})),r.a.createElement(Z,{label:f,name:"email",required:!0}),r.a.createElement(T,{label:d,options:E,name:"topic",required:!0}),r.a.createElement("div",{className:"inline-fields"},r.a.createElement(Z,{label:p,name:"company"}),r.a.createElement(Z,{label:h,name:"role"})),r.a.createElement(J,{label:b,name:"message"}),r.a.createElement(j,null,v)))),r.a.createElement("section",{className:"offices"},r.a.createElement("p",{className:"text-h1"},g),r.a.createElement("div",{className:"content"},r.a.createElement(W,{officesRefs:y,assets:a}))))},X=Object(s.b)((function(e){return{assets:e.assets,contact:e.contact}}),{getContactPage:function(){return function(e,t){var a=t().contact;return a?C.returnPromise(e({type:"GET_CONTACT_PAGE",payload:a})):N.getContactPage().then((function(t){e({type:"GET_CONTACT_PAGE",payload:t})}))}}})($),ee=(a(75),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={isLoaded:!1},n}return Object(E.a)(a,[{key:"render",value:function(){var e=this.state.isLoaded,t=this.props,a=t.assets,n=t.home;return e?r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(te,{data:n,assets:a}),r.a.createElement(q,null)):r.a.createElement("p",null,"is loading.....")}},{key:"componentDidMount",value:function(){var e=this;(0,this.props.getHomePage)().then((function(){e.setState({isLoaded:!0})}))}}]),a}(r.a.Component)),te=function(e){var t=e.data,a=e.assets,c=(e.offices,t.companySlogan),l=t.servicesTitle,s=t.servicesItems,o=t.servicesButtonText,i=t.partnersTitle,m=t.partnersItems,u=t.officesTitle,f=t.officesItems,d=Object(n.useRef)(),E=Object(n.useState)(!1),p=Object(k.a)(E,2),h=p[0],v=p[1],g=Object(n.useState)(0),y=Object(k.a)(g,2),O=y[0],N=y[1],T=Object(n.useState)(0),x=Object(k.a)(T,2),P=x[0],S=x[1],w=Object(n.useState)(0),A=Object(k.a)(w,2),_=A[0],L=A[1],G=function(e){L(e.target.documentElement.scrollTop)},I=function(e){if(d.current){var t=d.current.offsetTop,a=d.current.offsetHeight,n=window.innerHeight/2;N(t-n),S(t+a-n)}};Object(n.useEffect)((function(){return window.addEventListener("scroll",G),function(){window.removeEventListener("scroll",G),v(_>O&&_<P+window.innerHeight)}})),Object(n.useEffect)((function(){window.addEventListener("scroll",I)}),[]);var R=function(e){var t=s.length;return _>O+(P-O)/t*e};return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"home"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"social-media-links"},ae.map((function(e){return r.a.createElement("a",{className:"link",href:e.href,key:e.href},r.a.createElement("span",{className:"text-subheading"},e.name))}))),r.a.createElement("section",{className:"company-slogan"},r.a.createElement("p",{className:"text-xl"},c.content[0].content.map((function(e,t){var a=e.marks.length&&"bold"===e.marks[0].type;return r.a.createElement("span",{className:a?"is-accented":null,key:t},e.value,"\xad")})))),r.a.createElement("section",{className:"services"},r.a.createElement("p",{className:"text-h1"},l),r.a.createElement("ul",{className:"services-list",ref:d},s.map((function(e,t){return r.a.createElement("li",{key:e,className:"text-xl"+(h&&R(t)?" is-centered":"")},e)}))),r.a.createElement(j,null,o)),r.a.createElement("div",{className:"get-in-touch"},r.a.createElement(b.b,{to:"/mios-2020/contact",className:"link text-label"},"Get in touch")),r.a.createElement("section",{className:"partners"},r.a.createElement("p",{className:"text-h1"},i),r.a.createElement("div",{className:"partners-logotypes"},m.map((function(e){var t=C.findAsset(a,e);return t&&r.a.createElement("img",{src:t.fields.file.url,alt:t.fields.title,key:t.fields.title})})))),r.a.createElement("section",{className:"offices"},r.a.createElement("p",{className:"text-h1"},u),r.a.createElement(W,{officesRefs:f,assets:a}))),r.a.createElement("div",{className:"logotype-metamorphose "+(_>50?"is-out":"")},r.a.createElement(M,null))))},ae=[{name:"Instagram",href:"https://instagram.com"},{name:"Facebook",href:"https://facebook.com"},{name:"LinkedIn",href:"https://linkedin.com"},{name:"Behance",href:"https://behance.com"}],ne=Object(s.b)((function(e){return{assets:e.assets,home:e.home}}),{getHomePage:function(){return function(e,t){var a=t().home;return a?C.returnPromise(e({type:"GET_HOME_PAGE",payload:a})):N.getHomePage().then((function(t){e({type:"GET_HOME_PAGE",payload:t})}))}}})(ee),re=(a(76),function(){return r.a.createElement("div",null,"Projects details")}),ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(re,null),r.a.createElement(q,null))},le=(a(77),function(){return r.a.createElement("div",null,"services")}),se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(le,null),r.a.createElement(q,null))},oe=function(){var e="/mios-2020";return r.a.createElement(b.a,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:e+"/",component:ne}),r.a.createElement(v.a,{path:e+"/about",component:K}),r.a.createElement(v.a,{path:e+"/contact",component:X}),r.a.createElement(v.a,{path:e+"/services",component:se}),r.a.createElement(v.a,{path:e+"/projects",component:ce})))},ie=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={isInitiated:!0},n}return Object(E.a)(a,[{key:"render",value:function(){return this.state.isInitiated?r.a.createElement(oe,null):r.a.createElement("p",null,"loading...")}},{key:"componentDidMount",value:function(){this.props.getAssets()}}]),a}(r.a.Component),me=Object(s.b)(null,{getAssets:function(){return function(e,t){var a=t().assets;return a?C.returnPromise(e({type:"GET_ASSETS",payload:a})):N.getAssets().then((function(t){e({type:"GET_ASSETS",payload:t})}))}}})(ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:f},r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.ee2f2cd2.chunk.js.map