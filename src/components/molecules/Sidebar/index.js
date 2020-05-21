import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'
import { Logo } from "./styles";

const { Sider } = Layout

const Sidebar = ({ isCollapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={isCollapsed}>
      <Logo />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar

Sidebar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
}
