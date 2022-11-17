---
sidebar_position: 6

title: Developer Features
description: A look at developer and debug tools in r14-evidence.

---

## Extensive Debug Menu

Get access to information faster and in runtime with the built in debug menu in r14-evidence. Simply by accessing the /r14debug
command you enable and disable prints for most events both on the client-side and server-side while the script is running. Tired
of pulling out a flashlight just to check if your evidence was created? Turn on viewing evidence. Need to see what is being sent
to your database? Turn on database prints. Simple as that.

![The r14-evidence debug menu](/img/debug.png)

## Self-Test Debug Commands

Is it late and you are making changes to your config, maybe testing switching the fingerprint reader to a fingerprinting card
for a retro 80's server, or just want to make sure code works? No problem, the included self-test commands allow you to easily
test the events triggered by your qb-target events even when you don't have another player to test them on! 

## Improved Idle Performance

There's no need to worry about r14-evidence impacting your frames when not in use with an idle resmon of 0.01ms for both police
and civlians when nothing is going on! A lot of work has gone into making sure the resource has as little impact as possible on
players, and unless you are a police officer actively investigating a scene, expect resmon values to rarely exceed those of
qb-policejob. 

## Minimized Server Traffic

Despite having more evidence available for your officers, expect less client to server and conversely server to client traffic
with r14-evidence thanks to a packeting system for evidence creation and syncing. Rather than sending every single casing, impact
blood drop, or fingerprint across the network in the moment it is created, the script automatically packages evidence creation
and evidence syncing events together and sends them only once per second to reduce your network traffic.