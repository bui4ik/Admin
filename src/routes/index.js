import React from "react";
import { Switch, Route } from 'react-router'
import routes from "../config/routes";
import Main from "../pages/Main";
import Auth from "../pages/Auth";

const Routes = () => (
    <Switch>
        <Route path={routes.root} exact component={Main}/>
        <Route path={routes.auth} exact component={Auth}/>
    </Switch>
)

export default Routes
