const fs = require("fs");
class Elf {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories
        this.sum = 0;
        calories.forEach(value => this.sum+=value)
    }
};
fs.readFile("./day1.txt", (err, data) => {
    if (err) {
        console.log("error ", err)
    };
    let caloriesList = data.toString();
    let caloriesArray = caloriesList.split("\n");
    //convert to numbers
    let caloriesNum = [];
    let elfIndex = 0;
    let elfs = [];

    for (i = 0; i < caloriesArray.length; i++) {
        if (caloriesArray[i] == "") {
            let elf = new Elf("elf " + elfIndex, caloriesNum);
            elfIndex++;
            elfs.push(elf);
            caloriesNum = [];
        } else {
            caloriesNum.push(parseInt(caloriesArray[i]))
        }
    };
    elfs.sort((a,b)=>b.sum-a.sum);
    let mostCal = elfs[0].sum;
    console.log(mostCal);
    let sumFirst3 = elfs[0].sum + elfs[1].sum + elfs[2].sum;
    console.log(sumFirst3);
    //convert into objects

})