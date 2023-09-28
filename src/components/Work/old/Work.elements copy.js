import styled from "styled-components";

export const Section = styled.section`
    padding: 5em 2em;
    border: 1px solid green;

    @media screen and (min-width: 600px) {
      display: grid;
      width: min-content;
      margin: 0 auto;
      grid-column-gap: 1em;
      grid-template-areas:
        "img title"
        "img subtitle";
      grid-template-columns: min-content max-content;
    

        img {
        grid-area: img;
        min-width: 250px;
        z-index: 100;
        }

        p {
        align-self: start;
        grid-column: -1 / 1;
        grid-row: 2;
        text-align: right;
        position: relative;
        left: -1.5em;
        width: calc(100% + 1.5em);
        }
    }
`;

export const Title = styled.h1`
    margin-bottom: .25em;

`;

export const Subtitle = styled.p`
    margin: 0;
    font-size: var(--fs-h3);
    background: var(--clr-accent);
    padding: .25em 1em;
    font-family: var(--ff-secondary);
    margin-bottom: 1em;


 

    `;

export const Img = styled.img``;

export const PortfolioItem = styled.div`
    padding: 0 2em 2em;
    max-width: 1000px;
    margin: 0 auto;

    p{
        max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    }
`;
