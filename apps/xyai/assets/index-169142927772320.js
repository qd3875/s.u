import{aO as g,g as _,c as v,cp as C,cq as S,cr as k,d as y,Q as I,o as E,a as V,bi as $,bj as x,aw as m,_ as B}from"./index-1691429277723.js";import{u as P}from"./useLoading-1691429277723.js";function A(a){if(a<=0&&a%1!==0)throw new Error("倒计时的时间应该为一个正整数！");const{bool:r,setTrue:i,setFalse:u}=g(!1),s=_(0),d=v(()=>!!s.value);let t;function e(f=a){s.value||(u(),s.value=f,t=setInterval(()=>{s.value-=1,s.value<=0&&(clearInterval(t),i())},1e3))}function o(){t=clearInterval(t),s.value=0}return C(o),{counts:s,isCounting:d,start:e,stop:o,isComplete:r}}function q(){const{loading:a,startLoading:r,endLoading:i}=P(),{counts:u,start:s,isCounting:d}=A(60),t="获取验证码",e=n=>`${n}秒后重新获取`,o=v(()=>{let n=t;return a.value&&(n=""),d.value&&(n=e(u.value)),n});function f(n){var l,c;let p=!0;return n.trim()===""?((l=window.$message)==null||l.error("手机号码不能为空！"),p=!1):k.test(n)||((c=window.$message)==null||c.error("手机号码格式错误！"),p=!1),p}async function w(n){!f(n.phone)||a.value||(r(),await S(n).then(l=>{var c,h;l.data?((c=window.$message)==null||c.success("验证码发送成功！"),s()):(window.vaptchaObj.reset(),(h=window.$message)==null||h.error("验证码发送失败！"))}).catch(l=>{var c;(c=window.$message)==null||c.error(l)}),i())}return{label:o,start:s,isCounting:d,getSmsCode:w,loading:a}}const T=a=>($("data-v-f1d8d965"),a=a(),x(),a),L={id:"vaptcha",style:{width:"100%",height:"40px"}},H=T(()=>m("div",{class:"VAPTCHA-init-main"},[m("div",{class:"VAPTCHA-init-loading"},[m("span",{class:"VAPTCHA-text"},"验证码加载中...")])],-1)),O=[H],N=y({__name:"index",props:{token:{default:""},server:{default:""}},emits:["update:token","update:server"],setup(a,{emit:r}){const i=a,u=v({get(){return i.token},set(t){r("update:token",t)}}),s=v({get(){return i.server},set(t){r("update:server",t)}});I(()=>{const t={vid:"6429af07507890ee2e7fa420",mode:"click",scene:0,container:document.getElementById("vaptcha")};d().then(()=>{window.vaptcha(t).then(e=>{window.vaptchaObj=e,e.listen("pass",()=>{u.value=e.getToken(),s.value=e.server,window.$message&&window.$message.success("验证成功")}),e.listen("close",()=>{e.reset()}),e.render()})})});const d=()=>new Promise(t=>{if(typeof window.vaptcha=="function")t();else{const e=document.createElement("script");e.src="https://v.vaptcha.com/v3.js",e.async=!0,e.onload=e.onratechange=function(){const o=this;(!o.readyState||o.readyState=="loaded"||o.readyState=="complete")&&(t(),e.onload=e.onratechange=null)},document.getElementsByTagName("head")[0].appendChild(e)}});return(t,e)=>(E(),V("div",L,O))}}),F=B(N,[["__scopeId","data-v-f1d8d965"]]);export{F as V,q as u};
