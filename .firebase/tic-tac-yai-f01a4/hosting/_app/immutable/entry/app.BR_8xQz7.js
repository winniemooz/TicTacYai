import{s as C,d as B,o as U,e as A,t as j}from"../chunks/scheduler.BvLojk_z.js";import{S as z,i as M,s as W,q as h,b as F,j as E,p as w,r as P,o as g,f as b,e as G,c as H,a as J,h as D,u as p,t as K,d as Q,m as X,v as L,w as k,x as v,y as I,z as y,A as R}from"../chunks/index.I2SEuowj.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},O={},d=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");r=Promise.all(n.map(t=>{if(t=Z(t,i),t in O)return;O[t]=!0;const s=t.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!i)for(let u=c.length-1;u>=0;u--){const m=c[u];if(m.href===t&&(!s||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Y,s||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),s)return new Promise((u,m)=>{o.addEventListener("load",u),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return r.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},se={};function $(a){let e,n,i;var r=a[1][0];function c(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=k(r,c(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,s){e&&y(e,t,s),E(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){L();const l=e;w(l.$$.fragment,1,0,()=>{R(l,1)}),P()}r?(e=k(r,c(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[12](null),e&&R(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function c(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=k(r,c(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,s){e&&y(e,t,s),E(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){L();const l=e;w(l.$$.fragment,1,0,()=>{R(l,1)}),P()}r?(e=k(r,c(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&8215&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[11](null),e&&R(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function c(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=k(r,c(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,s){e&&y(e,t,s),E(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){L();const l=e;w(l.$$.fragment,1,0,()=>{R(l,1)}),P()}r?(e=k(r,c(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(r){const l={};s&16&&(l.data=t[4]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[10](null),e&&R(e,t)}}}function T(a){let e,n=a[6]&&V(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(b),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){E(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&b(e),n&&n.d()}}}function V(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&b(e)}}}function te(a){let e,n,i,r,c;const t=[x,$],s=[];function l(o,u){return o[1][1]?0:1}e=l(a),n=s[e]=t[e](a);let _=a[5]&&T(a);return{c(){n.c(),i=W(),_&&_.c(),r=h()},l(o){n.l(o),i=F(o),_&&_.l(o),r=h()},m(o,u){s[e].m(o,u),E(o,i,u),_&&_.m(o,u),E(o,r,u),c=!0},p(o,[u]){let m=e;e=l(o),e===m?s[e].p(o,u):(L(),w(s[m],1,1,()=>{s[m]=null}),P(),n=s[e],n?n.p(o,u):(n=s[e]=t[e](o),n.c()),g(n,1),n.m(i.parentNode,i)),o[5]?_?_.p(o,u):(_=T(o),_.c(),_.m(r.parentNode,r)):_&&(_.d(1),_=null)},i(o){c||(g(n),c=!0)},o(o){w(n),c=!1},d(o){o&&(b(i),b(r)),s[e].d(o),_&&_.d(o)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:c}=e,{components:t=[]}=e,{form:s}=e,{data_0:l=null}=e,{data_1:_=null}=e;B(i.page.notify);let o=!1,u=!1,m=null;U(()=>{const f=i.page.subscribe(()=>{o&&(n(6,u=!0),j().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,o=!0),f});function N(f){A[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){A[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function q(f){A[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,r=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,s=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,_=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,c,s,l,_,o,u,m,i,r,N,S,q]}class oe extends z{constructor(e){super(),M(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>d(()=>import("../nodes/0.Cfpw36Zq.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>d(()=>import("../nodes/1.B5zWuciA.js"),__vite__mapDeps([6,1,2,7,4]),import.meta.url),()=>d(()=>import("../nodes/2.BS1cgzW_.js"),__vite__mapDeps([8,1,2,3,4]),import.meta.url),()=>d(()=>import("../nodes/3.DujA7RRI.js"),__vite__mapDeps([9,1,2]),import.meta.url),()=>d(()=>import("../nodes/4.C-W-oDu5.js"),__vite__mapDeps([10,1,2]),import.meta.url),()=>d(()=>import("../nodes/5.C-W-oDu5.js"),__vite__mapDeps([11,1,2]),import.meta.url),()=>d(()=>import("../nodes/6.C-W-oDu5.js"),__vite__mapDeps([12,1,2]),import.meta.url),()=>d(()=>import("../nodes/7.C-W-oDu5.js"),__vite__mapDeps([13,1,2]),import.meta.url)],le=[],fe={"/":[2],"/home2":[4],"/home":[3],"/joinroom":[5],"/lobby":[6],"/quickplay":[7]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.Cfpw36Zq.js","../chunks/scheduler.BvLojk_z.js","../chunks/index.I2SEuowj.js","../chunks/authStore.DJ7T7LAi.js","../chunks/index.BGTSHx9J.js","../assets/0.CqoQUCkQ.css","../nodes/1.B5zWuciA.js","../chunks/entry.BGjbx748.js","../nodes/2.BS1cgzW_.js","../nodes/3.DujA7RRI.js","../nodes/4.C-W-oDu5.js","../nodes/5.C-W-oDu5.js","../nodes/6.C-W-oDu5.js","../nodes/7.C-W-oDu5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
