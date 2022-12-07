const e = require("express");
const fs = require("fs");

fs.readFile("./day4.txt", (err, data) => {
    if (err) {
        console.log("Error", err);
        return;
    }
    let ids = data.toString().split("\n");
    let team = [];
    let elf1 = [];
    let elf2 = [];
    let elf1Range = [];
    let elf2Range = [];
    let pair = 0;
    let pairOverlap = 0;
    ids.forEach(element => {
        team = element.split(",");
        elf1 = team[0].split("-");
        elf1Range = determineRange(elf1);
        elf2 = team[1].split("-");
        elf2Range = determineRange(elf2);
        if (pairIsIncluded(elf1Range, elf2Range)) {
            pair++
        };
        if (overlap(elf1Range, elf2Range)){
            pairOverlap++
        }
    })

    console.log("Part 1 answer: ", pair);
    console.log("Part 2 answer: ", pairOverlap);

});


function determineRange(elf) {
    let elfRange = [];
    for (i = parseInt(elf[0]); i <= elf[1]; i++) {
        elfRange.push(i);
    };
    return elfRange
}

function pairIsIncluded(elf1, elf2) {
    return elf1.every(element => elf2.includes(element)) || elf2.every(element => elf1.includes(element));
}

function overlap(elf1, elf2){
    return elf1.some(element => elf2.includes(element)) || elf2.some(element => elf1.includes(element));
}

