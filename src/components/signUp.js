import React from "react";
import styled from "styled-components";
import Field from "./field";
import Button from "./button";
import device from "../pages/index";
const SignUp = (props) => {
  return (
    <StyledSignUp>
      {/* <div>hello</div>
      <div>goodbye</div> */}
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
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    margin: 1vh auto;
    padding: 2vh;
    max-width: 530px;
  }
`;
