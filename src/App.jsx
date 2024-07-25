import Navigations from "./components/Navigations";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Register from "./components/Register";


function App() {
    return (
        <Router>
            <div>
                <header>
                    <h1>Wordle</h1>
                </header>

                <Navigations />
                <Routes>
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
