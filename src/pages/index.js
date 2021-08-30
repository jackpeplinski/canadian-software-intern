import React, { useState } from "react";
import styled from "styled-components";
import "../index.css";
import SignUp from "../components/signUp";
import { ThemeProvider } from "styled-components";
import Table from "../components/table";
import PopOver from "../components/popOver";
import Title from "../components/title";
import MobileAlert from "../components/mobileAlert";
import { useMediaQuery } from "react-responsive";

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
    bold: "1000",
  },
  fontSize: {
    large: "3em",
    medium: "1.5em",
    regular: "1em",
  },
};

const IndexPage = () => {
  const [showPopOver, setShowPopOver] = useState(false);
  const onSignUpClick = () => {
    setShowPopOver(true);
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <ThemeProvider theme={theme}>
      
        
        <div>
          <Title />
          <SignUp onClick={onSignUpClick} />
          <PopOver showPopOver={showPopOver} setShowPopOver={setShowPopOver} />
          <Table />
        </div>
     
    </ThemeProvider>
  );
};

export default IndexPage;
