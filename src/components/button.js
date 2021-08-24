import React from 'react'
import styled from 'styled-components'


const Button = (props) => {
    return (
        <StyledButton onClick={props.onClick}>
            {props.text}
        </StyledButton>
    )
}

export default Button

const StyledButton = styled.div`{
    width: fit-content;
    height: fit-content;
    color: ${props => props.theme.colors.white};
    padding: 5px;
    font-size: ${props => props.theme.fontSize.regular};
    text-align: center;
    border: ${props => props.theme.border};
    font-weight: ${props => props.theme.fontWeight.bold};

    &:hover {
        transform: scale(1.04);
    }
}`