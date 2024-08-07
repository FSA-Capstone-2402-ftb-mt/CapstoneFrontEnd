import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StandardGameBoard from './components/GameBoard/StandardGameBoard.jsx';
import HomePage from './components/HomePage.jsx';
import AdminDashboard from './components/AdminDashBoard.jsx';
//need to add all guess arrays and fix the handleInputChange
//maybe use refs instead of state
function App() {
  const [guessStatus, setGuessStatus] = useState([['','','','','',],['','','','','',],['','','','','',],['','','','','',],['','','','','',],['','','','','',]])
  const [guessIndex, setGuessIndex] = useState(0);
  const [fullGuess, setFullGuess] = useState(['','','','','',''])
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/standard_game' 
          element={<StandardGameBoard
                guessStatus={guessStatus}
                setGuessStatus={setGuessStatus}
                guessIndex={guessIndex}
                setGuessIndex={setGuessIndex}
          />}/>
        <Route path='/timed_game'/>
        <Route path='/account_details'/>
        <Route path='/admin_dashboard' element={<AdminDashboard/>}/>
      </Routes>
    </>
  )
}

export default App
