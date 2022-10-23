import NavBar from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "Pages/Main/Menu";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
    );
}

export default App;
