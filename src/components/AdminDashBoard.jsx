import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminAppBar from './AdminComponents/AppBar';
import WordTable from './AdminComponents/WordTab';
import UserTable from './AdminComponents/UserTab';
import allWords from './AdminComponents/AllWords';
import AllUsers from './AdminComponents/AllUser';



export default function AdminDashBoard() {


  return (
    <>
      <h1>Admin Dashboard</h1>
      <AdminAppBar/>
      <WordTable/>
      <UserTable/>

     <Routes> 
        <Route path ='/admin_dashboard/AllWords' element={<allWords/>}/>
        <Route path = '/admin_dashboard/AllUsers' element={<AllUsers/>}/>
     </Routes>
    </>
  );
}