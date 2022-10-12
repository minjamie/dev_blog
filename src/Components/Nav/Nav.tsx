import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
    const navigate = useNavigate();

    const [active, ActiveSearch] = useState<string>("");
    const [search, setSearch] = useState<boolean>(false);

    useEffect(() => {
        search ? ActiveSearch("active") : ActiveSearch("");
    });
    return (
        <Navbar className={`Nav-bar ${active}`} expand="lg">
            <Container className="Nav-container">
                <ul className="Nav-left">
                    <Navbar.Brand href="#home">
                        <img src="/logo.png" className="Main-logo" alt="logo" />
                    </Navbar.Brand>
                </ul>
                <ul className="Nav-right">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                onClick={() => {
                                    navigate("/UBcare");
                                }}
                            >
                                UBcare
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    navigate("/newsroom");
                                }}
                            >
                                newsroom
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    navigate("/culture");
                                }}
                            >
                                culture
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    navigate("/design");
                                }}
                            >
                                design
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    navigate("/COMMIT");
                                }}
                            >
                                COMMIT
                            </Nav.Link>
                            <Nav.Link>
                                <Search
                                    onClick={() => {
                                        search
                                            ? setSearch(false)
                                            : setSearch(true);
                                    }}
                                    className="Nav-search"
                                />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </ul>
            </Container>
            {search && <Container className="Search-bar">서치바</Container>}
        </Navbar>
    );
}

export default NavBar;
