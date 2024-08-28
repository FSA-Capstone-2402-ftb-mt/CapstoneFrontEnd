import React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
//Need to make account details show up depending if you are logged in or not.
export default function HomePage() {


    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"

            >
                <Grid>
                    <Link to="/">Home</Link>
                </Grid>
                <Grid>
                    <Link to="/standard_game">Play Standard</Link>
                </Grid>
                <Grid>
                    <Link to="/timed_game">Timed Wordle</Link>
                </Grid>
                <Grid>
                    <Link to="/account_details">Account</Link>
                </Grid>
            </Grid>
        </>
    )
}