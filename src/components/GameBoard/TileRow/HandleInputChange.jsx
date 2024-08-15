
export function CompareGuessToWOTD(WOTD, inputs, guessStatus, currentRow){
    // const WOTDArray = WOTD.split("");
    console.log(guessStatus)
    const newGuessStatus = [...guessStatus]
    let winningGuess = true;
    for(let i = 0; i < inputs.length; i++){
        if(WOTD[i]===inputs[i]){
            newGuessStatus[currentRow][i]="correct";
        }else if(WOTD.includes(inputs[i])){
            winningGuess=false;
            newGuessStatus[currentRow][i]="partial";
        }else{
            winningGuess=false;
            newGuessStatus[currentRow][i]="incorrect";
        }
    }
    
    return{newGuessStatus, winningGuess};
}