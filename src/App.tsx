import NavBar from "./Components/Nav/Nav";
import FooterBar from "./Components/Footer/Footer";
import SignIn from "./Components/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "Pages/Main/Main";
import Menu from "Pages/Menu/Menu";
import People from "Pages/Culture/People/People";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSearch } from "Stores/searchSlice";
import { closeCategory } from "Stores/categorySlice";

function App() {
    const [category] = useState([
        { id: 0, name: "Story" },
        { id: 1, name: "Tech" },
        { id: 2, name: "Culture" },
    ]);

    const [footerMenu] = useState([
        { id: 0, name: "유비케어" },
        { id: 1, name: "뉴스" },
        { id: 2, name: "제품" },
        { id: 3, name: "채용" },
    ]);
    const state = useSelector((state: any) => state);
    const dispatch = useDispatch();

    const closeBackdrop = () => {
        if (!state.signIn.active) {
            document.body.style.overflow = "unset";
            dispatch(closeCategory());
            dispatch(closeSearch());
        }
    };

    return (
        <div className="App">
            <NavBar category={category} active={state} />
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
            {state.category.active ||
            state.search.active ||
            state.signIn.active ? (
                <div
                    className={
                        state.signIn.active ||
                        state.search.active ||
                        state.category.active
                            ? "backdrop active"
                            : "backdrop"
                    }
                    onClick={closeBackdrop}
                ></div>
            ) : null}
            {state.signIn.active && <SignIn></SignIn>}
            <FooterBar footerMenu={footerMenu} />
        </div>
    );
}

export default App;
``;
