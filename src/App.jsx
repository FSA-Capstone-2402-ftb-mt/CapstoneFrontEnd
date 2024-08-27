import { useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import StandardGameBoard from './components/GameBoard/StandardGameBoard.jsx';
import HomePage from './components/HomePage.jsx';
import AdminDashBoard from './components/AdminComponents/AdminDashBoard.jsx';
import AllUsers from './components/AdminComponents/AllUser.jsx';
import AllWords from './components/AdminComponents/AllWords.jsx';
import CalendarWithWords from './components/AdminComponents/CurrentMonthWords.jsx';
import FetchWordOfTheDay from './components/AdminComponents/WordOfTheDay.jsx';
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import UserLoginTabs from "./components/UserLoginTabs";


function App() {
  const [guessStatus, setGuessStatus] = useState([['','','','','',],['','','','','',],['','','','','',],['','','','','',],['','','','','',],['','','','','',]])
  const [guessIndex, setGuessIndex] = useState(0);
  const [fullGuess, setFullGuess] = useState([[],[],[],[],[],[]])
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin/admin_dashboard/*' element={<AdminDashBoard />} />
        <Route path='/standard_game' 
          element={<StandardGameBoard
                guessStatus={guessStatus}
                setGuessStatus={setGuessStatus}
                guessIndex={guessIndex}
                setGuessIndex={setGuessIndex}
                fullGuess={fullGuess}
                setFullGuess={setFullGuess}
          />}/>
        <Route path='/admin_dashboard/AllWords' element={<AllWords />} />
        <Route path='/admin_dashboard/AllUsers' element={<AllUsers />} />
        <Route path='/CurrentMonthWords' element={<CalendarWithWords />} />
        <Route path='/WordOfTheDay' element={<FetchWordOfTheDay />} />
        <Route path='/timed_game' />
        <Route path='/account_details' />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/loginTabs' element={<UserLoginTabs />} />
          <Route path='/logout' element={<Logout />} />
      </Routes>
    </>
  )
}

export default App;
