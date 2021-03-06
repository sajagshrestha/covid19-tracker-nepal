//import dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
//import styles
import { Main, darkTheme, lightTheme } from "./App.styles";
//import components
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
//Main component
const App = () => {
  //for darkmode toggle
  const ls = require("local-storage");
  const [darkMode, setDarkMode] = useState(
    ls.get("darkMode", true) ? true : false
  );
  //
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Main>
        <Router>
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
          <Switch>
            <Route exact path="/">
              <Home />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </Main>
    </ThemeProvider>
  );
};

export default App;
