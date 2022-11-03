---
sidebar_position: 2

title: Breathalyzer
description: BAC and qb-smallresources

---

# Setting Up The Breathalyzer System

## Out of the Box

By default, r14-evidence is designed to integrate with qb-smallresources without any further configuration or
modification to the script. The way this is handled by default is through the ```'evidence:client:SetStatus'``` 
client-side networked event handler used by the original qb-policejob/client/evidence.lua. With built in event
triggers in qb-smallresources, r14-evidence will receieve SetStatus events with the alcohol tag and automatically
use them to increase a player's blood alcohol content by .0015. 

```lua title="Client-side Network Event Handler" showLineNumbers 
RegisterNetEvent('evidence:client:SetStatus', function(statusId, time, abv)
    //highlight-start
    if Config.Breathalyzer and (statusId == 'alcohol' or statusId == 'heavyalcohol') then
        TriggerServerEvent('evidence:server:IncreaseBAC', abv or 15) -- increases BAC by .015 or by abv if a third argument is supplied
    end
    //highlight-end

    if Config.DrugTesting.Enabled and Config.DrugTesting.UsingQBSR and statusId == 'weedsmell' then
        TriggerServerEvent('evidence:server:SetDrugStatus', {drug = 'weed'})
    end

    if time > 0 and Config.StatusList[statusId] then
        if (CurrentStatusList == nil or CurrentStatusList[statusId] == nil) or (CurrentStatusList[statusId] and CurrentStatusList[statusId].time < 20) then
            CurrentStatusList[statusId] = {
                text = Config.StatusList[statusId],
                time = time
            }
            Config.Functions.Notify(''..CurrentStatusList[statusId].text..'')
        end
    elseif Config.StatusList[statusId] then
        CurrentStatusList[statusId] = nil
    end
    TriggerServerEvent('evidence:server:UpdateStatus', CurrentStatusList)
end)
```

:::caution

Never make changes to **ANY** script without making a backup first, you never know what might happen!

:::

# Integrating A Third Party Script

If you do not use qb-smallresources, and your consumable script that you use for alcohol does not come with built in 
triggers for the ```'evidence:client:SetStatus'``` network event, you or a dev for your server can add these events
if you have access to the source code! If you aren't able to modify the resource directly due to escrow, consider asking 
the developer to add it themselves. In order to understand where we want to make our edits, lets take a look at how
qb-smallresrouces handles consumables and where it triggers this event.

```lua title="Server-side Create Useable Item Function" showLineNumbers
QBCore.Functions.CreateUseableItem("beer", function(source, item)
    TriggerClientEvent("consumables:client:DrinkAlcohol", source, item.name)
end)
```

Here, we can see the item ```'beer'``` being made useable by the above function, it triggers a client-side event in 
the consumables.lua, and then ends. If this was a script you were attempting to modify, adding the ```evidence:client:SetStatus``` 
event trigger here would automatically set the increase in BAC the moment an item is used. We should follow this event to see how the
item is used before adding it.

```lua title="Client-side Network Event Handler" showLineNumbers
RegisterNetEvent('consumables:client:DrinkAlcohol', function(itemName)
    TriggerEvent('animations:client:EmoteCommandStart', {"drink"})
    QBCore.Functions.Progressbar("snort_coke", "Drinking liquor..", math.random(3000, 6000), false, true, {
        disableMovement = false,
        disableCarMovement = false,
        disableMouse = false,
        disableCombat = true,
    }, {}, {}, {}, function() -- Done
        TriggerEvent('animations:client:EmoteCommandStart', {"c"})
        TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items[itemName], "remove")
        TriggerServerEvent("consumables:server:drinkAlcohol", itemName)
        TriggerServerEvent("consumables:server:addThirst", QBCore.Functions.GetPlayerData().metadata["thirst"] + ConsumablesAlcohol[itemName])
        TriggerServerEvent('hud:server:RelieveStress', math.random(2, 4))
        alcoholCount += 1
        if alcoholCount > 1 and alcoholCount < 4 then
            // highlight-next-line
            TriggerEvent("evidence:client:SetStatus", "alcohol", 200)
        elseif alcoholCount >= 4 then
            // highlight-next-line
            TriggerEvent("evidence:client:SetStatus", "heavyalcohol", 200)
        end

    end, function() -- Cancel
        TriggerEvent('animations:client:EmoteCommandStart', {"c"})
        QBCore.Functions.Notify("Cancelled..", "error")
    end)
end)
```
Here, in the client-side event triggered by the usage of the ```'beer'``` item, we can see it then invokes the Progress Bar function
native to qb-core. Using the comments, we can see that the middle part of the code block contains a function which is triggered when
the progress bar is completed, and a little lower, the function that is triggered if the progress bar is canceled. Since we only want
to increase the BAC of a player who actually drinks the beer, this is the best spot for the ```'evidence:client:SetStatus'``` event 
trigger to be placed.

We can similarly trigger this same event from the server-side if needed. If you have a resource that handles consumables differently,
you may need to search for a place in a server function or event handler. For example, in qb-smallresources, several drug items will
trigger a server event when their progress bar is finished. Let's take a look at the ```'cokebaggy'``` item and attempt to pretend it is
an alochol item we want to add our event trigger too.

```lua title="Client-side Network Event Handler" showLineNumbers
RegisterNetEvent('consumables:client:Cokebaggy', function()
    local ped = PlayerPedId()
    QBCore.Functions.Progressbar("snort_coke", "Quick sniff..", math.random(5000, 8000), false, true, {
        disableMovement = false,
        disableCarMovement = false,
        disableMouse = false,
        disableCombat = true,
    }, {
        animDict = "switch@trevor@trev_smoking_meth",
        anim = "trev_smoking_meth_loop",
        flags = 49,
    }, {}, {}, function() -- Done
        StopAnimTask(ped, "switch@trevor@trev_smoking_meth", "trev_smoking_meth_loop", 1.0)
        // highlight-next-line
        TriggerServerEvent("consumables:server:useCokeBaggy")
        TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items["cokebaggy"], "remove")
        -- TriggerEvent("evidence:client:SetStatus", "widepupils", 200) -- let's pretend this isn't here
        CokeBaggyEffect()
    end, function() -- Cancel
        StopAnimTask(ped, "switch@trevor@trev_smoking_meth", "trev_smoking_meth_loop", 1.0)
        QBCore.Functions.Notify("Canceled..", "error")
    end)
end)
```

When we follow this client event to the server, we can insert a ```TriggerClientEvent()``` which will allow r14-evidence to
register the usage of an alcohol item and then increaes the BAC and apply the status effect.

```lua title="Server-side Network Event Handler" showLineNumbers
RegisterNetEvent('consumables:server:useCokeBaggy', function()
    local Player = QBCore.Functions.GetPlayer(source)

    if not Player then return end

    Player.Functions.RemoveItem('cokebaggy', 1)
    //highlight-next-line
    TriggerClientEvent('evidence:client:SetStatus', source, 'alcohol', 30)
end)
```
This function is designed to remove the ```'cokebaggy'``` item from the player after it used, since we know it will always be
triggered by a player who has used the item in question, and thus is an appropriate place to add the trigger. In this case we 
add the following line to this network event at the end ```TriggerClientEvent('evidence:client:SetStatus', source, 'alcohol', 30)```, 
sending it to the player who triggered this server event by specifiying ```source```, supplying the second argument as ```'alcohol'```
for the type of status to set in r14-evidence, and can supply an **OPTIONAL** third arugment which is a number between 0 and 1000 to
specify the amount to raise the player's BAC by. By default, when this argument isn't supplied, r14-evidence will supply a value of 15,
or otherwise a 0.0015 increase in their BAC.
