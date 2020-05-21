import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import Sidebar from '../../components/molecules/Sidebar'
import Topbar from "../../components/molecules/Topbar";
import { Wrapper } from './styles'

const { Content } = Layout

const DefaultLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <Wrapper>
      <Layout>
        <Sidebar isCollapsed={isCollapsed} />
        <Layout className="site-layout">
            <Topbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
  )
}

export default DefaultLayout

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
