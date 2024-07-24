import React from "react";
import TileRow from './TileRow';

export default function StandardGameBoard(){

    return(
        <>
            <div className="game-board">
                <TileRow />
                <TileRow />
                <TileRow />
                <TileRow />
                <TileRow />
                <TileRow />
            </div>
        </>
    );
}