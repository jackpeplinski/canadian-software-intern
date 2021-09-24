import React from "react";
import styled from "styled-components";
import "../index.css";
import SignUp from "../components/signUp";
import { ThemeProvider } from "styled-components";
import Table from "../components/table";
import Title from "../components/title";
import Quote from "../components/quote";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Canadian Software Internships</title>
        <meta name="Find and be alerted when top-tech internships open." />
      </Helmet>
      <Wrapper>
        <Title />
        <SignUp />
        <Table />
        <Quote />
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
