import React from "react";
import styled from "styled-components";
import "../index.css";
import SignUp from "../components/signUp";
import { ThemeProvider } from "styled-components";
import Table from "../components/table";
import Title from "../components/title";

export const theme = {
  colors: {
    white: "white",
    whiteFaded: "rgba(255, 255, 255, 0.22)",
    green: "rgba(79, 186, 96, 0.71)",
    red: "rgba(166, 35, 35, 0.78)",
  },
  border: "2px solid white",
  borderRadius: "5px",
  fontWeight: {
    bold: "1000",
  },
  fontSize: {
    large: "3em",
    medium: "1.5em",
    regular: "1em",
  },
};

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title />
        <SignUp />
        <Table />
      </Wrapper>
    </ThemeProvider>
  );
};

export default IndexPage;

const Wrapper = styled.div`
   {
    overflow: scroll;
  }
`;
