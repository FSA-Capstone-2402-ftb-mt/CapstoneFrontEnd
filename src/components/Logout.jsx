import {amber} from "@mui/material/colors";
import Button from "@mui/material/Button";
import * as React from "react";
import { useNavigate } from "react-router-dom"
import {useEffect} from "react";


const Logout = () => {

    const navigate = useNavigate();

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('usernamepassword');
    sessionStorage.removeItem('usertoken');
    useEffect(() => {
        navigate('/');
    }, []);


}
export default Logout;
