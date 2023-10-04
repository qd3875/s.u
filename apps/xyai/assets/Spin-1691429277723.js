import{v as u,y as l,bO as b,A as m,d as z,H as C,J as f,dr as S,c as d,c7 as x,M as k,O as $,aq as w,q as o,ca as _,a6 as R}from"./index-1691429277723.js";const T=u([u("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),l("spin-container",{position:"relative"},[l("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[b()])]),l("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),l("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[m("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),l("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),l("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[m("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),B={small:20,medium:18,large:16},O=Object.assign(Object.assign({},f.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),V=z({name:"Spin",props:O,setup(s){const{mergedClsPrefixRef:r,inlineThemeDisabled:e}=C(s),t=f("Spin","-spin",T,S,s,r),c=d(()=>{const{size:n}=s,{common:{cubicBezierEaseInOut:a},self:p}=t.value,{opacitySpinning:h,color:v,textColor:y}=p,g=typeof n=="number"?x(n):p[k("size",n)];return{"--n-bezier":a,"--n-opacity-spinning":h,"--n-size":g,"--n-color":v,"--n-text-color":y}}),i=e?$("spin",d(()=>{const{size:n}=s;return typeof n=="number"?String(n):n[0]}),c,s):void 0;return{mergedClsPrefix:r,compitableShow:w(s,["spinning","show"]),mergedStrokeWidth:d(()=>{const{strokeWidth:n}=s;if(n!==void 0)return n;const{size:a}=s;return B[typeof a=="number"?"medium":a]}),cssVars:e?void 0:c,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var s,r;const{$slots:e,mergedClsPrefix:t,description:c}=this,i=e.icon&&this.rotate,n=(c||e.description)&&o("div",{class:`${t}-spin-description`},c||((s=e.description)===null||s===void 0?void 0:s.call(e))),a=e.icon?o("div",{class:[`${t}-spin-body`,this.themeClass]},o("div",{class:[`${t}-spin`,i&&`${t}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),n):o("div",{class:[`${t}-spin-body`,this.themeClass]},o(_,{clsPrefix:t,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),n);return(r=this.onRender)===null||r===void 0||r.call(this),e.default?o("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},o("div",{class:[`${t}-spin-content`,this.compitableShow&&`${t}-spin-content--spinning`]},e),o(R,{name:"fade-in-transition"},{default:()=>this.compitableShow?a:null})):a}});export{V as _};
