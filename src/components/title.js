import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <TitleWrapper>
      <TitleText>CANADIAN SOFTWARE INTERN</TitleText>
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.div`
   {
    margin: 1vh auto;
    width: fit-content;
  }
`;

const TitleText = styled.div`
   {
    font-size: ${(props) => props.theme.fontSize.large};
    text-align: center;
    padding: 10px;
    border: 10px solid white;
    line-height: 1;
  }
`;
