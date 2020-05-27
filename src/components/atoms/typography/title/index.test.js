import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Title from './index'

describe('Title component', () => {
  it('renders without crashing', () => {
    const wrapper = document.createElement('div')
    ReactDOM.render(<Title text="Test text" />, wrapper)
  })

  it('renders proper props text', () => {
    const wrapper = shallow(<Title text="Test text" />)
    expect(wrapper.text()).toEqual('Test text')
  })
})
