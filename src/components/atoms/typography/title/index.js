import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../../../config/theme'

const Title = ({ text, color = theme.grey }) => <Element color={color}>{text}</Element>

export default Title

const Element = styled.h1`
  font-weight: bold;
  margin: 0;
  color: ${({ color }) => color};
  font-size: 28px;
`

Title.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Title.defaultProps = {
  color: theme.grey,
}
