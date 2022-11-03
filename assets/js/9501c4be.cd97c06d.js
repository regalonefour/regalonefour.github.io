"use strict";(self.webpackChunkr_14_documentation=self.webpackChunkr_14_documentation||[]).push([[809],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,g=u["".concat(l,".").concat(f)]||u[f]||p[f]||r;return t?o.createElement(g,a(a({ref:n},c),{},{components:t})):o.createElement(g,a({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=u;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var s=2;s<r;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var o=t(7462),i=(t(7294),t(3905));const r={sidebar_position:1,title:"Changelog",description:"Someone will read this, surely."},a=void 0,d={unversionedId:"r14-evidence/changelog",id:"r14-evidence/changelog",title:"Changelog",description:"Someone will read this, surely.",source:"@site/docs/r14-evidence/changelog.md",sourceDirName:"r14-evidence",slug:"/r14-evidence/changelog",permalink:"/r14-evidence/changelog",draft:!1,editUrl:"https://github.com/regalonefour/regalonefour.github.io/blob/main/docs/r14-evidence/changelog.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Changelog",description:"Someone will read this, surely."},sidebar:"tutorialSidebar",previous:{title:"r14-evidence",permalink:"/category/r14-evidence"},next:{title:"Known Bugs",permalink:"/r14-evidence/knownbugs"}},l={},s=[],c={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"r14-evidence early access changelong"),(0,i.kt)("p",null,"v1.32 (11/3/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- new documentation made available at regalonefour.github.io/\n- made slight change to the evidence pickup thread to prevent an error being thrown when leaving pickup range\n- readded missing GetPlayer() function to the serverside drug testing event, drug tests should now provide evidence bags\n- added server ID to drug test notification message, you will now see the ID of the player you drug tested\n- added ability for police to fingerprint players via qb-target\n- added fingerprint reader item added for qb-target option\n")),(0,i.kt)("p",null,"v1.31 (10/31/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- fixed a native function that was causing massive performance degredation, updated native should restore normal resmon values (~1.4ms while using camera in evidence dense areas)\n- weird behavior of evidence pickups should be resolved, the loop now uses the global variable rather than recreating it with a shortened name\n- added police drug testing, set up out of the box for qb-smallresources, and oral drug test kit police can use to test a suspect for recent drug usage\n- added new drug test kit item\n- added config options for drug testing, you can disable it entirely, set the hours a drug will cause a positive test, and what drugs are tested for\n- added ability to specify contraband items for frisk, brief guide with real world case law explainer is included for adding items\n- added frisk notification for detecting contraband, will pop up as its own notification if found\n- dna and gsr evidence bags will now have tracking ID's for easier evidence management\n- breathalyzer now provides a printout when a suspect blows above a 0.0 with their result, tracking ID, date of test, and where it was conducted\n- when an outdated event triggers evidence:server:CreateCasing, the name of the event will be printed to server console\n")),(0,i.kt)("p",null,"v1.3 (10/21/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- fixed routing bucket information not being forwarded correctly to area evidence, evidence should now be properly concealed while in other routing buckets\n- fixed bug caused by vehicle fragments attempting to access car evidence tables that don't exist\n- routing buckets will no longer be constantly gotten from server, server now keeps track an will push the new bucket when it detectes a change\n- updated argument in the config for the server notifications\n")),(0,i.kt)("p",null,"v1.23 (10/8/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- removed deprecated inventory events from client/main.lua, replaced with server side functions (does not you to update qb-core, do not worry!)\n")),(0,i.kt)("p",null,"v1.223 hotfix (9/22/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- removed owned flag from vehicle evidence, replaced functionality with existing LoadedCars table\n- added error detection logic to RemoveEvidence() function, should now generate a server side print instead of a error if evidence ID does not exist\n- fixes car evidence being loaded from owned vehicles, will now trigger proper server events, or add the proper information to evidence tables\n")),(0,i.kt)("p",null,"v1.222 hotfix (9/18/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- removed left over evidence removal logic from server side\n- fixed civilian viewing of evidence casuing an F8 error when it cleared the AreaEvidence cache, now sets it to a blank table\n")),(0,i.kt)("p",null,"v1.221 hotfix (9/17/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- evidence loading has been fixed, evidence events were being sent individually to addevidence instead of as a table\n- evidence fading no longer uses custom function, net impacts will now be removed properly by remove evidence\n- errant print statement remvoed\n")),(0,i.kt)("p",null,"v1.22 update (9/4/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- general code clean up, evidence tables have now been merged along with the adding/removing events for all evidence types\n- distance checking is no longer preformed to pull evidence into the area cache for the flashlight/camera\n- all evidence is now organized into a grid system and only nearby grid squares pulled into AreaEvidence\n- eliminated always on evidence pickup thread, will now be activated only when there is a current evidence drop\n- improvement to evidence pickup, markers should now transition smoother, and be removed when leaving the pickup radius\n- removed deprecated qb-inventory additem and removeitem events, replaced with proper server-sided event\n- fixed previous note displaying on bag menu when editing bag notes\n- tweaks to the qb-menu options used by bag menus\n- add/remove evidence events will now be grouped together and sent once per second, this will reduce server to client and client to server traffic\n- added gsr wash off in water logic, optional via config, by default will take 90 seconds to wash off in light water, roughly 45 seconds while swimming\n- added evidence fading for all evidence types, casings, impacts, and blood will no longer persist through an entire reset by default\n")),(0,i.kt)("p",null,"v1.21 update (8/22/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- fixed issue with server notifications being broken when type function was supplied instead of nil\n- fixed issue with frisk being caused by this code\n- optimization for server vehicle db thread, will no longer check if car is owned every loop\n- added fading for casings and blood\n")),(0,i.kt)("p",null,"v1.2 hotfixes (8/15/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- job check function modified to now accept both job name and job type, should resolve issues \n- added event for qb-vehiclekeys for access tool to function correctly, should now trigger correct events\n- fixed misnamed table in server lua\n- added variable to disable police alerts\n- fixed double if statement syntax error\n- fixed missing alerttimeout breaking police alerts\n- updated config to disable all debug variables\n")),(0,i.kt)("p",null,"v1.2 (8/10/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- added ability for anyone to view evidence using specific and configurable animations, works with dp-emotes by default and record and camera will reveal evidence\n- inspecting a vehicle will allow police to discover evidence of forcibly entry\n- evidence sweep will now allow police to discover evidence of forcible entry or picking/hotwiring when set up correctly\n- notifications and chat messages now use a configurable function, most notification text has also been moved to config\n- new configurable job checking is included, the script will now work out of the box with multiple jobs and job types in newer qb-core versions\n- qb-target options will now use this new job check, no need to edit them for multiple jobs anymore\n- added slim jim for police to access vehicles easily and with a configurable number of uses (these are not job locked by default!)\n- modified evidence sweep function, will no longer be able to search locked vehicles\n- added alert triggers to key points of the script, by default these will be qb-policejob but can be modified to any script\n- code reorganization for the camera, should now overall feel a lot snappier and more responsive\n- camera now recieves time/date from server thread, no more callback should reduce resource usage\n- added ability for police and ems to inspect vehicle occupants for status effects via a qb-target 'Inspect Vehicle' option\n- left hand eject weapons now work properly, added Machine Gun to the left hand eject table\n- fixed edge case bug where firing a vehicle weapon or weapon you didn't have your inventory would break evidence pickups\n- fixed time and location not being properly applied to dna test evidence bags\n- fixed weird bug where you could fall through the map if using a camera too soon after getting in a vehicle\n- fix for multiple impacts being generated per shot on networked entities, added timeout to prevent this\n")),(0,i.kt)("p",null,"v1.12 (8/7/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- rewrote time callbacks to now be a single server thread that is pushed to all clients\n- further optimizations, resource usage should now be around 0.01ms in resmon\n")),(0,i.kt)("p",null,"v1.11 (8/1/2022)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- transitioned all gsr, impact, and casing logic to now use threads\n- most users should see 70% reduction in idle resource usage when using resmon\n")),(0,i.kt)("p",null,"v1.1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- new evidence bag menu, you will now have the option to copy specific pieces of information from the evidence bag\n- players can now create and edit notes on evidence bags\n- vehicle fragment evidence has been added, when crashing a vehicle, bodywork and engine fragments will now be generated\n- bodywork fragments will reveal the color, and upon harsher impact, the make and model of the vehicle\n- engine fragments will reveal the make and model, and upon harsher impact, reveal the plate of the vehicle\n- fixed accidental reversions of existing fixes\n- general code cleanup\n")),(0,i.kt)("p",null,"v1.07"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- ejection pattern modified to be more realistic, rounds will generally fall to the right and behind of a shooter\n- modified evidence loading to prevent oversized packets, script will now load parts of the evidence table over time\n  when a person connects to the server\n- added config options for vehicle garage events, you can now customize the name of the event, and modify which arguments\n  are used by the script\n- added in data validation for vehicle garage events, it should alert you if the script is attempting to use a table or non-plate\n  formated string\n")),(0,i.kt)("p",null,"v1.06"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- blood event moved to r14-evidence script, no edit is required to qb-ambulance job now\n- blood will now be dropped when player ped takes damage based on a configurable chance\n- serial number will no longer be 'guessed' when using weapons in inventory, event now sets the current serial number \n  when drawing a weapon from inventory and sends it to server side\n- refinement to fix for evidence pickups breaking when spamming pickup key, should be fully fixed now\n")),(0,i.kt)("p",null,"v1.05"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- modified current evidence pickup thread to no longer break after leaving the area, current evidence is now stored in a dedicated\n  variable and no longer referenced from the area evidence cache\n- fixed possible error breaking evidence pickup when evidence pickup is spammed\n- config option added for making evidence bags usable\n")),(0,i.kt)("p",null,"v1.04 hotfix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- modified thread that applies gsr status to rate limit attempts to set gsr, crashing using continious fire weapons should be resolved\n")),(0,i.kt)("p",null,"v1.03 hotfix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- fixed bug with evidence being drawn permanently after using flashlight, variable is now correctly set to false while not using flashlight\n")),(0,i.kt)("p",null,"v1.02 hotfix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- fixed broken fade evidence function, it will now access the correct tables and delete the evidence accordingly\n- netimpacts will now properly fade over time, restored missing time variable to netimpacts\n")),(0,i.kt)("p",null,"v1.01 hotfix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- readded workaround qb-target submenu for police actions\n")),(0,i.kt)("p",null,"v1.0 - Release"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- fixed evidence fade accessing the wrong tables for the evidence type being removed\n- fixed evidence bags not copying to clipboard properly due to string format argument mismatch\n- modified BAC events to not require ABV\n- modified BAC events to accept a target argument\n- added blips back for car washes\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"r14-evidence beta changelong"),(0,i.kt)("p",null,"v1.21 hotfix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- fixed evidence loading for networked impacts\n- cleaned up evidence loading function\n- added networked impacts for flashlight\n- cleaned up code\n- removed marker being drawn for networked ped impacts\n")),(0,i.kt)("p",null,"v1.2 update"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- impacts will now attach to networked entities that have not been destroyed or killed, this includes vehicles and peds (both locals and players)\n- networked entity impacts will retain bullet angle of impact evidence, ped impacts will display a list of impact types on the damaged ped bone\n- evidence bags are now usable, when used they will copy the tracking ID and relevant info to your clipboard\n- added check if ped is downed or dead to qb-target options, should no longer be displayed when in last stand or dead\n- added notifications for the target of frisks, gsr tests, breathalyzers, and dna swabs allowing them time to run away (did not add for investigate)\n- added config options for database events for those not using qb-target\n- added evidence fading over time for impacts and network impacts\n- moved multiple tables to config\n")),(0,i.kt)("p",null,"v1.11 hotfix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- fix for vehicle casings not loading properly, expiration for car casings is now calculated properly\n- added multiple debug variables for printing qb-target events\n- changed notification text if officer does not have a evidence bag when conducting a gsr test\n")),(0,i.kt)("p",null,"v1.1 update"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- vehicle evidence will now be removed after a set number of days, adjustable in the config by evidence type    \n- fingerprint evidence will now fade over time\n- added Breathalyzer, BAC system integrated with QB-Core, and qb-target option to breathalyze a person\n- added qb-target options for GSR testing, DNA testing, and Investigate Person with new progress bars\n- added GSR test kit and DNA test kit items which are consumed based on adjustable config options\n- separated GSR into 'GSR status' detected by GSR test kit and 'gunpowder' status effect revealed by investigate person\n- added positive gsr evidence item, when a positive test comes back, an evidence bag will be generated if the officer has one\n- modified player statuses, gsr status, and blood alcohol content to be recorded based on CID and not source, meaning they will no longer transfer between characters when not fully disconnecting from the server\n- added check to apply gunpowder status effect when a weapon is fired near the player (not as accurate as GSR status, can be applied based on any weapon that is thrown like snowballs)\n- modified gsrs status to check for weapon damage type, a bit more resource intensive but more accurate and does not require updating the script for addon weapons\n- added frisk qb-target option that allows officers to check a person for weapons without searching them\n")),(0,i.kt)("p",null,"v1.02 hotfix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- fixed incorrect label causing evidence pickups to break (streetLabel was left in, changed to street)\n")),(0,i.kt)("p",null,"v1.01 hotfix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- removed preexisting webhooks from config\n- removed unnecessary information from config\n")),(0,i.kt)("p",null,"v1.0 - Release"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- overhaul of qb-policejob/client/evidence.lua and qb-policejob/server/main.lua events\n- display of markers for all evidence in area when using flashlight\n- display of markers and evidence info in area when using camera\n- addition of vehicle casings, fingerprints, and blood that can be discovered by police\n- nikon camera for crime scene documentation and surveillence, also civilian photos\n- adds vehicle evidence\n- /r14debug command to allow changing of debug variables in runtime\n")))}p.isMDXComponent=!0}}]);