import React from 'react'
import { Tabs } from 'antd'
import AuthLayout from '../../layouts/AuthLayout'
import LoginForm from '../../components/molecules/auth/LoginForm'
import RegistrationForm from '../../components/molecules/auth/RegistrationForm'
import FormWrapper from "../../components/molecules/auth/FormWrapper";
import { Wrapper } from './styles'

const { TabPane } = Tabs

const Auth = () => (
  <AuthLayout>
    <Wrapper>
      <Tabs defaultActiveKey="1" size="large">
        <TabPane tab="LOG IN" key="1">
          <FormWrapper title="Sign in">
            <LoginForm />
          </FormWrapper>
        </TabPane>
        <TabPane tab="REGISTRATION" key="2">
          <FormWrapper title="Create account">
            <RegistrationForm />
          </FormWrapper>
        </TabPane>
      </Tabs>
    </Wrapper>
  </AuthLayout>
)

export default Auth
