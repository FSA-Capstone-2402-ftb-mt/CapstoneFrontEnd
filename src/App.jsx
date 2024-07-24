import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import StandardGameBoard from './components/GameBoard/StandardGameBoard.jsx'
import HomePage from './components/HomePage.jsx'
// need to add element to timed_game mode
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/standard_game' element={<StandardGameBoard/>}/>
        <Route path='/timed_game'/>
        <Route path='/account_details'/>
      </Routes>
    </>
  )
}

export default App
