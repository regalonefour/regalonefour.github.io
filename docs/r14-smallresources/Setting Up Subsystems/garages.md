---
sidebar_position: 1

title: Garage Integration
description: qb-garages by default

---
# Setting up Garage Integration

# Out of the Box

By default, r14-evidence is designed to integrate with qb-garages without any further configuration or
modification necessary to the script. In the ```config.lua``` file, you will find the included paramaters
for the default qb-core garage system. The table below specifies the names of the events triggered when a
vehicle is removed or placed into a garage, along with the position of the argument which holds the plate 
string. The script then uses this information to either load the evidence from the databse when it is removed
or to save the evidence of that vehicle and clear it from the evidence table held in the server-side of the 
script in order to save memory and resources.

```lua title="r14-evidence Gararge Config Table" showLineNumbers 
Config.VehInAndOut = { -- this configures your server side event that triggers when garaging or ungaraging a vehicle, the paramaters for base qb-garages are included
    InEvent = 'qb-garage:server:updateVehicle',
    InState = 1, -- the value of the variable specified by InStateVar receieved when placing a vehicle in a garage
    InStateVar = 1, -- the position of the argument that is received for the vehicle state when putting it in a garage
    InPlateVar = 5, -- the position of the argument that is received for the vehicle plate when putting it in a garage
    OutEvent = 'qb-garage:server:updateVehicleState',
    OutState = 0, -- the state receieved when placing a vehicle in a garage
    OutStateVar = 1,  -- the position of the argument that is received for the vehicle state when putting it in a garage
    OutPlateVar = 2, -- the position of the argument that is received for the vehicle plate when taking it out of a garage
}
```

:::caution

Never make changes to **ANY** script without making a backup first, you never know what might happen!

:::

# Integrating A Third Party Script

If you desire to configure r14-evidence to integreate with your garage script, you can use the following guide to help 
you do so, but it is important to note that the script does not require it to function properly! By default, any existing
evidence in the vehicle database will be loaded when a player either generates evidence in that vehicle, or when they search
that vehicle for evidence. It will simply remain in the server evidence table until the script restarts, but will not cause 
issues with the script beyond taking up additional memory. 

To better understand on how this config works, lets take a look at an older version of a popular modification of qb-garages by 
JDev, which uses a network event triggers of the same name, but with differently ordered arguments.

:::tip

This script was recently modified as of 10/2022 and no longer requires a modification to the config to be compatible! 

:::

```lua title="JonasDev99/qb-garages Server-side Network Event Handler" showLineNumbers 

RegisterNetEvent('qb-garage:server:updateVehicle', function(state, fuel, engine, body, properties, plate, garage, location, damage)
    if location and type(location) == 'vector3' then
        if StoreDamageAccuratly then
            MySQL.update('UPDATE player_vehicles SET state = ?, garage = ?, fuel = ?, engine = ?, body = ?, mods = ?, parkingspot = ?, damage = ? WHERE plate = ?',{state, garage, fuel, engine, body, json.encode(properties), json.encode(location), json.encode(damage), plate})
        else
            MySQL.update('UPDATE player_vehicles SET state = ?, garage = ?, fuel = ?, engine = ?, body = ?, mods = ?, parkingspot = ? WHERE plate = ?',{state, garage, fuel, engine, body, json.encode(properties), json.encode(location), plate})
        end
    else
        if StoreDamageAccuratly then
            MySQL.update('UPDATE player_vehicles SET state = ?, garage = ?, fuel = ?, engine = ?, body = ?, mods = ?, damage = ? WHERE plate = ?',{state, garage, fuel, engine, body, json.encode(properties), json.encode(damage), plate})
        else
            MySQL.update('UPDATE player_vehicles SET state = ?, garage = ?, fuel = ?, engine = ?, body = ?, mods = ? WHERE plate = ?', {state, garage, fuel, engine, body, json.encode(properties), plate})
        end
    end
end)
```

Here in ```'qb-garage:server:updateVehicle'``` we can see that our original config uses this event to track when a vehicle is returned
to it's garage, it will check the argument at the ```1``` position according to ```InStateVar```, and if it equals the value defined in
```InState``` r14-evidence will then save the vehicle's evidence to database and remove it from it's main evidence table. To do this, it
needs to find the plate of the vehicle in question, and checks the argument in position ```5``` as defined in ```InPlateVar```. When it does
this however, it pulls the vehicle properties table. In this case, we would need to change ```InPlateVar``` to ```6``` in order it to properly
access the plate of this function!

```lua title="JonasDev99/qb-garages Server-side Network Event Handler" showLineNumbers 
RegisterNetEvent('qb-garage:server:updateVehicleState', function(state, plate, garage)
    MySQL.update('UPDATE player_vehicles SET state = ?, garage = ?, depotprice = ? WHERE plate = ?',{state, garage, 0, plate})
end)
```

To properly determine when a vehicle is pulled out of a garage, and to load it's evidence straight away, we again go to the server/main.lua to
find and access the ```'qb-garage:server:updateVehicleState'```network event. Here, we check the ```OutStateVar``` at position ```1``` and compare
it to the ```OutState```. When it matches this, we then pull the plate from argument ```2``` as defined in ```OutPlateVar``` and r14-evidence
subsequently loads the vehicle evidence from the database. 