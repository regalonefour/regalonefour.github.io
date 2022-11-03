---
sidebar_position: 2

title: Known Bugs
description: Things I am aware of, please report more!

---

## Likely Unsolveable

    - player vs player bullet impacts are extremely finicky, they will not always attach
    correctly and sometimes leave floating bullet impacts instead. this is likely due to
    how OneSync handles damage events between players, if a fix is possible it has not
    been discovered yet

    - bullet impacts will not generate if you fire a weapon from a vehicle and it lands with
    roughtly 30 meters of the player, this is because the native used to calculate the bullet
    impact will report a impact on the player vehicle on the frame it is fired, and will not
    accurately report the landing position until the next frame

    - bullet impacts will not attach to blown up vehicles or dead peds, this is because all 
    natives that can be used to return damage done to these entities do not work if the ped
    is destroyed (and therefore does not take damage)

## Still Reseraching

    - bullet wounds will occasionally appear on vehicles for some reason, a fix has been
    implemented and it has not been seen in some time, but please report it if you observe
    it!

    - bullet impacts will occasionally draw at vector3(0.0, 0.0, 0.0) while being accurately
    distance checked for the player, the reason for this is likely related to networked entity 
    evidence but has not been solved yet due to difficulty reproducting it