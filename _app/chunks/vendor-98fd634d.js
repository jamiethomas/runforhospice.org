function y(){}const W=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function K(){return Object.create(null)}function x(t){t.forEach(J)}function Q(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function Gt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function _t(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t,e,n){t.$$.on_destroy.push(dt(e,n))}function Wt(t,e,n,i){if(t){const s=U(t,e,n,i);return t[0](s)}}function U(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function Kt(t,e,n,i,s,u){if(s){const r=U(e,n,i,u);t.p(r,s)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const V=typeof window!="undefined";let ht=V?()=>window.performance.now():()=>Date.now(),D=V?t=>requestAnimationFrame(t):y;const $=new Set;function X(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&D(X)}function mt(t){let e;return $.size===0&&D(X),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let S=!1;function pt(){S=!0}function yt(){S=!1}function gt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=l?s+1:gt(1,s,a=>e[n[a]].claim_order,l))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const u=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);u.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<u.length&&r[c].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(r[c],_)}}function xt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=O("style");return wt(Y(t),e),e.sheet}function wt(t,e){xt(t.head||t,e)}function Et(t,e){if(S){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){S&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function Vt(){return P(" ")}function Xt(){return P("")}function Yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,s=!1){Z(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Nt(t,e,n,i){return tt(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||u.push(o.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function te(t,e,n){return Nt(t,e,n,O)}function Tt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>P(e),!0)}function ee(t){return Tt(t," ")}function et(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ne(t){const e=et(t,"HTML_TAG_START",0),n=et(t,"HTML_TAG_END",e);if(e===n)return new nt;Z(t);const i=t.splice(e,n-e+1);C(i[0]),C(i[i.length-1]);const s=i.slice(1,i.length-1);for(const u of s)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new nt(s)}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e){t.value=e==null?"":e}function se(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function St(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function oe(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Ct{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=O(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)vt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}class nt extends Ct{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}const j=new Map;let M=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Mt(t,e){const n={stylesheet:$t(e),rules:{}};return j.set(t,n),n}function it(t,e,n,i,s,u,r,o=0){const c=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=c){const b=e+(n-e)*u(p);l+=p*100+`%{${r(b,1-b)}}
`}const _=l+`100% {${r(n,1-n)}}
}`,f=`__svelte_${jt(_)}_${o}`,a=Y(t),{stylesheet:d,rules:h}=j.get(a)||Mt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${i}ms linear ${s}ms 1 both`,M+=1,f}function qt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),M-=s,M||Ht())}function Ht(){D(()=>{M||(j.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),j.clear())})}let E;function v(t){E=t}function B(){if(!E)throw new Error("Function called outside component initialization");return E}function le(t){B().$$.on_mount.push(t)}function ue(t){B().$$.after_update.push(t)}function ae(t,e){B().$$.context.set(t,e)}const A=[],rt=[],q=[],st=[],ct=Promise.resolve();let F=!1;function ot(){F||(F=!0,ct.then(lt))}function fe(){return ot(),ct}function H(t){q.push(t)}const G=new Set;let L=0;function lt(){const t=E;do{for(;L<A.length;){const e=A[L];L++,v(e),Lt(e.$$)}for(v(null),A.length=0,L=0;rt.length;)rt.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];G.has(n)||(G.add(n),n())}q.length=0}while(A.length);for(;st.length;)st.pop()();F=!1,G.clear(),v(t)}function Lt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let k;function Rt(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function I(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const R=new Set;let m;function _e(){m={r:0,c:[],p:m}}function de(){m.r||x(m.c),m=m.p}function zt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function he(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),m.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Dt={duration:0};function me(t,e,n,i){let s=e(t,n),u=i?0:1,r=null,o=null,c=null;function l(){c&&qt(t,c)}function _(a,d){const h=a.b-u;return d*=Math.abs(h),{a:u,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:g=W,tick:p=y,css:b}=s||Dt,z={start:ht()+d,b:a};a||(z.group=m,m.r+=1),r||o?o=z:(b&&(l(),c=it(t,u,a,h,d,g,b)),a&&p(0,1),r=_(z,h),H(()=>I(t,a,"start")),mt(N=>{if(o&&N>o.start&&(r=_(o,h),o=null,I(t,r.b,"start"),b&&(l(),c=it(t,u,r.b,r.duration,0,g,s.css))),r){if(N>=r.end)p(u=r.b,1-u),I(t,r.b,"end"),o||(r.b?l():--r.group.r||x(r.group.c)),r=null;else if(N>=r.start){const ut=N-r.start;u=r.a+r.d*g(ut/r.duration),p(u,1-u)}}return!!(r||o)}))}return{run(a){Q(s)?Rt().then(()=>{s=s(),f(a)}):f(a)},end(){l(),r=o=null}}}function pe(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const r=t[u],o=e[u];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[u]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ye(t){return typeof t=="object"&&t!==null?t:{}}function ge(t){t&&t.c()}function be(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:s,on_mount:u,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||H(()=>{const c=u.map(J).filter(Q);r?r.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(H)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(A.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xe(t,e,n,i,s,u,r,o=[-1]){const c=E;v(t);const l=t.$$={fragment:null,ctx:null,props:u,update:y,not_equal:s,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:K(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return l.ctx&&s(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),_&&Bt(t,f)),a}):[],l.update(),_=!0,x(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){pt();const f=kt(e.target);l.fragment&&l.fragment.l(f),f.forEach(C)}else l.fragment&&l.fragment.c();e.intro&&zt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),yt(),lt()}v(c)}class $e{$destroy(){Pt(this,1),this.$destroy=y}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const w=[];function we(t,e){return{subscribe:Ft(t,e).subscribe}}function Ft(t,e=y){let n;const i=new Set;function s(o){if(ft(t,o)&&(t=o,n)){const c=!w.length;for(const l of i)l[1](),w.push(l,t);if(c){for(let l=0;l<w.length;l+=2)w[l][0](w[l+1]);w.length=0}}}function u(o){s(o(t))}function r(o,c=y){const l=[o,c];return i.add(l),i.size===1&&(n=e(s)||y),o(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:s,update:u,subscribe:r}}function Ee(t,{delay:e=0,duration:n=400,easing:i=W}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:u=>`opacity: ${u*s}`}}export{ye as A,Pt as B,at as C,Ft as D,fe as E,Et as F,y as G,Wt as H,Kt as I,Qt as J,Jt as K,ce as L,Gt as M,Ut as N,we as O,nt as P,ne as Q,It as R,$e as S,re as T,Yt as U,x as V,H as W,me as X,Ee as Y,oe as Z,kt as a,Zt as b,te as c,C as d,O as e,se as f,At as g,Tt as h,xe as i,ie as j,Vt as k,Xt as l,ee as m,_e as n,he as o,de as p,zt as q,ae as r,ft as s,P as t,ue as u,le as v,ge as w,be as x,Ot as y,pe as z};
