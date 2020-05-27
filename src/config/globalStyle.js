import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,700;1,300;1,500;1,900&display=swap");
  * {
      font-family: 'Montserrat', sans-serif;
      padding: 0;
      margin: 0;
    }
`

export default GlobalStyle
