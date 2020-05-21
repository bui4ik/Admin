import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'

const AuthLayout = ({ children }) => <Wrapper>{children}</Wrapper>

export default AuthLayout

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
