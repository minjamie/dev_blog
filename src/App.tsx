import NavBar from "./Components/Nav/Nav";
import FooterBar from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Main from "Pages/Main/Main";
import Menu from "Pages/Menu/Menu";
import People from "Pages/Culture/People/People";

function App() {
    const [category, setCategory] = useState([
        { id: 0, name: "Story" },
        { id: 1, name: "Tech" },
        { id: 2, name: "Culture" },
        { id: 3, name: "Sign-In" },
    ]);

    const [footerMenu, setFooterMenu] = useState([
        { id: 0, name: "유비케어" },
        { id: 1, name: "뉴스" },
        { id: 2, name: "제품" },
        { id: 3, name: "채용" },
    ]);

    return (
        <div className="App">
            <NavBar category={category} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path={`${category[0].name}`}
                    element={<Menu category={category[0]} />}
                />
                <Route
                    path={`${category[1].name}`}
                    element={<Menu category={category[1]} />}
                />
                <Route
                    path={`${category[2].name}`}
                    element={<Menu category={category[2]} />}
                />
                <Route path={`${category[2].name}/:id`} element={<People />} />
            </Routes>
            <span className="site-actions-backdrop"></span>
            <FooterBar footerMenu={footerMenu} />
        </div>
    );
}

export default App;
``;
