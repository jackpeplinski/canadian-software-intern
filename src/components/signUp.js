import React from "react";
import styled from "styled-components";
import Field from "./field";
import Button from "./button";

const SignUp = (props) => {
  return (
    <StyledSignUp>
      <Field />
      <Button text="Sign up!" onClick={props.onClick} />
    </StyledSignUp>
  );
};

export default SignUp;

const StyledSignUp = styled.div`
   {
    background: ${(props) => props.theme.colors.whiteFaded};
    border-radius: ${(props) => props.theme.borderRadius};
    width: 50%;
    margin: auto;
    display: flex;
    padding: 10px;
    max-width: 500px;
  }
`;
