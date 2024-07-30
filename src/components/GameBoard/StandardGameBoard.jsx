import React from "react";
import { useState } from "react";
import TileRow from './TileRow/TileRow';

export default function StandardGameBoard(){
const [activeRow, setActiveRow] = useState(0);

const handleRowComplete = (rowIndex)=>{
    if(rowIndex < 5){
        setActiveRow(rowIndex+1)
    }
}
    return(
        <>
            <div className="game-board">
                {[...Array(6)].map((_, index)=>(
                    <TileRow
                        key={index}
                        rowIndex={index}
                        active={index === activeRow}
                        onRowComplete={handleRowComplete}
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