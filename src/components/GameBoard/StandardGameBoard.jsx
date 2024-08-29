import React, { useEffect } from "react";
import { useState } from "react";
import TileRow from './TileRow/TileRow';
import VirtualKeyboard from "./VirtualKeyboard/keyboard";

export default function StandardGameBoard({guessStatus, setGuessStatus, guessIndex, setGuessIndex, fullGuess, setFullGuess, WOTD}){
const [activeRow, setActiveRow] = useState(0);
const [gameOver, setGameOver]=useState(false);
const [correctGuess, setCorrectGuess] = useState(false);

const username = sessionStorage.getItem('username')
const token = sessionStorage.getItem('usertoken')
// console.log(username);
// const username = "TylerS"

const handleRowComplete = (rowIndex)=>{
    //This correctly sets game over to True if you fail to get the correct guess after 5 guesses
    if(rowIndex === 5 && !correctGuess){
        setGameOver(true)
    }
    if(rowIndex < 5){
        setActiveRow(rowIndex+1)
    }
}
//Backend stat database needs "username", "correctGuess" which is T/F, "attempts" = # of guesses it took, "word" = WOTD
let word = WOTD;

async function updateStats(username, correctGuess, attempts, word){
    try{
        // NEEDS FIXING / FINISHING
        const response = await fetch('http://localhost:3032/api/game/regular',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify({username: username, correctGuess: correctGuess, attempts: attempts, word: word })
        });
        const info = await response.json();
        console.log(info);
    }catch(e){
        console.error('Failure to update stats',e)
    }
}
useEffect(()=>{
    if(gameOver){
        console.log("Updating Stats")
        updateStats(username, correctGuess, activeRow, word)
    }
},[activeRow, gameOver])

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
                        setCorrectGuess={setCorrectGuess}
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