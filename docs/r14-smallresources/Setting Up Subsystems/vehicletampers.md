---
sidebar_position: 3

title: Vehicle Tampers/Fingerprints
description: qb-garages by default

---
# Setting up Vehicle Tampers/Fingerprints

# Out of the Box

Because r14-evidence adds the functionality for police to check a vehicle for signs of tampering and search them for
fingerprints, we must add the proper event triggers to our vehicle keys script. An edit of qb-vehiclekeys (current as of 10/30/22) 
is available from the discord for those who use the default resource, but if you use modified version or a third-party
script you can use the following guide to enable vehicle tampering and vehicle fingerprint evidence on your server.

# How to Create A Vehicle Tamper

To create a vehicle tampering, you only need to trigger a server event with a boolean argument in the first position
and the (properly trimmed) string of the vehicle's plate. There are two types of vehicle tamperings you can trigger
in r14-evidence, an exterior lock tamper which indicates the vehicle was forcibly entered, and an ignition tamper which
indicates the vehicle was forcibly started. Before we look at how to edit our resource, lets look at how we trigger these
events:

```lua title='r14-evidence Exterior Tamper Event'
TriggerServerEvent('evidence:server:SetExteriorTamper', boolean, plate) -- from client-side

TriggerEvent('evidence:server:SetExteriorTamper', boolean, plate) -- from server-side
```

```lua title='r14-evidence Ignition Tamper Event' 
TriggerServerEvent('evidence:server:SetIgnitionTamper', boolean, plate) -- from client-side

TriggerEvent('evidence:server:SetIgnitionTamper', boolean, plate) -- from server-side
```

To create an exterior tamper, we need to trigger the ```'evidence:server:SetExteriorTamper'``` with a value of ```true```
and the plate of the vehicle in question. To ensure that we are properly matching the plate to the ones we search using
the Inspect Vehicle or Evidence Sweep job functions, we should use the built-in ```QBCore.Functions.GetPlate()``` function to find
the plate text of the vehicle instead of the ```GetPlate()``` native due to its automatic trimming function which formats
plates less than 8 characters.

# How to Create A Vehicle Fingerprint

To create a vehicle fingerprint, you must trigger the following server networked event with the plate of the vehicle you
want to create a fingerprint in, and a string that describes the location of the fingerprint on or in the vehicle. It is
important not to trigger this from the server side as the script will not be able to use the event source to find a Citizen ID. 

```lua title='r14-evidence Vehicle Fingerprint Event'
TriggerServerEvent('evidence:server:CreateCarFingerprint', plate, location)
```

As with our tampering events, it is important that we either use qb-core's built-in ```QBCore.Functions.GetPlate()``` function or
if we must use the ```GetPlate()``` native that we use a plate trimming function to properly add whitespace to plate strings of
less than eight charactgers. 

:::caution

Never make changes to **ANY** script without making a backup first, you never know what might happen!

:::

# Integrating A Third Party Script

In order to modify an older version of qb-vehiclekeys, or to add functionality to a third-party script, we must look
at the code and determine the point at which the player attempts to forcibly enter or start the vehicle and add an event
trigger there. To give a generalized guide of how to do this, we will look at qb-vehiclekeys and look for the best place to
add these event triggers.

Because we want to only create a tamper when the player has attempted to enter the vehicle, we will want to look for the code
that allows a player to break into a vehicle. By default in qb-vehiclekeys, a player can usually only do this by using a lockpick
to attempt to break into a locked vehicle. We can find our starting point by simply searching the client/main.lua and server/main.lua
for the term lockpick. 

```lua title='qb-vehiclekeys Client-side Networked Event Handler'
RegisterNetEvent('lockpicks:UseLockpick', function(isAdvanced)
    LockpickDoor(isAdvanced)
end)
```

The first result for the term lockpick leads us to this event handler, but if we want to be sure of what triggers this event, we
can perform a search of our server files.


```lua title='qb-smallresources Server-side Useable Item Function'
QBCore.Functions.CreateUseableItem("lockpick", function(source, item)
    local Player = QBCore.Functions.GetPlayer(source)
    TriggerClientEvent("lockpicks:UseLockpick", source, false)
end)
```

If you use qb-smallresources, your serach should show you that the ```QBCore.Functions.CreateUseableItem()``` for the lockpick item
triggers this event whenever a player uses the lockpick item. With this information, we can now follow the code and inspect the
function found in the event handler.


```lua title='qb-vehiclekeys Client-side Lockpickdoor Function'
function LockpickDoor(isAdvanced)
    local ped = PlayerPedId()
    local pos = GetEntityCoords(ped)
    local vehicle = QBCore.Functions.GetClosestVehicle()

    if vehicle == nil or vehicle == 0 then return end
    if HasKeys(QBCore.Functions.GetPlate(vehicle)) then return end
    if #(pos - GetEntityCoords(vehicle)) > 2.5 then return end
    if GetVehicleDoorLockStatus(vehicle) <= 0 then return end

    usingAdvanced = isAdvanced
    Config.LockPickDoorEvent()
end
```
When we look at the ```LockpickDoor()``` function, we find the code which checks if we are near a vehicle, if we
have the keys for it, and if the vehicle is locked before executing the function contained in the config that triggers the
lockpicking minigame. We can then find the callback which is executed by qb-lockpick below this in the following function:

```lua title='qb-vehiclekeys Client-side Lockpick Callback Function' showLineNumbers
function LockpickFinishCallback(success)
    local vehicle = QBCore.Functions.GetClosestVehicle()

    local chance = math.random()
    // highlight-start
    if success then
        TriggerServerEvent('hud:server:GainStress', math.random(1, 4))
        lastPickedVehicle = vehicle

        if GetPedInVehicleSeat(vehicle, -1) == PlayerPedId() then
            TriggerServerEvent('qb-vehiclekeys:server:AcquireVehicleKeys', QBCore.Functions.GetPlate(vehicle))
        else
            QBCore.Functions.Notify(Lang:t("notify.vlockpick"), 'success')
            TriggerServerEvent('qb-vehiclekeys:server:setVehLockState', NetworkGetNetworkIdFromEntity(vehicle), 1)
        end

    else
        TriggerServerEvent('hud:server:GainStress', math.random(1, 4))
        AttemptPoliceAlert("steal")
    end
    //highlight-end

    if usingAdvanced then
        if chance <= Config.RemoveLockpickAdvanced then
            TriggerServerEvent("qb-vehiclekeys:server:breakLockpick", "advancedlockpick")
        end
    else
        if chance <= Config.RemoveLockpickNormal then
            TriggerServerEvent("qb-vehiclekeys:server:breakLockpick", "lockpick")
        end
    end
end
```

Here, we can see that in this callback function, if the pick is successful it will then check if the ped is nearby the vehicle or sitting
in it. Because this function is only triggered when the lockpicking minigame is completed, this is an appropriate place to add the tampering
and fingerprint triggers. Rather than placing it within the conditional statement starting at ```Line 5```, we can use the some of the logic
this function and add it above the if this if statement.

```lua title='Modified qb-vehiclekeys Client-side Lockpick Callback Function' showLineNumbers
function LockpickFinishCallback(success)
    local vehicle = QBCore.Functions.GetClosestVehicle()

    //highlight-start
    if GetPedInVehicleSeat(vehicle, -1) == PlayerPedId() then
        TriggerServerEvent('evidence:server:SetIgnitionTamper', true, QBCore.Functions.GetPlate(vehicle))
        if QBCore.Functions.IsWearingGloves and not QBCore.Functions.IsWearingGloves() then
            TriggerServerEvent('evidence:server:CreateCarFingerprint', QBCore.Functions.GetPlate(vehicle), "Vehicle Ignition")
        end
    else
        if QBCore.Functions.IsWearingGloves and not QBCore.Functions.IsWearingGloves() then
            TriggerServerEvent('evidence:server:CreateCarFingerprint', QBCore.Functions.GetPlate(vehicle), "Exterior Locks")
        end
        TriggerServerEvent('evidence:server:SetExteriorTamper', true, QBCore.Functions.GetPlate(vehicle))
    end
    //highlight-end

    local chance = math.random()
    if success then
        TriggerServerEvent('hud:server:GainStress', math.random(1, 4))
        lastPickedVehicle = vehicle

        if GetPedInVehicleSeat(vehicle, -1) == PlayerPedId() then
            TriggerServerEvent('qb-vehiclekeys:server:AcquireVehicleKeys', QBCore.Functions.GetPlate(vehicle))
        else
            QBCore.Functions.Notify(Lang:t("notify.vlockpick"), 'success')
            TriggerServerEvent('qb-vehiclekeys:server:setVehLockState', NetworkGetNetworkIdFromEntity(vehicle), 1)
        end

    else
        TriggerServerEvent('hud:server:GainStress', math.random(1, 4))
        AttemptPoliceAlert("steal")
    end

    if usingAdvanced then
        if chance <= Config.RemoveLockpickAdvanced then
            TriggerServerEvent("qb-vehiclekeys:server:breakLockpick", "advancedlockpick")
        end
    else
        if chance <= Config.RemoveLockpickNormal then
            TriggerServerEvent("qb-vehiclekeys:server:breakLockpick", "lockpick")
        end
    end
end
```

Because this event already contains code that checks if the player is attempting to lockpick the ignition or the exterior
door, we can reuse this code and create a new block at ```Line 4``` at the beginning of the callback function. We can then
add our tampering events in the if/else portion of this statement, and add some additional logic to check if our ped is wearing
gloves to determine whether or not we create a vehcile fingerprint. The final thing we need to do is add our location to our
fingerprints, marking the ones from a driver as being on the vehicle's ignition, and the other on the vehicle's exterior locks!