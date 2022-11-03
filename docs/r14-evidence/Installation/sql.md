---
sidebar_position: 7

title: Updating Vehicle Database
description: Updating our player vehicle database.

---

The last major step of our installation process will be the modification of our vehicle database to hold vehicle evidence information
that will persist through server reset. This makes it possible for police to recover casings, blood, or fingerprints from player vehicles
even after multiple server or script resets. Even if you are not experienced in managing your database, this is a relatively simple process
and can be completed in just a few minutes. This guide will use the mariadb web interface included with servers maintained by ZAP Hosting, Inc 
but should be simliar to most database web interfaces. 

## Included Database Configuration

By default, r14-evidence is configured to access the player vehicle table created and used by qb-core, however, if your script uses a differently
named table you are able to change this in the config! Simply alter ```Config.DB.Vehicle``` to match the name of your player vehicle table, and if
the plate is stored in a custom column, you may change ```Config.DB.Plate``` to match this as well. If you do not use any custom scripts, you can use
the configuration and SQL as is!

```lua title='r14-evidence Database Config' showLineNumbers
Config.DB = { -- this config sets what table you are using to store vehicle evidence
    Vehicle = 'player_vehicles', -- set this to your player vehicle table
    Plate = 'plate'
}
```

:::danger

Never make any changes to your database without making a backup. Losing code sucks, but losing unique player data is even worse!

:::

## Accessing Our Database

You will want to navigate to your player vehicles table, by default, this will be ```player_vehicles``` in qb-core and with most garage
scripts intended to integrate seamlessly with it. We will then want to run our SQL on our table to create a new column which will store
our evidence information.

![Preparing to run SQL](/img/clickrunsql.png)

## Running our SQL Statement

We will then want to run the following SQL statement on our table, this is intended to add a column to the end of the table named ```evidence```
which will be accessed by the resource to store and load vehicle evidence. 

```sql title'SQL Statement To Be Run' showLineNumbers
ALTER TABLE `player_vehicles`
ADD `evidence` longtext;
```

![Running our SQL](/img/runsql.png)

## Verifying Our Change

Once we run this SQL statement, we should recieve a notification that it has either successfully completed or that there was an error. If you
experience an error please check to make sure the name of the table in the SQL statement matches your table in your database, and that no column
already exists named ```evidence```. Once we successfully run this statement however, we should verify that our database has updated and if needed
alter our config in our r14-evidence resource.

![Verifying our change to the database](/img/verifysql.png)

Now that we have completed the update to our database, it is time to complete the installation checklist before restarting our server!