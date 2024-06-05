import styled from "styled-components/macro";

export const IntroSection = styled.section`
  position: relative;
  padding: 3em 2em;

  @media (min-width: 600px) {
    display: grid;
    max-width: 1200px;
    /* width: min-content; */
    margin: 0 auto;
    grid-column-gap: 1em;
    grid-template-areas:
      "img title"
      "img subtitle";
    /* grid-template-columns: min-content max-content; */
  }
`;

export const Title1 = styled.h1`
  position: relative;
  display: block;

  margin-bottom: 0.25em;
  /* font-size: var(--fs-h1); */
  font-weight: var(--fw-reg);
  font-size: 2.5rem;

  strong {
    display: block;
    font-weight: var(--fw-bold);
  }
`;

export const Subtitle1 = styled.p`
  margin: 0;
  font-size: var(--fs-h3);
  background: var(--clr-accent);
  padding: 0.25em 1em;
  font-family: var(--ff-secondary);
  margin-bottom: 1em;
  display: inline-block;

  @media (min-width: 600px) {
    align-self: start;
    grid-column: -1 / 1;
    grid-row: 2;
    text-align: right;
    position: relative;
    left: -1.5em;
    width: calc(100% + 1.5em);
  }
`;

export const IntroImage = styled.img`
  display: block;
  max-width: 100%;
  box-shadow: var(--bs);
  

  @media (min-width: 600px) {
    grid-area: img;
    min-width: 250px;
    position: relative;
    z-index: 2;
  }
`;

export const PortfolioItem = styled.div`
  padding: 0 2em 2em;
  /* max-width: 1000px; */
  margin: 0 auto;

  p {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;
