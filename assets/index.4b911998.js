import{t as c,i as r,c as P,a as u,m as E,o as J,b as R,s as $,r as O}from"./vendor.314e0eb3.js";const M=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=e(t);fetch(t.href,a)}};M();const w=[{name:"Makeup",stacks:[{name:"HTML",beg:2011,color:["#f58442","#ff9d63"],basic:!0},{name:"CSS",beg:2011,color:["#267abf","#4ca0e6"]},{name:"SASS",beg:2019,color:["#ba75ae","#d18ac5"],basic:!0}]},{name:"Languages",stacks:[{name:"JavaScript",beg:2012,color:["#f5d142","#ffe26e"]},{name:"TypeScript",beg:2017,color:["#267abf","#4ca0e6"],basic:!0},{name:"PHP",beg:2013,end:2018,color:["#4f85b8","#77a9d9"]},{name:"Lua",beg:2016,end:2019,color:["#002dbf","#1e4ad9"]}]},{name:"Libraries",stacks:[{name:"React",beg:2018,color:["#58d5e8","#71e3f5"],basic:!0},{name:"Solid.js",beg:2021,color:["#4f85b8","#77a9d9"]},{name:"Angular",beg:2017,end:2018,color:["#d93654","#ed516d"]}]},{name:"Platforms",stacks:[{name:"Node.js",beg:2014,color:["#8fb848","#a3cf59"],basic:!0}]},{name:"Databases",stacks:[{name:"Oracle",beg:2018,color:["#f23d3d","#ff5e5e"],basic:!0},{name:"MySQL",beg:2013,end:2018,color:["#c9a459","#edc980"]}]}];const F=c('<div><div class="info"><div class="icon"></div><div class="name"></div></div><div class="exp"><span class="number"></span><span class="label"> experience</span></div><div class="timeline"><div class="bar"><div class="container"><div class="moment"><span class="beg"></span><span class="end"></span></div></div></div></div></div>'),z=c('<span class="status">Main</span>'),H=c('<span class="status">Not actual</span>');function Y({range:i,beg:n,end:e,name:s,color:t,basic:a}){const o=(e||i.end)-n,d=i.end-i.beg+1,p=100/d;return(()=>{const f=F.cloneNode(!0),l=f.firstChild,m=l.firstChild,g=m.nextSibling,_=l.nextSibling,S=_.firstChild,y=S.nextSibling,T=y.firstChild,I=_.nextSibling,L=I.firstChild,D=L.firstChild,b=D.firstChild,h=b.firstChild,A=h.nextSibling;return f.className=`stack-item ${e?"inactive":"active"}`,r(l,a&&z.cloneNode(!0),m),r(l,e&&H.cloneNode(!0),m),r(g,s),r(S,o),r(y,o===1?"year":"years",T),r(h,n),r(A,e||"today"),P(v=>{const k=`linear-gradient(${t[1]}, ${t[0]})`,C=`${(n-i.beg)*p}%`,x=`${(i.end-(e||i.end))*p}%`;return k!==v._v$&&m.style.setProperty("background",v._v$=k),C!==v._v$2&&b.style.setProperty("left",v._v$2=C),x!==v._v$3&&b.style.setProperty("right",v._v$3=x),v},{_v$:void 0,_v$2:void 0,_v$3:void 0}),f})()}const B=c('<section class="stack-timeline" tabindex="0"><div class="wrapper"><h4>Development Stack</h4></div></section>'),G=c('<div class="group"><div class="grid spaced"></div></div>');function W(){const i={beg:Math.min(...w.map(n=>n.stacks.map(e=>e.beg)).flat()),end:new Date().getFullYear()};return(()=>{const n=B.cloneNode(!0),e=n.firstChild;return e.firstChild,r(e,()=>w.map(s=>(()=>{const t=G.cloneNode(!0),a=t.firstChild;return r(a,()=>s.stacks.map(o=>u(Y,E(o,{range:i})))),t})()),null),n})()}function N(i,n){if(window.innerWidth<=560)return;function e(){const s=i(),t=window.scrollY-s.offsetTop,a=s.clientHeight;t>=0&&t<=a&&n(t/a)}J(()=>{document.addEventListener("scroll",e)}),R(()=>{document.removeEventListener("scroll",e)})}const j=[{name:"Telegram",link:"https://telegram.me/neki_me"},{name:"Email",link:"mailto:dev@neki.guru"},{name:"GitHub",link:"https://github.com/neki-dev"},{name:"StackOverflow",link:"https://ru.stackoverflow.com/users/15622/nikita-galadiy"}];const K=c('<a target="_blank" rel="noreferrer"></a>');function U({name:i,link:n}){return(()=>{const e=K.cloneNode(!0);return $(e,"href",n),$(e,"title",i),$(e,"aria-label",i),P(()=>e.className=`contact-item ${i.toLocaleLowerCase()}`),e})()}const q=c('<section class="personal-info" tabindex="0"><div class="wrapper"><div class="me"></div><div class="content"><div class="logotype"></div><div class="name"><h1>Nikita Galadiy</h1><h2>Full-Stack Developer</h2><span class="location">Russia, Saint-Petersburg</span></div><div class="contacts"></div></div></div></section>');function Q(){let i,n;return N(()=>i,e=>{i.style.backgroundPositionY=`${e*300}px`,n.style.transform=`translateY(${e*200}px)`}),(()=>{const e=q.cloneNode(!0),s=e.firstChild,t=s.firstChild,a=t.nextSibling,o=a.firstChild,d=o.nextSibling,p=d.nextSibling,f=i;typeof f=="function"?f(e):i=e;const l=n;return typeof l=="function"?l(a):n=a,r(p,()=>j.map(m=>u(U,m))),e})()}const V=[{organization:"Freelance",period:"07.2014 - 09.2017",position:"Full-Stack Developer, Web-Designer",description:"Development of turnkey websites, draw layouts, logos and corporate identity"},{organization:"Insist",period:"10.2017 - 12.2018",position:"Full-Stack Developer",description:"Development of a web application for monitoring data from oil producing points"},{organization:"KRDS",period:"01.2019 - 08.2021",position:"Full-Stack Developer, Teamlead",description:"Development of ERP and CRM for microfinance organizations"},{organization:"Alfa-Bank",period:"09.2021",position:"Front-End Developer",description:"Development of a personal account for a mortgage borrower"}],X=1404172800;function Z(){return((Date.now()/1e3-X)/31536e3).toFixed(1)}const ee=c('<div class="job-item"><div class="period"></div><div class="organization"></div><div class="position"></div><div class="description"></div></div>');function te({period:i,organization:n,position:e,description:s}){return(()=>{const t=ee.cloneNode(!0),a=t.firstChild,o=a.nextSibling,d=o.nextSibling,p=d.nextSibling;return r(a,i),r(o,n),r(d,e),r(p,s),t})()}const ie=c('<section class="job-history" tabindex="0"><div class="wrapper"><div class="total"><div>Total work experience<span><b></b> years</span></div></div><div class="list"></div></div></section>');function ne(){let i,n;return N(()=>i,e=>{n.style.transform=`translateY(${e*200}px)`,n.style.opacity=`${1-e}`}),(()=>{const e=ie.cloneNode(!0),s=e.firstChild,t=s.firstChild,a=t.firstChild,o=a.firstChild,d=o.nextSibling,p=d.firstChild,f=t.nextSibling,l=i;typeof l=="function"?l(e):i=e;const m=n;return typeof m=="function"?m(s):n=s,r(p,Z),r(f,()=>V.map(g=>u(te,g))),e})()}const ae=[{name:"dothree",type:"game",langs:["TypeScript","React"],description:"Online logic game"},{name:"promise-partial",type:"lib",langs:["JavaScript"],description:"Partial Promise execution"},{name:"contrast-arrays",type:"lib",langs:["JavaScript"],description:"Synchronization current array by target array"},{name:"uran-engine",type:"framework",langs:["JavaScript"],description:"Browser multiplayer engine",mark:"deprecated"},{name:"react-scrl",type:"lib",langs:["JavaScript","React"],description:"Simple and versatile stylized scrollbar"},{name:"fake-function",type:"lib",langs:["JavaScript"],description:"Fake wrapper for functions"},{name:"netbird",type:"framework",langs:["PHP"],description:"Easy website framwork",mark:"deprecated"},{name:"digital-mask",type:"lib",langs:["JavaScript"],description:"Easy digital mask for string"},{name:"genmap2d",type:"lib",langs:["JavaScript"],description:"Generation of 2D maps"},{name:"sip-gateway",type:"lib",langs:["JavaScript"],description:"Simple gateway for SIP via WebSocket"}];const re=c('<div class="package-item"><a target="_blank" class="container" rel="noreferrer"><div class="name"></div><div class="description"></div><div class="langs"><span></span></div></a></div>'),se=c("<span></span>"),oe="neki-dev";function le({name:i,description:n,type:e,langs:s}){const t=`https://github.com/${oe}/${i}`;return(()=>{const a=re.cloneNode(!0),o=a.firstChild,d=o.firstChild,p=d.nextSibling,f=p.nextSibling,l=f.firstChild;return $(o,"href",t),r(d,i),r(p,n),l.className=`type ${e}`,r(l,e),r(f,()=>s.map(m=>(()=>{const g=se.cloneNode(!0);return r(g,m),g})()),null),a})()}const ce=c('<section class="packages" tabindex="0"><div class="wrapper"><h4>Public Repositories</h4><div class="grid"></div></div></section>');function de(){return(()=>{const i=ce.cloneNode(!0),n=i.firstChild,e=n.firstChild,s=e.nextSibling;return r(s,()=>ae.map(t=>u(le,t))),i})()}function pe(){return[u(Q,{}),u(W,{}),u(ne,{}),u(de,{})]}O(pe,document.getElementById("root"));