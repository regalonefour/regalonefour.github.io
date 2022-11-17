---
sidebar_position: 4

title: Checks & Investigations
description: A look at status effects and player investigations.

---

## Investigating Other Players

With r14-evidence, you are able to conduct almost all investigations of players and vehicles in the gameworld through 
the use of qb-target interactions created by the resource. No more radial menu and simply trying to guess who in a 
crowd you are searching or checking the health status of, quickly and easily select who you want to investigate, get a 
result in your chat history with their server ID to easily keep track of it. Additionally, many of the investigations will
provide you with an inventory item containing the results!

### Investigate Person

Available at any time, without need for any inventory items, is the ability of officers to investigate a person to reveal
any status effects that they currently have. This uses the same code and events as the qb-policejob/client/evidence.lua but
give us the ability to discover this interaction through the qb-target interaction. This interaction does not notify the 
suspect, simply triggering an animation for the officer and after completion of a progress bar giving you a chat notification
with their status effects list of they have any. These statuses are applied based on the player character as well, meaning that
players logging out will not transfer statuses to other characters, and are held server side so they are persistent and available
to police even if they fly in after the effect was applied.

![Results of investigate person.](/img/investigateperson.png)

### GSR Field Test

In r14-evidence, in additon to the gunpowder status effect that most police officers are used to from qb-policejob, officers have
the ability to obtain a more accurate and admissible in court record of a suspect's GSR status through by conducting a field GSR
test. This test accesses a server-side GSR table which is triggered when a person shoots or aims a firearm, rather than simply 
having been in the area when a firearm was discharged. Like the Investigate Person event, the GSR field test is based on the 
player character being tested and not the player themselves, meaning GSR status does not transfer to other characters when logging
out and back in without disconnecting.

When conducting a field GSR test kit, a positive result will be automatically be bagged into an evidence bag if an officer has one on hand.

![Results of a field GSR test on a player.](/img/gsrresult.png)
![Results of the field GSR test in an evidence bag for later reference.](/img/gsrbag.png)


### Breathalyzer

Automatically configured for qb-smallresources, and easily integrated into other consumable resources, the optional Breathalyzer system
allows police to determine if a person has consumed alcohol and roughly estimate how much they have drank by returning an estimated
Blood Alcohol Content. When blowing anything over a 0.0, the breathalyzer will then print out the result and placed into an evidence bag
to allow officers to easily access it later. Player BAC, like the other status effects in the resource, tied to player character and not
server ID meaning effects do not transfer across characters when player log out and log back in without disconnecting from the server!

![Results of a breathalyzer being used on a player.](/img/breathalyzerprintout.png)
![Results of a breathlyzing in an evidence bag for later reference.](/img/breathalyzerbag.png)


### Drug Testing

Automatically configured for qb-smallresources, and easily integrated into other consumable resources, the optional drug testing system
included with r14-evidence allows officers to use the Field Drug Test to screen suspects for recent drug usage. By default, the time frame 
a suspect will return positive for the multipanel oral drug test will be 2 hours from the time of use, but can be changed in the config file
as desired to fit your server! This drug test is intended to be an accurate method of determining drug use and admissable in court, versus
the status effects used by qb-policejob/client/evidence.lua and other scripts which do not rise to the standard of evidence needed to support
cases in court for most roleplay servers.

When conducting a field test, the officer will receive the result of the drug test in an evidence bag which can be retained either as evidence
in support of their investigation or can exist as excuplatory evidence counter to their assertion that a person has used drugs.

![Results of a field drug test kit being used on a player.](/img/drugtestresult.png)
![Results of a drug test in an evidence bag for later reference.](/img/drugtestbag.png)

### DNA Swab

In order to match blood or other DNA samples to a suspect as part of an investigation, the Field DNA Test Kit can be used to collect the
DNA of a person of interest. This replaces the /takedna command used in the standard qb-policejob resource, and allows it to be used through
a qb-target interaction. After completing the DNA swab, the officer will then receieve an evidence bag containing the swab along with the person's
DNA code they can use in their investgiation or record in an MDT/MDW profile.

![Results of a dna swab in an evidence bag for later reference.](/img/dnaswab.png)

### Fingerprinting

To aid in the accurate and prompt identification of suspects, persons of interest, and even just civlians in the field, r14-evidence provies police
with a mobile fingerprint reader and the ability to quickly and easily access that print. Rather than requiring an officer to either convince a
person to come down to station, or to detain them and transport them to station, they can quickly and easily use the Pro Tech XFR8001 fingerprint
reader and obtain a print out in an evidence bag of the person's unique fingerprint ID. 

![Printout from a mobile fingerprint reader for easy lookup.](/img/fingerprintreaderbag.png)


## Investigating Vehicles

In addition to being able to investigate players as part of their policework, cops can also attempt to recover evidence from and relating to vehicles
which they encounter during the course of their patrol or investigations. Currently there are two primary ways to do this, either through a cursory
inspection of a vehicle in which the officer can gain basic information about it, or through a deeper evidence sweep in which they can collect evidence
contained within the vehicle or investigate possible vehicle theft by checking the ignition for signs of tampering. 

### Inspect Vehicle

At any point, officers can conduct a brief inspection of a vehicle and any occupants inside of it through the Inspect Vehicle qb-target interaction. They
will be alerted if any signs of tampering with the exterior locks exist, and if the vehicle is occupied, will return the status effects of all players
in the vehicle. These results are then recorded in a chat message that the police roleplayer can refer back to for later use if needed!

![Conducting an evidence sweep of a vehicle as part of an investigation.](/img/inspectveh.png)

### Evidence Sweep

When officers establish grounds for a search of a vehicle, they can use the Conduct Evidence Sweep qb-target interaction to attempt and collect any
evidence which exists in the vehicle as part of an investigaiton. This will open up the doors, hood, and trunk of a vehicle and after completing 
a brief search will show the officer anything found as part of the evidence sweep. This can include casings, blood, fingerprints, exterior lock
tampering evidence, or ignition tampering evidence.

![Conducting an evidence sweep of a vehicle as part of an investigation.](/img/conductevidencesweep.png)






