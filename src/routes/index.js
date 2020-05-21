import React from 'react'
import { Switch } from 'react-router'
import routes from '../config/routes'
import Main from '../pages/Main'
import Auth from '../pages/Auth'
import PublicRoute from './publicroute'
import PrivateRoute from './privateroute'

const Routes = () => (
  <Switch>
    <PrivateRoute path={routes.root} exact component={Main} />
    <PublicRoute path={routes.auth} exact component={Auth} />
  </Switch>
)

export default Routes
