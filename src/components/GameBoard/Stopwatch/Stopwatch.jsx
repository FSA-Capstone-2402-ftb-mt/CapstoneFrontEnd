import React, { useState, useEffect } from "react";
import Timer from "./Timer";
// import ControlButtons from "./ControlButtons";

export default function StopWatch({startTimer, setStartTimer, pauseTimer, setPauseTimer, time, setTime}){
// const [startTimer, setStartTimer] = useState(false);
// const[pauseTimer, setPauseTimer] = useState(true);
// const [time, setTime] = useState(0);

useEffect(()=>{
    let interval = null;

    if(startTimer && pauseTimer===false){
        interval = setInterval(()=>{
            setTime((time)=> time + 10)
        }, 10);
    } else{
        clearInterval(interval);
    }
    return ()=>{
        clearInterval(interval)
    }
},[startTimer, pauseTimer])

const handleStart = () =>{
    setStartTimer(true);
    setPauseTimer(false);
}
const handlePauseResume = () =>{
    setPauseTimer(!pauseTimer);
}
const handleReset = ()=>{
    setStartTimer(false);
    setTime(0);
}

    return(
        <div className="Stopwatch">
            <Timer time={time}/>
            {/* <ControlButtons
                startTimer={startTimer}
                pauseTimer={pauseTimer}
                handleStart={handleStart}
                handleReset={handleReset}
                handlePauseResume={handlePauseResume}
            /> */}
        </div>
    )
}