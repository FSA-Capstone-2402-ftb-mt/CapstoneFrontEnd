import Navigations from "./components/Navigations";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";


function App() {
    return (
        <Router>
            <div>
                <header>
                    <h1>Wordle</h1>
                </header>

                <Navigations />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
