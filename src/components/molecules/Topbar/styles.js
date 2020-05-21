import styled from 'styled-components'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

export const IconOpen = styled(MenuUnfoldOutlined)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  color: #fff;

  :hover {
    color: #1890ff;
  }
`

export const IconClose = styled(MenuFoldOutlined)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  color: #fff;

  :hover {
    color: #1890ff;
  }
`
