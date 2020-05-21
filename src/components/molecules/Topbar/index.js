import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { IconOpen, IconClose } from './styles'

const { Header } = Layout

const Topbar = ({ isCollapsed, setIsCollapsed }) => (
  <Header style={{ padding: 0 }}>
    {isCollapsed ? (
      <IconOpen onClick={() => setIsCollapsed(!isCollapsed)} />
    ) : (
      <IconClose onClick={() => setIsCollapsed(!isCollapsed)} />
    )}
  </Header>
)

export default Topbar

Topbar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  setIsCollapsed: PropTypes.func.isRequired,
}
