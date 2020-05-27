import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../../atoms/typography/title'
import { Box, FormBox, Wrapper } from './styles'

const FormWrapper = ({ children, title }) => {
  return (
    <Wrapper>
      <Box>
        <Title text={title} />
      </Box>
      <FormBox>{children}</FormBox>
    </Wrapper>
  )
}

export default FormWrapper

FormWrapper.propTypes = {
    children:PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}
