import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { Wrapper, Title, Box, FormWrapper } from './styles'
import useLoginForm from './useLoginForm'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const LoginForm = () => {
  const [logIn] = useLoginForm()

  return (
    <Wrapper>
      <Box>
        <Title>Sign in</Title>
      </Box>
      <FormWrapper>
        <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={logIn}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
              <Button type="primary" htmlType="submit" shape="round">
                Sign in
              </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </Wrapper>
  )
}

export default LoginForm
