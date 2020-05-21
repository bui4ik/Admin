import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const { Header } = Layout

const Topbar = ({ isCollapsed, setIsCollapsed }) => (
  <Header className="site-layout-background" style={{ padding: 0 }}>
    {isCollapsed ? (
      <MenuUnfoldOutlined onClick={() => setIsCollapsed(!isCollapsed)} />
    ) : (
      <MenuFoldOutlined onClick={() => setIsCollapsed(!isCollapsed)} />
    )}
  </Header>
)

export default Topbar

Topbar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  setIsCollapsed: PropTypes.func.isRequired
}
