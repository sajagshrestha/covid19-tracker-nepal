import React, { useState } from "react";
import { NavContainer, NavWrapper, Logo, NavLinks } from "./Nav.styles";
import { Wrapper } from "../../App.styles";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as WebLogo } from "./Logo.svg";

import FormControlLabel from "@material-ui/core/FormControlLabel";

import Switch from "@material-ui/core/Switch";
const ls = require("local-storage");
const MySwitch = withStyles({
  switchBase: {
    color: "#FE4F60",
    "&$checked": {
      color: "#EB3B3B",
    },
    "&$checked + $track": {
      backgroundColor: "#EB3B3B",
    },
  },
  checked: {},
  track: {},
})(Switch);
const Nav = ({ darkMode, setDarkMode }) => {
  const [checked, setChecked] = useState(darkMode ? true : false);
  const darkModeToggle = () => {
    if (darkMode === true) {
      ls.set("darkMode", false);
      setChecked(false);
      setDarkMode(false);
    } else {
      setDarkMode(true);
      setChecked(true);
      ls.set("darkMode", true);
    }
  };
  return (
    <NavContainer>
      <Wrapper flexCenter={true}>
        <NavWrapper>
          <Logo>
            <Link to="/">
              <WebLogo className="web-logo" />
            </Link>
          </Logo>
          <NavLinks>
            <div className="dark-mode">Dark Mode</div>
            <FormControlLabel
              control={<MySwitch onChange={darkModeToggle} checked={checked} />}
            />
          </NavLinks>
        </NavWrapper>
      </Wrapper>
    </NavContainer>
  );
};

export default Nav;
