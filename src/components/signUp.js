import React from 'react'
import styled from 'styled-components'
import Field from './field'
import Button from './button'

const SignUp = () => {
    return (
        <StyledSignUp>
            <Field />
            <Button text="Sign up!" />
        </StyledSignUp>
    )
}

export default SignUp

const StyledSignUp = styled.div`{
    background: rgba(255, 255, 255, 0.22);
    border-radius: 5px;
    width: 50%;
    margin: auto;
    display: flex;
}`