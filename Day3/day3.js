const fs = require("fs");

fs.readFile("./day3.txt", (err, data) => {
    if (err) {
        console.log("Error", err);
        return;
    }
    let rucksacks = data.toString().split("\n");

    firstPart(rucksacks);
    secondPart(rucksacks);

})

function firstPart(rucksacks) {
    let itemType = "";
    let typeValue = 0;
    let prioritySum = 0;
    rucksacks.forEach(element => {
        let compartiment1 = element.substring(0, (element.length / 2));
        let compartiment2 = element.substring((element.length / 2), element.length);
        for (i = 0; i < compartiment1.length; i++) {
            for (j = 0; j < compartiment2.length; j++) {
                if (compartiment1[i] == compartiment2[j]) {
                    itemType = compartiment1[i];
                    if (itemType >= "a") {
                        typeValue = itemType.charCodeAt(0) - 96;
                    } else {
                        typeValue = itemType.charCodeAt(0) - 38;
                    };
                    prioritySum += typeValue;
                    return;
                }
            }
        }

    })
    console.log("Answer Part 1: ", prioritySum);
}

function secondPart(rucksacks) {
    let badge = "";
    let badgeValue = 0;
    let priorityBadgeSum = 0;
    let elf1 = "";
    let elf2 = "";
    let elf3 = "";

    for (i = 0; i < rucksacks.length; i += 3) {
        elf1 = rucksacks[i];
        elf2 = rucksacks[i + 1];
        elf3 = rucksacks[i + 2];
        for (j = 0; j < elf1.length; j++) {
            for (k = 0; k < elf2.length; k++) {
                for (l = 0; l < elf3.length; l++) {
                    if (elf1[j] == elf2[k] && elf1[j] == elf3[l]) {
                        badge = elf1[j];
                        if (badge >= "a") {
                            badgeValue = badge.charCodeAt(0) - 96;
                        } else {
                            badgeValue = badge.charCodeAt(0) - 38;
                        };
                        priorityBadgeSum += badgeValue;
                        j = elf1.length;
                    } 
                }
            }
        }
    }
    console.log("Answer Part 2: ", priorityBadgeSum);
}