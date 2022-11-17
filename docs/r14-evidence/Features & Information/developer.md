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

## Ease of Integration

Entirely open source, and highly configurable, r14-evidence is intended to be as easy as possible to integrate with your existing
resoruces in order to work with your server not against it. Custom chat scripts, custom notifications systems, custom police alerts
different police job names, different job types? No problem! In the config you will find options for customizing key functions and
making sure r14-evidence fits your server and your resources, not the other way around.

![Configurable job checking functions that fit whatever exists on your server!](/img/authjobs.png)

## Routing Bucket Support

Support for entity routing buckets is built in to r14-evidence to ensure compatability with any scripts or resources that you are
using which instance players! By default any evidence that is not attached to a networked entity is automatically assigned to the
routing bucket the player is in at the time it is created, with entity-attached evidence automatically being filtered through the
native functionality of routing buckets. You don't need to worry about your apartments becoming a mess of casings, blood, and
anything else, r14-evidence out of the box makes sure your cops only find evidence where they are supposed to!

## Minimized Server Traffic

Despite having more evidence available for your officers, expect less client to server and conversely server to client traffic
with r14-evidence thanks to a packeting system for evidence creation and syncing. Rather than sending every single casing, impact
blood drop, or fingerprint across the network in the moment it is created, the script automatically packages evidence creation
from the player and evidence syncing from the server once per second to reduce your network traffic.