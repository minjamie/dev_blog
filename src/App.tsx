import NavBar from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Main from "Pages/Main/Main";
import Menu from "Pages/Menu/Menu";

function App() {
    const [category, setCategory] = useState([
        { id: 0, name: "Story" },
        { id: 1, name: "Tech" },
        { id: 2, name: "Culture" },
        { id: 3, name: "Sign-Up" },
    ]);

    return (
        <div className="App">
            <NavBar category={category} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path={`${category[0].name}`}
                    element={<Menu category={category[0].name} />}
                />
                <Route
                    path={`${category[1].name}`}
                    element={<Menu category={category[1].name} />}
                />
                <Route
                    path={`${category[2].name}`}
                    element={<Menu category={category[2].name} />}
                />
                <Route
                    path={`${category[3].name}`}
                    element={<Menu category={category[3].name} />}
                />
            </Routes>
        </div>
    );
}

export default App;
``;
