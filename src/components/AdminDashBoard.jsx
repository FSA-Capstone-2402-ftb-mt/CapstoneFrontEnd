import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminAppBar from './AdminComponents/AppBar';
import WordTable from './AdminComponents/WordTab';
import UserTable from './UserTab';

export default function AdminDashBoard() {


  return (
    <>
      <h1>Admin Dashboard</h1>
      <AdminAppBar/>
      <WordTable/>
      <UserTable/>

     <Routes> 
     </Routes>
    </>
  );
}




