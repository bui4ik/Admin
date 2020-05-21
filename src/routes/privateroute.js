import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'
import routes from '../config/routes'
import * as selectors from '../store/auth/selectors'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: routes.auth }} />
    }
  />
)

const mapStateToProps = (state) => {
  return {
    isAuthenticated: selectors.isAuthSelector(state),
  }
}

export default connect(mapStateToProps)(PrivateRoute)

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}
