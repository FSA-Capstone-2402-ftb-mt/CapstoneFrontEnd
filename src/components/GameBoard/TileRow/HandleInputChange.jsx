import React from "react";

export function CompareGuessToWOTD(WOTD, inputs, guessStatus, currentRow){
    const WOTDArray = WOTD.word.toUpperCase().split("");
    console.log("WOTDArray:",WOTDArray)
    // console.log(guessStatus)
    const newGuessStatus = [...guessStatus]
    let winningGuess = true;
    console.log("WOTDARRAY:", WOTDArray[0])
    console.log("INPUTS", inputs[0])
    for(let i = 0; i < inputs.length; i++){
        if(WOTDArray[i]===inputs[i]){
            newGuessStatus[currentRow][i]="correct";
        }else if(WOTDArray.includes(inputs[i])){
            winningGuess=false;
            newGuessStatus[currentRow][i]="partial";
        }else{
            winningGuess=false;
            newGuessStatus[currentRow][i]="incorrect";
        }
    }
    
    return{newGuessStatus, winningGuess};
}