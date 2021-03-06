import React from "react";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";

const PopOver = ({ showPopOver, setShowPopOver }) => {
  return (
    <>
      {showPopOver ? (
        <StyledBody>
          <BarHighlight />
          <StyledMessage>
            You’ll get a confirmation email you’ve signed up. Have a great day
            🤗 !
          </StyledMessage>
          <VscChromeClose
            style={{ position: "absolute", right: "2%", top: "5%" }}
            onClick={() => setShowPopOver(false)}
          />
        </StyledBody>
      ) : null}
    </>
  );
};

export default PopOver;

const StyledBody = styled.div`
   {
    background: ${(props) => props.theme.colors.whiteFaded};
    border-radius: ${(props) => props.theme.borderRadius};
    position: relative;
    display: flex;
    height: 10vh;
    margin: 1vh auto;
    max-width: 300px;
  }
`;

const BarHighlight = styled.div`
   {
    background: rgba(255, 255, 255, 0.58);
    border-radius: ${(props) => props.theme.borderRadius};
    position: absolute;
    width: 4px;
    height: 10vh;
  }
`;

const StyledMessage = styled.div`
   {
    margin: auto 1vw;
    text-align: justify;
    width: fit-content;
    height: fit-content;
}
  }
`;
