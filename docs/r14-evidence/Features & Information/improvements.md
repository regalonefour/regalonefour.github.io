---
sidebar_position: 1

title: General Improvements
description: A look at what evidence does better than qb-policejob.

---

### Nikoff G900 DSLR

Including in r14-evidence is one of the most important tools in the arsenal of your police force, the Nikoff G900 DSLR
camera which allows for automatic uploading of photos to both the public Nikoff Image Space sharing service, as well as
secure options for your server's emergency services and even private businesses. In addition to serving as an effective
tool for documenting and observing the world your players inhabit, the Nikoff G900 camera allows your officers to document
crime scenes quickly and efficiently, and link their physical evidence recovered from scene with the photos they've taken.

While this functionality is the most resource intensive part of r14-evidence, rest-assured resmon hawks, you'll see on-demand
times for average crime scenes in the 0.10ms to 0.40ms ranges, with sub-millisecond performance in all but the most extremely
evidence-dense scenes rarely encountered on a roleplay server. 

![The evidence camera at work.](/img/evcam.png) <i>The evidence camera at work, discovering evidence and documenting a crime scene.</i>

![Automatically upload photos taken by your players to your discord!](/img/webhooks.png) <i>Players can automatically upload images to your discord channels through webhooks.</i>

![And share them in game!](/img/imagespace.png) <i>Not only can players upload their photos to your discord, they can share them in game, able to easily share images and copy links without ever leaving the game.</i>

### Improved Flashlight

Unlike the default qb-policejob/client/evidence.lua, using the flashlight to investigate a crime scene in r14-evidence is 
easy, simple, and effective. Simply aim to activate the flashlight and you will see nearby evidence markers that you can approach
and either collect using the G key or simply get more information about the evidence piece. No more pointless search patterns in 
the hopes of finding random 3D text on your crime scene, quickly identify, document, and collect evidence that can build the case
you need for your arrest.

![Using the flashlight on a typical crime scene!](/img/flashlight.png)

### Evidence Bag Functionality

Evidence bags are now able to be used by players in order to acesss the evidence bag menu introduced in
r14-evidence. This menu allows players to copy key pieces of information from the evidence bag without needing
to try and select an inventory tooltip to do so, as well as being able to create and edit notes to describe the
evidence bag. 

![Evidence bag menu, featuring copy/paste ability and notes](/img/evbagmenu.png)

### Disconnect Persistence

When flying in, players will automatically have all evidence from the server synced to their client, meaning that police
can conduct investigations into suspects and of crimescenes with no need to worry about having been in city at the time
evidence could have been generated, or losing access to evidence if they crash in mid-investigation and being forced to
rely on other players. Officers can focus on being officers, and less on the mechanics of qb-core and FiveM preventing them
from doing that. 

### Target Integration

Most police actions have now been made fully accessible via qb-target interactions for police characters, allowing 
players to more easily investigate the person they are trying to, and removing the need to 'step aside' to use commands
or radial menu actions that just get the closest player. Now players can quickly and accurately target other players 
and select an action from the list of target options. Currently, the script allows police to use the Investigate Person
(replaces Check Status), GSR Test, Frisk, Collect DNA, Breathalyze, and Drug Test on other players.

![Included vehicle targets options in r14-evidence](/img/vehtargets.png)

### Chat Records

As a small quality-of-life improvement for police roleplayers, most investgiations and actions taken by players will
return their results as chat messages rather than simply as notifications. This allows players to more easily screenshot
important information, and reducing the need of players to take notes using out of city resources or requiring the
need to record their gameplay to remember important details, letting cops focus on roleplaying rather than notetaking!

![Examples of various chat records from r14-evidence](/img/chatmessages.png)

