(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{1233:function(t,e,a){"use strict";a.r(e);var i=a("f89a"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"1c8e":function(t,e,a){"use strict";a.r(e);var i=a("f424"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"1f72":function(t,e,a){"use strict";a.r(e);var i=a("cb21"),n=a("1c8e");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var u=a("f0c5"),c=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"36370c84",null,!1,i["a"],void 0);e["default"]=c.exports},"26b5":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("14d9"),a("2ca0");var n=i(a("c7eb")),s=i(a("1da1")),u=i(a("0848")),c={data:function(){return{isMpApp:!1,appType:0,defStarList:[],toolsList:[],diyStarList:[],userInfo:{},baseCheck:{show:!1,url:""}}},methods:{toScanCode:function(){u.default.toScanCode()},toUploadPage:function(){uni.navigateTo({url:"/pages/file/upload"})},showFileData:function(t){u.default.toFilePath(t.path)},searchFile:function(){u.default.showToast("此功能暂未实现")},openToolsApp:function(){var t=(0,s.default)((0,n.default)().mark((function t(e){var a,i,s;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=null,0!=e.type){t.next=12;break}return t.next=4,u.default.postData("user","appToken",{});case 4:return i=t.sent,s="",0==i.code&&(s=i.data),t.next=9,u.default.serverUrlTransform("/apps/"+e.code+"/index.html?appToken="+s,!0);case 9:a=t.sent,t.next=13;break;case 12:a=e.iframeUrl;case 13:uni.navigateTo({url:"/pages/file/edit?url="+encodeURIComponent(a)+"&name="+encodeURIComponent(e.name)});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),baseCheckAction:function(t){this.baseCheck.show=!1,1==t&&uni.reLaunch({url:"/pages/login/login"})},checkBaseUse:function(){var t=(0,s.default)((0,n.default)().mark((function t(){var e,a;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this,e.baseCheck.url=u.default.hasBaseUrl(),e.baseCheck.url){t.next=5;break}return uni.reLaunch({url:"/pages/login/login"}),t.abrupt("return");case 5:return a=!1,setTimeout((function(){a||e.baseCheck.show||(e.baseCheck.show=!0)}),3e3),t.next=9,u.default.baseUrlCanUse();case 9:if(a=t.sent,!a){t.next=12;break}return t.abrupt("return");case 12:if(!e.baseCheck.show){t.next=14;break}return t.abrupt("return");case 14:e.baseCheck.show=!0;case 15:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),initData:function(){var t=(0,s.default)((0,n.default)().mark((function t(){var e,a,i,s,c,o;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.defStarList=[],this.toolsList=[],this.diyStarList=[],t.next=5,u.default.postData("ioUserDrive","starList",{type:2});case 5:if(e=t.sent,0==e.code){for(a=e.data,a||(a=[]),a.push({name:"磁盘",type:"disk",path:"disk"}),a.push({name:"存储",type:"thispc",path:"thispc"}),a.push({name:"协作",type:"team",path:"team"}),a.push({name:"保险箱",type:"insure",path:"insure"}),a.push({name:"分享",type:"share",path:"share"}),a.push({name:"回收站",type:"trash",path:"trash"}),i=0;i<a.length;i++)a[i].icon="../../static/index/home/"+a[i].type+".png";this.defStarList=a}return t.next=9,u.default.postData("softUser","hasList",{});case 9:if(e=t.sent,0!=e.code){t.next=22;break}s=e.data,s||(s=[]),i=0;case 14:if(!(i<s.length)){t.next=21;break}return t.next=17,u.default.serverUrlTransform(s[i].imgPath);case 17:s[i].imgPath=t.sent;case 18:i++,t.next=14;break;case 21:this.toolsList=s;case 22:return t.next=24,u.default.postData("ioUserDrive","starList",{type:3});case 24:if(e=t.sent,0!=e.code){t.next=44;break}c=e.data,c||(c=[]),i=0;case 29:if(!(i<c.length)){t.next=43;break}if(o="folder",!c[i].type.startsWith("io_")){t.next=38;break}return t.next=34,u.default.serverUrlTransform("/imgs/"+c[i].type.split("_")[1]+".png",!0);case 34:return c[i].icon=t.sent,t.abrupt("continue",40);case 38:"uio"==c[i].type?o="thispc":"tio"==c[i].type?o="team":"eio"==c[i].type&&(o="insure");case 39:c[i].icon="../../static/index/home/"+o+".png";case 40:i++,t.next=29;break;case 43:this.diyStarList=c;case 44:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=this;return(0,s.default)((0,n.default)().mark((function e(){return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isMpApp=1==u.default.appType(),t.appType=u.default.appType(),t.checkBaseUse(),e.next=5,u.default.initUser();case 5:t.userInfo=e.sent,t.userInfo&&t.userInfo.id&&t.initData();case 7:case"end":return e.stop()}}),e)})))()}};e.default=c},"33da":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".cu-list .cu-item .file-icon[data-v-ee203aea]{width:25px;height:25px;object-fit:contain}.cu-bar.margin-top[data-v-ee203aea]{margin-top:5px}",""]),t.exports=e},"48b1":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("0848")),s={data:function(){return{isMpApp:!1,iconList:[{icon:"moneybagfill",color:"blue",badge:0,name:"待接单"},{icon:"presentfill",color:"red",badge:0,name:"待上门",bindtap:"bindZan"},{icon:"formfill",color:"purple",badge:11,name:"待评价",bindtap:"showResource"},{icon:"shopfill",color:"green",badge:0,name:"返修/售后",bindtap:"bindPoint"}],iconOtherList:[{icon:"location",color:"blue",badge:0,name:"地址管理"},{icon:"service",color:"blue",badge:0,name:"电话客服",bindtap:"bindZan"},{icon:"mark",color:"blue",badge:0,name:"在线客服",bindtap:"showResource"},{icon:"mail",color:"blue",badge:0,name:"投诉",bindtap:"bindCollect"},{icon:"settings",color:"blue",badge:0,name:"设置",bindtap:"bindZan"}]}},methods:{},mounted:function(){this.isMpApp=1==n.default.appType()||2==n.default.appType()}};e.default=s},"4b24":function(t,e,a){var i=a("33da");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1ee10326",i,!0,{sourceMap:!1,shadowMode:!1})},"4b4f":function(t,e,a){t.exports=a.p+"static/img/p1.85021525.png"},"4e44":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-2ddde882]{padding-bottom:%?100?%}",""]),t.exports=e},"59ee":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uToast:a("f0ac").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("u-toast"),a("home",{directives:[{name:"show",rawName:"v-show",value:"home"==t.PageCur,expression:"PageCur=='home'"}],ref:"homeRef"}),a("im",{directives:[{name:"show",rawName:"v-show",value:"im"==t.PageCur,expression:"PageCur=='im'"}]}),a("vip",{directives:[{name:"show",rawName:"v-show",value:"vip"==t.PageCur,expression:"PageCur=='vip'"}]}),a("me",{directives:[{name:"show",rawName:"v-show",value:"me"==t.PageCur,expression:"PageCur=='me'"}],ref:"meRef"}),a("v-uni-view",{staticStyle:{height:"calc(45px + env(safe-area-inset-bottom) / 2)"}}),a("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[a("v-uni-view",{staticClass:"action",class:"home"==t.PageCur?"text-blue":"text-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navChange("home",!0)}}},[a("v-uni-view",{staticClass:"cuIcon-homefill"}),t._v("首页")],1),a("v-uni-view",{staticClass:"action",class:"im"==t.PageCur?"text-blue":"text-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navChange("im",!0)}}},[a("v-uni-view",{staticClass:"cuIcon-message"}),t._v("聊天")],1),a("v-uni-view",{staticClass:"action add-action",class:"file"==t.PageCur?"text-blue":"text-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navChange("file",!0)}}},[a("v-uni-button",{staticClass:"cu-btn cuIcon-file shadow",class:"file"==t.PageCur?"bg-blue":"bg-gray"}),t._v("文件")],1),a("v-uni-view",{staticClass:"action",class:"vip"==t.PageCur?"text-blue":"text-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navChange("vip",!0)}}},[a("v-uni-view",{staticClass:"cuIcon-vip"}),t._v("高级")],1),a("v-uni-view",{staticClass:"action",class:"me"==t.PageCur?"text-blue":"text-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navChange("me",!0)}}},[a("v-uni-view",{staticClass:"cuIcon-my"}),t._v("我的")],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:t.updateData.show?"show":""},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[a("v-uni-view",{staticClass:"content"},[t._v("检测到升级更新")])],1),a("v-uni-view",{staticClass:"padding-xl"},[a("v-uni-view",{domProps:{innerHTML:t._s(t.updateData.updateLog)}})],1),a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action margin-0 flex-sub",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updateAction(2)}}},[t._v("暂时不更新")]),a("v-uni-view",{staticClass:"action margin-0 flex-sub solid-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updateAction(0)}}},[t._v("取消")]),a("v-uni-view",{staticClass:"action margin-0 flex-sub text-green solid-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updateAction(1)}}},[t._v("更新")])],1)],1)],1)],1)},s=[]},"5b3c":function(t,e,a){"use strict";a.r(e);var i=a("f644"),n=a("dd1c");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var u=a("f0c5"),c=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"6779a442",null,!1,i["a"],void 0);e["default"]=c.exports},"6fff":function(t,e,a){"use strict";a.r(e);var i=a("dc27"),n=a("b116");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("a98b");var u=a("f0c5"),c=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"ee203aea",null,!1,i["a"],void 0);e["default"]=c.exports},7835:function(t,e,a){var i=a("4e44");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("bb2d238e",i,!0,{sourceMap:!1,shadowMode:!1})},"7acc":function(t,e,a){t.exports=a.p+"static/img/p2.434ece10.png"},"9dba":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{InputBottom:0}},methods:{InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0}}}},a98b:function(t,e,a){"use strict";var i=a("4b24"),n=a.n(i);n.a},b116:function(t,e,a){"use strict";a.r(e);var i=a("26b5"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},b515:function(t,e,a){"use strict";a.r(e);var i=a("9dba"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},b65d:function(t,e,a){"use strict";a.r(e);var i=a("bb8c"),n=a("b515");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("d659");var u=a("f0c5"),c=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"2ddde882",null,!1,i["a"],void 0);e["default"]=c.exports},bb8c:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("聊天")])],2),a("v-uni-view",{staticClass:"cu-chat"},[a("v-uni-view",{staticClass:"cu-item self"},[a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"content bg-green shadow"},[a("v-uni-text",[t._v("喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！")])],1)],1),a("v-uni-view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),a("v-uni-view",{staticClass:"date"},[t._v("2018年3月23日 13:23")])],1),a("v-uni-view",{staticClass:"cu-info round"},[t._v("对方撤回一条消息!")]),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg)"}}),a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"content shadow"},[a("v-uni-text",[t._v("喵喵喵！喵喵喵！")])],1)],1),a("v-uni-view",{staticClass:"date "},[t._v("13:23")])],1),a("v-uni-view",{staticClass:"cu-info"},[a("v-uni-text",{staticClass:"cuIcon-roundclosefill text-red "}),t._v("对方拒绝了你的消息")],1),a("v-uni-view",{staticClass:"cu-info"},[t._v("对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。"),a("v-uni-text",{staticClass:"text-blue"},[t._v("发送好友验证")])],1),a("v-uni-view",{staticClass:"cu-item self"},[a("v-uni-view",{staticClass:"main"},[a("v-uni-image",{staticClass:"radius",attrs:{src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),a("v-uni-view",{staticClass:"date"},[t._v("13:23")])],1),a("v-uni-view",{staticClass:"cu-item self"},[a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"action text-bold text-grey"},[t._v('3"')]),a("v-uni-view",{staticClass:"content shadow"},[a("v-uni-text",{staticClass:"cuIcon-sound text-xxl padding-right-xl"})],1)],1),a("v-uni-view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),a("v-uni-view",{staticClass:"date"},[t._v("13:23")])],1),a("v-uni-view",{staticClass:"cu-item self"},[a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-locationfill text-orange text-xxl"})],1),a("v-uni-view",{staticClass:"content shadow"},[t._v("喵星球，喵喵市")])],1),a("v-uni-view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg)"}}),a("v-uni-view",{staticClass:"date"},[t._v("13:23")])],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"cu-avatar radius",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg)"}}),a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"content shadow"},[t._v("@#$^&**")]),a("v-uni-view",{staticClass:"action text-grey"},[a("v-uni-text",{staticClass:"cuIcon-warnfill text-red text-xxl"}),a("v-uni-text",{staticClass:"text-sm margin-left-sm"},[t._v("翻译错误")])],1)],1),a("v-uni-view",{staticClass:"date"},[t._v("13:23")])],1)],1),a("v-uni-view",{staticClass:"cu-bar foot input",style:[{bottom:t.InputBottom+"px"}]},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-sound text-grey"})],1),a("v-uni-input",{staticClass:"solid-bottom",attrs:{"adjust-position":!1,focus:!1,maxlength:"300","cursor-spacing":"10"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.InputFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.InputBlur.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-emojifill text-grey"})],1),a("v-uni-button",{staticClass:"cu-btn bg-green shadow"},[t._v("发送")])],1)],1)},n=[]},c822:function(t,e,a){t.exports=a.p+"static/img/logo.1989e9cb.png"},cb21:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{},[a("cu-custom",{attrs:{bgColor:"bg-blue",isBar:!0}}),a("v-uni-view",{staticClass:"bg-white"},[a("v-uni-view",{staticClass:"flex padding"},[a("v-uni-view",{staticClass:"padding-lr-xs"},[a("v-uni-view",{staticClass:"cu-avatar lg round",style:"background-image:url("+t.user.imgPath+");",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.noSupport()}}})],1),a("v-uni-view",{staticClass:"padding-xs text-xl text-black"},[a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.noSupport()}}},[t._v("Hello，"+t._s(t.user.username))]),a("v-uni-view",{staticClass:"cu-tag round line-blue sm"},[t._v(t._s(1==t.user.isAdmin?"管理员":1==t.user.userType?"主用户":"子用户"))])],1)],1)],1),a("v-uni-view",{staticClass:"cu-list grid col-4 no-border padding-lr-xs radius-lg-bottom"},[a("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toFilePath("disk")}}},[a("v-uni-view",{staticClass:"text-black text-bold text-xxl"},[t._v(t._s(t.countData.disk))]),a("v-uni-text",[t._v("磁盘")])],1),a("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toFilePath("thispc")}}},[a("v-uni-view",{staticClass:"text-black text-bold text-xxl"},[t._v(t._s(t.countData.drive))]),a("v-uni-text",[t._v("存储")])],1),a("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toFilePath("insure")}}},[a("v-uni-view",{staticClass:"text-black text-bold text-xxl"},[t._v(t._s(t.countData.insure))]),a("v-uni-text",[t._v("保险箱")])],1),a("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toFilePath("share")}}},[a("v-uni-view",{staticClass:"text-black text-bold text-xxl"},[t._v(t._s(t.countData.share))]),a("v-uni-text",[t._v("分享")])],1)],1),a("v-uni-view",{staticClass:"cu-bar margin-lr-xs margin-top-sm grid col-4 no-border bg-white radius-lg-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-xl text-black"},[t._v("常用功能")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.noSupport()}}},[t._v("全部功能"),a("v-uni-text",{staticClass:"cuIcon-right"})],1)],1)],1),a("v-uni-view",{staticClass:"cu-list grid col-4 no-border text-black margin-lr-xs padding-bottom radius-lg-bottom"},t._l(t.iconList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.otherClick(e.bindtap)}}},[a("v-uni-view",{class:["cuIcon-"+e.icon,"text-"+e.color,"text-shadow"],staticStyle:{"font-size":"56rpx"}},[0!=e.badge?a("v-uni-view",{staticClass:"cu-tag badge"},[1!=e.badge?[t._v(t._s(e.badge>99?"99+":e.badge))]:t._e()],2):t._e()],1),a("v-uni-text",[t._v(t._s(e.name))])],1)})),1),a("v-uni-view",{staticClass:"cu-bar margin-lr-xs margin-top grid col-4 no-border bg-white radius-lg-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-xl"},[t._v("其他功能")])],1)],1),a("v-uni-view",{staticClass:"cu-list grid col-4 no-border text-black margin-lr-xs padding-bottom radius-lg-bottom"},t._l(t.iconOtherList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.otherClick(e.bindtap)}}},[a("v-uni-view",{class:["cuIcon-"+e.icon,"text-"+e.color,"text-shadow"],staticStyle:{"font-size":"56rpx"}},[0!=e.badge?a("v-uni-view",{staticClass:"cu-tag badge"},[1!=e.badge?[t._v(t._s(e.badge>99?"99+":e.badge))]:t._e()],2):t._e()],1),a("v-uni-text",[t._v(t._s(e.name))])],1)})),1)],1)},n=[]},d471:function(t,e,a){"use strict";a.r(e);var i=a("59ee"),n=a("1233");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var u=a("f0c5"),c=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"4405d1e5",null,!1,i["a"],void 0);e["default"]=c.exports},d659:function(t,e,a){"use strict";var i=a("7835"),n=a.n(i);n.a},dc27:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-blue",isBack:!1}},[i("template",{attrs:{slot:"backText"},slot:"backText"}),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("首页")]),i("template",{attrs:{slot:"right"},slot:"right"},[1!=t.appType?i("v-uni-view",{staticClass:"action"}):t._e(),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-search text-white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchFile.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"cuIcon-order text-white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toUploadPage()}}}),1==t.appType||2==t.appType?i("v-uni-text",{staticClass:"cuIcon-scan text-white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toScanCode()}}}):t._e()],1)],1)],2),i("v-uni-swiper",{staticClass:"screen-swiper square-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},[i("v-uni-swiper-item",{},[i("v-uni-image",{attrs:{src:a("4b4f"),mode:"aspectFill"}}),t._e()],1),i("v-uni-swiper-item",{},[i("v-uni-image",{attrs:{src:a("7acc"),mode:"aspectFill"}}),t._e()],1),i("v-uni-swiper-item",{},[i("v-uni-image",{attrs:{src:a("ec9b"),mode:"aspectFill"}}),t._e()],1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("文件管理")],1)],1),i("v-uni-view",{staticClass:"cu-list grid col-5 no-border"},t._l(t.defStarList,(function(e,a){return i("v-uni-view",{staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showFileData(e)}}},[i("v-uni-view",[i("v-uni-image",{staticClass:"file-icon",attrs:{src:e.icon,alt:""}})],1),i("v-uni-text",[t._v(t._s(e.name))])],1)})),1),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-purple"}),t._v("工具包")],1)],1),i("v-uni-view",{staticClass:"cu-list grid col-5 no-border"},t._l(t.toolsList,(function(e,a){return i("v-uni-view",{staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openToolsApp(e)}}},[i("v-uni-view",[i("v-uni-image",{staticClass:"file-icon",attrs:{src:e.imgPath,alt:""}})],1),i("v-uni-text",[t._v(t._s(e.name))])],1)})),1),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-orange "}),t._v("收藏列表")],1)],1),i("v-uni-view",{staticClass:"cu-list menu"},t._l(t.diyStarList,(function(e,a){return i("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showFileData(e)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-image",{staticClass:"png",attrs:{src:e.icon,mode:"aspectFit"}}),i("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(e.name))])],1)],1)})),1),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-green"}),t._v("最近")],1)],1),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-image",{staticClass:"png",attrs:{src:a("c822"),mode:"aspectFit"}}),i("v-uni-text",{staticClass:"text-grey"},[t._v("此功能即将上线")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:t.baseCheck.show?"show":""},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"content"},[t._v("服务检查")])],1),i("v-uni-view",{staticClass:"padding-xl"},[t.baseCheck.url?i("v-uni-view",[t._v("检查到"+t._s(t.baseCheck.url)+"可能存在问题,是否进行重新登录?")]):t._e()],1),i("v-uni-view",{staticClass:"cu-bar bg-white"},[i("v-uni-view",{staticClass:"action margin-0 flex-sub solid-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.baseCheckAction(0)}}},[t._v("取消")]),i("v-uni-view",{staticClass:"action margin-0 flex-sub text-green solid-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.baseCheckAction(1)}}},[t._v("好的")])],1)],1)],1)],1)},n=[]},dd1c:function(t,e,a){"use strict";a.r(e);var i=a("48b1"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},ec9b:function(t,e,a){t.exports=a.p+"static/img/p3.b055bb4c.png"},f424:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7");var n=i(a("c7eb")),s=i(a("1da1")),u=i(a("0848")),c={data:function(){return{user:{},countData:{disk:0,drive:0,insure:0,share:0},isMpAppAndPlus:!1,iconList:[{icon:"mobile",color:"red",badge:0,name:"手机备份",bindtap:"bindBak"},{icon:"shop",color:"purple",badge:0,name:"资源广场",bindtap:"showResource"}],iconOtherList:[{icon:"settings",color:"blue",badge:0,name:"设置",bindtap:"bindSetting"},{icon:"question",color:"blue",badge:0,name:"帮助与反馈",bindtap:"bindHelp"},{icon:"exit",color:"blue",badge:0,name:"退出",bindtap:"bindExit"}],aboutData:{show:!1,versionName:"",version:"",wgtVersion:"",updateType:"1"},feedbackUrl:""}},methods:{changeUpdateType:function(t){this.aboutData.updateType=t,uni.setStorageSync("userUpdateType",t)},initData:function(){var t=(0,s.default)((0,n.default)().mark((function t(){var e,a;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,e.isMpAppAndPlus=1==u.default.appType()||2==u.default.appType(),t.next=4,u.default.initUser();case 4:return e.user=t.sent,t.next=7,u.default.postData("fileSystem","driveCount",{});case 7:a=t.sent,a&&0==a.code&&(e.countData=a.data),e.initConfig();case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),initConfig:function(){var t=(0,s.default)((0,n.default)().mark((function t(){var e,a,i;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.default.postData("user","getWebConfig",{});case 2:if(e=t.sent,!e||0!=e.code){t.next=8;break}if(a=e.data,!a||!a.feedbackUrl){t.next=8;break}return this.feedbackUrl=a.feedbackUrl,t.abrupt("return");case 8:return t.next=10,u.default.postData("business","needShowAuth",{no:this.user?this.user.parentUserNo:""});case 10:if(e=t.sent,!e||0!=e.code){t.next=20;break}return t.next=14,u.default.postData("system","getProductInfo",{});case 14:if(e=t.sent,!e||0!=e.code){t.next=20;break}if(i=e.data,!i.officialWebsite){t.next=20;break}return this.feedbackUrl=i.officialWebsite,t.abrupt("return");case 20:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),otherClick:function(){var t=(0,s.default)((0,n.default)().mark((function t(e){var a;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("bindExit"!=e){t.next=16;break}if(a=!0,t.prev=2,window==parent||!parent.webos){t.next=7;break}return t.next=6,new Promise((function(t){uni.showModal({title:"提示",content:"检测到当前处于Webos内部,退出也会让外部的Webos退出,确认继续?",success:function(e){t(e.confirm)}})}));case 6:a=t.sent;case 7:t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](2);case 11:if(a){t.next=13;break}return t.abrupt("return");case 13:u.default.logout(),t.next=17;break;case 16:"bindBak"==e?2==u.default.appType()?uni.navigateTo({url:"/pages/file/bak"}):u.default.showToast("该功能仅限APP可用,请前往官网下载"):"bindUpdate"==e||("bindAbout"==e?this.aboutData.show=!0:"bindHelp"==e?this.feedbackUrl?uni.navigateTo({url:"/pages/file/edit?url="+encodeURIComponent(this.feedbackUrl+"?from=feedback")+"&name="+encodeURIComponent("帮助与反馈")}):u.default.showToast("当前系统未开启帮助与反馈"):u.default.showToast("此功能敬请期待"));case 17:case"end":return t.stop()}}),t,this,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),noSupport:function(){u.default.showToast("此功能敬请期待")},toFilePath:function(t){u.default.toFilePath(t)}},mounted:function(){this.initData()}};e.default=c},f644:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{},[t.isMpApp?a("cu-custom",{attrs:{bgColor:"bg-blue"}},[a("template",{attrs:{slot:"content"},slot:"content"})],2):t._e(),a("v-uni-view",{staticClass:"bg-white"},[a("v-uni-view",{staticClass:"flex padding"},[a("v-uni-view",{staticClass:"padding-lr-xs"},[a("v-uni-view",{staticClass:"cu-avatar lg round",staticStyle:{"background-image":"url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"}})],1),a("v-uni-view",{staticClass:"padding-xs text-xl text-black"},[a("v-uni-view",[t._v("Hello，啄木鸟")]),a("v-uni-view",{staticClass:"cu-tag round line-green sm"},[t._v("已减排22.2g >")])],1)],1)],1),a("v-uni-view",{staticClass:"cu-list grid col-4 no-border padding-lr-xs radius-lg-bottom"},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"text-black text-bold text-xxl"},[t._v("6")]),a("v-uni-text",[t._v("优惠券")])],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"text-black text-bold text-xxl"},[t._v("0")]),a("v-uni-text",[t._v("权益卡")])],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"text-black text-bold text-xxl"},[t._v("4")]),a("v-uni-text",[t._v("保修卡")])],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"text-black text-bold text-xxl"},[t._v("11")]),a("v-uni-text",[t._v("收据")])],1)],1),a("v-uni-view",{staticClass:"margin-top-sm padding-lr-xs"},[a("v-uni-view",{staticClass:"bg-brown light radius-lg shadow-blur"},[a("v-uni-view",{staticClass:"flex padding-tb-sm padding-lr-sm justify-between"},[a("v-uni-view",{staticClass:"padding-xs"},[a("v-uni-view",[t._v("9.9元开通超级会员最高可省￥40")])],1),a("v-uni-view",{},[a("v-uni-view",{staticClass:"cu-btn round bg-black"},[t._v("开通会员")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"cu-bar margin-lr-xs margin-top-sm grid col-4 no-border bg-white radius-lg-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-xl text-black"},[t._v("我的订单")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-lg"},[t._v("全部订单"),a("v-uni-text",{staticClass:"cuIcon-right"})],1)],1)],1),a("v-uni-view",{staticClass:"cu-list grid col-4 no-border text-black margin-lr-xs padding-bottom radius-lg-bottom"},t._l(t.iconList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item",attrs:{bindtap:e.bindtap}},[a("v-uni-view",{class:["cuIcon-"+e.icon,"text-"+e.color,"text-shadow"],staticStyle:{"font-size":"56rpx"}},[0!=e.badge?a("v-uni-view",{staticClass:"cu-tag badge"},[1!=e.badge?[t._v(t._s(e.badge>99?"99+":e.badge))]:t._e()],2):t._e()],1),a("v-uni-text",[t._v(t._s(e.name))])],1)})),1),a("v-uni-view",{staticClass:"margin-top-sm padding-lr-xs"},[a("v-uni-view",{staticClass:"bg-white light radius-lg shadow-blur"},[a("v-uni-view",{staticClass:"flex padding-tb-sm padding-lr-sm justify-between"},[a("v-uni-view",{staticClass:"padding-xs"},[a("v-uni-view",{staticClass:"text-xl text-black"},[t._v("惊喜连连·洁净一秋")]),a("v-uni-view",{staticClass:"padding-top-xs"},[t._v("家居清洗限时"),a("v-uni-text",{staticClass:"text-red text-bold"},[t._v("6.6折")]),a("v-uni-text",{staticClass:"cuIcon-roundrightfill text-red"})],1)],1),a("v-uni-view",{},[a("v-uni-view",{staticClass:"cu-btn round bg-gradual-pinknew margin-top-sm"},[t._v("6折优惠")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"cu-bar margin-lr-xs margin-top grid col-4 no-border bg-white radius-lg-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-xl"},[t._v("其他功能")])],1)],1),a("v-uni-view",{staticClass:"cu-list grid col-4 no-border text-black margin-lr-sm padding-bottom radius-lg-bottom"},t._l(t.iconOtherList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item",attrs:{bindtap:e.bindtap}},[a("v-uni-view",{class:["cuIcon-"+e.icon,"text-"+e.color,"text-shadow"],staticStyle:{"font-size":"56rpx"}},[0!=e.badge?a("v-uni-view",{staticClass:"cu-tag badge"},[1!=e.badge?[t._v(t._s(e.badge>99?"99+":e.badge))]:t._e()],2):t._e()],1),a("v-uni-text",[t._v(t._s(e.name))])],1)})),1)],1)},n=[]},f89a:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("e25e");var n=i(a("c7eb")),s=i(a("1da1")),u=i(a("0848")),c=i(a("6fff")),o=i(a("1f72")),r=i(a("5b3c")),l=i(a("b65d")),v={components:{home:c.default,me:o.default,vip:r.default,im:l.default},data:function(){return{PageCur:"home",updateData:{show:!1,updateLog:"",fileId:"",soft:""},systemName:"腾飞Webos"}},onLoad:function(t){window.addEventListener("resize",(function(){window.location.reload()})),u.default.setLoginPage(!1),this.initData(t)},onShareAppMessage:function(t){return{title:"["+this.systemName+"]安全备份，高效办公，乐享娱乐，共享协作一网打尽",imageUrl:"../../static/logo.png"}},onShareTimeline:function(){return{title:"["+this.systemName+"]安全备份，高效办公，乐享娱乐，共享协作一网打尽"}},methods:{initData:function(t){var e=this;t.tabar&&(this.PageCur=t.tabar),t.share?e.checkShareAuth(t.share):(u.default.checkAndRefreshToken(),(0,s.default)((0,n.default)().mark((function t(){var a,i;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.default.initUser();case 2:return a=t.sent,a&&a.id||uni.reLaunch({url:"/pages/login/login"}),t.next=6,u.default.postData("system","getProductInfo",{},!0,!0);case 6:i=t.sent,i&&0==i.code&&(e.systemName=i.data.systemName);case 8:case"end":return t.stop()}}),t)})))(),u.default.initUploadTask(),setTimeout((function(){if(2==u.default.appType()){var t=uni.getStorageSync("lastCancalUpdate");if(!(t&&Date.now()-parseInt(t)<6048e5)){var a=uni.getStorageSync("userUpdateType");a||(a="1"),u.default.checkAppUpdate(a).then((function(t){t?(e.updateData.soft=t.soft,e.updateData.updateLog=t.updateLog,e.updateData.fileId=t.fileId,e.updateData.show=!0):u.default.checkWgtAndAutoUpdate(a)}))}}}),5e3))},updateAction:function(){var t=(0,s.default)((0,n.default)().mark((function t(e){var a;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=this,a.updateData.show=!1,0!=e){t.next=4;break}return t.abrupt("return");case 4:if(2!=e){t.next=7;break}return uni.setStorageSync("lastCancalUpdate",Date.now()+""),t.abrupt("return");case 7:if("webos_ios"!=a.updateData.soft){t.next=10;break}return u.default.showToast("请前往App Store更新"),t.abrupt("return");case 10:u.default.appUpdate(a.updateData.fileId);case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),navChange:function(){var t=(0,s.default)((0,n.default)().mark((function t(e,a){return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,u.default.userLoginCheck();case 3:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:if("im"!=e&&"vip"!=e){t.next=8;break}return u.default.showToast("此功能敬请期待"),t.abrupt("return");case 8:"file"==e?a&&this.$refs.homeRef.showFileData({path:"thispc"}):this.PageCur=e;case 9:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}(),checkShareAuth:function(){var t=(0,s.default)((0,n.default)().mark((function t(e){var a,i,s,c;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=this,i=uni.getStorageSync("share"+e),t.next=4,u.default.postData("shareFile","shareData",{code:e,password:i});case 4:s=t.sent,s&&0==s.code?1==s.data.type?(c="{sio:"+s.data.data.no+"}",uni.setStorageSync("shareCode",e),u.default.setShare(!0,c),"home"==this.PageCur&&this.$refs.homeRef.showFileData({path:c})):uni.showModal({title:"请输入分享密码?",editable:!0,complete:function(t){var i="";if(!t.confirm)return u.default.setShare(!1),void uni.reLaunch({url:"/pages/index/index"});t.content?(i=t.content,uni.setStorageSync("share"+e,i),uni.setStorageSync("shareCode",e)):u.default.showToast("请输入分享密码"),a.checkShareAuth(e)}}):(u.default.setShare(!1),uni.reLaunch({url:"/pages/index/index"}));case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},mounted:function(){uni.indexRef=this},onPullDownRefresh:function(){"home"==this.PageCur?this.$refs.homeRef.initData():"me"==this.PageCur&&this.$refs.meRef.initData(),uni.stopPullDownRefresh()},onBackPress:function(){if("home"==this.PageCur){if(u.default.showToast("再按一次退出程序"),this.lastBackTime||(this.lastBackTime=0),Date.now()-this.lastBackTime<1e3)if(2==u.default.appType())if("android"===plus.os.name.toLowerCase())plus.runtime.quit();else{var t=plus.ios.importClass("NSThread"),e=plus.ios.invoke(t,"mainThread");plus.ios.invoke(e,"exit")}else u.default.showToast("抱歉,该应用无法退出,请手动退出");this.lastBackTime=Date.now()}return!0}};e.default=v}}]);