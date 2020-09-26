//import dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import styles
import { Main } from "./App.styles";
//import components
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
//Main component
const App = () => {
    return (
        <Main>
            <Router>
                <Nav />
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
    );
};

export default App;
