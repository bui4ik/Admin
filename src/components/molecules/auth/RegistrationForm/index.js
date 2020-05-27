import React from 'react'
import { Form } from 'antd'
import { StyledBtn, FormContent, StyledInput, StyledPassInput } from '../LoginForm/styles'

const RegistrationForm = () => {
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={(values) => console.log(values)}
    >
      <FormContent>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <StyledInput placeholder="Username" />
        </Form.Item>

        <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
          <StyledInput placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <StyledPassInput placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="repeat_password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <StyledPassInput placeholder="Repeat password" />
        </Form.Item>

        <Form.Item>
          <StyledBtn type="primary" htmlType="submit" shape="round">
            Sign up
          </StyledBtn>
        </Form.Item>
      </FormContent>
    </Form>
  )
}

export default RegistrationForm
