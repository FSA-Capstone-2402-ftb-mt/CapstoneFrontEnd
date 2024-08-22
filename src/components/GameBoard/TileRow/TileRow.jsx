import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { CompareGuessToWOTD } from "./HandleInputChange";
import getStatusColor from "./StatusColor";

//WOTD IS FUNCTION IS WORKING BUT NOT UPDATING CORRECTLY. IT IS STILL USING APPLE AS THE DEFAULT.
// NEED TO UPDATE THE CORRECT GUESS INDEX

export default function TileRow({onRowComplete, rowIndex, active, status, guessStatus, setGuessStatus, guessIndex, setGuessIndex, activeRow, gameOver, setGameOver, fullGuess, setFullGuess,
    WOTD
}){
    const[inputs, setInputs] = useState(['','','','','']);
    const[disabled, setDisabled] = useState([false,true,true,true,true]);
    const inputRefs = useRef([]);

    useEffect(()=>{
        inputRefs.current = inputRefs.current.slice(0, inputs.length).map((_, i)=> inputRefs.current[i] || React.createRef());
    },[inputs.length]);



    const handleInputChange = (e, index) =>{
        const value = e.target.value.toUpperCase();
        if(value.length <=1){
            //creating a shallow copy to avoid directly mutating the state
            const newInputs = [...inputs];
            newInputs[index] = value;
            setInputs(newInputs);

            if(value && index < inputs.length - 1){
              const newDisabled = [...disabled];
              newDisabled[index + 1] = false;
              newDisabled[index] = true;  
              setDisabled(newDisabled);
              setTimeout(()=>{
                inputRefs.current[index + 1].current.focus();
              },0)
            }
        }
    }
    //This code allows the backspace taken as an input and takes you back to the previous input when you hit it. It also makes the current index no longer active/editable
    const handleKeyDown = (e, index) =>{
        if(e.key === 'Backspace' && !inputs[index] && index > 0){
            const newInputs = [...inputs];
            newInputs[index - 1] = '';
            setInputs(newInputs);
            //sets the previous tile to disabled = false so that when you backspace you can enter in the info from before
            const newDisabled = [...disabled]
            newDisabled[index-1] = false;
            newDisabled[index]=true;
            setDisabled(newDisabled);
            //focus on the previous input
            setTimeout(()=>{
                inputRefs.current[index - 1].current.focus();
              },0)
        }
        //This is the code that handles when you hit enter after typing in all 5 letters of your guess.
        //It takes the existing state of disabled and makes a shallow copy. Then sets the values to true and disables the existing row.
        //It then sets status to an array of values of either "correct","partial","incorrect".
        //then it updates the guessStatus state with those values. those are stored in the app.jsx
        if(e.key === 'Enter' && index=== inputs.length - 1 && inputs[4]!==""){
            const newDisabled = [...disabled]
            newDisabled[index]=true;
            setDisabled(newDisabled);
            onRowComplete(rowIndex);
            const status = CompareGuessToWOTD(WOTD, inputs, guessStatus, activeRow)
            setGuessStatus(status.newGuessStatus);
            //This part handles storing the guess and creating state for the guess in each game
            const guess = [...inputs];
            const newFullGuess = [...fullGuess]
            newFullGuess[activeRow] = guess;
            setFullGuess(newFullGuess);
            console.log(newFullGuess);
            //This is what returns which guess was the correct answer
            if(status.winningGuess){
                setGameOver(true);
                let correctGuessIndex = [activeRow] + 1;
                console.log(correctGuessIndex)
                return correctGuessIndex;
            }

            //if you try to enter before all 5 inputs are entered it will give you this warning
        }else if (e.key === 'Enter' && (index!==inputs.length-1 || inputs[4]=="")){
            alert('Please fill the entire row before pressing enter')
        }
        //just allows you to hit escape to stop entering any words
        if(e.key === 'Escape' && index){
            e.preventDefault();
            e.target.blur();
        }
    };

    const setRef = useCallback((element, index) => {
        inputRefs.current[index] = { current: element };
    }, []);

    return(
            <div 
            className="tile-row">
                {inputs.map((input, index) =>{
                    const cellDisabled = disabled[index] || !active || gameOver;
                    const status = guessStatus[rowIndex][index]
                    return(
                    <div key={index} className="singleTile" style={{backgroundColor: getStatusColor(status)}}>
                        <input
                            type="text"
                            ref={(element)=> setRef(element,index)}
                            className="letterBox"
                            value={input}
                            onChange={(e)=> handleInputChange(e,index)}
                            onKeyDown={(e)=> handleKeyDown(e, index)}
                            disabled={cellDisabled}
                            maxLength={1}
                        /> 
                    </div>)
                })}
            </div>            
    );
}
//{background: cellDisabled ? "grey" : ""}