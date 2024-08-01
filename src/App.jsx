import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StandardGameBoard from './components/StandardGameBoard.jsx';
import HomePage from './components/HomePage.jsx';
import AdminDashBoard from './components/AdminComponents/AdminDashBoard.jsx';
import AllUsers from './components/AdminComponents/AllUser.jsx';
import AllWords from './components/AdminComponents/AllWords.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/standard_game' element={<StandardGameBoard />} />
        <Route path='/admin_dashboard/*' element={<AdminDashBoard />} />
        <Route path='/admin_dashboard/AllWords' element={<AllWords />} />
        <Route path='/admin_dashboard/AllUsers' element={<AllUsers />} />
      </Routes>
    </>
  )
}

export default App
