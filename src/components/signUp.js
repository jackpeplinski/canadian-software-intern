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
    margin: auto;
    padding: 2vh;

    @media (max-width: 2560px) {
      width: 30%;
    }

    @media (max-width: 1440px) {
      width: 40%;
    }

    @media (max-width: 1024px) {
      width: 50%;
    }

    @media (max-width: 768px) {
      width: 60%;
    }

    @media (max-width: 425px) {
      &:last-child {
        margin-top: 1vh;
      }
    }
  }
`;
