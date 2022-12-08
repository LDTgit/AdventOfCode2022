const fs= require("fs");

fs.readFile("./day6.txt", (err, data)=> {
    if (err){
        console.log("Error reading file", err);
        return;
    }
    let communication = data.toString().split("");
    part([...communication],4);
    part([...communication],14);
    
})


function part(communication, count){
    let shifts = 0;
    while (communication.length>count){
        let processedChar = communication.slice(0,count);
        let foundDup = false;

        for (i=0; i<count; i++){
            let searchedChar = processedChar[i];
            if (processedChar.indexOf(searchedChar) != processedChar.lastIndexOf(searchedChar)){
                foundDup=true;
                break;
            }
        }
        
        if (!foundDup){
            break;
        }
        communication.shift();
        shifts++;

    }
    console.log("Answer: ", shifts+count);
}