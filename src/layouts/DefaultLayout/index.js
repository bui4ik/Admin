import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import Sidebar from '../../components/molecules/Sidebar'
import Topbar from '../../components/molecules/Topbar'
import { Wrapper, ContentBox } from './styles'

const { Content } = Layout

const DefaultLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <Wrapper>
      <Layout>
        <Sidebar isCollapsed={isCollapsed} />
        <Layout>
          <Topbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <Content>
            <ContentBox>{children}</ContentBox>
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
