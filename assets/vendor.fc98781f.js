const h={};function R(e){h.context=e}function Y(){return{...h.context,id:`${h.context.id}${h.context.count++}-`,count:0}}const J=(e,t)=>e===t,Z=Symbol("solid-proxy"),F={equals:J};let V=k;const E={},w=1,m=2,X={owned:null,cleanups:null,context:null,owner:null};var u=null;let A=null,f=null,x=null,c=null,p=null,L=0;function q(e,t){const n=f,s=u,i=e.length===0?X:{owned:null,cleanups:null,context:null,owner:t||s};u=i,f=null;try{return j(()=>e(()=>H(i)),!0)}finally{f=n,u=s}}function ce(e,t){t=t?Object.assign({},F,t):F;const n={value:e,observers:null,observerSlots:null,pending:E,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==E?n.pending:n.value)),U(n,i));return[te.bind(n),s]}function B(e,t,n){const s=_(e,t,!1,w);v(s)}function z(e,t,n){V=ie;const s=_(e,t,!1,w);s.user=!0,p?p.push(s):queueMicrotask(()=>v(s))}function ee(e){if(x)return e();let t;const n=x=[];try{t=e()}finally{x=null}return j(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==E){const o=i.pending;i.pending=E,U(i,o)}}},!1),t}function T(e){let t,n=f;return f=null,t=e(),f=n,t}function he(e){z(()=>T(e))}function ae(e){return u===null||(u.cleanups===null?u.cleanups=[e]:u.cleanups.push(e)),e}function te(){const e=A;if(this.sources&&(this.state||e)){const t=c;c=null,this.state===w||e?v(this):N(this),c=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function U(e,t,n){if(x)return e.pending===E&&x.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&j(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i];s&&A.disposed.has(o),(s&&!o.tState||!s&&!o.state)&&(o.pure?c.push(o):p.push(o),o.observers&&K(o)),s||(o.state=w)}if(c.length>1e6)throw c=[],new Error},!1),t}function v(e){if(!e.fn)return;H(e);const t=u,n=f,s=L;f=u=e,ne(e,e.value,s),f=n,u=t}function ne(e,t,n){let s;try{s=e.fn(t)}catch(i){Q(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?U(e,s):e.value=s,e.updatedAt=n)}function _(e,t,n,s=w,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:null,pure:n};return u===null||u!==X&&(u.owned?u.owned.push(o):u.owned=[o]),o}function S(e){const t=A;if(e.state===0||t)return;if(e.state===m||t)return N(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<L);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===w||t)v(e);else if(e.state===m||t){const i=c;c=null,N(e,n[0]),c=i}}function j(e,t){if(c)return e();let n=!1;t||(c=[]),p?n=!0:p=[],L++;try{return e()}catch(s){Q(s)}finally{se(n)}}function se(e){c&&(k(c),c=null),!e&&(p.length?ee(()=>{V(p),p=null}):p=null)}function k(e){for(let t=0;t<e.length;t++)S(e[t])}function ie(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:S(i)}const s=e.length;for(t=0;t<n;t++)S(e[t]);for(t=s;t<e.length;t++)S(e[t])}function N(e,t){const n=A;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===w||n?i!==t&&S(i):(i.state===m||n)&&N(i,t))}}function K(e){const t=A;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=m,s.pure?c.push(s):p.push(s),s.observers&&K(s))}}function H(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),l=n.observerSlots.pop();s<i.length&&(o.sourceSlots[l]=s,i[s]=o,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)H(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Q(e){throw e}let le=!1;function pe(e,t){if(le&&h.context){const n=h.context;R(Y());const s=T(()=>e(t));return R(n),s}return T(()=>e(t))}function C(){return!0}const oe={get(e,t,n){return t===Z?n:e.get(t)},has(e,t){return e.has(t)},set:C,deleteProperty:C,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:C,deleteProperty:C}},ownKeys(e){return e.keys()}};function $(e){return typeof e=="function"?e():e}function ge(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const s=$(e[n])[t];if(s!==void 0)return s}},has(t){for(let n=e.length-1;n>=0;n--)if(t in $(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys($(e[n])));return[...new Set(t)]}},oe)}function re(e,t,n){let s=n.length,i=t.length,o=s,l=0,r=0,g=t[i-1].nextSibling,d=null;for(;l<i||r<o;){if(t[l]===n[r]){l++,r++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===l){const a=o<s?r?n[r-1].nextSibling:n[o-r]:g;for(;r<o;)e.insertBefore(n[r++],a)}else if(o===r)for(;l<i;)(!d||!d.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[r]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--o],a),t[i]=n[o]}else{if(!d){d=new Map;let y=r;for(;y<o;)d.set(n[y],y++)}const a=d.get(t[l]);if(a!=null)if(r<a&&a<o){let y=l,O=1,M;for(;++y<i&&y<o&&!((M=d.get(t[y]))==null||M!==a+O);)O++;if(O>a-r){const W=t[l];for(;r<a;)e.insertBefore(n[r++],W)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const G="_$DX_DELEGATE";function de(e,t,n){let s;return q(i=>{s=i,t===document?e():fe(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function ye(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function we(e,t=window.document){const n=t[G]||(t[G]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,ue))}}function be(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function fe(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return P(e,t,s,n);B(i=>P(e,t(),i,n),s)}function ue(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s(i,e):s(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function P(e,t,n,s,i){for(h.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(h.context)return n;if(o==="number"&&(t=t.toString()),l){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=b(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(h.context)return n;n=b(e,n,s)}else{if(o==="function")return B(()=>{let r=t();for(;typeof r=="function";)r=r();n=P(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[];if(D(r,t,i))return B(()=>n=P(e,r,n,s,!0)),()=>n;if(h.context){for(let g=0;g<r.length;g++)if(r[g].parentNode)return n=r}if(r.length===0){if(n=b(e,n,s),l)return n}else Array.isArray(n)?n.length===0?I(e,r,s):re(e,n,r):(n&&b(e),I(e,r));n=r}else if(t instanceof Node){if(h.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=b(e,n,s,t);b(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function D(e,t,n){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],r;if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))s=D(e,l)||s;else if((r=typeof l)=="string")e.push(document.createTextNode(l));else if(r==="function")if(n){for(;typeof l=="function";)l=l();s=D(e,Array.isArray(l)?l:[l])||s}else e.push(l),s=!0;else e.push(document.createTextNode(l.toString()))}return s}function I(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function b(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(i!==r){const g=r.parentNode===e;!o&&!l?g?e.replaceChild(i,r):e.insertBefore(i,n):g&&r.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}export{pe as a,ae as b,B as c,we as d,ce as e,fe as i,ge as m,he as o,de as r,be as s,ye as t};
