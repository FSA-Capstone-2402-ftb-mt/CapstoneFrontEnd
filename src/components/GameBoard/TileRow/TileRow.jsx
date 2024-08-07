import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { CompareGuessToWOTD } from "./HandleInputChange";
import getStatusColor from "./StatusColor";

export default function TileRow({onRowComplete, rowIndex, active, status, guessStatus, setGuessStatus, guessIndex, setGuessIndex, activeRow, gameOver, setGameOver}){
    const[inputs, setInputs] = useState(['','','','','']);
    const[disabled, setDisabled] = useState([false,true,true,true,true]);
    // const[guessStatus, setGuessStatus]=useState(['','','','',''])
    // const[focusIndex, setFocusIndex]=useState(null);
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
        if(e.key === 'Enter' && index=== inputs.length - 1){
            const newDisabled = [...disabled]
            newDisabled[index]=true;
            setDisabled(newDisabled);
            onRowComplete(rowIndex);
            const status = CompareGuessToWOTD('APPLE', inputs, guessStatus, activeRow)
            setGuessStatus(status.newGuessStatus);
            if(status.winningGuess){
                setGameOver(true);
            }
        }else if (e.key === 'Enter' & index!==inputs.length-1){
            alert('Please fill the entire row before pressing enter')
        }
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