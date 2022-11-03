---
sidebar_position: 2

title: Updating qb-inventory
description: Edits to item metadata and adding images.

---

## Adding Inventory Images

:::caution

Never make changes to **ANY** script without making a backup first, you never know what might happen!

:::

![Upload your image files to your inventory resource](/img/addimages.png)

We can start our modification to our inventory by adding our item images, for the default qb-inventory resource we will
navigate to our ```qb-inventory/html/images``` directory and simply drag our images from our downloaded resource and into
our server files. Once we complete this, we will need to modify our inventory metadata system to accomodate new evidence
bag types.

## Modifying FormatItemInfo()

:::info

This same javascript is used in lj-inventory and tnj-inventory as well, but if you use a third-party inventory you may need
to reach out to the developer for more information on how to add custom item metadata!

:::

In order to accomodate our new evidence bag types, and the updated metadata for existing evidence bag types such as the time
and date of collection and tracking numbers. In qb-inventory, we will need to modify the ```FormatItemInfo()``` function 
inside ```qb-inventory/html/js/app.js``` by replacing some existing code with the updated code that can be found below. We
can either search for the ```FormatItemInfo()``` function, or if you are using a recent version, go to Line 485.

```lua title='Code to be removed from qb-inventory/html/js/app.js near Line 485' showLineNumbers
 } else if (itemData.name == "filled_evidence_bag") {
    $(".item-info-title").html("<p>" + itemData.label + "</p>");
    if (itemData.info.type == "casing") {
        $(".item-info-description").html(
            "<p><strong>Evidence material: </strong><span>" +
            itemData.info.label +
            "</span></p><p><strong>Type number: </strong><span>" +
            itemData.info.ammotype +
            "</span></p><p><strong>Caliber: </strong><span>" +
            itemData.info.ammolabel +
            "</span></p><p><strong>Serial Number: </strong><span>" +
            itemData.info.serie +
            "</span></p><p><strong>Crime scene: </strong><span>" +
            itemData.info.street +
            "</span></p><br /><p>" +
            itemData.description +
            "</p>"
        );
    } else if (itemData.info.type == "blood") {
        $(".item-info-description").html(
            "<p><strong>Evidence material: </strong><span>" +
            itemData.info.label +
            "</span></p><p><strong>Blood type: </strong><span>" +
            itemData.info.bloodtype +
            "</span></p><p><strong>DNA Code: </strong><span>" +
            itemData.info.dnalabel +
            "</span></p><p><strong>Crime scene: </strong><span>" +
            itemData.info.street +
            "</span></p><br /><p>" +
            itemData.description +
            "</p>"
        );
    } else if (itemData.info.type == "fingerprint") {
        $(".item-info-description").html(
            "<p><strong>Evidence material: </strong><span>" +
            itemData.info.label +
            "</span></p><p><strong>Fingerprint: </strong><span>" +
            itemData.info.fingerprint +
            "</span></p><p><strong>Crime Scene: </strong><span>" +
            itemData.info.street +
            "</span></p><br /><p>" +
            itemData.description +
            "</p>"
        );
    } else if (itemData.info.type == "dna") {
        $(".item-info-description").html(
            "<p><strong>Evidence material: </strong><span>" +
            itemData.info.label +
            "</span></p><p><strong>DNA Code: </strong><span>" +
            itemData.info.dnalabel +
            "</span></p><br /><p>" +
            itemData.description +
            "</p>"
        );
```
We will want to remove this code, and then replace it with the following updated code:

```lua title='Code to be inserted into qb-inventory/html/js/app.js near Line 485' showLineNumbers
     } else if (itemData.name == "filled_evidence_bag") {
        $(".item-info-title").html("<p>" + itemData.label + "</p>");
        if (itemData.info.type == "casing") {
            $(".item-info-description").html(
                "<p><strong>Type: </strong><span>" +
                itemData.info.label +  
                "</span></p><p><strong>Tracking ID: </strong><span>" +
                itemData.info.tracking +
                "</span></p><p><strong>Date: </strong><span>" +
                itemData.info.date +
                "</span></p><p><strong>Collected: </strong><span>" +
                itemData.info.street +
                "</span></p><p><strong>Caliber: </strong><span>" +
                itemData.info.ammolabel +
                "</span></p><p><strong>Serial Number: </strong><span>" +
                itemData.info.serie +
                "</span></p><br /><p>" +
                itemData.description +
                "</p>"
            );
        } else if (itemData.info.type == "blood") {
            $(".item-info-description").html(
                "<p><strong>Type: </strong><span>" +
                itemData.info.label +
                "</span></p><p><strong>Tracking ID: </strong><span>" +
                itemData.info.tracking +
                "</span></p><p><strong>Date: </strong><span>" +
                itemData.info.date +
                "</span></p><p><strong>Collected: </strong><span>" +
                itemData.info.street +
                "</span></p><p><strong>Blood Type: </strong><span>" +
                itemData.info.bloodtype +
                "</span></p><p><strong>DNA Code: </strong><span>" +
                itemData.info.dnalabel +
                "</span></p><br /><p>" +
                itemData.description +
                "</p>"
            );
        } else if (itemData.info.type == "fingerprint") {
            $(".item-info-description").html(
                "<p><strong>Type: </strong><span>" +
                itemData.info.label +
                "</span></p><p><strong>Tracking ID: </strong><span>" +
                itemData.info.tracking +
                "<p><strong>Date: </strong><span>" +
                itemData.info.date +
                "</span></p><p><strong>Collected: </strong><span>" +
                itemData.info.street +
                "</span></p><p><strong>Fingerprint: </strong><span>" +
                itemData.info.fingerprint +
                "</span></p><br /><p>" +
                itemData.description +
                "</p>"
            );
        } else if (itemData.info.type == "fragment") {
            $(".item-info-description").html(
                "<p><strong>Type: </strong><span>" +
                itemData.info.label +
                "</span></p><p><strong>Tracking ID: </strong><span>" +
                itemData.info.tracking +
                "</span></p><p><strong>Date: </strong><span>" +
                itemData.info.date +
                "</span></p><p><strong>Collected: </strong><span>" +
                itemData.info.street +
                "</span></p><p><strong>Vehicle: </strong><span>" +
                itemData.info.vehname +
                "</span></p><p><strong>Color: </strong><span>" +
                itemData.info.vehcolor +
                "</span></p><p><strong>VIN Match: </strong><span>" +
                itemData.info.plate +
                "</span></p><br /><p>" +
                itemData.description +
                "</p>"
            );
        } else if (itemData.info.type == "gsr") {
            $(".item-info-description").html(
                "<p><strong>Type: </strong><span>" +
                itemData.info.label +
                "</span></p><strong>Tracking ID: </strong><span>" +
                itemData.info.tracking +
                "</span></p><p><strong>Date: </strong><span>" +
                itemData.info.date +
                "</span></p><p><strong>Conducted: </strong><span>" +
                itemData.info.street +
                "</span></p><br /><p>" +
                itemData.description +
                "</p>"
            );
        } else if (itemData.info.type == "bac") {
            $(".item-info-description").html(
                "<p><strong>Type: </strong><span>" +
                itemData.info.label +
                "</span></p><strong>Tracking ID: </strong><span>" +
                itemData.info.tracking +
                "</span></p><p><strong>Result: </strong><span>" +
                itemData.info.result +
                "<p><strong>Date: </strong><span>" +
                itemData.info.date +
                "</span></p><p><strong>Conducted: </strong><span>" +
                itemData.info.street +
                "</span></p><br /><p>" +
                itemData.description +
                "</p>"
            );

        } else if (itemData.info.type == "drugtest") {
            $(".item-info-description").html(
                "<p><strong>Type: </strong><span>" +
                itemData.info.label +
                "</span></p><p><strong>Date: </strong><span>" +
                itemData.info.date +
                "</span></p><p><strong>Conducted: </strong><span>" +
                itemData.info.street +
                "</span></p><strong>Tracking ID: </strong><span>" +
                itemData.info.tracking + "<br /><p>" +
                itemData.info.result + "</p><br /><p>" +
                itemData.description +
                "</p>"
            );

        } else if (itemData.info.type == "dna") {
            $(".item-info-description").html(
                "<p><strong>Type: </strong><span>" +
                itemData.info.label +
                "</span></p><strong>Tracking ID: </strong><span>" +
                itemData.info.tracking +
                "</span></p><p><strong>DNA Code: </strong><span>" +
                itemData.info.dnalabel +
                "<p><strong>Date: </strong><span>" +
                itemData.info.date +
                "</span></p><p><strong>Conducted: </strong><span>" +
                itemData.info.street +
                "</span></p><br /><p>" +
                itemData.description +
                "</p>"
            );
        }
```

We can now continue with the installation process, our items should now all have images, and evidence
bags will now display their updated metadata!