import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import Auth from "../hoc/auth";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Auth(LandingPage, null)}
                    ></Route>
                    <Route
                        exact
                        path="/login"
                        component={Auth(LoginPage, false)}
                    ></Route>
                    <Route
                        exact
                        path="/register"
                        component={Auth(RegisterPage, false)}
                    ></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
