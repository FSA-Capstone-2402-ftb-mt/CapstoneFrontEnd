import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import AdminAppBar from './AppBar';
import WordTable from './WordTab';
import UserTable from './UserTab';



export default function AdminDashBoard() {


  return (
    <>
      <h1>Admin Dashboard</h1>
      <AdminAppBar />
      <WordTable />
      <UserTable />
    </>
  );
};