
import styled from "styled-components/macro";


export const ProjectItem = styled.div`

@media screen and (min-width:800px ){
    display: grid;
grid-template-areas: 
"img text"
"img text"
"img text";
gap: 2em;

}
`


export const ProjectText = styled.div`
grid-area: text;
align-self: center;

`

export const ProjectImg = styled.img`
    grid-area: img;
`;

export const ProjectTitle = styled.h3`

`;

export const ProjectDescript = styled.p`


`;
