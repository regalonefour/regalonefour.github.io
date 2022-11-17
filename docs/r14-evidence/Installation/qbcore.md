---
sidebar_position: 3

title: Updating qb-core
description: Editing our qb-core/shared/items.lua and qb-core/shared/weapons.lua

---


# Modifying qb-core Shared Items
:::caution

Never make changes to **ANY** script without making a backup first, you never know what might happen!

:::

## Adding Our Items

To add the items included with r14-evidence, we must add them to our ```qb-core/shared/items.lua``` somewhere within the ```QBShared.Items``` table. You can add them anywhere in the table, but adding them after 
your other police items/tools is likely the best place for them! Make sure that you do not accidentally break any of the tables contained within your larger shared items table, or that you place it below the bottom
close bracket as this will break the file when it runs and cause errors across your server!

```lua title='Items to be Added to qb-core/shared/items.lua'
	['nikon'] 			 	 	     = {['name'] = 'nikon', 					    ['label'] = 'Nikoff G900', 				['weight'] = 1000, 		['type'] = 'item', 		['image'] = 'nikon.png', 				['unique'] = false, 	['useable'] = true, 	['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Caught in 4K'},
	["gsrtestkit"] 					 = {["name"] = "gsrtestkit", 			  		["label"] = "GSR Field Test Kit", 		["weight"] = 200, 		["type"] = "item", 		["image"] = "gsrtestkit.png", 			["unique"] = false,		["useable"] = true, 	["shouldClose"] = true,	   ["combinable"] = nil,   ["description"] = 'A field GSR test kit containing several test strips'},
	["dnatestkit"] 					 = {["name"] = "dnatestkit", 			  		["label"] = "DNA Field Swab Kit", 		["weight"] = 200, 		["type"] = "item", 		["image"] = "dnatestkit.png", 			["unique"] = false,		["useable"] = true, 	["shouldClose"] = true,	   ["combinable"] = nil,   ["description"] = 'A field DNA swab kit containing several vials and swabs'},
	["drugtestkit"] 				 = {["name"] = "drugtestkit", 			  		["label"] = "Drug Test Kit", 			["weight"] = 200, 		["type"] = "item", 		["image"] = "drugtestkit.png", 			["unique"] = false,		["useable"] = true, 	["shouldClose"] = true,	   ["combinable"] = nil,   ["description"] = 'A multipanel field test kit used to test for popular drugs in a suspects saliva, it\'s probably accurate.'},
	["breathalyzer"] 				 = {["name"] = "breathalyzer", 			  		["label"] = "Breathalyzer", 			["weight"] = 200, 		["type"] = "item", 		["image"] = "breathalyzer.png", 		["unique"] = false,		["useable"] = true, 	["shouldClose"] = true,	   ["combinable"] = nil,   ["description"] = 'A vintage 2000\'s WiWang breathalyzer engraved Property of LSPD'},
	['accesstool']					 = {['name'] = 'accesstool', 					['label'] = 'Access Tool',			 	['weight'] = 500, 		['type'] = 'item', 		['image'] = 'accesstool.png', 			['unique'] = true,		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Snap into an access tool.'},
	["fingerprintreader"] 			 = {["name"] = "fingerprintreader", 			["label"] = "Pro Tech XFR8001", 		["weight"] = 200, 		["type"] = "item", 		["image"] = "fingerprintreader.png", 	["unique"] = true,		["useable"] = true, 	["shouldClose"] = true,	   ["combinable"] = nil,   ["description"] = 'A Pro Tech mobile fingerprint reader that looks like it\'s seen better days, currently stuck in french.'},
```

## Making Evidence Bags Useable

In order for us to access the copy/paste functionality for evidence bags, we must either replace the ```'filled_evidence_bag'``` item with the following, or simply find the ```['useable']``` subfield and change it from
a value of ```false``` to a value of ```true```. 

```lua title='Modified Evidence Bag Item'
['filled_evidence_bag'] 		 = {['name'] = 'filled_evidence_bag', 			['label'] = 'Evidence Bag', 			['weight'] = 200, 		['type'] = 'item', 		['image'] = 'evidence.png', 			['unique'] = true, 		['useable'] = true, 	['shouldClose'] = false,   ['combinable'] = nil,   ['description'] = 'A filled evidence bag to see who committed the crime >:('},
```

## Updating Shared Weapons

In order for r14-evidence to accurately assign caliber information, r14-evidence requires that you modify your ```QBShared.Weapons``` table contained within your ```qb-core/shared/weapons.lua``` or 
your ```qb-core/shared.lua``` in older versions of qb-core. To do this, simply insert a ```['caliber'] = '.50 Example',``` field into a weapons information table that contains a string describing the
caliber of the weapon. While for most weapons this would be a type of cartridge, some weapons in your shared table may leave behind something that is not a casing but can still be used by a police
roleplayer to determine what was fired. For example, the caliber of ```weapon_stungun``` could be set to ```'Taser AFID'``` which are small confetti-like plastic markers deployed when a taser is deployed
and which bear the serial number of the non-lethal device. Any firearm-type weapon which you do not wish to leave a casing can be configured using the ```Config.NoCasingWeapon``` table, with weapons such 
as ```weapon_rpg``` already defined in the table.

```lua title='Default Shared Weapons Entry'
[`weapon_pistol`] 	 = {['name'] = 'weapon_pistol', 	['label'] = 'Pistol',	['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
```

```lua title='Modified Shared Weapons Entry'
[`weapon_pistol`] 	 = {['name'] = 'weapon_pistol', 	['label'] = 'Pistol', 	['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},	
```

## Preconfigured Shared Weapons Lua

Below, you can find the stock ```qb-core/shared/weapons.lua``` table with the caliber information already created and ready to add to your server. If you have custom weapons or custom information in your 
shared weapons table, feel free to use this table to figure out the name of the caliber for most base games weapon!

```lua title='Modified qb-core/shared/weapons.lua' showLineNumbers
QBShared = QBShared or {}
QBShared.Weapons = {
	-- // WEAPONS 
	-- Melee
	[`weapon_unarmed`] 				 = {['name'] = 'weapon_unarmed', 		['label'] = 'Fists', 					['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil, ['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_dagger`] 				 = {['name'] = 'weapon_dagger', 		['label'] = 'Dagger', 					['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Knifed / Stabbed / Eviscerated'},
	[`weapon_bat`] 					 = {['name'] = 'weapon_bat', 			['label'] = 'Bat', 						['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_bottle`] 				 = {['name'] = 'weapon_bottle', 		['label'] = 'Broken Bottle', 			['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Knifed / Stabbed / Eviscerated'},
	[`weapon_crowbar`] 				 = {['name'] = 'weapon_crowbar', 		['label'] = 'Crowbar', 					['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_flashlight`] 			 = {['name'] = 'weapon_flashlight', 	['label'] = 'Flashlight', 				['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_golfclub`] 			 = {['name'] = 'weapon_golfclub', 		['label'] = 'Golfclub', 				['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_hammer`] 				 = {['name'] = 'weapon_hammer', 		['label'] = 'Hammer', 					['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_hatchet`] 				 = {['name'] = 'weapon_hatchet', 		['label'] = 'Hatchet', 					['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Knifed / Stabbed / Eviscerated'},
	[`weapon_knuckle`] 				 = {['name'] = 'weapon_knuckle', 		['label'] = 'Knuckle', 					['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_knife`] 				 = {['name'] = 'weapon_knife', 			['label'] = 'Knife', 					['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Knifed / Stabbed / Eviscerated'},
	[`weapon_machete`] 				 = {['name'] = 'weapon_machete', 		['label'] = 'Machete', 					['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Knifed / Stabbed / Eviscerated'},
	[`weapon_switchblade`] 			 = {['name'] = 'weapon_switchblade', 	['label'] = 'Switchblade', 				['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Knifed / Stabbed / Eviscerated'},
	[`weapon_nightstick`] 			 = {['name'] = 'weapon_nightstick', 	['label'] = 'Nightstick', 				['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_wrench`] 				 = {['name'] = 'weapon_wrench', 		['label'] = 'Wrench', 					['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_battleaxe`] 			 = {['name'] = 'weapon_battleaxe', 		['label'] = 'Battle Axe', 				['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Knifed / Stabbed / Eviscerated'},
	[`weapon_poolcue`] 				 = {['name'] = 'weapon_poolcue', 		['label'] = 'Poolcue', 					['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_briefcase`] 			 = {['name'] = 'weapon_briefcase', 		['label'] = 'Briefcase', 				['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_briefcase_02`] 		 = {['name'] = 'weapon_briefcase_02', 	['label'] = 'Briefcase', 				['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_garbagebag`] 			 = {['name'] = 'weapon_garbagebag', 	['label'] = 'Garbage Bag', 				['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_handcuffs`] 			 = {['name'] = 'weapon_handcuffs', 		['label'] = 'Handcuffs', 				['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_bread`] 				 = {['name'] = 'weapon_bread', 			['label'] = 'Baquette', 				['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Melee killed / Whacked / Executed / Beat down / Murdered / Battered'},
	[`weapon_stone_hatchet`] 		 = {['name'] = 'weapon_stone_hatchet', 	['label'] = 'Stone Hatchet',			['caliber'] = nil,		['weapontype'] = 'Melee',	['ammotype'] = nil,	['damagereason'] = 'Knifed / Stabbed / Eviscerated'},

    -- Handguns
	[`weapon_pistol`] 				 = {['name'] = 'weapon_pistol', 		['label'] = 'Pistol', 					['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_pistol_mk2`] 			 = {['name'] = 'weapon_pistol_mk2', 	['label'] = 'Pistol Mk2', 				['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_combatpistol`] 		 = {['name'] = 'weapon_combatpistol', 	['label'] = 'Combat Pistol', 			['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_appistol`] 			 = {['name'] = 'weapon_appistol', 		['label'] = 'AP Pistol', 				['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_stungun`] 				 = {['name'] = 'weapon_stungun', 		['label'] = 'Taser', 					['caliber'] = 'TASER AFID',				['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_STUNGUN',	['damagereason'] = 'Died'},
	[`weapon_pistol50`] 			 = {['name'] = 'weapon_pistol50', 		['label'] = 'Pistol .50 Cal', 			['caliber'] = '.50 Action Express',		['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_snspistol`] 			 = {['name'] = 'weapon_snspistol', 		['label'] = 'SNS Pistol', 				['caliber'] = '.40 S&W',				['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_snspistol_mk2`] 	     = {['name'] = 'weapon_snspistol_mk2', 	['label'] = 'SNS Pistol MK2', 			['caliber'] = '.40 S&W',				['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',   ['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_heavypistol`] 			 = {['name'] = 'weapon_heavypistol', 	['label'] = 'Heavy Pistol', 			['caliber'] = '.45 ACP',				['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_vintagepistol`] 		 = {['name'] = 'weapon_vintagepistol', 	['label'] = 'Vintage Pistol', 			['caliber'] = '.32 ACP',				['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_flaregun`] 			 = {['name'] = 'weapon_flaregun', 		['label'] = 'Flare Gun', 				['caliber'] = '25mm Flare',				['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_FLARE',	['damagereason'] = 'Died'},
	[`weapon_marksmanpistol`] 		 = {['name'] = 'weapon_marksmanpistol', ['label'] = 'Marksman Pistol', 			['caliber'] = '.45-70 Government',		['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_revolver`] 			 = {['name'] = 'weapon_revolver', 		['label'] = 'Revolver', 				['caliber'] = '.357 Magnum',			['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_revolver_mk2`] 		 = {['name'] = 'weapon_revolver_mk2', 	['label'] = 'Revolver MK2', 			['caliber'] = '.44 Magnum',				['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_doubleaction`] 	     = {['name'] = 'weapon_doubleaction', 	['label'] = 'Double Action Revolver',	['caliber'] = '.38 Long Colt',			['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_raypistol`]			 = {['name'] = 'weapon_raypistol',		['label'] = 'Ray Pistol',				['caliber'] = nil,						['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_ceramicpistol`]		 = {['name'] = 'weapon_ceramicpistol', 	['label'] = 'Ceramic Pistol',			['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_navyrevolver`]        	 = {['name'] = 'weapon_navyrevolver', 	['label'] = 'Navy Revolver',			['caliber'] = '.38 Centerfire',			['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_gadgetpistol`] 		 = {['name'] = 'weapon_gadgetpistol', 	['label'] = 'Gadget Pistol',			['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Pistoled / Blasted / Plugged / Bust a cap in'},
	[`weapon_stungun_mp`] 			 = {['name'] = 'weapon_stungun_mp', 	['label'] = 'Taser', 					['caliber'] = 'Taser AFID',				['weapontype'] = 'Pistol',	['ammotype'] = 'AMMO_STUNGUN',	['damagereason'] = 'Died'},

    -- Submachine Guns
	[`weapon_microsmg`] 			 = {['name'] = 'weapon_microsmg', 		['label'] = 'Micro SMG', 				['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Submachine Gun',	['ammotype'] = 'AMMO_SMG',		['damagereason'] = 'Riddled / Drilled / Finished / Submachine Gunned'},
	[`weapon_smg`] 				 	 = {['name'] = 'weapon_smg', 			['label'] = 'SMG', 						['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Submachine Gun',	['ammotype'] = 'AMMO_SMG',		['damagereason'] = 'Riddled / Drilled / Finished / Submachine Gunned'},
	[`weapon_smg_mk2`] 				 = {['name'] = 'weapon_smg_mk2', 		['label'] = 'SMG MK2', 					['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Submachine Gun',	['ammotype'] = 'AMMO_SMG',		['damagereason'] = 'Riddled / Drilled / Finished / Submachine Gunned'},
	[`weapon_assaultsmg`] 			 = {['name'] = 'weapon_assaultsmg', 	['label'] = 'Assault SMG', 				['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Submachine Gun',	['ammotype'] = 'AMMO_SMG',		['damagereason'] = 'Riddled / Drilled / Finished / Submachine Gunned'},
	[`weapon_combatpdw`] 			 = {['name'] = 'weapon_combatpdw', 		['label'] = 'Combat PDW', 				['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Submachine Gun',	['ammotype'] = 'AMMO_SMG',		['damagereason'] = 'Riddled / Drilled / Finished / Submachine Gunned'},
	[`weapon_machinepistol`] 		 = {['name'] = 'weapon_machinepistol', 	['label'] = 'Tec-9', 					['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Submachine Gun',	['ammotype'] = 'AMMO_PISTOL',	['damagereason'] = 'Riddled / Drilled / Finished / Submachine Gunned'},
	[`weapon_minismg`] 				 = {['name'] = 'weapon_minismg', 		['label'] = 'Mini SMG', 				['caliber'] = '9x19mm Parabellum',		['weapontype'] = 'Submachine Gun',	['ammotype'] = 'AMMO_SMG',		['damagereason'] = 'Riddled / Drilled / Finished / Submachine Gunned'},
	[`weapon_raycarbine`]	         = {['name'] = 'weapon_raycarbine', 	['label'] = 'Raycarbine',				['caliber'] = 'Laser Dust????',			['weapontype'] = 'Submachine Gun',	['ammotype'] = 'AMMO_SMG',		['damagereason'] = 'Riddled / Drilled / Finished / Submachine Gunned'},

    -- Shotguns
	[`weapon_pumpshotgun`] 			 = {['name'] = 'weapon_pumpshotgun', 	 	['label'] = 'Pump Shotgun', 		['caliber'] = '12 Gauge',			['weapontype'] = 'Shotgun',	['ammotype'] = 'AMMO_SHOTGUN',	['damagereason'] = 'Devastated / Pulverized / Shotgunned'},
	[`weapon_pumpshotgun_mk2`]		 = {['name'] = 'weapon_pumpshotgun_mk2',	['label'] = 'Pump Shotgun MK2', 	['caliber'] = '12 Gauge',			['weapontype'] = 'Shotgun',	['ammotype'] = 'AMMO_SHOTGUN',	['damagereason'] = 'Devastated / Pulverized / Shotgunned'},
	[`weapon_sawnoffshotgun`] 		 = {['name'] = 'weapon_sawnoffshotgun', 	['label'] = 'Sawn-off Shotgun', 	['caliber'] = '12 Gauge',			['weapontype'] = 'Shotgun',	['ammotype'] = 'AMMO_SHOTGUN',	['damagereason'] = 'Devastated / Pulverized / Shotgunned'},
	[`weapon_assaultshotgun`] 		 = {['name'] = 'weapon_assaultshotgun', 	['label'] = 'Assault Shotgun', 		['caliber'] = '12 Gauge',			['weapontype'] = 'Shotgun',	['ammotype'] = 'AMMO_SHOTGUN',	['damagereason'] = 'Devastated / Pulverized / Shotgunned'},
	[`weapon_bullpupshotgun`] 		 = {['name'] = 'weapon_bullpupshotgun', 	['label'] = 'Bullpup Shotgun', 		['caliber'] = '12 Gauge',			['weapontype'] = 'Shotgun',	['ammotype'] = 'AMMO_SHOTGUN',	['damagereason'] = 'Devastated / Pulverized / Shotgunned'},
	[`weapon_musket`] 			     = {['name'] = 'weapon_musket', 			['label'] = 'Musket', 				['caliber'] = 'A Percussion Cap?',	['weapontype'] = 'Shotgun',	['ammotype'] = 'AMMO_SHOTGUN',	['damagereason'] = 'Devastated / Pulverized / Shotgunned'},
	[`weapon_heavyshotgun`] 		 = {['name'] = 'weapon_heavyshotgun', 	 	['label'] = 'Heavy Shotgun', 		['caliber'] = '12 Gauge',			['weapontype'] = 'Shotgun',	['ammotype'] = 'AMMO_SHOTGUN',	['damagereason'] = 'Devastated / Pulverized / Shotgunned'},
	[`weapon_dbshotgun`] 			 = {['name'] = 'weapon_dbshotgun', 		 	['label'] = 'Double-barrel Shotgun',['caliber'] = '12 Gauge',			['weapontype'] = 'Shotgun',	['ammotype'] = 'AMMO_SHOTGUN',	['damagereason'] = 'Devastated / Pulverized / Shotgunned'},
	[`weapon_autoshotgun`] 			 = {['name'] = 'weapon_autoshotgun', 	 	['label'] = 'Auto Shotgun', 		['caliber'] = '12 Gauge',			['weapontype'] = 'Shotgun',	['ammotype'] = 'AMMO_SHOTGUN',	['damagereason'] = 'Devastated / Pulverized / Shotgunned'},
	[`weapon_combatshotgun`]		 = {['name'] = 'weapon_combatshotgun', 		['label'] = 'Combat Shotgun',		['caliber'] = '12 Gauge',			['weapontype'] = 'Shotgun',	['ammotype'] = 'AMMO_SHOTGUN',	['damagereason'] = 'Devastated / Pulverized / Shotgunned'},

    -- Assault Rifles
	[`weapon_assaultrifle`] 		 = {['name'] = 'weapon_assaultrifle', 	 	['label'] = 'Assault Rifle', 		['caliber'] = '7.62x39mm Soviet',	['weapontype'] = 'Assault Rifle',	['ammotype'] = 'AMMO_RIFLE',	['damagereason'] = 'Ended / Rifled / Shot down / Floored'},
	[`weapon_assaultrifle_mk2`] 	 = {['name'] = 'weapon_assaultrifle_mk2', 	['label'] = 'Assault Rifle MK2', 	['caliber'] = '7.62x39mm Soviet',	['weapontype'] = 'Assault Rifle',	['ammotype'] = 'AMMO_RIFLE',	['damagereason'] = 'Ended / Rifled / Shot down / Floored'},
	[`weapon_carbinerifle`] 		 = {['name'] = 'weapon_carbinerifle', 	 	['label'] = 'Carbine Rifle', 		['caliber'] = '5.56x45mm NATO',		['weapontype'] = 'Assault Rifle',	['ammotype'] = 'AMMO_RIFLE',	['damagereason'] = 'Ended / Rifled / Shot down / Floored'},
    [`weapon_carbinerifle_mk2`] 	 = {['name'] = 'weapon_carbinerifle_mk2', 	['label'] = 'Carbine Rifle MK2', 	['caliber'] = '5.56x45mm NATO',		['weapontype'] = 'Assault Rifle',	['ammotype'] = 'AMMO_RIFLE',	['damagereason'] = 'Ended / Rifled / Shot down / Floored'},
	[`weapon_advancedrifle`] 		 = {['name'] = 'weapon_advancedrifle', 	 	['label'] = 'Advanced Rifle', 		['caliber'] = '5.56x45mm NATO',		['weapontype'] = 'Assault Rifle',	['ammotype'] = 'AMMO_RIFLE',	['damagereason'] = 'Ended / Rifled / Shot down / Floored'},
	[`weapon_specialcarbine`] 		 = {['name'] = 'weapon_specialcarbine', 	['label'] = 'Special Carbine', 		['caliber'] = '5.56x45mm NATO',		['weapontype'] = 'Assault Rifle',	['ammotype'] = 'AMMO_RIFLE',	['damagereason'] = 'Ended / Rifled / Shot down / Floored'},
	[`weapon_specialcarbine_mk2`]	 = {['name'] = 'weapon_specialcarbine_mk2',	['label'] = 'Specialcarbine MK2',	['caliber'] = '5.56x45mm NATO',     ['weapontype'] = 'Assault Rifle',	['ammotype'] = 'AMMO_RIFLE',	['damagereason'] = 'Ended / Rifled / Shot down / Floored'},
	[`weapon_bullpuprifle`] 		 = {['name'] = 'weapon_bullpuprifle', 	 	['label'] = 'Bullpup Rifle', 		['caliber'] = '5.8×42mm DBP87',		['weapontype'] = 'Assault Rifle',	['ammotype'] = 'AMMO_RIFLE',	['damagereason'] = 'Ended / Rifled / Shot down / Floored'},
	[`weapon_bullpuprifle_mk2`]		 = {['name'] = 'weapon_bullpuprifle_mk2', 	['label'] = 'Bull Puprifle MK2',	['caliber'] = '5.8×42mm DBP87',		['weapontype'] = 'Assault Rifle',	['ammotype'] = 'AMMO_RIFLE',	['damagereason'] = 'Ended / Rifled / Shot down / Floored'},
	[`weapon_compactrifle`] 		 = {['name'] = 'weapon_compactrifle', 	 	['label'] = 'Compact Rifle', 		['caliber'] = '7.62x39mm Soviet',	['weapontype'] = 'Assault Rifle',	['ammotype'] = 'AMMO_RIFLE',	['damagereason'] = 'Ended / Rifled / Shot down / Floored'},
	[`weapon_militaryrifle`]		 = {['name'] = 'weapon_militaryrifle', 		['label'] = 'Military Rifle',   	['caliber'] = '5.56x45mm NATO',		['weapontype'] = 'Assault Rifle',	['ammotype'] = 'AMMO_RIFLE',	['damagereason'] = 'Ended / Rifled / Shot down / Floored'},
    [`weapon_heavyrifle`] 			 = {['name'] = 'weapon_heavyrifle', 	 	['label'] = 'Heavy Rifle', 			['caliber'] = '5.56x45mm NATO',		['weapontype'] = 'Assault Rifle',	['ammotype'] = 'AMMO_RIFLE',	['damagereason'] = 'Ended / Rifled / Shot down / Floored'},

    -- Light Machine Guns
	[`weapon_mg`] 					 = {['name'] = 'weapon_mg', 			['label'] = 'Machinegun', 			['caliber'] = '7.62x51mm NATO', 	['weapontype'] = 'Light Machine Gun',	['ammotype'] = 'AMMO_MG',	['damagereason'] = 'Machine gunned / Sprayed / Ruined'},
	[`weapon_combatmg`] 			 = {['name'] = 'weapon_combatmg', 		['label'] = 'Combat MG', 			['caliber'] = '7.62x51mm NATO', 	['weapontype'] = 'Light Machine Gun',	['ammotype'] = 'AMMO_MG',	['damagereason'] = 'Machine gunned / Sprayed / Ruined'},
	[`weapon_combatmg_mk2`]	 		 = {['name'] = 'weapon_combatmg_mk2', 	['label'] = 'Combat MG MK2',	    ['caliber'] = '.45 ACP',			['weapontype'] = 'Light Machine Gun',	['ammotype'] = 'AMMO_MG',	['damagereason'] = 'Machine gunned / Sprayed / Ruined'},
	[`weapon_gusenberg`] 			 = {['name'] = 'weapon_gusenberg', 		['label'] = 'Thompson SMG', 		['caliber'] = '7.62x51mm NATO', 	['weapontype'] = 'Light Machine Gun',	['ammotype'] = 'AMMO_MG',	['damagereason'] = 'Machine gunned / Sprayed / Ruined'},

    -- Sniper Rifles
	[`weapon_sniperrifle`] 			 = {['name'] = 'weapon_sniperrifle', 	 	['label'] = 'Sniper Rifle', 			['caliber'] = '.310 Win Mag',	['weapontype'] = 'Sniper Rifle',	['ammotype'] = 'AMMO_SNIPER',			['damagereason'] = 'Sniped / Picked off / Scoped'},
	[`weapon_heavysniper`] 			 = {['name'] = 'weapon_heavysniper', 	 	['label'] = 'Heavy Sniper', 			['caliber'] = '.50 BMG', 		['weapontype'] = 'Sniper Rifle',	['ammotype'] = 'AMMO_SNIPER',			['damagereason'] = 'Sniped / Picked off / Scoped'},
	[`weapon_heavysniper_mk2`]		 = {['name'] = 'weapon_heavysniper_mk2', 	['label'] = 'Heavysniper MK2',	        ['caliber'] = '.50 BMG',		['weapontype'] = 'Sniper Rifle',	['ammotype'] = 'AMMO_SNIPER',			['damagereason'] = 'Sniped / Picked off / Scoped'},
	[`weapon_marksmanrifle`] 		 = {['name'] = 'weapon_marksmanrifle', 	 	['label'] = 'Marksman Rifle', 			['caliber'] = '7.76x51mm NATO', ['weapontype'] = 'Sniper Rifle',	['ammotype'] = 'AMMO_SNIPER',			['damagereason'] = 'Sniped / Picked off / Scoped'},
	[`weapon_marksmanrifle_mk2`]	 = {['name'] = 'weapon_marksmanrifle_mk2',	['label'] = 'Marksman Rifle MK2',	    ['caliber'] = '7.76x51mm NATO',	['weapontype'] = 'Sniper Rifle',	['ammotype'] = 'AMMO_SNIPER',			['damagereason'] = 'Sniped / Picked off / Scoped'},
	[`weapon_remotesniper`] 		 = {['name'] = 'weapon_remotesniper', 	 	['label'] = 'Remote Sniper', 			['caliber'] = '.50 BMG',		['weapontype'] = 'Sniper Rifle',	['ammotype'] = 'AMMO_SNIPER_REMOTE',	['damagereason'] = 'Sniped / Picked off / Scoped'},

    -- Heavy Weapons
	[`weapon_rpg`] 					 = {['name'] = 'weapon_rpg', 			      	['label'] = 'RPG', 						['caliber'] = nil,					['weapontype'] = 'Heavy Weapons',	['ammotype'] = 'AMMO_RPG',				['damagereason'] = 'Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated'},
	[`weapon_grenadelauncher`] 		 = {['name'] = 'weapon_grenadelauncher', 	  	['label'] = 'Grenade Launcher', 		['caliber'] = '40mm Grenade',		['weapontype'] = 'Heavy Weapons',	['ammotype'] = 'AMMO_GRENADELAUNCHER',	['damagereason'] = 'Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated'},
	[`weapon_grenadelauncher_smoke`] = {['name'] = 'weapon_grenadelauncher_smoke',	['label'] = 'Smoke Grenade Launcher',	['caliber'] = '40mm Grenade',		['weapontype'] = 'Heavy Weapons',	['ammotype'] = 'AMMO_GRENADELAUNCHER',	['damagereason'] = 'Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated'},
	[`weapon_minigun`] 				 = {['name'] = 'weapon_minigun', 		      	['label'] = 'Minigun', 					['caliber'] = '5.56x45mm NATO',		['weapontype'] = 'Heavy Weapons',	['ammotype'] = 'AMMO_MINIGUN',			['damagereason'] = 'Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated'},
	[`weapon_firework`] 			 = {['name'] = 'weapon_firework', 		 	  	['label'] = 'Firework Launcher', 		['caliber'] = 'Firework Packaging',	['weapontype'] = 'Heavy Weapons',	['ammotype'] = nil,						['damagereason'] = 'Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated'},
	[`weapon_railgun`] 				 = {['name'] = 'weapon_railgun', 		 	  	['label'] = 'Railgun', 					['caliber'] = nil,					['weapontype'] = 'Heavy Weapons',	['ammotype'] = nil,						['damagereason'] = 'Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated'},
	[`weapon_hominglauncher`] 		 = {['name'] = 'weapon_hominglauncher', 	 	['label'] = 'Homing Launcher', 			['caliber'] = nil,					['weapontype'] = 'Heavy Weapons',	['ammotype'] = 'AMMO_STINGER',			['damagereason'] = 'Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated'},
	[`weapon_compactlauncher`] 		 = {['name'] = 'weapon_compactlauncher',  	  	['label'] = 'Compact Launcher', 		['caliber'] = '40mm Grenade',		['weapontype'] = 'Heavy Weapons',	['ammotype'] = nil,						['damagereason'] = 'Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated'},
	[`weapon_rayminigun`]			 = {['name'] = 'weapon_rayminigun', 		 	['label'] = 'Ray Minigun',		        ['caliber'] = 'Laser Dust???',		['weapontype'] = 'Heavy Weapons',	['ammotype'] = 'AMMO_MINIGUN',			['damagereason'] = 'Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated'},
    [`weapon_emplauncher`] 			 = {['name'] = 'weapon_emplauncher', 			['label'] = 'EMP Launcher', 			['caliber'] = '40mm Grenade',		['weapontype'] = 'Heavy Weapons',	['ammotype'] = 'AMMO_EMPLAUNCHER',		['damagereason'] = 'Died'},

    -- Throwables
	[`weapon_grenade`] 		        = {['name'] = 'weapon_grenade', 		['label'] = 'Grenade', 			['caliber'] = 'Grenade Pin',	['weapontype'] = 'Throwable',	['ammotype'] = nil,				['damagereason'] = 'Bombed / Exploded / Detonated / Blew up'},
	[`weapon_bzgas`] 		        = {['name'] = 'weapon_bzgas', 			['label'] = 'BZ Gas', 			['caliber'] = 'Grenade Pin',	['weapontype'] = 'Throwable',	['ammotype'] = nil,				['damagereason'] = 'Died'},
	[`weapon_molotov`] 		        = {['name'] = 'weapon_molotov', 		['label'] = 'Molotov', 			['caliber'] = nil,				['weapontype'] = 'Throwable',	['ammotype'] = nil,				['damagereason'] = 'Torched / Flambeed / Barbecued'},
	[`weapon_stickybomb`] 	        = {['name'] = 'weapon_stickybomb', 	    ['label'] = 'C4', 				['caliber'] = nil,				['weapontype'] = 'Throwable',	['ammotype'] = nil,				['damagereason'] = 'Bombed / Exploded / Detonated / Blew up'},
	[`weapon_proxmine`] 	        = {['name'] = 'weapon_proxmine', 		['label'] = 'Proxmine Grenade', ['caliber'] = nil,				['weapontype'] = 'Throwable',	['ammotype'] = nil,				['damagereason'] = 'Bombed / Exploded / Detonated / Blew up'},
	[`weapon_snowball`] 	        = {['name'] = 'weapon_snowball', 		['label'] = 'Snowball', 		['caliber'] = nil,				['weapontype'] = 'Throwable',	['ammotype'] = nil,				['damagereason'] = 'Died'},
	[`weapon_pipebomb`] 	        = {['name'] = 'weapon_pipebomb', 		['label'] = 'Pipe Bomb', 		['caliber'] = nil,				['weapontype'] = 'Throwable',	['ammotype'] = nil,				['damagereason'] = 'Bombed / Exploded / Detonated / Blew up'},
	[`weapon_ball`] 		        = {['name'] = 'weapon_ball', 			['label'] = 'Ball', 			['caliber'] = nil,				['weapontype'] = 'Throwable',	['ammotype'] = 'AMMO_BALL',		['damagereason'] = 'Died'},
	[`weapon_smokegrenade`]         = {['name'] = 'weapon_smokegrenade', 	['label'] = 'Smoke Grenade', 	['caliber'] = 'Grenade Pin',	['weapontype'] = 'Throwable',	['ammotype'] = nil,				['damagereason'] = 'Died'},
	[`weapon_flare`] 		        = {['name'] = 'weapon_flare', 			['label'] = 'Flare pistol', 	['caliber'] = 'Flare Cap',		['weapontype'] = 'Throwable',	['ammotype'] = 'AMMO_FLARE',	['damagereason'] = 'Died'},

    -- Miscellaneous
	[`weapon_petrolcan`] 			= {['name'] = 'weapon_petrolcan', 		 	['label'] = 'Petrol Can', 				['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = 'AMMO_PETROLCAN',		['damagereason'] = 'Died'},
	[`gadget_parachute`] 			= {['name'] = 'gadget_parachute', 		 	['label'] = 'Parachute', 				['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Died'},
	[`weapon_fireextinguisher`] 	= {['name'] = 'weapon_fireextinguisher',	['label'] = 'Fire Extinguisher',		['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Died'},
	[`weapon_hazardcan`]			= {['name'] = 'weapon_hazardcan',			['label'] = 'Hazardcan',			    ['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = 'AMMO_PETROLCAN',		['damagereason'] = 'Died'},
    [`weapon_fertilizercan`]		= {['name'] = 'weapon_fertilizercan',		['label'] = 'Fertilizer Can',			['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = 'AMMO_FERTILIZERCAN',	['damagereason'] = 'Died'},
	[`weapon_barbed_wire`]			= {['name'] = 'weapon_barbed_wire',			['label'] = 'Barbed Wire',				['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Prodded'},
	[`weapon_drowning`]				= {['name'] = 'weapon_drowning',			['label'] = 'Drowning',					['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Died'},
	[`weapon_drowning_in_vehicle`]	= {['name'] = 'weapon_drowning_in_vehicle',	['label'] = 'Drowning in a Vehicle',	['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Died'},
	[`weapon_bleeding`]				= {['name'] = 'weapon_bleeding',			['label'] = 'Bleeding',					['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Bled out'},
	[`weapon_electric_fence`]		= {['name'] = 'weapon_electric_fence',		['label'] = 'Electric Fence',			['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Fried'},
	[`weapon_explosion`]			= {['name'] = 'weapon_explosion',			['label'] = 'Explosion',				['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Killed / Exploded / Obliterated / Destroyed / Erased / Annihilated'},
	[`weapon_fall`]					= {['name'] = 'weapon_fall',				['label'] = 'Fall',						['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Committed suicide'},
	[`weapon_exhaustion`]			= {['name'] = 'weapon_exhaustion',			['label'] = 'Exhaustion',				['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Died'},
	[`weapon_hit_by_water_cannon`]	= {['name'] = 'weapon_hit_by_water_cannon',	['label'] = 'Water Cannon',				['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Died'},
	[`weapon_rammed_by_car`]		= {['name'] = 'weapon_rammed_by_car',		['label'] = 'Rammed - Vehicle',			['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Flattened / Ran over / Ran down'},
	[`weapon_run_over_by_car`]		= {['name'] = 'weapon_run_over_by_car',		['label'] = 'Run Over - Vehicle',		['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Flattened / Ran over / Ran down'},
	[`weapon_heli_crash`]			= {['name'] = 'weapon_heli_crash',			['label'] = 'Heli Crash',				['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Helicopter Crash'},
	[`weapon_fire`]					= {['name'] = 'weapon_fire',				['label'] = 'Fire',						['caliber'] = nil,		['weapontype'] = 'Miscellaneous',	['ammotype'] = nil,						['damagereason'] = 'Torched / Flambeed / Barbecued'},

	-- Animals
    [`weapon_animal`]               = {['name'] = 'weapon_animal',	['label'] = 'Animal',	['weapontype'] = 'Animals',	['ammotype'] = nil,	['damagereason'] = 'Mauled'},
    [`weapon_cougar`]               = {['name'] = 'weapon_cougar',	['label'] = 'Cougar',	['weapontype'] = 'Animals',	['ammotype'] = nil,	['damagereason'] = 'Mauled'},
}
```