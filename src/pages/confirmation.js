import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../pages/index";
import styled from "styled-components";
import Button from "../components/button";
import { useHistory } from "react-router-dom";

const Confirmation = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <ThemeProvider theme={theme}>
      <ConfirmationWrapper>
        <MessageWrapper>
          <StyledThanks>Thanks!</StyledThanks>
          <StyledConfirm>
            You should receive a confirmation email shortly.
          </StyledConfirm>
        </MessageWrapper>
        <ButtonWrapper>
          <Button onClick={goBack} text="← go back" />
        </ButtonWrapper>
      </ConfirmationWrapper>
    </ThemeProvider>
  );
};

export default Confirmation;

const StyledThanks = styled.div`
   {
    font-size: ${(props) => props.theme.fontSize.large};
    text-align: center;
  }
`;

const StyledConfirm = styled.div`
   {
    text-align: center;
  }
`;

const ConfirmationWrapper = styled.div`
   {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

const MessageWrapper = styled.div`
   {
    background: ${(props) => props.theme.colors.whiteFaded};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 10px;
  }
`;

const ButtonWrapper = styled.div`
   {
    display: flex;
    justify-content: center;
    margin: 10px auto;
  }
`;
