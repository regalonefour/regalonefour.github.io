---
sidebar_position: 1

title: Changelog
description: Someone will read this, surely.

---

r14-evidence early access changelong

v1.41 (11/17/2022)
    - /bagevidence will now validate that a weapon has a serial and durability to prevent potential errors
    - when triggering SetCurrentWeapon, evidence will now send an empty table, and the script itself will check for an empty table instead of a boolean
    - camera channels can now have a job name or job type specified instead of a authorized job function
    - added weazel news camera channel for the base qb-core reporter job
    - added guide to creating custom camera channels to config

v1.4 (11/16/2022)
    - added data validation when creating the vehicle hash lookup table to prevent script breaking on startup if a hash is missing
    - casing evidence will be generated more realistically by simulating a real casing in game 
    - new casing simulation means casings will not generate through walls or fall into the void
    - added debug variable to view casing objects generated to observe shell casing generation/behavior
    - police can now use /bagev or /bagevidence to place weapons in their inventory into an evidence bag
    - when using evidence bags containing a weapon, you will be shown the serial, ammo loaded, and durability along with option to unbag it
    - unbagging a weapon will take 60 seconds and civilians will be prompted to confirm they are not exploiting
    - added server print and qb-logs trigger to record when civlians unbag evidence weapon bags
    - server will no longer send blank evidence packages to the client
    - update to authorized job functions to work serverside, /clearevidence should be available again
    - added device settings menu to camera, accessible by using E while using the camera
    - added ability to change upload channels from the device settings
    - added sd card item, cameras will come with an ejectable SD card by default
    - cameras will now store their photos on their currently inserted SD card, unless connected to an upload channel
    - using an SD card will allow you to name it, or insert it if you are using the camera
    - upload channels can be assigned a password from the config to prevent unauthorized users from uploading images
    - holding shift when using the camera item will open the device menu without pulling out the camera
    - using the camera item now while holding a weapon should properly disarm you and open the camera
    - exiting the camera should now no longer 'drop you' through some objects (like AC units)
    - added flash for the evidence camera, enable/disable with F
    - camera item will now block subsequent usage until the player has pulled out the camera, preventing accidentally pressing it twice cancelling use
    - camera position updated to more accurately represent the position of the camera lens rather than appearing above the player
    - players can access upload channels via the camera, and view all photos uploaded to them from the current reset

v1.32 (11/3/2022)
    - new documentation made available at regalonefour.github.io/
    - made slight change to the evidence pickup thread to prevent an error being thrown when leaving pickup range
    - readded missing GetPlayer() function to the serverside drug testing event, drug tests should now provide evidence bags
    - added server ID to drug test notification message, you will now see the ID of the player you drug tested
    - added ability for police to fingerprint players via qb-target
    - added fingerprint reader item added for qb-target option
    - drug test evidence bags will now include the DNA of the suspect tested, and can be copy/pasted from the evidence bag menu

v1.31 (10/31/2022)
    - fixed a native function that was causing massive performance degredation, updated native should restore normal resmon values (~1.4ms while using camera in evidence dense areas)
    - weird behavior of evidence pickups should be resolved, the loop now uses the global variable rather than recreating it with a shortened name
    - added police drug testing, set up out of the box for qb-smallresources, and oral drug test kit police can use to test a suspect for recent drug usage
    - added new drug test kit item
    - added config options for drug testing, you can disable it entirely, set the hours a drug will cause a positive test, and what drugs are tested for
    - added ability to specify contraband items for frisk, brief guide with real world case law explainer is included for adding items
    - added frisk notification for detecting contraband, will pop up as its own notification if found
    - dna and gsr evidence bags will now have tracking ID's for easier evidence management
    - breathalyzer now provides a printout when a suspect blows above a 0.0 with their result, tracking ID, date of test, and where it was conducted
    - when an outdated event triggers evidence:server:CreateCasing, the name of the event will be printed to server console


v1.3 (10/21/2022)
    - fixed routing bucket information not being forwarded correctly to area evidence, evidence should now be properly concealed while in other routing buckets
    - fixed bug caused by vehicle fragments attempting to access car evidence tables that don't exist
    - routing buckets will no longer be constantly gotten from server, server now keeps track an will push the new bucket when it detectes a change
    - updated argument in the config for the server notifications

v1.23 (10/8/2022)
    - removed deprecated inventory events from client/main.lua, replaced with server side functions (does not you to update qb-core, do not worry!)

v1.223 hotfix (9/22/2022)
    - removed owned flag from vehicle evidence, replaced functionality with existing LoadedCars table
    - added error detection logic to RemoveEvidence() function, should now generate a server side print instead of a error if evidence ID does not exist
    - fixes car evidence being loaded from owned vehicles, will now trigger proper server events, or add the proper information to evidence tables

v1.222 hotfix (9/18/2022)
    - removed left over evidence removal logic from server side
    - fixed civilian viewing of evidence casuing an F8 error when it cleared the AreaEvidence cache, now sets it to a blank table

v1.221 hotfix (9/17/2022)
    - evidence loading has been fixed, evidence events were being sent individually to addevidence instead of as a table
    - evidence fading no longer uses custom function, net impacts will now be removed properly by remove evidence
    - errant print statement remvoed

v1.22 update (9/4/2022)
    - general code clean up, evidence tables have now been merged along with the adding/removing events for all evidence types
    - distance checking is no longer preformed to pull evidence into the area cache for the flashlight/camera
    - all evidence is now organized into a grid system and only nearby grid squares pulled into AreaEvidence
    - eliminated always on evidence pickup thread, will now be activated only when there is a current evidence drop
    - improvement to evidence pickup, markers should now transition smoother, and be removed when leaving the pickup radius
    - removed deprecated qb-inventory additem and removeitem events, replaced with proper server-sided event
    - fixed previous note displaying on bag menu when editing bag notes
    - tweaks to the qb-menu options used by bag menus
    - add/remove evidence events will now be grouped together and sent once per second, this will reduce server to client and client to server traffic
    - added gsr wash off in water logic, optional via config, by default will take 90 seconds to wash off in light water, roughly 45 seconds while swimming
    - added evidence fading for all evidence types, casings, impacts, and blood will no longer persist through an entire reset by default

v1.21 update (8/22/2022)
    - fixed issue with server notifications being broken when type function was supplied instead of nil
    - fixed issue with frisk being caused by this code
    - optimization for server vehicle db thread, will no longer check if car is owned every loop
    - added fading for casings and blood

v1.2 hotfixes (8/15/2022)
    - job check function modified to now accept both job name and job type, should resolve issues 
    - added event for qb-vehiclekeys for access tool to function correctly, should now trigger correct events
    - fixed misnamed table in server lua
    - added variable to disable police alerts
    - fixed double if statement syntax error
    - fixed missing alerttimeout breaking police alerts
    - updated config to disable all debug variables
    
v1.2 (8/10/2022)

    - added ability for anyone to view evidence using specific and configurable animations, works with dp-emotes by default and record and camera will reveal evidence
    - inspecting a vehicle will allow police to discover evidence of forcibly entry
    - evidence sweep will now allow police to discover evidence of forcible entry or picking/hotwiring when set up correctly
    - notifications and chat messages now use a configurable function, most notification text has also been moved to config
    - new configurable job checking is included, the script will now work out of the box with multiple jobs and job types in newer qb-core versions
    - qb-target options will now use this new job check, no need to edit them for multiple jobs anymore
    - added slim jim for police to access vehicles easily and with a configurable number of uses (these are not job locked by default!)
    - modified evidence sweep function, will no longer be able to search locked vehicles
    - added alert triggers to key points of the script, by default these will be qb-policejob but can be modified to any script
    - code reorganization for the camera, should now overall feel a lot snappier and more responsive
    - camera now recieves time/date from server thread, no more callback should reduce resource usage
    - added ability for police and ems to inspect vehicle occupants for status effects via a qb-target 'Inspect Vehicle' option
    - left hand eject weapons now work properly, added Machine Gun to the left hand eject table
    - fixed edge case bug where firing a vehicle weapon or weapon you didn't have your inventory would break evidence pickups
    - fixed time and location not being properly applied to dna test evidence bags
    - fixed weird bug where you could fall through the map if using a camera too soon after getting in a vehicle
    - fix for multiple impacts being generated per shot on networked entities, added timeout to prevent this

v1.12 (8/7/2022)
    - rewrote time callbacks to now be a single server thread that is pushed to all clients
    - further optimizations, resource usage should now be around 0.01ms in resmon

v1.11 (8/1/2022)
    - transitioned all gsr, impact, and casing logic to now use threads
    - most users should see 70% reduction in idle resource usage when using resmon

v1.1
    - new evidence bag menu, you will now have the option to copy specific pieces of information from the evidence bag
    - players can now create and edit notes on evidence bags
    - vehicle fragment evidence has been added, when crashing a vehicle, bodywork and engine fragments will now be generated
    - bodywork fragments will reveal the color, and upon harsher impact, the make and model of the vehicle
    - engine fragments will reveal the make and model, and upon harsher impact, reveal the plate of the vehicle
    - fixed accidental reversions of existing fixes
    - general code cleanup

v1.07
    - ejection pattern modified to be more realistic, rounds will generally fall to the right and behind of a shooter
    - modified evidence loading to prevent oversized packets, script will now load parts of the evidence table over time
      when a person connects to the server
    - added config options for vehicle garage events, you can now customize the name of the event, and modify which arguments
      are used by the script
    - added in data validation for vehicle garage events, it should alert you if the script is attempting to use a table or non-plate
      formated string

v1.06
    - blood event moved to r14-evidence script, no edit is required to qb-ambulance job now
    - blood will now be dropped when player ped takes damage based on a configurable chance
    - serial number will no longer be 'guessed' when using weapons in inventory, event now sets the current serial number 
      when drawing a weapon from inventory and sends it to server side
    - refinement to fix for evidence pickups breaking when spamming pickup key, should be fully fixed now

v1.05
    - modified current evidence pickup thread to no longer break after leaving the area, current evidence is now stored in a dedicated
      variable and no longer referenced from the area evidence cache
    - fixed possible error breaking evidence pickup when evidence pickup is spammed
    - config option added for making evidence bags usable

v1.04 hotfix
    - modified thread that applies gsr status to rate limit attempts to set gsr, crashing using continious fire weapons should be resolved

v1.03 hotfix
    - fixed bug with evidence being drawn permanently after using flashlight, variable is now correctly set to false while not using flashlight

v1.02 hotfix
    - fixed broken fade evidence function, it will now access the correct tables and delete the evidence accordingly
    - netimpacts will now properly fade over time, restored missing time variable to netimpacts

v1.01 hotfix
    - readded workaround qb-target submenu for police actions

v1.0 - Release
    - fixed evidence fade accessing the wrong tables for the evidence type being removed
    - fixed evidence bags not copying to clipboard properly due to string format argument mismatch
    - modified BAC events to not require ABV
    - modified BAC events to accept a target argument
    - added blips back for car washes

-------------------------------------------------------------------------------------------------------------------------

r14-evidence beta changelong

v1.21 hotfix
    - fixed evidence loading for networked impacts
    - cleaned up evidence loading function
    - added networked impacts for flashlight
    - cleaned up code
    - removed marker being drawn for networked ped impacts

v1.2 update
    - impacts will now attach to networked entities that have not been destroyed or killed, this includes vehicles and peds (both locals and players)
    - networked entity impacts will retain bullet angle of impact evidence, ped impacts will display a list of impact types on the damaged ped bone
    - evidence bags are now usable, when used they will copy the tracking ID and relevant info to your clipboard
    - added check if ped is downed or dead to qb-target options, should no longer be displayed when in last stand or dead
    - added notifications for the target of frisks, gsr tests, breathalyzers, and dna swabs allowing them time to run away (did not add for investigate)
    - added config options for database events for those not using qb-target
    - added evidence fading over time for impacts and network impacts
    - moved multiple tables to config

v1.11 hotfix
    - fix for vehicle casings not loading properly, expiration for car casings is now calculated properly
    - added multiple debug variables for printing qb-target events
    - changed notification text if officer does not have a evidence bag when conducting a gsr test

v1.1 update
    - vehicle evidence will now be removed after a set number of days, adjustable in the config by evidence type    
    - fingerprint evidence will now fade over time
    - added Breathalyzer, BAC system integrated with QB-Core, and qb-target option to breathalyze a person
    - added qb-target options for GSR testing, DNA testing, and Investigate Person with new progress bars
    - added GSR test kit and DNA test kit items which are consumed based on adjustable config options
    - separated GSR into 'GSR status' detected by GSR test kit and 'gunpowder' status effect revealed by investigate person
    - added positive gsr evidence item, when a positive test comes back, an evidence bag will be generated if the officer has one
    - modified player statuses, gsr status, and blood alcohol content to be recorded based on CID and not source, meaning they will no longer transfer between characters when not fully disconnecting from the server
    - added check to apply gunpowder status effect when a weapon is fired near the player (not as accurate as GSR status, can be applied based on any weapon that is thrown like snowballs)
    - modified gsrs status to check for weapon damage type, a bit more resource intensive but more accurate and does not require updating the script for addon weapons
    - added frisk qb-target option that allows officers to check a person for weapons without searching them

v1.02 hotfix
    - fixed incorrect label causing evidence pickups to break (streetLabel was left in, changed to street)

v1.01 hotfix
    - removed preexisting webhooks from config
    - removed unnecessary information from config

v1.0 - Release
    - overhaul of qb-policejob/client/evidence.lua and qb-policejob/server/main.lua events
    - display of markers for all evidence in area when using flashlight
    - display of markers and evidence info in area when using camera
    - addition of vehicle casings, fingerprints, and blood that can be discovered by police
    - nikon camera for crime scene documentation and surveillence, also civilian photos
    - adds vehicle evidence
    - /r14debug command to allow changing of debug variables in runtime
