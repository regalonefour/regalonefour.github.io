"use strict";(self.webpackChunkr_14_documentation=self.webpackChunkr_14_documentation||[]).push([[1354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:7,title:"Updating Vehicle Database",description:"Updating our player vehicle database."},o=void 0,s={unversionedId:"r14-smallresources/Installation/sql",id:"r14-smallresources/Installation/sql",title:"Updating Vehicle Database",description:"Updating our player vehicle database.",source:"@site/docs/r14-smallresources/Installation/sql.md",sourceDirName:"r14-smallresources/Installation",slug:"/r14-smallresources/Installation/sql",permalink:"/r14-smallresources/Installation/sql",draft:!1,editUrl:"https://github.com/regalonefour/regalonefour.github.io/blob/main/docs/r14-smallresources/Installation/sql.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Updating Vehicle Database",description:"Updating our player vehicle database."},sidebar:"tutorialSidebar",previous:{title:"Updating qb-vehiclekeys",permalink:"/r14-smallresources/Installation/qbvehiclekeys"},next:{title:"\u2705 Installation Checklist",permalink:"/r14-smallresources/Installation/checklist"}},l={},c=[{value:"Included Database Configuration",id:"included-database-configuration",level:2},{value:"Accessing Our Database",id:"accessing-our-database",level:2},{value:"Running our SQL Statement",id:"running-our-sql-statement",level:2},{value:"Verifying Our Change",id:"verifying-our-change",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The last major step of our installation process will be the modification of our vehicle database to hold vehicle evidence information\nthat will persist through server reset. This makes it possible for police to recover casings, blood, or fingerprints from player vehicles\neven after multiple server or script resets. Even if you are not experienced in managing your database, this is a relatively simple process\nand can be completed in just a few minutes. This guide will use the mariadb web interface included with servers maintained by ZAP Hosting, Inc\nbut should be simliar to most database web interfaces. "),(0,r.kt)("h2",{id:"included-database-configuration"},"Included Database Configuration"),(0,r.kt)("p",null,"By default, r14-evidence is configured to access the player vehicle table created and used by qb-core, however, if your script uses a differently\nnamed table you are able to change this in the config! Simply alter ",(0,r.kt)("inlineCode",{parentName:"p"},"Config.DB.Vehicle")," to match the name of your player vehicle table, and if\nthe plate is stored in a custom column, you may change ",(0,r.kt)("inlineCode",{parentName:"p"},"Config.DB.Plate")," to match this as well. If you do not use any custom scripts, you can use\nthe configuration and SQL as is!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='r14-evidence Database Config' showLineNumbers",title:"'r14-evidence",Database:!0,"Config'":!0,showLineNumbers:!0},"Config.DB = { -- this config sets what table you are using to store vehicle evidence\n    Vehicle = 'player_vehicles', -- set this to your player vehicle table\n    Plate = 'plate'\n}\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Never make any changes to your database without making a backup. Losing code sucks, but losing unique player data is even worse!")),(0,r.kt)("h2",{id:"accessing-our-database"},"Accessing Our Database"),(0,r.kt)("p",null,"You will want to navigate to your player vehicles table, by default, this will be ",(0,r.kt)("inlineCode",{parentName:"p"},"player_vehicles")," in qb-core and with most garage\nscripts intended to integrate seamlessly with it. We will then want to run our SQL on our table to create a new column which will store\nour evidence information."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Preparing to run SQL",src:n(5300).Z,width:"2775",height:"1751"})),(0,r.kt)("h2",{id:"running-our-sql-statement"},"Running our SQL Statement"),(0,r.kt)("p",null,"We will then want to run the following SQL statement on our table, this is intended to add a column to the end of the table named ",(0,r.kt)("inlineCode",{parentName:"p"},"evidence"),"\nwhich will be accessed by the resource to store and load vehicle evidence. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title'SQL Statement To Be Run' showLineNumbers","title'SQL":!0,Statement:!0,To:!0,Be:!0,"Run'":!0,showLineNumbers:!0},"ALTER TABLE `player_vehicles`\nADD `evidence` longtext;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Running our SQL",src:n(1195).Z,width:"2339",height:"1709"})),(0,r.kt)("h2",{id:"verifying-our-change"},"Verifying Our Change"),(0,r.kt)("p",null,"Once we run this SQL statement, we should recieve a notification that it has either successfully completed or that there was an error. If you\nexperience an error please check to make sure the name of the table in the SQL statement matches your table in your database, and that no column\nalready exists named ",(0,r.kt)("inlineCode",{parentName:"p"},"evidence"),". Once we successfully run this statement however, we should verify that our database has updated and if needed\nalter our config in our r14-evidence resource."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Verifying our change to the database",src:n(440).Z,width:"3382",height:"1571"})),(0,r.kt)("p",null,"Now that we have completed the update to our database, it is time to complete the installation checklist before restarting our server!"))}d.isMDXComponent=!0},5300:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/clickrunsql-85295d5f14195c3b940080f0158d800a.png"},1195:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runsql-3994183272c24e7b59734308cfe3f973.png"},440:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/verifysql-7e609502b47433abea4e29b14db8ce11.png"}}]);