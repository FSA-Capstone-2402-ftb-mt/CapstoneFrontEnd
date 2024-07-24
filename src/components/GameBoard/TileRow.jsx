import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";

export default function TileRow(){
    const[inputs, setInputs] = useState(['','','','','']);
    const[disabled, setDisabled] = useState([false,true,true,true,true]);
    // const[focusIndex, setFocusIndex]=useState(null);
    const inputRefs = useRef([]);

    useEffect(()=>{
        inputRefs.current = inputRefs.current.slice(0, inputs.length).map((_, i)=> inputRefs.current[i] || React.createRef());
    },[inputs.length]);

    // useEffect(()=>{
    //     if(focusIndex !== null && inputRefs.current[focusIndex]){
    //          inputRefs.current[focusIndex].current.focus();
    //     }
    // },[focusIndex])

    const handleInputChange = (e, index) =>{
        const value = e.target.value;
        if(value.length <=1){
            //creating a shallow copy to avoid directly mutating the state
            const newInputs = [...inputs];
            newInputs[index] = value;
            setInputs(newInputs);

            if(value && index < inputs.length - 1){
              const newDisabled = [...disabled];
              newDisabled[index + 1] = false;  
              setDisabled(newDisabled);
              setTimeout(()=>{
                inputRefs.current[index + 1].current.focus();
              },0)
            //   setFocusIndex(index + 1);
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
            setDisabled(newDisabled);
            //focus on the previous input
            setTimeout(()=>{
                inputRefs.current[index - 1].current.focus();
              },0)
        }
    };

    const setRef = useCallback((element, index) => {
        inputRefs.current[index] = { current: element };
    }, []);
    return(
            <div className="tile-row">
                {inputs.map((input, index) =>{
                    return(
                    <div key={index} className="singleTile">
                        <input
                            type="text"
                            ref={(element)=> setRef(element,index)}
                            className="letterBox"
                            value={input}
                            onChange={(e)=> handleInputChange(e,index)}
                            onKeyDown={(e)=> handleKeyDown(e, index)}
                            disabled={disabled[index]}
                            maxLength={1}
                        /> 
                    </div>)
                })}
            </div>            
    );
}
