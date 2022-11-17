---
sidebar_position: 5

title: Lock Tamperings
description: Adding lock tamperings

---
# Setting up Lock Tampering Evidence

# Out of the Box

Because r14-evidence adds the ability to create lock tampering evidence when players attempt to pick or break locks, there are no
built in event triggers in existing qb-core resources or third-party scripts. However, the ability to add this feature to your crime
scripts is relatively simple and can be accomplished with some basic knowledge of lua. If you wish to attempt to add lock tampering
evidence to your server, you can use the following guide to help you figure out where to do so!

# How to Create Lock Tampering Evidence

In order to create lock tampering evidence, we simply need to trigger the ```'evidence:server:CreateLockTampering'``` network event
from either a client-side or server-side script with the desired coords. Below we can see an example of how to properly trigger this
event from either the client or the server. 

```lua title='r14-evidence Lock Tampering Event'
TriggerServerEvent("evidence:server:CreateLockTampering", coords) -- from client-side

TriggerEvent("evidence:server:CreateLockTampering", coords) -- from server-side
```

:::caution

Never make changes to **ANY** script without making a backup first, you never know what might happen!

:::

# Integrating A Third Party Script

To get an idea of how to add this event to our resources, we can take a look at the qb-storerobbery resource and where we
can add event triggers for lock tampering evidence. Because most scripts require the use of a lockpick to break into a 
register or a door, we can begin by searching our files for ```'lockpick'```. Our first result is promising, and we can look
at the code below:

```lua title='qb-storerobbery Lockpick Network Event Handler' showLineNumbers
RegisterNetEvent('lockpicks:UseLockpick', function(isAdvanced)
    usingAdvanced = isAdvanced
    for k in pairs(Config.Registers) do
        local ped = PlayerPedId()
        local pos = GetEntityCoords(ped)
        local dist = #(pos - Config.Registers[k][1].xyz)
        if dist <= 1 and not Config.Registers[k].robbed then
            if CurrentCops >= Config.MinimumStoreRobberyPolice then
                if usingAdvanced then
                    lockpick(true)
                    currentRegister = k
                    if not IsWearingHandshoes() then
                        // highlight-next-line
                        TriggerServerEvent("evidence:server:CreateFingerDrop", pos)
                    end
                    if not copsCalled then
                        local s1, s2 = GetStreetNameAtCoord(pos.x, pos.y, pos.z)
                        local street1 = GetStreetNameFromHashKey(s1)
                        local street2 = GetStreetNameFromHashKey(s2)
                        local streetLabel = street1
                        if street2 ~= nil then
                            streetLabel = streetLabel .. " " .. street2
                        end
                        TriggerServerEvent("qb-storerobbery:server:callCops", "cashier", currentRegister, streetLabel, pos)
                        copsCalled = true
                    end
                else
                    lockpick(true)
                    currentRegister = k
                    if not IsWearingHandshoes() then
                        // highlight-next-line
                        TriggerServerEvent("evidence:server:CreateFingerDrop", pos)
                    end
                    if not copsCalled then
                        local s1, s2 = GetStreetNameAtCoord(pos.x, pos.y, pos.z)
                        local street1 = GetStreetNameFromHashKey(s1)
                        local street2 = GetStreetNameFromHashKey(s2)
                        local streetLabel = street1
                        if street2 ~= nil then
                            streetLabel = streetLabel .. " " .. street2
                        end
                        TriggerServerEvent("qb-storerobbery:server:callCops", "cashier", currentRegister, streetLabel, pos)
                        copsCalled = true
                    end

                end

            else
                QBCore.Functions.Notify(Lang:t("error.minimum_store_robbery_police", { MinimumStoreRobberyPolice = Config.MinimumStoreRobberyPolice}), "error")
            end
        end
    end
end)
```

We can alrady see the event triggers for fingerprint evidence here, and although we could add our lock tampering triggers here, thinking
about how this script works we can realize that by placing our code here it would create a lock tamper anytime a lockpick is used. Because
we want lock tamperings to reflect actually attempting to focibly open a lock, we can instead follow our code. In this case, we can see the
```lockpick()``` function here, and can investgiate it further!

```lua title='qb-storerobbery Lockpick Function' showLineNumbers
function lockpick(bool)
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        action = "ui",
        toggle = bool,
    })
    SetCursorLocation(0.5, 0.2)
end
```

This function leads us to an NUI trigger, and searching further in the script we can find two NUI Callbacks that correlate to a successful
or failed attempt to pick the register lock. We can take a look at them below and find an appropriate place to place our lock tampering
event trigger.

```lua title='qb-storerobbery Successful Lockpick NUI Callback' showLineNumbers
RegisterNUICallback('success', function(_, cb)
    if currentRegister ~= 0 then
        lockpick(false)
        TriggerServerEvent('qb-storerobbery:server:setRegisterStatus', currentRegister)
        local lockpickTime = 25000
        LockpickDoorAnim(lockpickTime)
        QBCore.Functions.Progressbar("search_register", Lang:t("text.emptying_the_register"), lockpickTime, false, true, {
            disableMovement = true,
            disableCarMovement = true,
            disableMouse = false,
            disableCombat = true,
        }, {
            animDict = "veh@break_in@0h@p_m_one@",
            anim = "low_force_entry_ds",
            flags = 16,
        }, {}, {}, function() -- Done
            openingDoor = false
            ClearPedTasks(PlayerPedId())
            TriggerServerEvent('qb-storerobbery:server:takeMoney', currentRegister, true)
        end, function() -- Cancel
            openingDoor = false
            ClearPedTasks(PlayerPedId())
            QBCore.Functions.Notify(Lang:t("error.process_canceled"), "error")
            currentRegister = 0
        end)
        CreateThread(function()
            while openingDoor do
                TriggerServerEvent('hud:server:GainStress', math.random(1, 3))
                Wait(10000)
            end
        end)
    else
        SendNUIMessage({
            action = "kekw",
        })
    end
    cb('ok')
end)
```
```lua title='qb-storerobbery Failed Lockpick NUI Callback' showLineNumbers
RegisterNUICallback('fail', function(_ ,cb)
    if usingAdvanced then
        if math.random(1, 100) < 20 then
            TriggerServerEvent("qb-storerobbery:server:removeAdvancedLockpick")
            TriggerEvent('inventory:client:ItemBox', QBCore.Shared.Items["advancedlockpick"], "remove")
        end
    else
        if math.random(1, 100) < 40 then
            TriggerServerEvent("qb-storerobbery:server:removeLockpick")
            TriggerEvent('inventory:client:ItemBox', QBCore.Shared.Items["lockpick"], "remove")
        end
    end
    if (IsWearingHandshoes() and math.random(1, 100) <= 25) then
        local pos = GetEntityCoords(PlayerPedId())
        TriggerServerEvent("evidence:server:CreateFingerDrop", pos)
        QBCore.Functions.Notify(Lang:t("error.you_broke_the_lock_pick"))
    end
    lockpick(false)
    cb('ok')
end)
```

For a failure, we can simply add an event trigger which will create a lock tamper anytime a player attempts to pick
a register and fails, but for a successful pick we may want to consider adding a chance of creating one instead. We
can see the code already exists in these two NUI Callback functions and we can use this code in our implementation.

```lua title='Modified qb-storerobbery Successful Lockpick NUI Callback' showLineNumbers
RegisterNUICallback('success', function(_, cb)
    if currentRegister ~= 0 then
        lockpick(false)
        TriggerServerEvent('qb-storerobbery:server:setRegisterStatus', currentRegister)
        local lockpickTime = 25000

        // highlight-start
        if math.random(1, 100) <= 25) then
            local pos = GetEntityCoords(PlayerPedId())
            TriggerServerEvent("evidence:server:CreateLockTampering", pos)
        end
        // highlight-end

        LockpickDoorAnim(lockpickTime)
        QBCore.Functions.Progressbar("search_register", Lang:t("text.emptying_the_register"), lockpickTime, false, true, {
            disableMovement = true,
            disableCarMovement = true,
            disableMouse = false,
            disableCombat = true,
        }, {
            animDict = "veh@break_in@0h@p_m_one@",
            anim = "low_force_entry_ds",
            flags = 16,
        }, {}, {}, function() -- Done
            openingDoor = false
            ClearPedTasks(PlayerPedId())
            TriggerServerEvent('qb-storerobbery:server:takeMoney', currentRegister, true)
        end, function() -- Cancel
            openingDoor = false
            ClearPedTasks(PlayerPedId())
            QBCore.Functions.Notify(Lang:t("error.process_canceled"), "error")
            currentRegister = 0
        end)
        CreateThread(function()
            while openingDoor do
                TriggerServerEvent('hud:server:GainStress', math.random(1, 3))
                Wait(10000)
            end
        end)
    else
        SendNUIMessage({
            action = "kekw",
        })
    end
    cb('ok')
end)
```
We can pull the conditional statement from the failure NUI Callback which utilizes the ```math.random()``` function to add
a chance of creating a lock tampering instead of either not creating one, or automatically creating one. We then need to get the
coords of the position we want to create our lock tampering evidence in a ```vector3()``` format, and finally supply this value
as the first and only argument for the event trigger.

```lua title='Modified qb-storerobbery Failed Lockpick NUI Callback' showLineNumbers
RegisterNUICallback('fail', function(_ ,cb)
    if usingAdvanced then
        if math.random(1, 100) < 20 then
            TriggerServerEvent("qb-storerobbery:server:removeAdvancedLockpick")
            TriggerEvent('inventory:client:ItemBox', QBCore.Shared.Items["advancedlockpick"], "remove")
        end
    else
        if math.random(1, 100) < 40 then
            TriggerServerEvent("qb-storerobbery:server:removeLockpick")
            TriggerEvent('inventory:client:ItemBox', QBCore.Shared.Items["lockpick"], "remove")
        end
    end
    if (IsWearingHandshoes() and math.random(1, 100) <= 25) then
        local pos = GetEntityCoords(PlayerPedId())
        TriggerServerEvent("evidence:server:CreateFingerDrop", pos)
        QBCore.Functions.Notify(Lang:t("error.you_broke_the_lock_pick"))
    end

    // highlight-next-line
    TriggerServerEvent("evidence:server:CreateLockTampering", GetEntityCoords(PlayerPedId()))

    lockpick(false)
    cb('ok')
end)
```

For our failed NUI Callback, we can simply add our event trigger anywhere in the function and it will be triggered whenever
the player tries and fails to lockpick a register in qb-storerobbery. In this case we will simply repeat the use of the
```PlayerPedId()``` and ```GetEntityCoords()``` natives, but in a more optimized implementation we could rearrange this function
to reduce our repeated fetching of a variable that we could instead use multiple times!

```lua title='Further Modified qb-storerobbery Failed Lockpick NUI Callback' showLineNumbers
RegisterNUICallback('fail', function(_ ,cb)
    if usingAdvanced then
        if math.random(1, 100) < 20 then
            TriggerServerEvent("qb-storerobbery:server:removeAdvancedLockpick")
            TriggerEvent('inventory:client:ItemBox', QBCore.Shared.Items["advancedlockpick"], "remove")
        end
    else
        if math.random(1, 100) < 40 then
            TriggerServerEvent("qb-storerobbery:server:removeLockpick")
            TriggerEvent('inventory:client:ItemBox', QBCore.Shared.Items["lockpick"], "remove")
        end
    end

    // highlight-next-line
    local pos = GetEntityCoords(PlayerPedId())

    if (IsWearingHandshoes() and math.random(1, 100) <= 25) then
        // highlight-next-line
        TriggerServerEvent("evidence:server:CreateFingerDrop", pos)
        QBCore.Functions.Notify(Lang:t("error.you_broke_the_lock_pick"))
    end

    // highlight-next-line
    TriggerServerEvent("evidence:server:CreateLockTampering", pos)

    lockpick(false)
    cb('ok')
end)
```

Rather than getting the position and entity handle of our player's ped twice, we can pull this variable out of the fingerprint
conditional statement, and fetch it in the main part of the function so it is accessible for both event triggers below it. Once
we do this, we simply need to replace the function in our ```"evidence:server:CreateLockTampering"``` event trigger with the 
```pos``` variable which holds our coords.

This is of course a very simple implementation of tampering evidence, taking some more time to implement better logic for our
event triggers could make it where they are only generated if a fingerprint isn't, or we could make the chance of them dropping
a configurable option in our ```config.lua``` file.
