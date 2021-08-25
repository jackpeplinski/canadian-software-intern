import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

const PopOver = ({showPopOver, setShowPopOver}) => {
    return (
        <>
            {showPopOver ? <StyledBody>
                <BarHighlight />
                <StyledMessage>
                    You’ll get a confirmation email you’ve signed up.
                    Have a great day 🤗 !
                </StyledMessage>
                <MdClose style={{ position: "absolute", right: "2%", top: "5%" }} onClick={() => setShowPopOver(false)}/>
            </StyledBody> : null}
        </>
    )
}

export default PopOver

const StyledBody = styled.div`{
    background: ${props => props.theme.colors.whiteFaded};
    border-radius: ${props => props.theme.borderRadius};
    position: relative;
    display: flex;
    width: 30vw;
    height: 10vh;
}`

const BarHighlight = styled.div`{
    background: rgba(255, 255, 255, 0.58);
    border-radius: ${props => props.theme.borderRadius};
    position: absolute;
    width: 1vw;
    height: 10vh;
}`

const StyledMessage = styled.div`{
    margin: auto 5vw auto 5vw;
}`