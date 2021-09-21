import React from "react";
import styled from "styled-components";

const Field = (props) => {
  return (
    <div>
      <StyledLabel>Sign up for updates when new positions open.</StyledLabel>
      <StyledField value={props.value} name={props.name} onChange={props.onChange}/>
    </div>
  );
};

export default Field;

const StyledLabel = styled.label`
   {
    display: block;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin-bottom: 0.5vh;

    &:focus {
      outline: none;
    }
  }
`;

const StyledField = styled.input`
   {
    background-color: transparent;
    border-radius: ${(props) => props.theme.borderRadius};
    border: ${(props) => props.theme.border};
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    padding: 5px;

    &:focus {
      outline: none;
      border: 3px solid rgb(255, 255, 255);
    }
  }
`;
