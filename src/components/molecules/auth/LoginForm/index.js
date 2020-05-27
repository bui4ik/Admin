import React from 'react'
import { Checkbox, Form } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import useLoginForm from './useLoginForm'
import { FormContent, StyledBtn, StyledInput, StyledPassInput } from './styles'

const LoginForm = () => {
  const [logIn] = useLoginForm()

  return (
    <Form name="basic" initialValues={{ remember: true }} onFinish={logIn}>
      <FormContent>
        <Form.Item
          id="username"
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
  )
}

export default LoginForm
