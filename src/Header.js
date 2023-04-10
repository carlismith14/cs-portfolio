import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
background: pink;
`;

const FlexWrapper = styled.div`
display:flex;

    & li{
        font-weight: 400;
    }

`

export default function Header() {
  return (
    <header>
        <Container>
        <nav>
            <FlexWrapper>
                <li>Carli</li>
                <li>About</li>
                <li>Resume</li>
                <li>LinkedIn</li>
                <li>Github</li>
            </FlexWrapper>


        </nav>

        </Container>

    </header>
  )
}
