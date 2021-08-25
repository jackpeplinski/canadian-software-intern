import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <StyledButtonContainer>
      <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
    </StyledButtonContainer>
  );
};

export default Button;

const StyledButtonContainer = styled.div`
   {
    width: 20%;
    position: relative;
  }
`;

const StyledButton = styled.div`
   {
    width: fit-content;
    height: fit-content;
    color: ${(props) => props.theme.colors.white};
    padding: 5px;
    font-size: ${(props) => props.theme.fontSize.regular};
    text-align: center;
    border: ${(props) => props.theme.border};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 500px;
    &:hover {
      transform: scale(1.04);
    }
  }
`;
