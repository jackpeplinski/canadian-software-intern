import * as React from "react"
import styled from 'styled-components'
import '../index.css'
import SignUp from '../components/signUp'
import { ThemeProvider } from 'styled-components'
import Button from '../components/button'

const theme = {
  colors: {
    white: "white"
  },
  border: "2px solid white",
  fontWeight: {
    bold: "700"
  },
  fontSize: {
    regular: "14px"
  }
}

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Title>🍁 Software Intern</Title>
      <SignUp />
    </ThemeProvider>
  )
}

export default IndexPage

const Title = styled.div`{
  font-size: 5em;
  text-align: center;
}`