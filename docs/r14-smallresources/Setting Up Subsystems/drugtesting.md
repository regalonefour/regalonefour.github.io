---
sidebar_position: 4

title: Drug Testing
description: Drug Testing and qb-smallresources

---

:::info

The drug testing functionality in r14-evidence is still new, future config options for integrating custom scripts is coming, along with preconfigured comptability
with other consumable scripts!

:::

# Setting Up The Drug Testing System

## Out of the Box

By default, r14-evidence is designed to integrate with qb-smallresources for drug testing without any further 
configuration or modification to the script. This is handled by the use of server-side event handlers used by
the drugs included in qb-smallresource, and existing client-side event hanlder ```'evidence:client:SetStatus'```
for the ```'weedsmell'``` status. As of right now, there is no simple way to add these triggers automatically
via the config, but they can be added easily to the script in the meantime if you have some basic experience
with lua.

```lua title='r14-evidence Drug Config' showLineNumbers
Config.DrugTesting = {
    Enabled = true,
    UsingQBSR = true, -- set to true if you are using basic qb-smallresources, if not you will need to add an event trigger to your consumables
    DefaultPositiveTime = 2, -- number, in hours, that a player remains positive for a drug test (does not extend past script reset)
    Drugs = {
        ['weed'] = {
            label = 'Marijuana'
        },
        ['oxycodone'] = {
            label = 'Oxycodone',
        },
        ['ecstacy'] = {
            label = "Ecstacy",
        },
        ['cocaine'] = {
            label = 'Cocaine',
        },
    }
}
```

:::caution

Never make changes to **ANY** script without making a backup first, you never know what might happen!

:::

# Integrating A Third Party Script

If you have added additional drugs in qb-smallresources, or perhaps use an entirely different script for drug
items, you can add support for drug testing in r14-evidence simply by adding a server event trigger at some point
in your drug item code. To better understand how to add these events, we can take a look at the code used to integrate
r14-evidence with qb-smallresources. We'll start with the client-side event handler that is triggered when a player
smokes weed in order to apply a status effect.

```lua title="Client-side Network Event Handler" showLineNumbers 
RegisterNetEvent('evidence:client:SetStatus', function(statusId, time, abv)
    if Config.Breathalyzer and (statusId == 'alcohol' or statusId == 'heavyalcohol') then
        TriggerServerEvent('evidence:server:IncreaseBAC', abv or 15) -- increases BAC by .015 or by abv if a third argument is supplied
    end

    //highlight-start
    if Config.DrugTesting.Enabled and Config.DrugTesting.UsingQBSR and statusId == 'weedsmell' then
        TriggerServerEvent('evidence:server:SetDrugStatus', {drug = 'weed'})
    end
    //highlight-end

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

Similiar to the breathalzyer integration, our client-side event handler is triggered when a player completes the progress bar after using a joint
item, meaning that is an effective time to set the drug usage in r14-evidence. By simply adding a conditional statement here, we check if the status
effect is 'weedsmell' and then trigger the ```'evidence:server:SetDrugStatus'``` event. We create table containing the ```drug``` subfield which equals the
name of the drug from our config, in this case ```'weed'``` and that is it! There are a few ways we can trigger this event as seen below:

```lua title="Triggering the Drug Status Network Event"
TriggerServerEvent('evidence:server:SetDrugStatus', {drug = 'cocaine'})

TriggerEvent('evidence:server:SetDrugStatus', {cid= GetPlayerData(source).citizenid, drug = 'weed'})

```

Here we can see the first trigger is the same as in our above example, we simply supply a table with the drug name that we want the player to test positive
for and then the server-side event handler will automatically grab the player's citizen ID. If we want to trigger this from the server, we can also do so by
adding a ```cid'``` field to our argument data table. As an example of how to use these events in a script, lets look at qb-small resources and check how it
handles the oxy item!

```lua title='qb-smallresources Server-side CreateUseableItem()' showLineNumbers
QBCore.Functions.CreateUseableItem("oxy", function(source)
    TriggerClientEvent("consumables:client:oxy", source)
end)
```

In this function, we can see that when the ```oxy``` item is used that it triggers a client event. This would not be an appropriate place to add our drug test
status event trigger as it would automatically set a player as positive even if they canceled using it! Instead, lets follow this code to the client-side and see
if there is a better place to put it!


```lua title="qb-smallresources Client-side Networked Event Handler" showLineNumbers
RegisterNetEvent('consumables:client:oxy', function()
    QBCore.Functions.Progressbar("use_oxy", "Healing", 2000, false, true, {
        disableMovement = false,
        disableCarMovement = false,
		disableMouse = false,
		disableCombat = true,
    }, {
		animDict = "mp_suicide",
		anim = "pill",
		flags = 49,
    // highlight-start
    }, {}, {}, function() -- Done
        StopAnimTask(PlayerPedId(), "mp_suicide", "pill", 1.0)
        TriggerServerEvent("consumables:server:useOxy")
        TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items["oxy"], "remove")
        ClearPedBloodDamage(PlayerPedId())
		HealOxy()
    // highlight-end
    end, function() -- Cancel
        StopAnimTask(PlayerPedId(), "mp_suicide", "pill", 1.0)
        QBCore.Functions.Notify("Canceled", "error")
    end)
end)
```

In this client-side code, we can see that using the ```'oxy'``` item starts a progress bar which the player can cancel, or allow to complete
in order to use the drug. In this part of the progress bar completion function would be a perfect place to trigger our server event. Let's go
and place the TriggerServerEvent() function we need to trigger r14-evidence to set a player positive for the ```'oxycodone'``` drug in our config:


```lua title="Modified qb-smallresources Client-side Networked Event Handler" showLineNumbers
RegisterNetEvent('consumables:client:oxy', function()
    QBCore.Functions.Progressbar("use_oxy", "Healing", 2000, false, true, {
        disableMovement = false,
        disableCarMovement = false,
		disableMouse = false,
		disableCombat = true,
    }, {
		animDict = "mp_suicide",
		anim = "pill",
		flags = 49,
    }, {}, {}, function() -- Done
        StopAnimTask(PlayerPedId(), "mp_suicide", "pill", 1.0)
        // highlight-next-line
        TriggerServerEvent('evidence:server:SetDrugStatus', {drug = 'oxycodone'})
        TriggerServerEvent("consumables:server:useOxy")
        TriggerEvent("inventory:client:ItemBox", QBCore.Shared.Items["oxy"], "remove")
        ClearPedBloodDamage(PlayerPedId())
		HealOxy()
    end, function() -- Cancel
        StopAnimTask(PlayerPedId(), "mp_suicide", "pill", 1.0)
        QBCore.Functions.Notify("Canceled", "error")
    end)
end)
```
Here we can see that we have added our event trigger, and now when a player uses the ```'oxy'``` item, r14-evidence will receive this information
and automatically set the player's character as positive for the ```'oxycodone'``` drug listed in our drug config. While this is a perfectly 
acceptable place to put this event, if this was a different script, where this effect was handled entirely on the server, we may want to find a
place on the server-side code to place our event trigger. Let's follow this code to the server and see if there is an acceptable place for it!

```lua title='qb-smallresources Server-side Networked Event Handler'
RegisterNetEvent('consumables:server:useOxy', function()
    local Player = QBCore.Functions.GetPlayer(source)

    if not Player then return end

    Player.Functions.RemoveItem('oxy', 1)
end)
```

In this event handler, we can see that the client triggers this server event to remove the used item from the player inventory. Since this is
only triggered upon successful use of the ```'oxy'``` item this is a perfect place to put our event trigger for r14-evidence. However, this time, 
since we are triggering a server event from the server, we must specify the citizen ID of the player's character as well since the script does
not have a source to use to find it.

```lua title='Modified qb-smallresources Server-side Networked Event Handler'
RegisterNetEvent('consumables:server:useOxy', function()
    local Player = QBCore.Functions.GetPlayer(source)

    if not Player then return end

    // highlight-next-line
    TriggerEvent('evidence:server:SetDrugStatus', {cid= Player.PlayerData.citizenid, drug = 'oxycodone'})

    Player.Functions.RemoveItem('oxy', 1)
end)
```

We can see that the script already runs ```QBCore.Functions.GetPlayer()``` and stores the player's information in the ```Player``` variable. It checks
to make sure that it actually found a player as well, and we can place our event trigger below this so it is only triggered if ```Player``` has a value
preventing a potential error where we attempt to index a nil value. We then specify our drug as ```'oxycodone'``` to match our config, and that is it!
You can use this same logic to modify any script yout have access to the code for, but if your consumables or drug script is escrowed, you need to reach
out to the dev responsible for it!