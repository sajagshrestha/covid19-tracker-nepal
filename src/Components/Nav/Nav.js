import React from "react";
import { NavContainer } from "./Nav.styles";
import { Link } from "react-router-dom";

const Nav = ({ darkMode, setDarkMode }) => {
    const darkModeToggle = () => {
        if (darkMode === true) {
            setDarkMode(false);
        } else setDarkMode(true);

        console.log(darkMode);
    };
    return (
        <NavContainer>
            <div className="wrapper">
                <h1 className="logo">Logo</h1>
                <div className="navlinks">
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>

                    <button onClick={darkModeToggle}>DarkMode</button>
                </div>
            </div>
        </NavContainer>
    );
};

export default Nav;
