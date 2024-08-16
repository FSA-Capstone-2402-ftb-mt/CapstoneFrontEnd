import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashBoard from './AdminComponents/AdminDashBoard';
import allUsers from './AdminComponents/AllUser';
import allWords from './AdminComponents/AllWords';


export default function AdminRoutes() {

    return (

        <>
        <h1>Admin Dashboard</h1>

            <Routes>
                <Route path='/admin_dashboard/' element={<AdminDashBoard/>}/>
            </Routes>
        </>
    );
};
