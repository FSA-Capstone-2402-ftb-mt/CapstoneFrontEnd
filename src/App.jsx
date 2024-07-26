import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StandardGameBoard from './components/StandardGameBoard.jsx';
import HomePage from './components/HomePage.jsx';
import AdminDashboard from './components/AdminDashBoard.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/standard_game' element={<StandardGameBoard/>}/>
        <Route path='/timed_game'/>
        <Route path='/account_details'/>
        <Route path='/admin_dashboard' element={<AdminDashboard/>}/>
      </Routes>
    </>
  )
}

export default App
