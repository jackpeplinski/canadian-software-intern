import React from "react";
import styled from "styled-components";

const Quote = () => {
  return (
    <StyledQuote>
      <i>How we spend our days is, of course, how we spend our lives. </i>
      <br></br> —Annie Dillard
      <br></br>
      Made with ❤️ by <a href="https://github.com/jackpeplinski" target="_blank">Jack Peplinski</a>
    </StyledQuote>
  );
};

export default Quote;

const StyledQuote = styled.div`
   {
    margin: 1vh auto;
    padding: 2vh;
    max-width: 530px;
    text-align: center;
    font-style: italics;
  }
`;
