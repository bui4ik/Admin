import React from "react";
import { Switch, Route } from 'react-router'
import routes from "../config/routes";
import Main from "../pages/Main";

const Routes = () => (
    <Switch>
        <Route path={routes.root} exact component={Main}/>
    </Switch>
)

export default Routes
