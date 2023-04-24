"use strict";(self.webpackChunkr_14_documentation=self.webpackChunkr_14_documentation||[]).push([[730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2,title:"Known Bugs",description:"Things I am aware of, please report more!"},a=void 0,l={unversionedId:"r14-evidence/knownbugs",id:"r14-evidence/knownbugs",title:"Known Bugs",description:"Things I am aware of, please report more!",source:"@site/docs/r14-evidence/knownbugs.md",sourceDirName:"r14-evidence",slug:"/r14-evidence/knownbugs",permalink:"/r14-evidence/knownbugs",draft:!1,editUrl:"https://github.com/regalonefour/regalonefour.github.io/blob/main/docs/r14-evidence/knownbugs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Known Bugs",description:"Things I am aware of, please report more!"},sidebar:"tutorialSidebar",previous:{title:"Changelog",permalink:"/r14-evidence/changelog"},next:{title:"Features & Information",permalink:"/category/features--information"}},s={},c=[{value:"Likely Unsolveable",id:"likely-unsolveable",level:2},{value:"Still Reseraching",id:"still-reseraching",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"likely-unsolveable"},"Likely Unsolveable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- player vs player bullet impacts are extremely finicky, they will not always attach\ncorrectly and sometimes leave floating bullet impacts instead. this is likely due to\nhow OneSync handles damage events between players, if a fix is possible it has not\nbeen discovered yet\n\n- bullet impacts will not generate if you fire a weapon from a vehicle and it lands with\nroughtly 30 meters of the player, this is because the native used to calculate the bullet\nimpact will report a impact on the player vehicle on the frame it is fired, and will not\naccurately report the landing position until the next frame\n\n- bullet impacts will not attach to blown up vehicles or dead peds, this is because all \nnatives that can be used to return damage done to these entities do not work if the ped\nis destroyed (and therefore does not take damage)\n")),(0,o.kt)("h2",{id:"still-reseraching"},"Still Reseraching"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- bullet wounds will occasionally appear on vehicles for some reason, a fix has been\nimplemented and it has not been seen in some time, but please report it if you observe\nit!\n\n- bullet impacts will occasionally draw at vector3(0.0, 0.0, 0.0) while being accurately\ndistance checked for the player, the reason for this is likely related to networked entity \nevidence but has not been solved yet due to difficulty reproducing it\n")))}d.isMDXComponent=!0}}]);