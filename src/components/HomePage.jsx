import React from "react";
import { Link } from "react-router-dom";
//Need to make account details show up depending if you are logged in or not.
export default function HomePage(){


    return(
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/standard_game">Play Standard</Link>
                <Link to="/timed_game">Timed Wordle</Link>
                <Link to="/account_details">Account</Link>
            </div>
        </>
    )
}