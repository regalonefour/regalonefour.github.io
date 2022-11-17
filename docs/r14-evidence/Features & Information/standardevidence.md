---
sidebar_position: 2

title: Standard Evidence
description: A look at standard evidence types.

---

# Standard Evidence Drops

During their time in server, players will generate evidence drop via several built in event triggers in both
r14-evidence and various qb-core resources. Police are able to discover this evidence by investgiating
with either a flashlight or the included camera that comes included with the resource. They are then able to
collect this evidence by using the flashlight and an empty evidence bag. Currently, there are six evidence drops
included with r14-evidence, with four being able to be collected in evidence bags. Additionally, as of v1.4, police
can bag fiearms and melee weapons into evidence when they are recovered while on patrol or when conducting an
investigation.


## Casings

Like in default qb-core, generally when shooting a firearm, players will generate bullet casings that will allow
police to connect them to the weapon that fired them using the serial number. After picking up the casing, police
will also recieve information regarding the caliber of the firearm that fired it, and recieve an evidence bag
with the tracking number, date of collection, and the general location where it was collected. 

![Casings seen through the evidence camera](/img/casings.png)

![Casing evidence bag information](/img/casingsevbag.png)

## Blood

When they are not sitting in a vehicle, players will not only drop blood evidence when they are bleeding just as
they would with the default ```qb-policejob/client/evidence.lua```, but also when they take damage. This blood
evidence will provide police with the DNA code of the person who dropped it, who can then match it with their
records or by collecting the DNA of a suspect and comparing it. 

![Blood seen through the evidence camera](/img/blood.png)

![Blood evidence bag information](/img/bloodevbag.png)

## Fingerprints

Utilizing the fingerprint event triggers build into qb-core's various crime resources, as well as any third-party
scripts designed to integrate with qb-policejob, players who are not wearing gloves will create fingerprints that
police will be able to match. 

![Fingerprints seen through the evidence camera](/img/fingerprint.png)

![Fingerprint evidence bag information](/img/fingerprintevbag.png)

## Vehicle Fragments

When players crash their vehicles, they will now create vehicle fragment evidence which can be discovered and
collected by police. There are two types of vehicle fragments generateed by r14-evidence, body fragments which
will always reveal the color of the vehicle which generated, and engine fragments which will always reveal the
make and model of the vehicle. When the amount of damage to either the body or the engine of a vehicle exceeds
a set threshold, body fragments will also reveal the make and model, while engine fragments will also reveal the
plate of the vehicle as a 'VIN match'.

![Vehicle fragments seen through the evidence camera](/img/fragment.png)

![Vehicle fragment evidence bag information](/img/fragmentevbag.png)

## Bullet Impacts

In addition to generating bullet casings, firing a weapon will also create a bullet impact which will reveal
the general type of weapon that fired it, and the angle of impact which roughly indicates the direction it 
was fired from. When a bullet strikes a ped or a player, it will not generate angle of impact evidence, but
show where the bullet struck them and indicate that there is a wound.

![Bullet impacts seen through the evidence camera](/img/impacts.png)

## Lock Tamperings

In addition to generating bullet casings, firing a weapon will also create a bullet impact which will reveal
the general type of weapon that fired it, and the angle of impact which roughly indicates the direction it 
was fired from. When a bullet strikes a ped or a player, it will not generate angle of impact evidence, but
show where the bullet struck them and indicate that there is a wound.

![Lock tamperings seen through the evidence camera](/img/locktamperings.png)

## Weapons

When ever your police come into possession of firearms or melee weapons either by recovering them from a
crime scene, seizing them from a suspect, or holding them as part of an investigation, they can now properly
bag them and log them into evidence just like any other piece of physical evidence in r14-evidence. By using
the built in /evidencebag and /evbag commands, police can bag the weapon retaining information like the serial
number and durability of a firearm while also gaining the ability to copy it directly in game and create notes
through the evidence bag menu!

![/bagevidence can be used to bag any weapon in your inventory](/img/bagev.png)

![Weapon evidence bag information](/img/weaponbag.png)
