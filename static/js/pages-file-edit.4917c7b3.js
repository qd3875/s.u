(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-file-edit"],{"0168":function(e,t,a){"use strict";a.r(t);var n=a("b562"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},"0eb8":function(e,t,a){var n=a("9bd4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("4f06").default;r("e98389a2",n,!0,{sourceMap:!1,shadowMode:!1})},"3bf1":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[2==e.appType||3==e.appType||2==e.mpAppType?a("cu-custom",{attrs:{bgColor:"bg-blue",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[e._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"})],2):e._e(),2!=e.appType&&3!=e.appType?a("v-uni-web-view",{attrs:{src:e.iframeUrl}}):a("iframe",{staticClass:"app-h5-webview",attrs:{src:e.iframeUrl}})],1)},r=[]},"7f2d":function(e,t,a){"use strict";a.r(t);var n=a("3bf1"),r=a("0168");for(var o in r)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(o);a("9816");var u=a("f0c5"),i=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"711dcb2e",null,!1,n["a"],void 0);t["default"]=i.exports},9816:function(e,t,a){"use strict";var n=a("0eb8"),r=a.n(n);r.a},"9bd4":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".app-h5-webview[data-v-711dcb2e]{height:calc(100vh - 42px);width:100vw;border:0}",""]),e.exports=t},b562:function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("0848")),o={data:function(){return{iframeUrl:"",appType:0,mpAppType:0}},methods:{toBackIndex:function(){uni.navigateBack({delta:1})}},onLoad:function(e){this.appType=r.default.appType(),this.mpAppType=r.default.mpType(),uni.setNavigationBarTitle({title:decodeURIComponent(e.name)});e.url&&(e.url=decodeURIComponent(e.url),1==this.appType&&(e.url="https://support.tenfell.cn/webos_update/common/jump.html?url="+encodeURIComponent(e.url)+"&title="+e.name),this.iframeUrl=e.url)},mounted:function(){}};t.default=o}}]);