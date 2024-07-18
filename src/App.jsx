import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import StandardGameBoard from './components/StandardGameBoard.jsx'
import HomePage from './components/HomePage.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/standard_game' element={<StandardGameBoard/>}/>
      </Routes>
    </>
  )
}

export default App
