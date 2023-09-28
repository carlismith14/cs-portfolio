import styled from "styled-components";

export const Page = styled.div`
  width: 70%;
  margin: auto;
  /* height: 100%; */
  /* background: pink; */
`;

export const ProjectGrid = styled.div`
  display: grid;
  width: 100%;

  grid-template-areas:
    "intro vid"
    "text vid";
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr auto;
  gap: 2em;
  align-items: start;
  justify-content: space-between;
`;

export const ProjectVidContainer = styled.div`
  grid-area: vid;
  max-height: 1000px;
display: grid;
place-content: end;
`;

export const ProjectVid = styled.video`
  max-width: 1000px;
  /* max-height: 100%; */
  max-height: 1050px;
  /* margin: 0 auto; */

  /* height: 70%; */
  /* padding: 80px; */
  /* margin-bottom: auto; */
  /* align-self: start; */
`;

export const ProjectTitle = styled.h1`
  grid-area: title;
`;


export const IntroTextContainer = styled.div`
    grid-area: text;
    /* padding-left: 2em; */
    /* margin-top: 2em; */
`;

export const ProjectDescription = styled.div`

`;



export const Section = styled.section`
    grid-area: intro;
  /* padding: 3em 2em; */
  /* border: 4px solid green; */

  @media screen and (min-width: 600px) {
    display: grid;
    /* width: min-content; */
    /* margin: 0 auto; */
    grid-column-gap: 1em;
    grid-template-areas:
      "img title"
      "img subtitle";
    grid-template-columns: min-content max-content;

    

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
  margin-bottom: 0.25em;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: var(--fs-h3);
  background: var(--clr-accent);
  padding: 0.25em 1em;
  font-family: var(--ff-secondary);
  /* margin-bottom: 1em; */
`;

export const Img = styled.img``;

export const PortfolioItem = styled.div`
  border: 1px solid black;
  padding: 0 2em 2em;
  max-width: 1000px;
  margin: 0 auto;

  max-width: 1600px;

  p {
    /* max-width: 600px; */
    max-width: 1000px;

    margin-left: auto;
    margin-right: auto;
  }
`;
