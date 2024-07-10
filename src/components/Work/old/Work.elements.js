import styled from "styled-components/macro";

export const BackContainer = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 48%;
  left: 4%;
  z-index: 100;
  /* left: 0; */
  border-radius: 50px;
  /* background-color: gray; */
  display: grid;
  place-items: center;
  cursor: pointer;
`;

export const Page = styled.div`
  /* background-color: pink; */
  /* max-height: 100vh; */
  /* width: 70%; */
  /* width: 80%; */

  margin: auto;
  /* height: 100%; */
  /* background: pink; */
`;

export const ProjectGrid = styled.div`
  /* display: grid; */
  /* width: 100%; */

  div {
    font-size: 0.7rem;
  }

  /* add media query for med sized screens (adjust fz) and just do stacks for  */

  @media screen and (min-width: 1100px) {
    display: grid;
    width: 100%;
    grid-template-areas: "text vid";

    grid-template-columns: 1fr 55%;


    column-gap: 2em;
    row-gap: 0;
    align-items: center;


    justify-content: space-between;
  }

  /* @media screen and (max-width: 800px) {
    background-color: red;
    grid-template-areas:
      "intro"
      "vid"
      "text";

    row-gap: 0;
  } */
`;

export const ProjectVidContainer = styled.div`
  grid-area: vid;
  /* max-height: 1000px; */
  display: grid;
  /* place-content: center; */
  /* align-self: center; */
  /* background-color: green; */
  /* background: green; */
  /* max-height: 100vh; */
`;

export const ProjectVid = styled.video`
  /* max-width: 1000px; */
  /* max-height: 100%; */
  /* max-height: 1000px; */
  /* max-height: 100vh; */
  /* margin: 0 auto; */

  /* height: 70%; */
  /* padding: 80px; */
  /* margin-bottom: auto; */
  /* align-self: start; */
  /* height: 100%; */
  /* width: 100%; */
  /* max-width: 100%; Prevent images from exceeding their container's width */
  /* max-width: 100%;  */

  max-height: 70vh;
  /* background: green; */
`;

export const ButtonContainer = styled.div`
  /* background-color: brown; */
  display: flex;
  justify-content: center;
  gap: 2em;
  margin: 1em;
`;

export const Disclaimer = styled.div`
  margin-top: 2em;
  text-align: center;
  /* max-width: 500px; */

  font-style: italic;
  /* background-color: pink; */

  @media screen and (max-width: 900px) {
    /* margin-top: 50px; */
    /* margin-left: 3em; */
  }
`;

export const DisclaimerText = styled.p`
  max-width: 500px;
  margin: auto;
`;

export const ProjectImg = styled.img`
  /* max-height: 100vh; */
  /* height: 100%; */
  /* width: 100%; */
  max-width: 100%; /* Prevent images from exceeding their container's width */
`;

export const ProjectTitle = styled.h1`
  grid-area: title;
`;

export const ProjectDescripContainer = styled.div`
  grid-area: descrip;
  margin: 0;
`;

export const IntroTextContainer = styled.div`
  grid-area: text;
  /* padding-left: 2em; */

  /* margin-top: 20px; */
  @media screen and (min-width: 1100px) {
    /* margin-top: 50px; */
  }
`;

export const ProjectDescription = styled.div``;

export const Section = styled.section`
  grid-area: intro;
  /* padding: 3em 2em; */
  /* border: 4px solid green; */
  margin-bottom: 0;
  @media screen and (min-width: 600px) {
    /* display: grid; */
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

export const Title = styled.h2`
  margin-bottom: 0.25em;
  text-align: center;

  @media screen and (min-width: 600px) {
    text-align: left;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 1.3rem;
  /* font-size: var(--fs-h3); */
  background: var(--clr-accent);
  padding: 0.25em 1em;
  font-family: var(--ff-secondary);
  /* margin-bottom: 1em; */
  @media screen and (min-width: 1200px) {
    font-size: var(--fs-h3);
  }
`;

export const Img = styled.img``;

export const PortfolioItem = styled.div`
  border: 1px solid black;
  padding: 0 2em 2em;
  /* max-width: 1000px; */
  margin: 0 auto;

  max-width: 1600px;

  p {
    /* max-width: 600px; */
    max-width: 1000px;

    margin-left: auto;
    margin-right: auto;
  }
`;
