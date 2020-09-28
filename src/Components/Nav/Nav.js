import React from "react";
import { NavContainer } from "./Nav.styles";
import { Link } from "react-router-dom";
const ls = require("local-storage");
const Nav = ({ darkMode, setDarkMode }) => {
    const darkModeToggle = () => {
        if (darkMode === true) {
            ls.set("darkMode", false);
            setDarkMode(false);
        } else {
            setDarkMode(true);
            ls.set("darkMode", true);
        }

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
