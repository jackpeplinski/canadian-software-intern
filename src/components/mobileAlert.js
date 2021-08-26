import React from 'react'
import styled from 'styled-components'

const MobileAlert = () => {
    return (
        <MobileAlertWrapper>
            <p>Sorry! <br/>  <br/> This page is best suited for standard screen sizes.  <br/>  <br/> Please check it out on your laptop or desktop. </p>
        </MobileAlertWrapper>
    )
}

export default MobileAlert

const MobileAlertWrapper = styled.div`{
    margin: 1vh;
    font-size: ${(props) => props.theme.fontSize.large};
}`