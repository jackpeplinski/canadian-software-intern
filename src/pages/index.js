import React, { useState } from "react";
import styled from "styled-components";
import "../index.css";
import SignUp from "../components/signUp";
import { ThemeProvider } from "styled-components";
import Table from "../components/table";
import PopOver from "../components/popOver";
import Title from "../components/title";

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

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  minMobileS: `(min-width: ${size.mobileS})`,
  minMobileM: `(min-width: ${size.mobileM})`,
  minMobileL: `(min-width: ${size.mobileL})`,
  minTablet: `(min-width: ${size.tablet})`,
  minLaptop: `(min-width: ${size.laptop})`,
  minLaptopL: `(min-width: ${size.laptopL})`,
  minDesktop: `(min-width: ${size.desktop})`,
  minDesktopL: `(min-width: ${size.desktop})`,
  maxMobileS: `(max-width: ${size.mobileS})`,
  maxMobileM: `(max-width: ${size.mobileM})`,
  maxMobileL: `(max-width: ${size.mobileL})`,
  maxTablet: `(max-width: ${size.tablet})`,
  maxLaptop: `(max-width: ${size.laptop})`,
  maxLaptopL: `(max-width: ${size.laptopL})`,
  maxDesktop: `(max-width: ${size.desktop})`,
  maxDesktopL: `(max-width: ${size.desktop})`,
};

const IndexPage = () => {
  const [showPopOver, setShowPopOver] = useState(false);
  const onSignUpClick = () => {
    setShowPopOver(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Title />
      <SignUp onClick={onSignUpClick} />
      <PopOver showPopOver={showPopOver} setShowPopOver={setShowPopOver} />
      <Table />
    </ThemeProvider>
  );
};

export default IndexPage;
