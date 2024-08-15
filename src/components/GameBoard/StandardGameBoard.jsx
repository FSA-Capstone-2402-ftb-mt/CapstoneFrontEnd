import React from "react";
import { useState } from "react";
import TileRow from './TileRow/TileRow';

export default function StandardGameBoard({guessStatus, setGuessStatus, guessIndex, setGuessIndex}){
const [activeRow, setActiveRow] = useState(0);
const [gameOver, setGameOver]=useState(false);


const handleRowComplete = (rowIndex)=>{
    if(rowIndex < 5){
        setActiveRow(rowIndex+1)
    }
}
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
                        gameOver={gameOver}
                        setGameOver={setGameOver}
                    />))}
                {/* <TileRow />
                <TileRow />
                <TileRow />
                <TileRow />
                <TileRow />
                <TileRow /> */}
            </div>
        </>
    );
}