---
sidebar_position: 8

title: Installation Checklist ✅
description: Ensure you completed the installation process. 

---

So you think you're done, buddy? Guess Again. Checklist. Do it. Don't come to me until you checked off every one.

 # Please Complete All Of The Below Steps

    [ ] - Updated your inventory metadata display function

    [ ] - Updated your inventory with new item images

    [ ] - Update your filled_evidence_bag item to be ['usable'] = true

    [ ] - Updated qb-core/shared/weapons.lua to add ['caliber'] = 'EXAMPLE CALIBER', to all weapons

    [ ] - Updated qb-core/shared/items.lua to add nikon, gsrtestkit, dnatestkit, fingerprintingkit, and OPTIONAL breathalyzer and drug test kit items

    [ ] - Removed evidence.lua from qb-policejob

    [ ] - Removed server events from qb-policejob/server/main.lua specified in install (Step 6)

    [ ] - Removed clearblood, clearcasings, and takedna commands from qb-policejob/server/main.lua (Step 6)

    [ ] - Replaced qb-smallresources/client/carwash.lua

    [ ] - Update qb-vehiclekeys with the 'qb-vehiclekeys:client:UpdateLastPicked' network event

    [ ] - Ran SQL statement to add evidence column to your player vehicle table, updated config if table is not called `player_vehicles`    
