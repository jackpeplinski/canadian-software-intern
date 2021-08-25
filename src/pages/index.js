import * as React from "react"
import styled from 'styled-components'
import '../index.css'
import SignUp from '../components/signUp'
import { ThemeProvider } from 'styled-components'
import Button from '../components/button'
import data from '../data'
import Table from '../components/table'
import PopOver from '../components/popOver'
import { MdClose } from 'react-icons/md'


const theme = {
  colors: {
    white: "white",
    whiteFaded: "rgba(255, 255, 255, 0.22)",
    green: "rgba(79, 186, 96, 0.71)",
    red: "rgba(166, 35, 35, 0.78)",
  },
  border: "2px solid white",
  borderRadius: "5px",
  fontWeight: {
    bold: "1000"
  },
  fontSize: {
    large: "5em",
    medium: "1.5em",
    regular: "1em"
  }
}

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Title>🇨🇦 Canadian Software Internships 🍁</Title>
      <SignUp />
      <Table />
      <PopOver />
    </ThemeProvider>
  )
}

export default IndexPage

const Title = styled.div`{
  font-size: ${props => props.theme.fontSize.large};
  text-align: center;
}`