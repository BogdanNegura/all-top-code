import React from 'react'
import { StyledCssCardWrapper,StyledCssCardItem,StyledCssCardItemImage } from './css-cards.style'

const CssCard = () => {
    return (
        <StyledCssCardWrapper>
            <StyledCssCardItem>
                <StyledCssCardItemImage src="https://picsum.photos/200/300" alt=""/>
                <div>
                    <h1>Progress Bar</h1>
                    <p>Border Radius: 10px</p>
                    <p>Background Color: <strong>#d3d3d3</strong></p>
                    <p>Text Color: #fff</p>

                </div>
            </StyledCssCardItem>
            <StyledCssCardItem>
                <StyledCssCardItemImage src="https://picsum.photos/200/300" alt=""/>
                <div>
                    <h1>Progress Bar</h1>
                    <p>Border Radius: 10px</p>
                    <p>Background Color: <strong>#d3d3d3</strong></p>
                    <p>Text Color: #fff</p>

                </div>
            </StyledCssCardItem>
            <StyledCssCardItem>
                <StyledCssCardItemImage src="https://picsum.photos/200/300" alt=""/>
                <div>
                    <h1>Progress Bar</h1>
                    <p>Border Radius: 10px</p>
                    <p>Background Color: <strong>#d3d3d3</strong></p>
                    <p>Text Color: #fff</p>

                </div>
            </StyledCssCardItem>
            <StyledCssCardItem>
                <StyledCssCardItemImage src="https://picsum.photos/200/300" alt=""/>
                <div>
                    <h1>Progress Bar</h1>
                    <p>Border Radius: 10px</p>
                    <p>Background Color: <strong>#d3d3d3</strong></p>
                    <p>Text Color: #fff</p>

                </div>
            </StyledCssCardItem>
        </StyledCssCardWrapper>
    )
}

export { CssCard }
