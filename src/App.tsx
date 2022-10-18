import NavBar from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" />
            </Routes>
            <div style={{ height: "400px" }}>abc</div>
            <div style={{ height: "400px" }}>abc</div>
            <div style={{ height: "400px" }}>abc</div>
            <div style={{ height: "400px" }}>abc</div>
            <div style={{ height: "400px" }}>abc</div>
        </div>
    );
}

export default App;
