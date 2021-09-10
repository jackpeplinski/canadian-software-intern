import React, { useState } from "react";
import styled from "styled-components";
import { navigate } from 'gatsby-link'
import Field from "./field";
import Button from "./button";

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

const SignUp = (props) => {
  const [state, setState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <StyledSignUp
      name="sign-up"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <Field onChange={handleChange} />
      <Button text="Sign up!" onClick={props.onClick} />
    </StyledSignUp>
  );
};

export default SignUp;

const StyledSignUp = styled.form`
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
