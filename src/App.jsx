import Navigations from "./components/Navigations";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import UserLoginTabs from "./components/UserLoginTabs";




function App() {
    return (
        <Router>
            <div>
                <header>
                    <h1>Wordle</h1>
                </header>


                <Routes>
                    <Route path="/" element={<Navigations />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/loginTabs" element={<UserLoginTabs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
