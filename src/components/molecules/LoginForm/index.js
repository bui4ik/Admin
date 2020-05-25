import React from 'react'
import { Checkbox, Form } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import {
  Wrapper,
  Box,
  FormWrapper,
  FormContent,
  StyledBtn,
  StyledInput,
  StyledPassInput,
} from './styles'
import useLoginForm from './useLoginForm'
import Title from '../../atoms/Typography/title'

const LoginForm = () => {
  const [logIn] = useLoginForm()

  return (
    <Wrapper>
      <Box>
        <Title text="Sign in" />
      </Box>
      <FormWrapper>
        <Form name="basic" initialValues={{ remember: true }} onFinish={logIn}>
          <FormContent>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <StyledInput placeholder="Username" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <StyledPassInput placeholder="Password" prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <StyledBtn type="primary" htmlType="submit" shape="round">
                Sign in
              </StyledBtn>
            </Form.Item>
          </FormContent>
        </Form>
      </FormWrapper>
    </Wrapper>
  )
}

export default LoginForm
