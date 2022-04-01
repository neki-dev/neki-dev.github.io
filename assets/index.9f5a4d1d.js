import{i as r,c as C,t as u,a as _,m as U,o as K,b as j,s as E,d as q,e as L,r as Q}from"./vendor.fc98781f.js";const V=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}};V();const M=[{name:"Makeup",stacks:[{name:"HTML",beg:2011,color:["#f58442","#ff9d63"],basic:!0},{name:"CSS",beg:2011,color:["#267abf","#4ca0e6"]},{name:"SASS",beg:2019,color:["#ba75ae","#d18ac5"],basic:!0}]},{name:"Languages",stacks:[{name:"JavaScript",beg:2012,color:["#f5d142","#ffe26e"]},{name:"TypeScript",beg:2017,color:["#267abf","#4ca0e6"],basic:!0},{name:"PHP",beg:2013,end:2018,color:["#4f85b8","#77a9d9"]},{name:"Lua",beg:2016,end:2019,color:["#002dbf","#1e4ad9"]}]},{name:"Libraries",stacks:[{name:"React",beg:2018,color:["#58d5e8","#71e3f5"],basic:!0},{name:"Solid.js",beg:2021,color:["#4f85b8","#77a9d9"]},{name:"Angular",beg:2017,end:2018,color:["#d93654","#ed516d"]}]},{name:"Platforms",stacks:[{name:"Node.js",beg:2014,color:["#8fb848","#a3cf59"],basic:!0}]},{name:"Databases",stacks:[{name:"Oracle",beg:2018,color:["#f23d3d","#ff5e5e"],basic:!0},{name:"MySQL",beg:2013,end:2018,color:["#c9a459","#edc980"]}]}];const X=u('<div><div class="info"><div class="icon"></div><div class="name"></div></div><div class="exp"><span class="number"></span><span class="label"> experience</span></div><div class="timeline"><div class="bar"><div class="container"><div class="moment"><span class="beg"></span><span class="end"></span></div></div></div></div></div>'),Z=u('<span class="status">Main</span>'),ee=u('<span class="status">Not actual</span>');function te({range:t,beg:a,end:e,name:s,color:n,basic:i}){const o=(e||t.end)-a,l=t.end-t.beg+1,d=100/l;return(()=>{const c=X.cloneNode(!0),p=c.firstChild,m=p.firstChild,$=m.nextSibling,F=p.nextSibling,v=F.firstChild,b=v.nextSibling,f=b.firstChild,x=F.nextSibling,N=x.firstChild,A=N.firstChild,g=A.firstChild,S=g.firstChild,D=S.nextSibling;return c.className=`stack-item ${e?"inactive":"active"}`,r(p,i&&Z.cloneNode(!0),m),r(p,e&&ee.cloneNode(!0),m),r($,s),r(v,o),r(b,o===1?"year":"years",f),r(S,a),r(D,e||"today"),C(h=>{const R=`linear-gradient(${n[1]}, ${n[0]})`,W=`${(a-t.beg)*d}%`,B=`${(t.end-(e||t.end))*d}%`;return R!==h._v$&&m.style.setProperty("background",h._v$=R),W!==h._v$2&&g.style.setProperty("left",h._v$2=W),B!==h._v$3&&g.style.setProperty("right",h._v$3=B),h},{_v$:void 0,_v$2:void 0,_v$3:void 0}),c})()}const ne=u('<section class="stack-timeline"><div class="wrapper"><h4>Development Stack</h4></div></section>'),ae=u('<div class="group"><div class="grid spaced"></div></div>');function ie(){const t={beg:Math.min(...M.map(a=>a.stacks.map(e=>e.beg)).flat()),end:new Date().getFullYear()};return(()=>{const a=ne.cloneNode(!0),e=a.firstChild;return e.firstChild,r(e,()=>M.map(s=>(()=>{const n=ae.cloneNode(!0),i=n.firstChild;return r(i,()=>s.stacks.map(o=>_(te,U(o,{range:t})))),n})()),null),a})()}const re=561;function Y(t,a){if(window.innerWidth<re)return;function e(){const s=t(),n=window.scrollY-s.offsetTop,i=s.clientHeight;n>=0&&n<=i&&a(n/i)}K(()=>{document.addEventListener("scroll",e)}),j(()=>{document.removeEventListener("scroll",e)})}const se=[{name:"Telegram",link:"https://telegram.me/neki_me"},{name:"Email",link:"mailto:dev@neki.guru"},{name:"GitHub",link:"https://github.com/neki-dev"},{name:"StackOverflow",link:"https://ru.stackoverflow.com/users/15622/nikita-galadiy"}];const le=u('<a target="_blank" rel="noreferrer"></a>');function oe({name:t,link:a}){return(()=>{const e=le.cloneNode(!0);return E(e,"href",a),E(e,"title",t),E(e,"aria-label",t),C(()=>e.className=`contact-item ${t.toLocaleLowerCase()}`),e})()}const ce=u('<section class="personal-info"><div class="wrapper"><div class="me"></div><div class="content"><div class="logotype"></div><div class="name"><h1>Nikita Galadiy</h1><h2>Full-Stack Developer</h2><span class="location">Russia, Saint-Petersburg</span></div><div class="contacts"></div></div></div></section>');function de(){let t,a;return Y(()=>t,e=>{t.style.backgroundPositionY=`${e*300}px`,a.style.transform=`translateY(${e*200}px)`}),(()=>{const e=ce.cloneNode(!0),s=e.firstChild,n=s.firstChild,i=n.nextSibling,o=i.firstChild,l=o.nextSibling,d=l.nextSibling,c=t;typeof c=="function"?c(e):t=e;const p=a;return typeof p=="function"?p(i):a=i,r(d,()=>se.map(m=>_(oe,m))),e})()}const pe=[{organization:"Freelance",period:"07.2014 - 09.2017",position:"Full-Stack Developer, Web-Designer",description:"Development of turnkey websites, draw layouts, logos and corporate identity"},{organization:"Insist",period:"10.2017 - 12.2018",position:"Full-Stack Developer",description:"Development of a web application for monitoring data from oil producing points"},{organization:"KRDS",period:"01.2019 - 08.2021",position:"Full-Stack Developer, Teamlead",description:"Development of ERP and CRM for microfinance organizations"},{organization:"Alfa-Bank",period:"09.2021",position:"Front-End Developer",description:"Development of a personal account for a mortgage borrower"}],ue=1404172800;function me(){return((Date.now()/1e3-ue)/31536e3).toFixed(1)}const ve=u('<div class="job-item"><div class="period"></div><div class="organization"></div><div class="position"></div><div class="description"></div></div>');function fe({period:t,organization:a,position:e,description:s}){return(()=>{const n=ve.cloneNode(!0),i=n.firstChild,o=i.nextSibling,l=o.nextSibling,d=l.nextSibling;return r(i,t),r(o,a),r(l,e),r(d,s),n})()}const $e=u('<section class="job-history"><div class="wrapper"><div class="total"><div>Total work experience<span><b></b> years</span></div></div><div class="list"></div></div></section>');function ge(){let t,a;return Y(()=>t,e=>{a.style.transform=`translateY(${e*200}px)`,a.style.opacity=`${1-e}`}),(()=>{const e=$e.cloneNode(!0),s=e.firstChild,n=s.firstChild,i=n.firstChild,o=i.firstChild,l=o.nextSibling,d=l.firstChild,c=n.nextSibling,p=t;typeof p=="function"?p(e):t=e;const m=a;return typeof m=="function"?m(s):a=s,r(d,me),r(c,()=>pe.map($=>_(fe,$))),e})()}const be=[{name:"dothree",type:"game",langs:["TypeScript","React"],description:"Logic online game similar to a mixture of tetris and tic-tac-toe"},{name:"promise-partial",type:"lib",langs:["TypeScript"],description:"Partial (mixed) promise execution"},{name:"arrays-otherness",type:"lib",langs:["TypeScript"],description:"Get a matching, missing and excess items of an array based on target array"},{name:"react-scrl",type:"lib",langs:["JavaScript","React"],description:"Simple and versatile stylized scrollbar"},{name:"sip-gateway",type:"lib",langs:["JavaScript"],description:"Simple gateway for SIP via WebSocket"},{name:"fake-function",type:"lib",langs:["JavaScript"],description:"Fake function wrapper for tests"},{name:"digital-mask",type:"lib",langs:["JavaScript"],description:"Easy digital mask for string and inputs"},{name:"net-bird",type:"framework",langs:["PHP"],description:"Easy website framework",mark:"deprecated"},{name:"uran-engine",type:"framework",langs:["JavaScript"],description:"Browser multiplayer game engine",mark:"deprecated"}];const he=u('<div class="package-item"><a target="_blank" class="container" rel="noreferrer"><div class="name"></div><div class="description"></div><div class="langs"><span></span></div></a></div>'),_e=u('<div class="mark"></div>'),Fe=u("<span></span>"),ye="neki-dev";function xe({name:t,description:a,type:e,langs:s,mark:n}){const i=`https://github.com/${ye}/${t}`;return(()=>{const o=he.cloneNode(!0),l=o.firstChild,d=l.firstChild,c=d.nextSibling,p=c.nextSibling,m=p.firstChild;return E(l,"href",i),r(d,t),r(l,n&&(()=>{const $=_e.cloneNode(!0);return r($,n),$})(),c),r(c,a),m.className=`type ${e}`,r(m,e),r(p,()=>s.map($=>(()=>{const F=Fe.cloneNode(!0);return r(F,$),F})()),null),o})()}const Se=u('<section class="packages"><div class="wrapper"><h4>Public Repositories</h4><div class="grid"></div></div></section>');function ke(){return(()=>{const t=Se.cloneNode(!0),a=t.firstChild,e=a.firstChild,s=e.nextSibling;return r(s,()=>be.map(n=>_(xe,n))),t})()}var w="/assets/black.1675c354.png",y="/assets/white.30c3497f.png",T="/assets/red.aefb600d.png",z="/assets/lightblue.b8154f48.png",G="/assets/purple.851ab393.png",Ce="/assets/red.a532167b.png",we="/assets/black.43e4dd9a.png",P="/assets/white.f9b26c35.png";const Ne=[{base:{url:y,hex:"#FFFFFF",name:"W"},print:{url:we,hex:"#000000",name:"B"}},{base:{url:y,hex:"#FFFFFF",name:"W"},print:{url:Ce,hex:"#DF3C3B",name:"R"}},{base:{url:w,hex:"#000000",name:"B"},print:{url:P,hex:"#FFFFFF",name:"W"}},{base:{url:T,hex:"#CD336F",name:"R"},print:{url:P,hex:"#FFFFFF",name:"W"}},{base:{url:z,hex:"#05A1CE",name:"L"},print:{url:P,hex:"#FFFFFF",name:"W"}},{base:{url:G,hex:"#7B03CA",name:"P"},print:{url:P,hex:"#FFFFFF",name:"W"}}];var De="/assets/yellow.2a4b9d2c.png",Pe="/assets/black.fc7cc30e.png",Ee="/assets/white.15adfe55.png";const Ae=[{base:{url:w,hex:"#000000",name:"B"},print:{url:De,hex:"#FFCD00",name:"Y"}},{base:{url:w,hex:"#000000",name:"B"},print:{url:Ee,hex:"#FFFFFF",name:"W"}},{base:{url:y,hex:"#FFFFFF",name:"W"},print:{url:Pe,hex:"#000000",name:"B"}}];var Ie="/assets/red.3c717b63.png",O="/assets/lightblue.4cd75628.png",H="/assets/white.0acdfcf1.png";const Te=[{base:{url:y,hex:"#FFFFFF",name:"W"},print:{url:Ie,hex:"#FE5D82",name:"R"}},{base:{url:y,hex:"#FFFFFF",name:"W"},print:{url:O,hex:"#00B7CC",name:"L"}},{base:{url:T,hex:"#CD336F",name:"R"},print:{url:H,hex:"#FFFFFF",name:"W"}},{base:{url:T,hex:"#CD336F",name:"R"},print:{url:O,hex:"#00B7CC",name:"L"}},{base:{url:z,hex:"#05A1CE",name:"L"},print:{url:H,hex:"#FFFFFF",name:"W"}}];var Re="/assets/black.ffc85746.png",We="/assets/white.4fd5e68c.png";const Be=[{base:{url:y,hex:"#FFFFFF",name:"W"},print:{url:Re,hex:"#000000",name:"B"}},{base:{url:w,hex:"#000000",name:"B"},print:{url:We,hex:"#FFFFFF",name:"W"}}];var I="/assets/yellow.c772c647.png";const Le=[{base:{url:y,hex:"#FFFFFF",name:"W"},print:{url:I,hex:"#EDDB3C",name:"Y"}},{base:{url:w,hex:"#000000",name:"B"},print:{url:I,hex:"#EDDB3C",name:"Y"}},{base:{url:G,hex:"#7B03CA",name:"P"},print:{url:I,hex:"#EDDB3C",name:"Y"}}],k=[{name:"NEKI",variants:Ne},{name:"BAD DUCK",variants:Ae},{name:"PHNMNN",variants:Te},{name:"AHEAD WITH HEAD",variants:Le},{name:"AGAIN WRONG",variants:Be}];const Me=u('<section class="merch-gallery"><div class="selectors"><div class="model-selector"></div><div class="variant-selector"></div><div class="print-uuid"></div></div><div class="base"><div class="print"></div></div></section>'),Oe=u("<div></div>"),He=u("<div><div></div><div></div></div>");function Je(){const[t,a]=L(0),[e,s]=L(0);function n(l){s(0),a(l)}function i(l){return k[t()].variants[e()][l].url}function o(){const l=k[t()].name.toUpperCase().replace(/[\sEYUIOA]/g,""),{base:d,print:c}=k[t()].variants[e()];return[l,d.name,c.name].join("-")}return(()=>{const l=Me.cloneNode(!0),d=l.firstChild,c=d.firstChild,p=c.nextSibling,m=p.nextSibling,$=d.nextSibling,F=$.firstChild;return r(c,()=>k.map(({name:v},b)=>(()=>{const f=Oe.cloneNode(!0);return f.$$click=()=>n(b),r(f,v),C(()=>f.className=`model ${b===t()?"active":""}`),f})())),r(p,()=>k[t()].variants.map(({base:v,print:b},f)=>(()=>{const x=He.cloneNode(!0),N=x.firstChild,A=N.nextSibling;return x.$$click=()=>s(f),C(g=>{const S=`variant ${f===e()?"active":""}`,D=v.hex,h=b.hex;return S!==g._v$3&&(x.className=g._v$3=S),D!==g._v$4&&N.style.setProperty("background-color",g._v$4=D),h!==g._v$5&&A.style.setProperty("background-color",g._v$5=h),g},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),x})())),r(m,o),C(v=>{const b=`url(${i("base")})`,f=`url(${i("print")})`;return b!==v._v$&&$.style.setProperty("background-image",v._v$=b),f!==v._v$2&&F.style.setProperty("background-image",v._v$2=f),v},{_v$:void 0,_v$2:void 0}),l})()}q(["click"]);const J={"*":[_(de,{}),_(ie,{}),_(ge,{}),_(ke,{})],"merch-gallery":_(Je,{})};function Ye(){const t=window.location.search.replace(/\?([a-z-]+).*/,"$1");return J[t]||J["*"]}Q(Ye,document.getElementById("root"));