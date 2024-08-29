/* TODO - add your code to create a functional React component that renders a login form */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import {amber} from "@mui/material/colors";
import Button from "@mui/material/Button";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await fetch(
                "http://localhost:3032/api/users/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                }
            );
            if (response.ok) {
                const data = await response.json();
                console.log("data:",data);
                setLogin(true);
                sessionStorage.setItem('username',username);
                sessionStorage.setItem('usernamepassword',password);
                if (data.isAdmin) {
                    sessionStorage.setItem('adminToken', data.adminToken);
                    navigate('/admin/admin_dashboard')
                }else {
                    sessionStorage.setItem('usertoken', data.token);
                    navigate('/loginTabs');
                }
                console.log(data.token);
            } else {
                setError("Login failed");
            }
        } catch (err) {
            setError("Login failed");
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
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
            {login && <p style={{
                color: "green",
                fontSize: "1.5rem",
                fontWeight: "bold",
            }}>Login successful</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit"
                        style={{
                            /*backgroundColor: '#3c52b2',*/
                            color: amber["900"]
                        }}>Login
                </button>
            </form>
            <div>
                <Button
                    style={{
                        marginTop: 10,
                        backgroundColor: '#3c52b2',
                        color: amber["900"]
                    }}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Go to Home Page
                </Button>
            </div>
        </div>

    );
};

export default Login;
