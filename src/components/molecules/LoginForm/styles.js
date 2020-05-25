import styled from 'styled-components'
import { Button, Input } from 'antd'

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
`

export const Box = styled.div`
  display: flex;
  justify-content: center;
`

export const FormWrapper = styled.div`
  margin: 20px 0;
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StyledInput = styled(Input)`
  width: 250px;
`

export const StyledPassInput = styled(Input.Password)`
  width: 250px;
`

export const StyledBtn = styled(Button)`
  font-weight: bold;
  width: 150px;
`
