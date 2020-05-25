import React from 'react'
import { Form } from 'antd'
import {
  Box,
  FormWrapper,
  Wrapper,
  StyledBtn,
  FormContent,
  StyledInput,
  StyledPassInput,
} from '../LoginForm/styles'
import Title from "../../atoms/Typography/title";

const RegistrationForm = () => {
  return (
    <Wrapper>
      <Box>
        <Title text="Create account"/>
      </Box>
      <FormWrapper>
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
      </FormWrapper>
    </Wrapper>
  )
}

export default RegistrationForm
