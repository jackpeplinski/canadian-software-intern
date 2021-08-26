import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

export default Button;

const StyledButtonContainer = styled.div`
   {
  }
`;

const StyledButton = styled.div`
   {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSize.regular};
    text-align: center;
    border: ${(props) => props.theme.border};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    border-radius: 500px;
    padding: 5px;
    align-self: flex-end;

    @media (max-width: 425px) {
      margin-top: 1vh;
    }

    &:hover {
      transform: scale(1.04);
    }
  }
`;
