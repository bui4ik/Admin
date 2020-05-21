import React from 'react'
import { Button, Form, Input } from 'antd'
import { Box, FormWrapper, Title, Wrapper } from '../LoginForm/styles'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const RegistrationForm = () => {
  return (
    <Wrapper>
      <Box>
        <Title>Create account</Title>
      </Box>
      <FormWrapper>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={(values) => console.log(values)}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
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

          <Form.Item
              label="Repeat password"
              name="repeat_password"
              rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" shape="round">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </Wrapper>
  )
}

export default RegistrationForm
