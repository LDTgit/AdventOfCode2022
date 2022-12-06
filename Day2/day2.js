const fs = require("fs");

fs.readFile("./day2.txt", (err, data) => {
    if (err) {
        console.log("error", err);
        return;
    };

    let steps = data.toString().split("\n");
    
    //Your total score is the sum of your scores for each round. 
    //The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors)
    // plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).
    //A for Rock, B for Paper, and C for Scissors
    //X for Rock, Y for Paper, and Z for Scissors
    firstPart(steps);

    //X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.
    let myScoreRes = 0;
    let myScoreHand = 0;
    let scoreTotal = 0;

    steps.forEach(step => {
        let pair = step.split(" ");
        let opponent = pair[0];
        let result = pair[1];
        
        if (result == "Y") {
            myScoreRes += 3
        } else if (result == "Z") {
            myScoreRes += 6
        }
        
        if (opponent =="A" && result =="Z" || opponent =="B" && result =="Y" || opponent =="C" && result =="X"){
            myScoreHand += 2
        } else if (opponent =="A" && result =="X" || opponent =="B" && result =="Z" || opponent =="C" && result =="Y"){
            myScoreHand += 3
        } else if (opponent =="A" && result =="Y" || opponent =="B" && result =="X" || opponent =="C" && result =="Z"){
            myScoreHand += 1
        }
      
    });
    scoreTotal = myScoreRes + myScoreHand;
    console.log("My score Part 2: ", scoreTotal);
})

function firstPart(steps) {
    let myScore = 0;

    steps.forEach(step => {
        let pair = step.split(" ");
        let opponent = pair[0];
        let myHand = pair[1];
        if (myHand == "X") {
            myScore += 1
        } else if (myHand == "Y") {
            myScore += 2
        } else if (myHand == "Z") {
            myScore += 3
        };
        if (myHand == "X" && opponent == "C" || myHand == "Y" && opponent == "A" || myHand == "Z" && opponent == "B") {
            myScore += 6;
        } else if (myHand == "X" && opponent == "A" || myHand == "Y" && opponent == "B" || myHand == "Z" && opponent == "C") {
            myScore += 3;
        }

    });
    console.log("My score Part 1: ", myScore);
}