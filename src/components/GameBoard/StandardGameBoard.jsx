import React from "react";
import { useState } from "react";
import TileRow from './TileRow/TileRow';
import VirtualKeyboard from "./VirtualKeyboard/keyboard";
// import getWOTD from "./TileRow/getWOTD";

export default function StandardGameBoard({guessStatus, setGuessStatus, guessIndex, setGuessIndex, fullGuess, setFullGuess, WOTD}){
const [activeRow, setActiveRow] = useState(0);
const [gameOver, setGameOver]=useState(false);

const handleRowComplete = (rowIndex)=>{
    if(rowIndex < 5){
        setActiveRow(rowIndex+1)
    }
}
console.log(WOTD.word);
//trying to figure out how to import the keyboard so that I can have the onClick of the buttons
//will change the specific input to the value of the key.
    return(
        <>
            <div className="game-board">
                {guessStatus.map((_, index)=>(
                    <TileRow
                        key={index}
                        rowIndex={index}
                        active={index === activeRow}
                        activeRow={activeRow}
                        onRowComplete={handleRowComplete}
                        guessStatus={guessStatus}
                        setGuessStatus={setGuessStatus}
                        guessIndex={guessIndex}
                        setGuessIndex={setGuessIndex}
                        fullGuess={fullGuess}
                        setFullGuess={setFullGuess}
                        gameOver={gameOver}
                        setGameOver={setGameOver}
                        WOTD={WOTD}
                    />))}
                    <VirtualKeyboard
                        guessStatus={guessStatus}
                        activeRow={activeRow}
                        fullGuess={fullGuess}
                    />
            </div>
        </>
    );
}