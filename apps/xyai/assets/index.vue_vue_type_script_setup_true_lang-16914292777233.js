import{Z as oe,cQ as te,cR as I,bX as $,y as P,B as C,A as F,an as ne,v as re,d as A,H as O,J as S,a9 as le,c as T,cO as se,M as z,O as j,g as k,q as p,m as ae,bT as ce,W as ie,X as de,N as ue,a7 as pe,cu as me,bY as fe,cv as ge,ct as he,b6 as _e,o as E,a as N,av as q,b as U,w as d,f as s,ay as L,aw as ve,bb as be,bd as Ce,ba as xe,b0 as D,be as ye,bf as ze,ci as X,bq as we}from"./index-1691429277723.js";import{p as Ie,b as $e,a as ke}from"./chat-1691429277723.js";import{_ as G}from"./Scrollbar-1691429277723.js";import{_ as J}from"./Spin-1691429277723.js";import{_ as Be}from"./DataTable-1691429277723.js";const Pe=e=>{const{lineHeight:t,borderRadius:u,fontWeightStrong:_,baseColor:a,dividerColor:i,actionColor:c,textColor1:g,textColor2:n,closeColorHover:m,closeColorPressed:b,closeIconColor:f,closeIconColorHover:r,closeIconColorPressed:l,infoColor:o,successColor:x,warningColor:v,errorColor:w,fontSize:B}=e;return Object.assign(Object.assign({},te),{fontSize:B,lineHeight:t,titleFontWeight:_,borderRadius:u,border:`1px solid ${i}`,color:c,titleTextColor:g,iconColor:n,contentTextColor:n,closeBorderRadius:u,closeColorHover:m,closeColorPressed:b,closeIconColor:f,closeIconColorHover:r,closeIconColorPressed:l,borderInfo:`1px solid ${I(a,$(o,{alpha:.25}))}`,colorInfo:I(a,$(o,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:o,contentTextColorInfo:n,closeColorHoverInfo:m,closeColorPressedInfo:b,closeIconColorInfo:f,closeIconColorHoverInfo:r,closeIconColorPressedInfo:l,borderSuccess:`1px solid ${I(a,$(x,{alpha:.25}))}`,colorSuccess:I(a,$(x,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:x,contentTextColorSuccess:n,closeColorHoverSuccess:m,closeColorPressedSuccess:b,closeIconColorSuccess:f,closeIconColorHoverSuccess:r,closeIconColorPressedSuccess:l,borderWarning:`1px solid ${I(a,$(v,{alpha:.33}))}`,colorWarning:I(a,$(v,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:v,contentTextColorWarning:n,closeColorHoverWarning:m,closeColorPressedWarning:b,closeIconColorWarning:f,closeIconColorHoverWarning:r,closeIconColorPressedWarning:l,borderError:`1px solid ${I(a,$(w,{alpha:.25}))}`,colorError:I(a,$(w,{alpha:.08})),titleTextColorError:g,iconColorError:w,contentTextColorError:n,closeColorHoverError:m,closeColorPressedError:b,closeIconColorError:f,closeIconColorHoverError:r,closeIconColorPressedError:l})},Te={name:"Alert",common:oe,self:Pe},Re=Te,Ae=P("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[C("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),F("closable",[P("alert-body",[C("title",`
 padding-right: 24px;
 `)])]),C("icon",{color:"var(--n-icon-color)"}),P("alert-body",{padding:"var(--n-padding)"},[C("title",{color:"var(--n-title-text-color)"}),C("content",{color:"var(--n-content-text-color)"})]),ne({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),C("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),C("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),F("show-icon",[P("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),P("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[C("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[re("& +",[C("content",{marginTop:"9px"})])]),C("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),C("icon",{transition:"color .3s var(--n-bezier)"})]),Se=Object.assign(Object.assign({},S.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),Ee=A({name:"Alert",inheritAttrs:!1,props:Se,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:u,inlineThemeDisabled:_,mergedRtlRef:a}=O(e),i=S("Alert","-alert",Ae,Re,e,t),c=le("Alert",a,t),g=T(()=>{const{common:{cubicBezierEaseInOut:l},self:o}=i.value,{fontSize:x,borderRadius:v,titleFontWeight:w,lineHeight:B,iconSize:M,iconMargin:R,iconMarginRtl:H,closeIconSize:V,closeBorderRadius:W,closeSize:h,closeMargin:K,closeMarginRtl:Q,padding:Y}=o,{type:y}=e,{left:Z,right:ee}=se(R);return{"--n-bezier":l,"--n-color":o[z("color",y)],"--n-close-icon-size":V,"--n-close-border-radius":W,"--n-close-color-hover":o[z("closeColorHover",y)],"--n-close-color-pressed":o[z("closeColorPressed",y)],"--n-close-icon-color":o[z("closeIconColor",y)],"--n-close-icon-color-hover":o[z("closeIconColorHover",y)],"--n-close-icon-color-pressed":o[z("closeIconColorPressed",y)],"--n-icon-color":o[z("iconColor",y)],"--n-border":o[z("border",y)],"--n-title-text-color":o[z("titleTextColor",y)],"--n-content-text-color":o[z("contentTextColor",y)],"--n-line-height":B,"--n-border-radius":v,"--n-font-size":x,"--n-title-font-weight":w,"--n-icon-size":M,"--n-icon-margin":R,"--n-icon-margin-rtl":H,"--n-close-size":h,"--n-close-margin":K,"--n-close-margin-rtl":Q,"--n-padding":Y,"--n-icon-margin-left":Z,"--n-icon-margin-right":ee}}),n=_?j("alert",T(()=>e.type[0]),g,e):void 0,m=k(!0),b=()=>{const{onAfterLeave:l,onAfterHide:o}=e;l&&l(),o&&o()};return{rtlEnabled:c,mergedClsPrefix:t,mergedBordered:u,visible:m,handleCloseClick:()=>{var l;Promise.resolve((l=e.onClose)===null||l===void 0?void 0:l.call(e)).then(o=>{o!==!1&&(m.value=!1)})},handleAfterLeave:()=>{b()},mergedTheme:i,cssVars:_?void 0:g,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),p(ue,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:t,$slots:u}=this,_={class:[`${t}-alert`,this.themeClass,this.closable&&`${t}-alert--closable`,this.showIcon&&`${t}-alert--show-icon`,this.rtlEnabled&&`${t}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?p("div",Object.assign({},ae(this.$attrs,_)),this.closable&&p(ce,{clsPrefix:t,class:`${t}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&p("div",{class:`${t}-alert__border`}),this.showIcon&&p("div",{class:`${t}-alert__icon`,"aria-hidden":"true"},ie(u.icon,()=>[p(pe,{clsPrefix:t},{default:()=>{switch(this.type){case"success":return p(he,null);case"info":return p(ge,null);case"warning":return p(fe,null);case"error":return p(me,null);default:return null}}})])),p("div",{class:[`${t}-alert-body`,this.mergedBordered&&`${t}-alert-body--bordered`]},de(u.header,a=>{const i=a||this.title;return i?p("div",{class:`${t}-alert-body__title`},i):null}),u.default&&p("div",{class:`${t}-alert-body__content`},u))):null}})}}),Me=P("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`),He=Object.assign({},S.props),Ve=A({name:"A",props:He,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:u}=O(e),_=S("Typography","-a",Me,_e,e,t),a=T(()=>{const{common:{cubicBezierEaseInOut:c},self:{aTextColor:g}}=_.value;return{"--n-text-color":g,"--n-bezier":c}}),i=u?j("a",void 0,a,e):void 0;return{mergedClsPrefix:t,cssVars:u?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),p("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}});function Ye(){return`#${Math.floor(Math.random()*16777215).toString(16)}`}const We={class:"inline-block",viewBox:"0 0 36 36",width:"1em",height:"1em"},Le=q('<path fill="#662113" d="M15.971 15.083c-1.458-2.333-.667-7.708 0-8.958s-.542-2.458-1.5-.458s-.996 3-3.162 2.458s-1.088-3.292-.379-5.625c.729-2.4-.917-1.959-1.667-.458c-.75 1.5-1.254 5.693-2.901 5.984c-1.647.291-6.099.599-2.851-5.651C4.818-.139 2.773-.656 1.68 1.459C.361 4.007-.404 7.25.221 8.625c1.113 2.448 3.483 2.95 6.983 2.284s6.101-.634 6.101 1.133c0 1.872.208 3.458 1.042 3.625s1.624-.584 1.624-.584zm4.057 0c1.458-2.333.667-7.708 0-8.958s.542-2.458 1.5-.458s.996 3 3.162 2.458s1.088-3.292.379-5.625c-.729-2.4.917-1.959 1.667-.458s1.254 5.693 2.901 5.984c1.647.292 6.099.599 2.851-5.651c-1.307-2.514.737-3.031 1.831-.916c1.318 2.549 2.084 5.792 1.459 7.167c-1.113 2.448-3.482 2.95-6.982 2.284s-6.102-.634-6.102 1.133c0 1.872-.208 3.458-1.041 3.625s-1.625-.585-1.625-.585z"></path><path fill="#C1694F" d="M13.859 15.495c.596 2.392.16 4.422-2.231 5.017c-2.392.596-6.344.559-7.958-1.303c-2.294-2.646-2.531-6.391-1.189-6.725c1.34-.334 10.783.62 11.378 3.011zm8.283 0c-.596 2.392-.16 4.422 2.231 5.017c2.392.596 6.345.559 7.958-1.303c2.295-2.646 2.531-6.391 1.189-6.725c-1.34-.334-10.783.62-11.378 3.011z"></path><path fill="#272B2B" d="M2.48 12.484c-.943.235-1.102 2.157-.317 4.198l3.374-4.134c-1.457-.146-2.643-.167-3.057-.064zm31.041 0c-.419-.104-1.632-.083-3.118.069l3.445 4.106c.774-2.032.613-3.941-.327-4.175z"></path><path fill="#E6AAAA" d="M12.052 15.997c.871 1.393-.553 2.229-1.946 3.099c-1.394.871-4.608-.203-5.479-1.596c-.871-1.394-1.186-3.131-.676-3.45c.51-.318 7.23.553 8.101 1.947zm11.896 0c-.871 1.393.553 2.229 1.945 3.099c1.394.871 4.608-.203 5.479-1.596c.871-1.394 1.185-3.131.676-3.45c-.51-.318-7.229.553-8.1 1.947z"></path><path fill="#C1694F" d="M18 14.125h-.002c-10.271.001-8.703 3.959-7.603 10.541c1.1 6.584 2.401 11.256 7.605 11.256c5.203 0 6.502-4.672 7.604-11.256c1.099-6.582 2.666-10.54-7.604-10.541z"></path><path fill="#272B2B" d="M11.826 22.851s-.75-1.299.549-2.049s2.049.549 2.049.549l.75 1.299s.75 1.299-.549 2.049s-2.049-.549-2.049-.549l-.75-1.299zm9.75-1.5s.75-1.299 2.049-.549s.549 2.049.549 2.049l-.75 1.299s-.75 1.299-2.049.549s-.549-2.049-.549-2.049l.75-1.299zm-6.35 12.915c-.925-.188 1.85-3.596 2.774-3.596s3.699 3.407 2.774 3.596c-.924.188-4.624.188-5.548 0z"></path>',6),Fe=[Le];function Oe(e,t){return E(),N("svg",We,Fe)}const Ze={name:"twemoji-deer",render:Oe},je={class:"inline-block",viewBox:"0 0 128 128",width:"1em",height:"1em"},Ne=q('<path fill="#CCA47A" d="M121.54 95.58c-1.52-.9-3.97-1.22-6.43-1.19c-3.01.04-10.67 1.46-10.67 1.46c1.54-1.58 8.64-2.3 9.33-4c.41-1.03-.81-5.5-7.32-5.39c-8.37.14-14.3 3.46-14.3 3.46s4.06-3.56 4.65-4.27c1.48-1.76-.54-4.75-5.64-3.9c-3.57.6-7.52 2.95-12.85 6.62c-4.26 2.93-13.78 6.45-21.18 5.15c4 .71 29.24 10.01 29.24 10.01c8.43-.09 18.18.01 25.73 1.36l8.15-2.36c4.77-1.32 4.62-4.96 1.29-6.95z"></path><path fill="#FFB300" d="M53.76 92.88h.01h-.01zm.98 0z"></path><path fill="#E0BB95" d="M115.68 105.69c-9.95-4.12-26.79-1.15-33.1-4c-8.75-3.95-16.81-6.3-21.59-7.85c-4.78-1.55-14.3-2.69-16.2-4.82c1.05-4.35 4.78-9.05 7.25-11.61c5.33-5.51 8.7-9.43 8.29-14.08c-.38-4.38-4.44-7.02-7.84-3.78c-1.94 1.85-7.98 8.72-21.09 14.65c-3.47 1.57-6.66 3.91-10.79 7.71c-7.1 6.54-12.98 6.95-12.98 6.95s-.71.58-1.1 1.62C5.6 92.97 4 98.4 4 106.45c0 7.03 1.22 11.68 2.15 14.22c.58 1.58 1.2 2.37 1.2 2.37s4.58 1.07 13.51.69c9.43-.4 26.64-1.21 40.57-4.81c17.86-4.61 42.91-2.47 54.06-1.43c1.58.15 4.43.53 5.8-.68c1.16-1.02.83-2.56.86-3.6c.08-2.65-3.12-5.46-6.47-7.52z"></path><path fill="#EDA600" d="M53.76 92.88zm0 0s.01 0 0 0c.01 0 .01 0 0 0zm.98 0zm0 0z"></path><path fill="#BA8F63" d="M119.03 116c-17.3-4.36-42.51-3.73-58.35.01c-17.83 4.73-43.79 5.46-54.73 4.08c.18 8.34 44.84 1.28 55.48-1.17c15.05-4.16 40.55-2.86 54.06-1.43c1.95.12 5.58.81 6.41-1.66c-.78.62-1.92.36-2.87.17zM45.05 89.26s.05-1.3 1.02-3.27c1.08-2.19 3.62-6.15 5.98-8.59c5.33-5.51 8.73-9.43 8.29-14.08c-.27-2.86-1.89-4.24-1.91-3.98c-.02.26.33.96.44 2.32c.09 1.2.33 2.57-2.02 6.21c-1.34 2.08-3.58 4.24-6.89 7.53c-3.77 3.75-5.21 5.97-5.9 8.99c-.73 3.22.3 4.34.99 4.87zm41.32 14.28c8.4-.09 18.75-.14 26.29 1.2c1.82-.53 7.59-2.2 7.59-2.2c2.65-.74 3.78-2.19 3.69-3.67c0-.01 0-.01-.01-.02c0 0-10.13 3.09-15.41 2.75c-6.38-.42-11.81-.42-14.65-.28c-1.88.09-6.98.28-4.83-.71c4.36-2.2 11.68-4.01 15.46-4.79c1.63-1.55 8.48-2.32 9.27-3.95c.17-.35.03-.9.02-.93c-1.71.86-6.67 1.08-10.97 2.34c-3.3.97-8.51 2.93-12.28 4.57c-3.34 1.46-7.28 1.98-9.57.84c-1.23-.61-1.01-2.28.84-3.4c2.78-1.68 6.95-4.05 10.45-5.44c.63-.55 4-3.53 4.55-4.17c.6-.71.67-2.09-.17-2.67c0 0-.21 1.71-5.47 4.41c-3.58 1.84-7.12 3.3-12.33 6.98c-2.77 1.96-5.4 1.67-9.64.52c-2.79-.76-5.05-.85-7.45-1.14c-.23.01-.47.02-.7.02c6.02 1.73 25.32 9.74 25.32 9.74z"></path>',5),qe=[Ne];function Ue(e,t){return E(),N("svg",je,qe)}const eo={name:"noto-palm-up-hand-medium-light-skin-tone",render:Ue};const De=ve("small",null,"阿里巴巴图标库",-1),oo=A({__name:"index",props:{modal:{type:Boolean,default:!1},categories:{default:[]}},emits:["update:modal"],setup(e,{emit:t}){const u=e,_=[{label:"是",value:!0},{label:"否",value:!1}],a=k(null),i=k({local:!1}),c=k({usage:"1",icon:"",prompt:"",public:"",category_id:"",name:"",description:""}),g={icon:[{required:!0,message:"请输入或粘贴图标",trigger:"blur"}],name:[{required:!0,message:"请输入您的轻应用名称",trigger:"blur"}],description:[{required:!0,message:"请使用50字左右介绍使用",trigger:"blur"}],public:[{required:!0,type:"boolean",message:"请选择是否公开",trigger:"blur"}],category_id:[{required:!0,message:"请选择应用分类",trigger:"blur"}],usage:[{required:!0,message:"请输入每次使用消耗积分",trigger:"blur"},{pattern:/^(1?\d|20)$/,message:"请输入20以内正整数",trigger:"blur"}]},n=T({get(){return u.modal},set(f){t("update:modal",f)}}),m=f=>{var r;f.preventDefault(),(r=a.value)==null||r.validate().then(()=>{Ie(c.value).then(l=>{var o,x;l.data.code===200?(n.value=!1,(o=window.$message)==null||o.success(l.data.msg)):(x=window.$message)==null||x.error(l.data.msg)})})};function b(){var f;(f=window.$dialog)==null||f.info({title:"提示",content:"请问确定要关闭吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{n.value=!1}})}return(f,r)=>{const l=Ee,o=be,x=Ve,v=Ce,w=xe,B=D,M=ye,R=ze,H=G,V=J,W=X;return E(),U(W,{show:n.value,"onUpdate:show":r[6]||(r[6]=h=>n.value=h),closable:!1,preset:"card","content-style":{padding:"0.5rem"},style:{"max-width":"600px"},onClose:b},{default:d(()=>[s(V,{show:i.value.local},{default:d(()=>[s(H,{style:{"max-height":"70vh",padding:"1rem"}},{default:d(()=>[s(R,{ref_key:"formRef",ref:a,"label-width":80,model:c.value,rules:g},{default:d(()=>[s(l,{type:"info"},{default:d(()=>[L("为了防止滥用，每次创建都需要10积分，审核通过之后将会返还")]),_:1}),s(v,{label:"图标",path:"icon",class:"mt-5"},{feedback:d(()=>[s(x,{target:"_blank",href:"https://www.iconfont.cn/"},{default:d(()=>[De]),_:1})]),default:d(()=>[s(o,{value:c.value.icon,"onUpdate:value":r[0]||(r[0]=h=>c.value.icon=h),placeholder:"可以输入Emoji或在下方网站中选择图标复制SVG代码粘贴进来"},null,8,["value"])]),_:1}),s(v,{label:"名称",path:"name",feedback:"起一个吸引人的名字吧",class:"mt-5"},{default:d(()=>[s(o,{value:c.value.name,"onUpdate:value":r[1]||(r[1]=h=>c.value.name=h),placeholder:"讲故事"},null,8,["value"])]),_:1}),s(v,{label:"分类",path:"category_id",feedback:"请选择应用分类，如没有请联系管理员",class:"mt-5"},{default:d(()=>[s(w,{value:c.value.category_id,"onUpdate:value":r[2]||(r[2]=h=>c.value.category_id=h),options:u.categories},null,8,["value","options"])]),_:1}),s(v,{label:"提示词",path:"description",feedback:"用简短的语言介绍使用方式和效果",class:"mt-5"},{default:d(()=>[s(o,{value:c.value.description,"onUpdate:value":r[3]||(r[3]=h=>c.value.description=h),placeholder:"我想让你扮演……"},null,8,["value"])]),_:1}),s(v,{label:"是否公开",path:"public",class:"mt-5",feedback:"公开之后其他人才可以使用"},{default:d(()=>[s(w,{value:c.value.public,"onUpdate:value":r[4]||(r[4]=h=>c.value.public=h),options:_,placeholder:"请选择是否公开"},null,8,["value"])]),_:1}),s(v,null,{default:d(()=>[s(M,{style:{margin:"auto"}},{default:d(()=>[s(B,{type:"warning",onClick:r[5]||(r[5]=h=>n.value=!1)},{default:d(()=>[L("取消")]),_:1}),s(B,{type:"primary",onClick:m},{default:d(()=>[L("提交")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["show"])]),_:1},8,["show"])}}}),to=A({__name:"index",props:{modal:{type:Boolean,default:!1},categories:{default:[]}},emits:["update:modal"],setup(e,{emit:t}){const u=e,_=k([]),a=k([{title:"名称",key:"name"},{title:"描述",key:"description",render:n=>p("n-ellipsis",{lines:1},{default:()=>n.description})},{title:"被用次数",key:"used_count"},{title:"状态",key:"status"},{title:"操作",key:"action",render:n=>p("n-space",{justify:"space-evenly",style:"flex-flow: nowrap"},{default:()=>[p(D,{size:"small",bordered:!1,type:"error",onClick:()=>{var m;(m=window.$dialog)==null||m.warning({title:"提示",content:"确定删除吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{$e(n).then(()=>i())}})}},{default:()=>"删除"})]})}]);function i(){ke({from:"user"}).then(n=>{_.value=n.data})}we.get("token")&&i();const c=k({local:!1}),g=T({get(){return u.modal},set(n){t("update:modal",n)}});return(n,m)=>{const b=Be,f=G,r=J,l=X;return E(),U(l,{show:g.value,"onUpdate:show":m[0]||(m[0]=o=>g.value=o),closable:!1,preset:"card","content-style":{padding:"0.5rem"},style:{"max-width":"600px"}},{default:d(()=>[s(r,{show:c.value.local},{default:d(()=>[s(f,{style:{"max-height":"70vh",padding:"1rem"}},{default:d(()=>[s(b,{data:_.value,columns:a.value},null,8,["data","columns"])]),_:1})]),_:1},8,["show"])]),_:1},8,["show"])}}});export{oo as _,to as a,eo as b,Ze as c,Ye as r};