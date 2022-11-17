"use strict";(self.webpackChunkr_14_documentation=self.webpackChunkr_14_documentation||[]).push([[413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:6,title:"Developer Features",description:"A look at developer and debug tools in r14-evidence."},a=void 0,s={unversionedId:"r14-evidence/Features & Information/developer",id:"r14-evidence/Features & Information/developer",title:"Developer Features",description:"A look at developer and debug tools in r14-evidence.",source:"@site/docs/r14-evidence/Features & Information/developer.md",sourceDirName:"r14-evidence/Features & Information",slug:"/r14-evidence/Features & Information/developer",permalink:"/r14-evidence/Features & Information/developer",draft:!1,editUrl:"https://github.com/regalonefour/regalonefour.github.io/blob/main/docs/r14-evidence/Features & Information/developer.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Developer Features",description:"A look at developer and debug tools in r14-evidence."},sidebar:"tutorialSidebar",previous:{title:"Checks & Investigations",permalink:"/r14-evidence/Features & Information/investigations"},next:{title:"Installation",permalink:"/category/installation"}},c={},l=[{value:"Extensive Debug Menu",id:"extensive-debug-menu",level:2},{value:"Self-Test Debug Commands",id:"self-test-debug-commands",level:2},{value:"Improved Idle Performance",id:"improved-idle-performance",level:2},{value:"Ease of Integration",id:"ease-of-integration",level:2},{value:"Routing Bucket Support",id:"routing-bucket-support",level:2},{value:"Minimized Server Traffic",id:"minimized-server-traffic",level:2}],u={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"extensive-debug-menu"},"Extensive Debug Menu"),(0,o.kt)("p",null,"Get access to information faster and in runtime with the built in debug menu in r14-evidence. Simply by accessing the /r14debug\ncommand you enable and disable prints for most events both on the client-side and server-side while the script is running. Tired\nof pulling out a flashlight just to check if your evidence was created? Turn on viewing evidence. Need to see what is being sent\nto your database? Turn on database prints. Simple as that."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The r14-evidence debug menu",src:n(8473).Z,width:"1697",height:"1191"})),(0,o.kt)("h2",{id:"self-test-debug-commands"},"Self-Test Debug Commands"),(0,o.kt)("p",null,"Is it late and you are making changes to your config, maybe testing switching the fingerprint reader to a fingerprinting card\nfor a retro 80's server, or just want to make sure code works? No problem, the included self-test commands allow you to easily\ntest the events triggered by your qb-target events even when you don't have another player to test them on! "),(0,o.kt)("h2",{id:"improved-idle-performance"},"Improved Idle Performance"),(0,o.kt)("p",null,"There's no need to worry about r14-evidence impacting your frames when not in use with an idle resmon of 0.01ms for both police\nand civlians when nothing is going on! A lot of work has gone into making sure the resource has as little impact as possible on\nplayers, and unless you are a police officer actively investigating a scene, expect resmon values to rarely exceed those of\nqb-policejob. "),(0,o.kt)("h2",{id:"ease-of-integration"},"Ease of Integration"),(0,o.kt)("p",null,"Entirely open source, and highly configurable, r14-evidence is intended to be as easy as possible to integrate with your existing\nresoruces in order to work with your server not against it. Custom chat scripts, custom notifications systems, custom police alerts\ndifferent police job names, different job types? No problem! In the config you will find options for customizing key functions and\nmaking sure r14-evidence fits your server and your resources, not the other way around."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configurable job checking functions that fit whatever exists on your server!",src:n(4100).Z,width:"2721",height:"1059"})),(0,o.kt)("h2",{id:"routing-bucket-support"},"Routing Bucket Support"),(0,o.kt)("p",null,"Support for entity routing buckets is built in to r14-evidence to ensure compatability with any scripts or resources that you are\nusing which instance players! By default any evidence that is not attached to a networked entity is automatically assigned to the\nrouting bucket the player is in at the time it is created, with entity-attached evidence automatically being filtered through the\nnative functionality of routing buckets. You don't need to worry about your apartments becoming a mess of casings, blood, and\nanything else, r14-evidence out of the box makes sure your cops only find evidence where they are supposed to!"),(0,o.kt)("h2",{id:"minimized-server-traffic"},"Minimized Server Traffic"),(0,o.kt)("p",null,"Despite having more evidence available for your officers, expect less client to server and conversely server to client traffic\nwith r14-evidence thanks to a packeting system for evidence creation and syncing. Rather than sending every single casing, impact\nblood drop, or fingerprint across the network in the moment it is created, the script automatically packages evidence creation\nfrom the player and evidence syncing from the server once per second to reduce your network traffic."))}d.isMDXComponent=!0},4100:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/authjobs-a8b8b44fab78a9aadd036f975340e9e7.png"},8473:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/debug-b649cfd05a930ebc38f88a35da32ba42.png"}}]);