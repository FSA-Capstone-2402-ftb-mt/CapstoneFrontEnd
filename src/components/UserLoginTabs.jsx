import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import {getUserStats,updateUsername,updatePassword} from "../api/userApi.js";
import {useState,useEffect} from "react";
import {amber} from "@mui/material/colors";
import { useNavigate } from "react-router-dom"


export default function ShowTabs() {
    const [value, setValue] = React.useState('1');
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [rows,setRows] = useState("");
    const navigate = useNavigate();


    const getRows = async() => {
        const user = await getUserStats(sessionStorage.getItem('username'));
        console.log("user:",user);
        setRows(user.stats);
    }

    console.log("rows:",rows);

    useEffect(() => {
        getRows();
    }, []);

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSettingsCredentialChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let oldUserName = sessionStorage.getItem("username");
            let oldUserNamePassword = sessionStorage.getItem("usernamepassword");
            let data1 = await updateUsername(oldUserName,formData.username);
            console.log("data1:",data1);
            sessionStorage.setItem('username',formData.username);
            let newUserName = sessionStorage.getItem("username");
            let newUserNamePassword = formData.password;
            console.log("oldusername:",oldUserName);
            console.log("newusername:",newUserName);
            console.log("olduserpassword:",oldUserNamePassword);
            console.log("newuserpassword:",newUserNamePassword);
            let data2 = await updatePassword(newUserName,oldUserNamePassword,formData.password);
            console.log("data2:",data2);
            setSuccessMessage("Username and password updated successfully!");
        } catch (error) {
            setError(error.message);
        }
    };

    if(!rows)
        return <h1>loading</h1>;
    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Statistics" value="1" />
                        <Tab label="Settings" value="2" />
                        <Tab label="Log Out" value="3" />
                        <Tab label="Home" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Max Streak</TableCell>
                                    <TableCell>Overall Games</TableCell>
                                    <TableCell>Regular Games</TableCell>
                                    <TableCell>Timed Games</TableCell>
                                    <TableCell>Timed Score</TableCell>
                                    <TableCell>Word Count</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    key={rows.username}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        {rows.username}
                                    </TableCell>
                                    <TableCell align="center">{rows.max_streak}</TableCell>
                                    <TableCell align="center">{rows.number_of_games.overall_games}</TableCell>
                                    <TableCell align="center">{rows.number_of_games.regular_games}</TableCell>
                                    <TableCell align="center">{rows.number_of_games.timed_games}</TableCell>
                                    <TableCell align="center">{rows.timed_score}</TableCell>
                                    <TableCell align="center">{rows.word_count}</TableCell>


                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value="2">
                    {error && (
                        <p
                            style={{
                                color: "red",
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                            }}
                        >
                            {error}
                        </p>
                    )}
                    {successMessage && (
                        <p
                            style={{
                                color: "green",
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                            }}
                        >
                            {successMessage}
                        </p>
                    )}
                    <form onSubmit={handleSubmit}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': {m: 1, width: '25ch'},
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    defaultValue="username"
                                    value={formData.name}
                                    name="username"
                                    onChange={handleSettingsCredentialChange}
                                />
                                <TextField
                                    required
                                    id="outlined-disabled"
                                    label="Required"
                                    defaultValue="password"
                                    value={formData.password}
                                    name="password"
                                    onChange={handleSettingsCredentialChange}
                                />
                            </div>
                        </Box>
                        <Stack direction="row" spacing={2}>
                            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </TabPanel>
                <TabPanel value="3">
                    <Button
                        style={{
                            backgroundColor:'#3c52b2',
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
                    </Button>
                </TabPanel>
                <TabPanel value="4">
                    <Button
                        style={{
                            backgroundColor:'#3c52b2',
                            color: amber["900"]
                        }}
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Go to Home Page
                    </Button>
                </TabPanel>
            </TabContext>
        </Box>
    );
}