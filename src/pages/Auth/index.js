import React from 'react'
import { Tabs } from 'antd'
import AuthLayout from '../../layouts/AuthLayout'
import LoginForm from '../../components/molecules/LoginForm'
import RegistrationForm from '../../components/molecules/RegistrationForm'
import { Wrapper } from './styles'

const { TabPane } = Tabs

const Auth = () => (
  <AuthLayout>
    <Wrapper>
      <Tabs defaultActiveKey="1" size="large" style={{ marginBottom: 32 }}>
        <TabPane tab="LOG IN" key="1">
          <LoginForm />
        </TabPane>
        <TabPane tab="REGISTRATION" key="2">
          <RegistrationForm />
        </TabPane>
      </Tabs>
    </Wrapper>
  </AuthLayout>
)

export default Auth
