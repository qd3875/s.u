import{cG as ct,cH as K,cI as bt,d as J,g as _,cJ as ft,cK as pt,q as b,cL as ve,D as ut,I as Ce,ag as vt,c as q,m as ht,F as gt,a7 as mt,ah as xt,bT as yt,b_ as wt,y as n,A as i,v as R,B as A,am as St,H as Rt,J as Te,cM as Ct,aq as he,cN as ee,a1 as Tt,h as te,s as ae,ad as zt,t as F,bE as $t,S as Pt,M as j,cO as G,O as _t,X as ge,Y as me,ar as Y,aQ as Wt,aR as At,T as Lt,cP as Bt}from"./index-1691429277723.js";import{A as Et}from"./Add-1691429277723.js";var kt=/\s/;function jt(e){for(var r=e.length;r--&&kt.test(e.charAt(r)););return r}var It=/^\s+/;function Ot(e){return e&&e.slice(0,jt(e)+1).replace(It,"")}var xe=0/0,Ht=/^[-+]0x[0-9a-f]+$/i,Ft=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,Dt=parseInt;function ye(e){if(typeof e=="number")return e;if(ct(e))return xe;if(K(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=K(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Ot(e);var d=Ft.test(e);return d||Mt.test(e)?Dt(e.slice(2),d?2:8):Ht.test(e)?xe:+e}var Nt=function(){return bt.Date.now()};const re=Nt;var Vt="Expected a function",Xt=Math.max,Ut=Math.min;function Gt(e,r,d){var u,l,h,v,f,g,m=0,y=!1,w=!1,x=!0;if(typeof e!="function")throw new TypeError(Vt);r=ye(r)||0,K(d)&&(y=!!d.leading,w="maxWait"in d,h=w?Xt(ye(d.maxWait)||0,r):h,x="trailing"in d?!!d.trailing:x);function S(c){var z=u,I=l;return u=l=void 0,m=c,v=e.apply(I,z),v}function C(c){return m=c,f=setTimeout(L,r),y?S(c):v}function W(c){var z=c-g,I=c-m,H=r-z;return w?Ut(H,h-I):H}function $(c){var z=c-g,I=c-m;return g===void 0||z>=r||z<0||w&&I>=h}function L(){var c=re();if($(c))return T(c);f=setTimeout(L,W(c))}function T(c){return f=void 0,x&&u?S(c):(u=l=void 0,v)}function B(){f!==void 0&&clearTimeout(f),m=0,u=g=l=f=void 0}function k(){return f===void 0?v:T(re())}function p(){var c=re(),z=$(c);if(u=arguments,l=this,g=c,z){if(f===void 0)return C(g);if(w)return clearTimeout(f),f=setTimeout(L,r),S(g)}return f===void 0&&(f=setTimeout(L,r)),v}return p.cancel=B,p.flush=k,p}var Yt="Expected a function";function ne(e,r,d){var u=!0,l=!0;if(typeof e!="function")throw new TypeError(Yt);return K(d)&&(u="leading"in d?!!d.leading:u,l="trailing"in d?!!d.trailing:l),Gt(e,r,{leading:u,maxWait:r,trailing:l})}const qt=ve(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[ve("&::-webkit-scrollbar",{width:0,height:0})]),Kt=J({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=_(null);function r(l){!(l.currentTarget.offsetWidth<l.currentTarget.scrollWidth)||l.deltaY===0||(l.currentTarget.scrollLeft+=l.deltaY+l.deltaX,l.preventDefault())}const d=ft();return qt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:pt,ssr:d}),Object.assign({selfRef:e,handleWheel:r},{scrollTo(...l){var h;(h=e.value)===null||h===void 0||h.scrollTo(...l)}})},render(){return b("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),se=ut("n-tabs"),ze={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},aa=J({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ze,setup(e){const r=Ce(se,null);return r||vt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:r.paneStyleRef,class:r.paneClassRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){return b("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Jt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},wt(ze,["displayDirective"])),ie=J({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Jt,setup(e){const{mergedClsPrefixRef:r,valueRef:d,typeRef:u,closableRef:l,tabStyleRef:h,tabChangeIdRef:v,onBeforeLeaveRef:f,triggerRef:g,handleAdd:m,activateTab:y,handleClose:w}=Ce(se);return{trigger:g,mergedClosable:q(()=>{if(e.internalAddable)return!1;const{closable:x}=e;return x===void 0?l.value:x}),style:h,clsPrefix:r,value:d,type:u,handleClose(x){x.stopPropagation(),!e.disabled&&w(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}const{name:x}=e,S=++v.id;if(x!==d.value){const{value:C}=f;C?Promise.resolve(C(e.name,d.value)).then(W=>{W&&v.id===S&&y(x)}):y(x)}}}},render(){const{internalAddable:e,clsPrefix:r,name:d,disabled:u,label:l,tab:h,value:v,mergedClosable:f,style:g,trigger:m,$slots:{default:y}}=this,w=l??h;return b("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?b("div",{class:`${r}-tabs-tab-pad`}):null,b("div",Object.assign({key:d,"data-name":d,"data-disabled":u?!0:void 0},ht({class:[`${r}-tabs-tab`,v===d&&`${r}-tabs-tab--active`,u&&`${r}-tabs-tab--disabled`,f&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?void 0:g},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),b("span",{class:`${r}-tabs-tab__label`},e?b(gt,null,b("div",{class:`${r}-tabs-tab__height-placeholder`}," "),b(mt,{clsPrefix:r},{default:()=>b(Et,null)})):y?y():typeof w=="object"?w:xt(w??d)),f&&this.type==="card"?b(yt,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:u}):null))}}),Qt=n("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[i("segment-type",[n("tabs-rail",[R("&.transition-disabled","color: red;",[n("tabs-tab",`
 transition: none;
 `)])])]),i("top",[n("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),i("left",[n("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),i("left, right",`
 flex-direction: row;
 `,[n("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),i("right",`
 flex-direction: row-reverse;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),n("tabs-bar",`
 left: 0;
 `)]),i("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),n("tabs-bar",`
 top: 0;
 `)]),n("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[n("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),R("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),i("flex",[n("tabs-nav",{width:"100%"},[n("tabs-wrapper",{width:"100%"},[n("tabs-tab",{marginRight:0})])])]),n("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),i("top, bottom",[n("tabs-nav-scroll-wrapper",[R("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),R("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),i("shadow-start",[R("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[R("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),i("left, right",[n("tabs-nav-scroll-wrapper",[R("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),R("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),i("shadow-start",[R("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[R("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),n("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[n("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[R("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),R("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),n("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),n("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),n("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),n("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[i("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 `)]),n("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[R("&.transition-disabled",`
 transition: none;
 `),i("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),n("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),n("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[R("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),R("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),R("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),R("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),R("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),n("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),i("line-type, bar-type",[n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[R("&:hover",{color:"var(--n-tab-text-color-hover)"}),i("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),i("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),n("tabs-nav",[i("line-type",[i("top",[A("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 bottom: -1px;
 `)]),i("left",[A("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 right: -1px;
 `)]),i("right",[A("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 left: -1px;
 `)]),i("bottom",[A("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 top: -1px;
 `)]),A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-bar",`
 border-radius: 0;
 `)]),i("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[i("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),St("disabled",[R("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),i("closable","padding-right: 8px;"),i("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),i("disabled","color: var(--n-tab-text-color-disabled);")]),n("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),i("left, right",[n("tabs-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),i("top",[i("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-bottom: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),i("left",[i("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-right: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),i("right",[i("card-type",[n("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-left: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),i("bottom",[i("card-type",[n("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-top: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Zt=Object.assign(Object.assign({},Te.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ra=J({name:"Tabs",props:Zt,setup(e,{slots:r}){var d,u,l,h;const{mergedClsPrefixRef:v,inlineThemeDisabled:f}=Rt(e),g=Te("Tabs","-tabs",Qt,Ct,e,v),m=_(null),y=_(null),w=_(null),x=_(null),S=_(null),C=_(!0),W=_(!0),$=he(e,["labelSize","size"]),L=he(e,["activeName","value"]),T=_((u=(d=L.value)!==null&&d!==void 0?d:e.defaultValue)!==null&&u!==void 0?u:r.default?(h=(l=ee(r.default())[0])===null||l===void 0?void 0:l.props)===null||h===void 0?void 0:h.name:null),B=Tt(L,T),k={id:0},p=q(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});te(B,()=>{k.id=0,H(),le()});function c(){var t;const{value:a}=B;return a===null?null:(t=m.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function z(t){if(e.type==="card")return;const{value:a}=y;if(a&&t){const o=`${v.value}-tabs-bar--disabled`,{barWidth:s,placement:P}=e;if(t.dataset.disabled==="true"?a.classList.add(o):a.classList.remove(o),["top","bottom"].includes(P)){if(I(["top","maxHeight","height"]),typeof s=="number"&&t.offsetWidth>=s){const E=Math.floor((t.offsetWidth-s)/2)+t.offsetLeft;a.style.left=`${E}px`,a.style.maxWidth=`${s}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(I(["left","maxWidth","width"]),typeof s=="number"&&t.offsetHeight>=s){const E=Math.floor((t.offsetHeight-s)/2)+t.offsetTop;a.style.top=`${E}px`,a.style.maxHeight=`${s}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function I(t){const{value:a}=y;if(a)for(const o of t)a.style[o]=""}function H(){if(e.type==="card")return;const t=c();t&&z(t)}function le(t){var a;const o=(a=S.value)===null||a===void 0?void 0:a.$el;if(!o)return;const s=c();if(!s)return;const{scrollLeft:P,offsetWidth:E}=o,{offsetLeft:D,offsetWidth:X}=s;P>D?o.scrollTo({top:0,left:D,behavior:"smooth"}):D+X>P+E&&o.scrollTo({top:0,left:D+X-E,behavior:"smooth"})}const N=_(null);let Q=0,O=null;function $e(t){const a=N.value;if(a){Q=t.getBoundingClientRect().height;const o=`${Q}px`,s=()=>{a.style.height=o,a.style.maxHeight=o};O?(s(),O(),O=null):O=s}}function Pe(t){const a=N.value;if(a){const o=t.getBoundingClientRect().height,s=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(Q,o)}px`};O?(O(),O=null,s()):O=s}}function _e(){const t=N.value;t&&(t.style.maxHeight="",t.style.height="")}const de={value:[]},ce=_("next");function We(t){const a=B.value;let o="next";for(const s of de.value){if(s===a)break;if(s===t){o="prev";break}}ce.value=o,Ae(t)}function Ae(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":s}=e;a&&Y(a,t),o&&Y(o,t),s&&Y(s,t),T.value=t}function Le(t){const{onClose:a}=e;a&&Y(a,t)}function be(){const{value:t}=y;if(!t)return;const a="transition-disabled";t.classList.add(a),H(),t.classList.remove(a)}let fe=0;function Be(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||fe===t.contentRect.width)return;fe=t.contentRect.width;const{type:o}=e;(o==="line"||o==="bar")&&be(),o!=="segment"&&Z((a=S.value)===null||a===void 0?void 0:a.$el)}const Ee=ne(Be,64);te([()=>e.justifyContent,()=>e.size],()=>{ae(()=>{const{type:t}=e;(t==="line"||t==="bar")&&be()})});const V=_(!1);function ke(t){var a;const{target:o,contentRect:{width:s}}=t,P=o.parentElement.offsetWidth;if(!V.value)P<s&&(V.value=!0);else{const{value:E}=x;if(!E)return;P-s>E.$el.offsetWidth&&(V.value=!1)}Z((a=S.value)===null||a===void 0?void 0:a.$el)}const je=ne(ke,64);function Ie(){const{onAdd:t}=e;t&&t(),ae(()=>{const a=c(),{value:o}=S;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function Z(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:s,offsetWidth:P}=t;C.value=o<=0,W.value=o+P>=s}else{const{scrollTop:o,scrollHeight:s,offsetHeight:P}=t;C.value=o<=0,W.value=o+P>=s}}const Oe=ne(t=>{Z(t.target)},64);zt(se,{triggerRef:F(e,"trigger"),tabStyleRef:F(e,"tabStyle"),paneClassRef:F(e,"paneClass"),paneStyleRef:F(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:F(e,"type"),closableRef:F(e,"closable"),valueRef:B,tabChangeIdRef:k,onBeforeLeaveRef:F(e,"onBeforeLeave"),activateTab:We,handleClose:Le,handleAdd:Ie}),$t(()=>{H(),le()}),Pt(()=>{const{value:t}=w;if(!t)return;const{value:a}=v,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,s=`${a}-tabs-nav-scroll-wrapper--shadow-end`;C.value?t.classList.remove(o):t.classList.add(o),W.value?t.classList.remove(s):t.classList.add(s)});const pe=_(null);te(B,()=>{if(e.type==="segment"){const t=pe.value;t&&ae(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const He={syncBarPosition:()=>{H()}},ue=q(()=>{const{value:t}=$,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${o}`,{self:{barColor:P,closeIconColor:E,closeIconColorHover:D,closeIconColorPressed:X,tabColor:Fe,tabBorderColor:Me,paneTextColor:De,tabFontWeight:Ne,tabBorderRadius:Ve,tabFontWeightActive:Xe,colorSegment:Ue,fontWeightStrong:Ge,tabColorSegment:Ye,closeSize:qe,closeIconSize:Ke,closeColorHover:Je,closeColorPressed:Qe,closeBorderRadius:Ze,[j("panePadding",t)]:U,[j("tabPadding",s)]:et,[j("tabPaddingVertical",s)]:tt,[j("tabGap",s)]:at,[j("tabGap",`${s}Vertical`)]:rt,[j("tabTextColor",a)]:nt,[j("tabTextColorActive",a)]:ot,[j("tabTextColorHover",a)]:it,[j("tabTextColorDisabled",a)]:st,[j("tabFontSize",t)]:lt},common:{cubicBezierEaseInOut:dt}}=g.value;return{"--n-bezier":dt,"--n-color-segment":Ue,"--n-bar-color":P,"--n-tab-font-size":lt,"--n-tab-text-color":nt,"--n-tab-text-color-active":ot,"--n-tab-text-color-disabled":st,"--n-tab-text-color-hover":it,"--n-pane-text-color":De,"--n-tab-border-color":Me,"--n-tab-border-radius":Ve,"--n-close-size":qe,"--n-close-icon-size":Ke,"--n-close-color-hover":Je,"--n-close-color-pressed":Qe,"--n-close-border-radius":Ze,"--n-close-icon-color":E,"--n-close-icon-color-hover":D,"--n-close-icon-color-pressed":X,"--n-tab-color":Fe,"--n-tab-font-weight":Ne,"--n-tab-font-weight-active":Xe,"--n-tab-padding":et,"--n-tab-padding-vertical":tt,"--n-tab-gap":at,"--n-tab-gap-vertical":rt,"--n-pane-padding-left":G(U,"left"),"--n-pane-padding-right":G(U,"right"),"--n-pane-padding-top":G(U,"top"),"--n-pane-padding-bottom":G(U,"bottom"),"--n-font-weight-strong":Ge,"--n-tab-color-segment":Ye}}),M=f?_t("tabs",q(()=>`${$.value[0]}${e.type[0]}`),ue,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:B,renderedNames:new Set,tabsRailElRef:pe,tabsPaneWrapperRef:N,tabsElRef:m,barElRef:y,addTabInstRef:x,xScrollInstRef:S,scrollWrapperElRef:w,addTabFixed:V,tabWrapperStyle:p,handleNavResize:Ee,mergedSize:$,handleScroll:Oe,handleTabsResize:je,cssVars:f?void 0:ue,themeClass:M==null?void 0:M.themeClass,animationDirection:ce,renderNameListRef:de,onAnimationBeforeLeave:$e,onAnimationEnter:Pe,onAnimationAfterEnter:_e,onRender:M==null?void 0:M.onRender},He)},render(){const{mergedClsPrefix:e,type:r,placement:d,addTabFixed:u,addable:l,mergedSize:h,renderNameListRef:v,onRender:f,paneWrapperClass:g,paneWrapperStyle:m,$slots:{default:y,prefix:w,suffix:x}}=this;f==null||f();const S=y?ee(y()).filter(p=>p.type.__TAB_PANE__===!0):[],C=y?ee(y()).filter(p=>p.type.__TAB__===!0):[],W=!C.length,$=r==="card",L=r==="segment",T=!$&&!L&&this.justifyContent;v.value=[];const B=()=>{const p=b("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},T?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),W?S.map((c,z)=>(v.value.push(c.props.name),oe(b(ie,Object.assign({},c.props,{internalCreatedByPane:!0,internalLeftPadded:z!==0&&(!T||T==="center"||T==="start"||T==="end")}),c.children?{default:c.children.tab}:void 0)))):C.map((c,z)=>(v.value.push(c.props.name),oe(z!==0&&!T?Re(c):c))),!u&&l&&$?Se(l,(W?S.length:C.length)!==0):null,T?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return b("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},$&&l?b(me,{onResize:this.handleTabsResize},{default:()=>p}):p,$?b("div",{class:`${e}-tabs-pad`}):null,$?null:b("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},k=L?"top":d;return b("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${h}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${k}`],style:this.cssVars},b("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav--${k}`,`${e}-tabs-nav`]},ge(w,p=>p&&b("div",{class:`${e}-tabs-nav__prefix`},p)),L?b("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},W?S.map((p,c)=>(v.value.push(p.props.name),b(ie,Object.assign({},p.props,{internalCreatedByPane:!0,internalLeftPadded:c!==0}),p.children?{default:p.children.tab}:void 0))):C.map((p,c)=>(v.value.push(p.props.name),c===0?p:Re(p)))):b(me,{onResize:this.handleNavResize},{default:()=>b("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(k)?b(Kt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:B}):b("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},B()))}),u&&l&&$?Se(l,!0):null,ge(x,p=>p&&b("div",{class:`${e}-tabs-nav__suffix`},p))),W&&(this.animated&&(k==="top"||k==="bottom")?b("div",{ref:"tabsPaneWrapperRef",style:m,class:[`${e}-tabs-pane-wrapper`,g]},we(S,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):we(S,this.mergedValue,this.renderedNames)))}});function we(e,r,d,u,l,h,v){const f=[];return e.forEach(g=>{const{name:m,displayDirective:y,"display-directive":w}=g.props,x=C=>y===C||w===C,S=r===m;if(g.key!==void 0&&(g.key=m),S||x("show")||x("show:lazy")&&d.has(m)){d.has(m)||d.add(m);const C=!x("if");f.push(C?Wt(g,[[At,S]]):g)}}),v?b(Lt,{name:`${v}-transition`,onBeforeLeave:u,onEnter:l,onAfterEnter:h},{default:()=>f}):f}function Se(e,r){return b(ie,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function Re(e){const r=Bt(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function oe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{aa as _,ra as a,ie as b};
