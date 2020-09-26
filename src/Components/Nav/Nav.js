import React from "react";
import { NavContainer } from "./Nav.styles";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <NavContainer>
            <div className="wrapper">
                <h1 className="logo">Logo</h1>
                <div className="navlinks">
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                </div>
            </div>
        </NavContainer>
    );
};

export default Nav;
