(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17489cc5"],{"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return k}));var n=r("2b0e"),c=r("b42e"),a=r("c637"),i=r("a723"),o=r("9b76"),s=r("8690"),l=r("365c"),b=r("d82f"),u=r("cf75"),d=r("d580"),f=r("6197"),h=r("b885"),g=r("670f"),p=r("4918");function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=Object(u["d"])(Object(b["m"])(j(j({},Object(b["k"])(p["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(u["c"])(i["g"],!1),end:Object(u["c"])(i["g"],!1),start:Object(u["c"])(i["g"],!1),top:Object(u["c"])(i["g"],!1)})),a["s"]),w=n["default"].extend({name:a["s"],functional:!0,props:v,render:function(t,e){var r=e.props,n=e.data,a=r.src,i=r.alt,o=r.width,s=r.height,l="card-img";return r.top?l+="-top":r.right||r.end?l+="-right":r.bottom?l+="-bottom":(r.left||r.start)&&(l+="-left"),t("img",Object(c["a"])(n,{class:l,attrs:{src:a,alt:i,width:o,height:s}}))}});function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function C(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var P=Object(u["a"])(v,u["f"].bind(null,"img"));P.imgSrc.required=!1;var _=Object(u["d"])(Object(b["m"])(x(x(x(x(x(x({},f["b"]),h["b"]),g["b"]),P),d["a"]),{},{align:Object(u["c"])(i["u"]),noBody:Object(u["c"])(i["g"],!1)})),a["n"]),k=n["default"].extend({name:a["n"],functional:!0,props:_,render:function(t,e){var r,n=e.props,a=e.data,i=e.slots,b=e.scopedSlots,d=n.imgSrc,p=n.imgLeft,O=n.imgRight,j=n.imgStart,m=n.imgEnd,v=n.imgBottom,y=n.header,x=n.headerHtml,_=n.footer,k=n.footerHtml,D=n.align,S=n.textVariant,T=n.bgVariant,V=n.borderVariant,E=b||{},I=i(),z={},B=t(),R=t();if(d){var $=t(w,{props:Object(u["e"])(P,n,u["h"].bind(null,"img"))});v?R=$:B=$}var H=t(),F=Object(l["a"])(o["t"],E,I);(F||y||x)&&(H=t(h["a"],{props:Object(u["e"])(h["b"],n),domProps:F?{}:Object(s["a"])(x,y)},Object(l["b"])(o["t"],z,E,I)));var G=Object(l["b"])(o["i"],z,E,I);n.noBody||(G=t(f["a"],{props:Object(u["e"])(f["b"],n)},G),n.overlay&&d&&(G=t("div",{staticClass:"position-relative"},[B,G,R]),B=t(),R=t()));var L=t(),U=Object(l["a"])(o["s"],E,I);return(U||_||k)&&(L=t(g["a"],{props:Object(u["e"])(g["b"],n),domProps:F?{}:Object(s["a"])(k,_)},Object(l["b"])(o["s"],z,E,I))),t(n.tag,Object(c["a"])(a,{staticClass:"card",class:(r={"flex-row":p||j,"flex-row-reverse":(O||m)&&!(p||j)},C(r,"text-".concat(D),D),C(r,"bg-".concat(T),T),C(r,"border-".concat(V),V),C(r,"text-".concat(S),S),r)}),[B,H,G,L,R])}})},4918:function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return O}));var n=r("2b0e"),c=r("b42e"),a=r("c637"),i=r("a723"),o=r("2326"),s=r("6c06"),l=r("7b1e"),b=r("3a58"),u=r("cf75"),d=r("fa73");function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',g=function(t,e,r){var n=encodeURIComponent(h.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(n)},p=Object(u["d"])({alt:Object(u["c"])(i["u"]),blank:Object(u["c"])(i["g"],!1),blankColor:Object(u["c"])(i["u"],"transparent"),block:Object(u["c"])(i["g"],!1),center:Object(u["c"])(i["g"],!1),fluid:Object(u["c"])(i["g"],!1),fluidGrow:Object(u["c"])(i["g"],!1),height:Object(u["c"])(i["p"]),left:Object(u["c"])(i["g"],!1),right:Object(u["c"])(i["g"],!1),rounded:Object(u["c"])(i["j"],!1),sizes:Object(u["c"])(i["f"]),src:Object(u["c"])(i["u"]),srcset:Object(u["c"])(i["f"]),thumbnail:Object(u["c"])(i["g"],!1),width:Object(u["c"])(i["p"])},a["kb"]),O=n["default"].extend({name:a["kb"],functional:!0,props:p,render:function(t,e){var r,n=e.props,a=e.data,i=n.alt,u=n.src,h=n.block,p=n.fluidGrow,O=n.rounded,j=Object(b["c"])(n.width)||null,m=Object(b["c"])(n.height)||null,v=null,w=Object(o["b"])(n.srcset).filter(s["a"]).join(","),y=Object(o["b"])(n.sizes).filter(s["a"]).join(",");return n.blank&&(!m&&j?m=j:!j&&m&&(j=m),j||m||(j=1,m=1),u=g(j,m,n.blankColor||"transparent"),w=null,y=null),n.left?v="float-left":n.right?v="float-right":n.center&&(v="mx-auto",h=!0),t("img",Object(c["a"])(a,{attrs:{src:u,alt:i,width:j?Object(d["g"])(j):null,height:m?Object(d["g"])(m):null,srcset:w||null,sizes:y||null},class:(r={"img-thumbnail":n.thumbnail,"img-fluid":n.fluid||p,"w-100":p,rounded:""===O||!0===O},f(r,"rounded-".concat(O),Object(l["n"])(O)&&""!==O),f(r,v,v),f(r,"d-block",h),r)}))}})},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return b}));var n=r("2b0e"),c=r("b42e"),a=r("c637"),i=r("a723"),o=r("cf75"),s=r("fa73"),l=Object(o["d"])({title:Object(o["c"])(i["u"]),titleTag:Object(o["c"])(i["u"],"h4")},a["v"]),b=n["default"].extend({name:a["v"],functional:!0,props:l,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(r.titleTag,Object(c["a"])(n,{staticClass:"card-title"}),a||Object(s["g"])(r.title))}})},"5fda":function(t,e,r){"use strict";r.d(e,"a",(function(){return T}));var n,c=r("2b0e"),a=r("2f79"),i=r("c637"),o=r("0056"),s=r("a723"),l=r("9b76"),b=r("906c"),u=r("7b1e"),d=r("58f2"),f=r("3a58"),h=r("d82f"),g=r("cf75"),p=r("8c18"),O=r("f29e"),j=r("ce2a");function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){w(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function w(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y=Object(d["a"])("show",{type:s["i"],defaultValue:!1}),x=y.mixin,C=y.props,P=y.prop,_=y.event,k=function(t){return""===t||Object(u["b"])(t)?0:(t=Object(f["c"])(t,0),t>0?t:0)},D=function(t){return""===t||!0===t||!(Object(f["c"])(t,0)<1)&&!!t},S=Object(g["d"])(Object(h["m"])(v(v({},C),{},{dismissLabel:Object(g["c"])(s["u"],"Close"),dismissible:Object(g["c"])(s["g"],!1),fade:Object(g["c"])(s["g"],!1),variant:Object(g["c"])(s["u"],"info")})),i["a"]),T=c["default"].extend({name:i["a"],mixins:[x,p["a"]],props:S,data:function(){return{countDown:0,localShow:D(this[P])}},watch:(n={},w(n,P,(function(t){this.countDown=k(t),this.localShow=D(t)})),w(n,"countDown",(function(t){var e=this;this.clearCountDownInterval();var r=this[P];Object(u["i"])(r)&&(this.$emit(o["n"],t),r!==t&&this.$emit(_,t),t>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){e.countDown--}),1e3)):this.$nextTick((function(){Object(b["B"])((function(){e.localShow=!1}))})))})),w(n,"localShow",(function(t){var e=this[P];t||!this.dismissible&&!Object(u["i"])(e)||this.$emit(o["m"]),Object(u["i"])(e)||e===t||this.$emit(_,t)})),n),created:function(){this.$_filterTimer=null;var t=this[P];this.countDown=k(t),this.localShow=D(t)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(t){var e=t();if(this.localShow){var r=this.dismissible,n=this.variant,c=t();r&&(c=t(O["a"],{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot(l["k"])])),e=t("div",{staticClass:"alert",class:w({"alert-dismissible":r},"alert-".concat(n),n),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this[a["a"]]},[c,this.normalizeSlot()])}return t(j["a"],{props:{noFade:!this.fade}},[e])}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return g})),r.d(e,"a",(function(){return p}));var n=r("2b0e"),c=r("b42e"),a=r("c637"),i=r("a723"),o=r("d82f"),s=r("cf75"),l=r("d580"),b=r("4968"),u=r("ba06");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=Object(s["d"])(Object(o["m"])(f(f(f(f({},b["b"]),u["b"]),Object(s["a"])(l["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(i["e"]),overlay:Object(s["c"])(i["g"],!1)})),a["o"]),p=n["default"].extend({name:a["o"],functional:!0,props:g,render:function(t,e){var r,n=e.props,a=e.data,i=e.children,o=n.bodyBgVariant,l=n.bodyBorderVariant,d=n.bodyTextVariant,f=t();n.title&&(f=t(b["a"],{props:Object(s["e"])(b["b"],n)}));var g=t();return n.subTitle&&(g=t(u["a"],{props:Object(s["e"])(u["b"],n),class:["mb-2"]})),t(n.bodyTag,Object(c["a"])(a,{staticClass:"card-body",class:[(r={"card-img-overlay":n.overlay},h(r,"bg-".concat(o),o),h(r,"border-".concat(l),l),h(r,"text-".concat(d),d),r),n.bodyClass]}),[f,g,i])}})},"670f":function(t,e,r){"use strict";r.d(e,"b",(function(){return h})),r.d(e,"a",(function(){return g}));var n=r("2b0e"),c=r("b42e"),a=r("c637"),i=r("a723"),o=r("8690"),s=r("d82f"),l=r("cf75"),b=r("d580");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=Object(l["d"])(Object(s["m"])(d(d({},Object(l["a"])(b["a"],l["f"].bind(null,"footer"))),{},{footer:Object(l["c"])(i["u"]),footerClass:Object(l["c"])(i["e"]),footerHtml:Object(l["c"])(i["u"])})),a["p"]),g=n["default"].extend({name:a["p"],functional:!0,props:h,render:function(t,e){var r,n=e.props,a=e.data,i=e.children,s=n.footerBgVariant,l=n.footerBorderVariant,b=n.footerTextVariant;return t(n.footerTag,Object(c["a"])(a,{staticClass:"card-footer",class:[n.footerClass,(r={},f(r,"bg-".concat(s),s),f(r,"border-".concat(l),l),f(r,"text-".concat(b),b),r)],domProps:i?{}:Object(o["a"])(n.footerHtml,n.footer)}),i)}})},6997:function(t,e,r){},"9a01":function(t,e,r){"use strict";r("6997")},a15b:function(t,e,r){"use strict";r.d(e,"a",(function(){return w}));var n=r("b42e"),c=r("c637"),a=r("a723"),i=r("2326"),o=r("228e"),s=r("6c06"),l=r("b508"),b=r("d82f"),u=r("cf75"),d=r("fa73");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=["start","end","center"],O=Object(l["a"])((function(t,e){return e=Object(d["h"])(Object(d["g"])(e)),e?Object(d["c"])(["row-cols",t,e].filter(s["a"]).join("-")):null})),j=Object(l["a"])((function(t){return Object(d["c"])(t.replace("cols",""))})),m=[],v=function(){var t=Object(o["b"])().reduce((function(t,e){return t[Object(u["g"])(e,"cols")]=Object(u["c"])(a["p"]),t}),Object(b["c"])(null));return m=Object(b["h"])(t),Object(u["d"])(Object(b["m"])(h(h({},t),{},{alignContent:Object(u["c"])(a["u"],null,(function(t){return Object(i["a"])(Object(i["b"])(p,"between","around","stretch"),t)})),alignH:Object(u["c"])(a["u"],null,(function(t){return Object(i["a"])(Object(i["b"])(p,"between","around"),t)})),alignV:Object(u["c"])(a["u"],null,(function(t){return Object(i["a"])(Object(i["b"])(p,"baseline","stretch"),t)})),noGutters:Object(u["c"])(a["g"],!1),tag:Object(u["c"])(a["u"],"div")})),c["Ob"])},w={name:c["Ob"],functional:!0,get props(){return delete this.props,this.props=v(),this.props},render:function(t,e){var r,c=e.props,a=e.data,i=e.children,o=c.alignV,s=c.alignH,l=c.alignContent,b=[];return m.forEach((function(t){var e=O(j(t),c[t]);e&&b.push(e)})),b.push((r={"no-gutters":c.noGutters},g(r,"align-items-".concat(o),o),g(r,"justify-content-".concat(s),s),g(r,"align-content-".concat(l),l),r)),t(c.tag,Object(n["a"])(a,{staticClass:"row",class:b}),i)}}},a98a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("b-card",{staticClass:"background-color",attrs:{title:"Default Colors"}},[r("b-alert",{attrs:{variant:"primary",show:""}},[r("div",{staticClass:"alert-body"},[t._v(" For more color classes options please read the "),r("b-link",{staticClass:"alert-link",attrs:{href:"https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-colors.html",target:"_blank"}},[t._v(" documentation. ")])],1)]),r("b-card-text",{staticClass:"mb-0"},[t._v(" We have a series of colors that are used by default. They include: ")]),r("ul",{staticClass:"colors-list list-unstyled mb-0"},[r("li",[r("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),r("span",[t._v("Primary")])],1),r("li",[r("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),r("span",[t._v("Secondary")])],1),r("li",[r("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),r("span",[t._v("Success")])],1),r("li",[r("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),r("span",[t._v("Warning")])],1),r("li",[r("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),r("span",[t._v("Danger")])],1),r("li",[r("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),r("span",[t._v("Info")])],1)]),r("b-card-text",[t._v(" For each color, we think has its functionality in the application as alerts of errors "),r("b",[t._v("(danger)")]),t._v(", warnings to the user "),r("b",[t._v("(warning)")]),t._v(", communications of approval "),r("b",[t._v("(success)")]),t._v(", or main color of the application "),r("b",[t._v("(primary)")]),t._v(". ")]),r("div",{staticClass:"d-flex justify-content-start flex-wrap"},[r("div",{staticClass:"text-center bg-primary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("primary")])]),r("div",{staticClass:"text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("secondary")])]),r("div",{staticClass:"text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("success")])]),r("div",{staticClass:"text-center bg-warning colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("warning")])]),r("div",{staticClass:"text-center bg-danger colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("danger")])]),r("div",{staticClass:"text-center bg-info colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow"},[r("span",[t._v("info")])])]),r("h6",{staticClass:"mt-1"},[t._v(" Lighten Variant ")]),r("b-card-text",{staticClass:"mb-0"},[t._v(" Use "),r("code",[t._v(".bg-{color}.bg-lighten-{1 | 2 | 3 | 4 | 5}")]),t._v(" classes for lighten background color. ")]),r("div",{staticClass:"d-flex justify-content-start flex-wrap"},[r("div",{staticClass:"text-center bg-primary bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("lighten-2")])]),r("div",{staticClass:"text-center bg-secondary bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("lighten-2")])]),r("div",{staticClass:"text-center bg-success bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("lighten-2")])]),r("div",{staticClass:"text-center bg-warning bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("lighten-2")])]),r("div",{staticClass:"text-center bg-danger bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("lighten-2")])]),r("div",{staticClass:"text-center bg-info bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow"},[r("span",[t._v("lighten-2")])])]),r("h6",{staticClass:"mt-1"},[t._v(" Darken Variant ")]),r("b-card-text",{staticClass:"mb-0"},[t._v(" Use "),r("code",[t._v(".bg-{color}.bg-darken-{1 | 2 | 3 | 4}")]),t._v(" classes for darken background color. ")]),r("div",{staticClass:"d-flex justify-content-start flex-wrap"},[r("div",{staticClass:"text-center bg-primary bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("darken-2")])]),r("div",{staticClass:"text-center bg-secondary bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("darken-2")])]),r("div",{staticClass:"text-center bg-success bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("darken-2")])]),r("div",{staticClass:"text-center bg-warning bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("darken-2")])]),r("div",{staticClass:"text-center bg-danger bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("darken-2")])]),r("div",{staticClass:"text-center bg-info bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow"},[r("span",[t._v("darken-2")])])])],1),r("b-card",{attrs:{title:"Gradient Colors"}},[r("b-card-text",{staticClass:"mb-0"},[t._v(" We have make gradient color based on our default color: ")]),r("ul",{staticClass:"colors-list list-unstyled mb-0"},[r("li",[r("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),r("span",[t._v("bg-gradient-primary")])],1),r("li",[r("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),r("span",[t._v("bg-gradient-secondary")])],1),r("li",[r("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),r("span",[t._v("bg-gradient-success")])],1),r("li",[r("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),r("span",[t._v("bg-gradient-warning")])],1),r("li",[r("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),r("span",[t._v("bg-gradient-danger")])],1),r("li",[r("feather-icon",{attrs:{size:"15",icon:"ChevronsRightIcon"}}),r("span",[t._v("bg-gradient-info")])],1)]),r("b-card-text",[t._v(" For each color, we think has its functionality in the application as alerts of errors "),r("b",[t._v("(danger)")]),t._v(", warnings to the user "),r("b",[t._v("(warning)")]),t._v(", communications of approval "),r("b",[t._v("(success)")]),t._v(", or main color of the application "),r("b",[t._v("(primary)")]),t._v(". ")]),r("div",{staticClass:"d-flex justify-content-start flex-wrap"},[r("div",{staticClass:"text-center colors-container bg-gradient-primary rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("primary gradient")])]),r("div",{staticClass:"text-center colors-container bg-gradient-secondary rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("secondary gradient")])]),r("div",{staticClass:"text-center colors-container bg-gradient-success rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("success gradient")])]),r("div",{staticClass:"text-center colors-container bg-gradient-warning rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("warning gradient")])]),r("div",{staticClass:"text-center colors-container bg-gradient-danger rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"},[r("span",[t._v("danger gradient")])]),r("div",{staticClass:"text-center colors-container bg-gradient-info rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow px-1"},[r("span",[t._v("info gradient")])])])],1)],1)],1)},c=[],a=r("205f"),i=r("5fda"),o=r("aa59"),s=r("a15b"),l=r("b28b"),b=r("d6e4"),u={components:{BCard:a["a"],BAlert:i["a"],BLink:o["a"],BRow:s["a"],BCol:l["a"],BCardText:b["a"]}},d=u,f=(r("9a01"),r("2877")),h=Object(f["a"])(d,n,c,!1,null,null,null);e["default"]=h.exports},b28b:function(t,e,r){"use strict";r.d(e,"a",(function(){return x}));var n=r("b42e"),c=r("c637"),a=r("a723"),i=r("992e"),o=r("2326"),s=r("228e"),l=r("6c06"),b=r("7b1e"),u=r("b508"),d=r("d82f"),f=r("cf75"),h=r("fa73");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=["auto","start","end","center","baseline","stretch"],m=function(t,e,r){var n=t;if(!Object(b["p"])(r)&&!1!==r)return e&&(n+="-".concat(e)),"col"!==t||""!==r&&!0!==r?(n+="-".concat(r),Object(h["c"])(n)):Object(h["c"])(n)},v=Object(u["a"])(m),w=Object(d["c"])(null),y=function(){var t=Object(s["b"])().filter(l["a"]),e=t.reduce((function(t,e){return t[e]=Object(f["c"])(a["i"]),t}),Object(d["c"])(null)),r=t.reduce((function(t,e){return t[Object(f["g"])(e,"offset")]=Object(f["c"])(a["p"]),t}),Object(d["c"])(null)),n=t.reduce((function(t,e){return t[Object(f["g"])(e,"order")]=Object(f["c"])(a["p"]),t}),Object(d["c"])(null));return w=Object(d["a"])(Object(d["c"])(null),{col:Object(d["h"])(e),offset:Object(d["h"])(r),order:Object(d["h"])(n)}),Object(f["d"])(Object(d["m"])(p(p(p(p({},e),r),n),{},{alignSelf:Object(f["c"])(a["u"],null,(function(t){return Object(o["a"])(j,t)})),col:Object(f["c"])(a["g"],!1),cols:Object(f["c"])(a["p"]),offset:Object(f["c"])(a["p"]),order:Object(f["c"])(a["p"]),tag:Object(f["c"])(a["u"],"div")})),c["y"])},x={name:c["y"],functional:!0,get props(){return delete this.props,this.props=y()},render:function(t,e){var r,c=e.props,a=e.data,o=e.children,s=c.cols,l=c.offset,b=c.order,u=c.alignSelf,d=[];for(var f in w)for(var h=w[f],g=0;g<h.length;g++){var p=v(f,h[g].replace(f,""),c[h[g]]);p&&d.push(p)}var j=d.some((function(t){return i["e"].test(t)}));return d.push((r={col:c.col||!j&&!s},O(r,"col-".concat(s),s),O(r,"offset-".concat(l),l),O(r,"order-".concat(b),b),O(r,"align-self-".concat(u),u),r)),t(c.tag,Object(n["a"])(a,{class:d}),o)}}},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return h})),r.d(e,"a",(function(){return g}));var n=r("2b0e"),c=r("b42e"),a=r("c637"),i=r("a723"),o=r("8690"),s=r("d82f"),l=r("cf75"),b=r("d580");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=Object(l["d"])(Object(s["m"])(d(d({},Object(l["a"])(b["a"],l["f"].bind(null,"header"))),{},{header:Object(l["c"])(i["u"]),headerClass:Object(l["c"])(i["e"]),headerHtml:Object(l["c"])(i["u"])})),a["r"]),g=n["default"].extend({name:a["r"],functional:!0,props:h,render:function(t,e){var r,n=e.props,a=e.data,i=e.children,s=n.headerBgVariant,l=n.headerBorderVariant,b=n.headerTextVariant;return t(n.headerTag,Object(c["a"])(a,{staticClass:"card-header",class:[n.headerClass,(r={},f(r,"bg-".concat(s),s),f(r,"border-".concat(l),l),f(r,"text-".concat(b),b),r)],domProps:i?{}:Object(o["a"])(n.headerHtml,n.header)}),i)}})},ba06:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return b}));var n=r("2b0e"),c=r("b42e"),a=r("c637"),i=r("a723"),o=r("cf75"),s=r("fa73"),l=Object(o["d"])({subTitle:Object(o["c"])(i["u"]),subTitleTag:Object(o["c"])(i["u"],"h6"),subTitleTextVariant:Object(o["c"])(i["u"],"muted")},a["t"]),b=n["default"].extend({name:a["t"],functional:!0,props:l,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(r.subTitleTag,Object(c["a"])(n,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),a||Object(s["g"])(r.subTitle))}})},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("2b0e"),c=r("c637"),a=r("a723"),i=r("cf75"),o=Object(i["d"])({bgVariant:Object(i["c"])(a["u"]),borderVariant:Object(i["c"])(a["u"]),tag:Object(i["c"])(a["u"],"div"),textVariant:Object(i["c"])(a["u"])},c["n"]);n["default"].extend({props:o})},d6e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r("2b0e"),c=r("b42e"),a=r("c637"),i=r("a723"),o=r("cf75"),s=Object(o["d"])({textTag:Object(o["c"])(i["u"],"p")},a["u"]),l=n["default"].extend({name:a["u"],functional:!0,props:s,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(r.textTag,Object(c["a"])(n,{staticClass:"card-text"}),a)}})}}]);
//# sourceMappingURL=chunk-17489cc5.45c78f31.js.map