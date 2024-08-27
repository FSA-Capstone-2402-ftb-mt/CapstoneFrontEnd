import React from "react";
import {Link} from "react-router-dom";
//Need to make account details show up depending if you are logged in or not.
export default function HomePage(){

    if(sessionStorage.getItem('username' ) === null){
    return(
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/standard_game">Play Standard</Link>
                <Link to="/timed_game">Timed Wordle</Link>
                <Link to="/account_details">Account</Link>
            </div>
        </>
    )
    } else{
        return(
            <>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/standard_game">Play Standard</Link>
                    <Link to="/timed_game">Timed Wordle</Link>
                    <Link to="/account_details">Account</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            </>
        )
    }
}