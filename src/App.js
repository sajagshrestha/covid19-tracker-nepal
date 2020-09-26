//import dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
//import styles
import { Main, darkTheme, lightTheme } from "./App.styles";
//import components
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
//Main component
const App = () => {
    //for darkmode toggle
    const [darkMode, setDarkMode] = useState(true);
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Main>
                <Router>
                    <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                    </Switch>
                </Router>
            </Main>
        </ThemeProvider>
    );
};

export default App;
