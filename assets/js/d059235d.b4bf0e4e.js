"use strict";(self.webpackChunkr_14_documentation=self.webpackChunkr_14_documentation||[]).push([[941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,u=p["".concat(c,".").concat(g)]||p[g]||h[g]||r;return n?i.createElement(u,l(l({ref:t},d),{},{components:n})):i.createElement(u,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2,title:"Standard Evidence",description:"A look at standard evidence types."},l="Standard Evidence Drops",o={unversionedId:"r14-evidence/Features & Information/standardevidence",id:"r14-evidence/Features & Information/standardevidence",title:"Standard Evidence",description:"A look at standard evidence types.",source:"@site/docs/r14-evidence/Features & Information/standardevidence.md",sourceDirName:"r14-evidence/Features & Information",slug:"/r14-evidence/Features & Information/standardevidence",permalink:"/r14-evidence/Features & Information/standardevidence",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/r14-evidence/Features & Information/standardevidence.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Standard Evidence",description:"A look at standard evidence types."},sidebar:"tutorialSidebar",previous:{title:"Developer Features",permalink:"/r14-evidence/Features & Information/developer"},next:{title:"Vehicle Evidence",permalink:"/r14-evidence/Features & Information/vehicleevidence"}},c={},s=[{value:"Casings",id:"casings",level:2},{value:"Blood",id:"blood",level:2},{value:"Fingerprints",id:"fingerprints",level:2},{value:"Vehicle Fragments",id:"vehicle-fragments",level:2},{value:"Bullet Impacts",id:"bullet-impacts",level:2},{value:"Lock Tamperings",id:"lock-tamperings",level:2}],d={toc:s};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"standard-evidence-drops"},"Standard Evidence Drops"),(0,a.kt)("p",null,"During their time in server, players will generate evidence drop via several built in event triggers in both\nr14-evidence and various qb-core resources. Police are able to discover this evidence by investgiating\nwith either a flashlight or the included camera that comes included with the resource. They are then able to\ncollect this evidence by using the flashlight and an empty evidence bag. Currently, there are six evidence drops\nincluded with r14-evidence, with four being able to be collected in evidence bags."),(0,a.kt)("h2",{id:"casings"},"Casings"),(0,a.kt)("p",null,"Like in default qb-core, generally when shooting a firearm, players will generate bullet casings that will allow\npolice to connect them to the weapon that fired them using the serial number. After picking up the casing, police\nwill also recieve information regarding the caliber of the firearm that fired it, and recieve an evidence bag\nwith the tracking number, date of collection, and the general location where it was collected. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Casings seen through the evidence camera",src:n(8373).Z,width:"2560",height:"1440"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Casing evidence bag information",src:n(5005).Z,width:"771",height:"375"})),(0,a.kt)("h2",{id:"blood"},"Blood"),(0,a.kt)("p",null,"When they are not sitting in a vehicle, players will not only drop blood evidence when they are bleeding just as\nthey would with the default ",(0,a.kt)("inlineCode",{parentName:"p"},"qb-policejob/client/evidence.lua"),", but also when they take damage. This blood\nevidence will provide police with the DNA code of the person who dropped it, who can then match it with their\nrecords or by collecting the DNA of a suspect and comparing it. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Blood seen through the evidence camera",src:n(6447).Z,width:"2560",height:"1440"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Blood evidence bag information",src:n(5444).Z,width:"831",height:"361"})),(0,a.kt)("h2",{id:"fingerprints"},"Fingerprints"),(0,a.kt)("p",null,"Utilizing the fingerprint event triggers build into qb-core's various crime resources, as well as any third-party\nscripts designed to integrate with qb-policejob, players who are not wearing gloves will create fingerprints that\npolice will be able to match. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Fingerprints seen through the evidence camera",src:n(4171).Z,width:"2560",height:"1440"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Fingerprint evidence bag information",src:n(1354).Z,width:"893",height:"339"})),(0,a.kt)("h2",{id:"vehicle-fragments"},"Vehicle Fragments"),(0,a.kt)("p",null,"When players crash their vehicles, they will now create vehicle fragment evidence which can be discovered and\ncollected by police. There are two types of vehicle fragments generateed by r14-evidence, body fragments which\nwill always reveal the color of the vehicle which generated, and engine fragments which will always reveal the\nmake and model of the vehicle. When the amount of damage to either the body or the engine of a vehicle exceeds\na set threshold, body fragments will also reveal the make and model, while engine fragments will also reveal the\nplate of the vehicle as a 'VIN match'."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Vehicle fragments seen through the evidence camera",src:n(5002).Z,width:"2560",height:"1440"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Vehicle fragment evidence bag information",src:n(5093).Z,width:"909",height:"236"})),(0,a.kt)("h2",{id:"bullet-impacts"},"Bullet Impacts"),(0,a.kt)("p",null,"In addition to generating bullet casings, firing a weapon will also create a bullet impact which will reveal\nthe general type of weapon that fired it, and the angle of impact which roughly indicates the direction it\nwas fired from. When a bullet strikes a ped or a player, it will not generate angle of impact evidence, but\nshow where the bullet struck them and indicate that there is a wound."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bullet impacts seen through the evidence camera",src:n(8717).Z,width:"2560",height:"1440"})),(0,a.kt)("h2",{id:"lock-tamperings"},"Lock Tamperings"),(0,a.kt)("p",null,"In addition to generating bullet casings, firing a weapon will also create a bullet impact which will reveal\nthe general type of weapon that fired it, and the angle of impact which roughly indicates the direction it\nwas fired from. When a bullet strikes a ped or a player, it will not generate angle of impact evidence, but\nshow where the bullet struck them and indicate that there is a wound."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Lock tamperings seen through the evidence camera",src:n(8717).Z,width:"2560",height:"1440"})))}h.isMDXComponent=!0},6447:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blood-a8e183e9d0705210871c46a6e436851d.png"},5444:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bloodevbag-949828b77761a7a9693cd9da285f5fc1.png"},8373:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/casings-f7ef00cb20ff97375bd5c7642c3b5824.png"},5005:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/casingsevbag-b78dcaf00bf740a9ff525f1e5db51040.png"},4171:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fingerprint-78aa4fd2dabb678fb0d958bc99d18466.png"},1354:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fingerprintevbag-703742b9f44363a9832a3a173616b6f6.png"},5002:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fragment-587ef34a303afd3b93d8c3b87012e4dd.png"},5093:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fragmentevbag-70b2472ce5a960b4c111aa0417b7d5a1.png"},8717:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/impacts-b7331f839a8d8dc0e7512f16af5866a0.png"}}]);