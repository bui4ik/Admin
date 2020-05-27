import styled from 'styled-components'
import { Button, Input } from 'antd'

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
