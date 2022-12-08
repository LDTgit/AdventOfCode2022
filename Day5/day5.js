const fs = require("fs");

fs.readFile("./day5.txt", (err, data) => {
    if (err) {
        console.log("Error, err");
        return;
    }
    let storage = data.toString().split("\n\n");
    let crates = storage[0].split("\n");
    let instructions = storage[1].split("\n");
    let info;
    let crateInfo = [];
    for (i = 0; i < crates[0].length; i++) {
        let crateLine = [];
        for (j = 0; j < crates.length; j++) {
            info = crates[j][i];
            if (info != "[" && info != "]" && info != " ") {
                crateLine.push(info);
            }
        }
        crateInfo.push(crateLine.reverse());
    }
    crateInfo = crateInfo.filter(info => info.length > 0);

    let crates9000 = JSON.parse(JSON.stringify(crateInfo));
    let crates9001 = JSON.parse(JSON.stringify(crateInfo));


    instructions.forEach(element => {
        if (element == "") {
            return;
        }

        let instructionParts = element.split(" ");
        let count = parseInt(instructionParts[1]);
        let source = parseInt(instructionParts[3]);
        let destination = parseInt(instructionParts[5]);
        for (i = 0; i < count; i++) {
            let lastCrate = crates9000[source - 1].pop();
            crates9000[destination - 1].push(lastCrate);
        };

        let sliced = crates9001[source - 1].slice(-count);
        for (i = 0; i < count; i++) {
            crates9001[source - 1].pop();

        };
        crates9001[destination - 1].push(...sliced);
    });

    let result1 = [];
    crates9000.forEach(element => {
        if (element.length > 0) {
            result1.push(element[element.length - 1]);
        }
    })
    console.log("Result Part 1: ", result1.join(""));

    let result2 = [];
    crates9001.forEach(element => {
        if (element.length > 0) {
            result2.push(element[element.length - 1]);
        }
    })
    console.log("Result Part 2: ", result2.join(""));
})
