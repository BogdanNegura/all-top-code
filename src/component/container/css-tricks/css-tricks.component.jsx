import React from 'react'
import { CssCard } from './css-cards'
import { StyledCssTrickTitle, StyledCssTrickContainer } from './css-tricks.style'

const CssTricks = () => {
    return (
        <div>
            <StyledCssTrickTitle>CSS Tricks - Fresh Article 2020</StyledCssTrickTitle>
            <StyledCssTrickContainer>
                <CssCard/>
            </StyledCssTrickContainer>
        </div>
    )
}

export { CssTricks }