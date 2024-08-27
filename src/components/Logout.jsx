import {amber} from "@mui/material/colors";
import Button from "@mui/material/Button";
import * as React from "react";
import { useNavigate } from "react-router-dom"


const Logout = () => {

    const navigate = useNavigate();
    return(
<Button
    style={{
        backgroundColor: '#3c52b2',
        color: amber["900"]
    }}
    onClick={() => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('usernamepassword');
        sessionStorage.removeItem('usertoken');
        navigate("/");
    }}
>
    Log Out
</Button>);
}
export default Logout;
