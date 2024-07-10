import styled from "styled-components/macro";

export const SectionAbout2 = styled.div`
  /* padding: 3em 2em; */
  padding: 0 1em;
  /* height: 0vh; */
  width: 83%;
  margin: auto;

 
  @media screen and (min-width: 1300px) {
    display: grid;
 
    /* grid-template-columns: 1fr 1.5fr; */
    grid-template-columns: 40% auto;
    /* place-items: center; */

    grid-column-gap: 6em;
  
    grid-template-areas:
      "about img"
      "title img"
      "subtitle img"
      "text img"
      "button img";
    button {
      max-width: 200px;
    }
  }


`;

export const TopLine2 = styled.div`
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 200;
  padding-left: 0.45em;
  margin-bottom: 1em;
  line-height: 1;
  letter-spacing: 0.4em;
  grid-area: about;
`;

export const TitleAbout2 = styled.h1`
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: bold;
  font-size: 3rem;
  /* font-size: 2rem; */

  margin-bottom: 0.25em;
  font-weight: 100;
  grid-area: title;

  /* ADD IDEAL FZ for both fullscreen and mobile devices w/ media query  */

  /* @media (min-width: 800px) {
  }

  @media screen and (max-width: 800px) {
    font-size: 2.5rem;
  } */
`;

export const SubtitleAbout2 = styled.p`
  margin: 0;
  background: var(--clr-accent);
  padding-left: 2em;
  font-size: 1.09rem;
  font-family: var(--ff-secondary);
  color: #333;
  grid-area: subtitle;
  /* text-align: center; */


  /* @media screen and (min-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 3;

    align-self: start;

    text-align: left;
    position: relative;
    left: -1.5em;
    width: calc(100% + 3.5em);
  } */

  @media screen and (max-width: 899px) {
    padding-left: 0;
    /* font-size: .89rem; */
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    padding-left: 0;
    font-size: 0.89rem;
    text-align: center;
  }
`;

export const MediaContainer2 = styled.div`
  /* /* padding-top: 1em;  */
  /* background:white;
  padding-left: 2rem;
  padding-right: 2rem;

  padding-top: 2em;
  border-radius: 5%; */
  max-width: 700px; 
  /* max-height: 500px; */
/* */
  /* width: 100%; */
  /* max-height:600px; */
  overflow: hidden;

  margin: auto;
  grid-area: img;
  z-index: 100000;
  /* align-self: flex-end; */
  align-self: center;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  /* background-color: white; */
  /* display: grid; */
  /* align-items: center; */

  /* place-items: center; */
  /* justify-content: center; */
  /* align-items: center; */
  /* object-fit: contain; */
`;

export const ImgAbout2 = styled.img`
  box-shadow: var(--bs);
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* grid-area: img; */
  /* z-index: 100000; */
`;

export const VidAbout2 = styled.video`
  /* box-shadow: var(--bs); */
  /* width: 100%; */
  /* height: 100%; */
  /* object-fit: fill; */
  margin: auto;
  /* box-shadow: var(--bs); */
  /* max-height: 70vh; */
  /* margin: auto; */
  /* width: 100%; */
  height: 65vh;
  /* object-fit: fill; */
`;

export const Disclaimer2 = styled.div`
  margin-top: .5em;
  text-align: center;
  /* max-width: 500px; */
 font-size: .7rem;
  font-style: italic;
  /* background-color: pink; */

  @media screen and (max-width: 900px) {
    /* margin-top: 50px; */
    /* margin-left: 3em; */
  }
`;

export const ButtonContainer2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  margin: 1em;
`;

export const ParagraphAbout2 = styled.p`
  grid-area: text;
  font-family: var(--ff-primary);
  /* font-size: 1.2rem; */
  font-size: 0.7rem;
  @media screen and (min-width: 900px) {
    /* max-width: 650px; */
    padding-left: 0.45em;
    padding-right: 0.45em;
  }

  /* max-width: none; */
  /* padding-left: 0; */
  /* grid-area: text; */
  @media screen and (max-width: 600px) {
    padding-left: 0.45em;

    /* padding-left: 0; */
    /* max-width: none; */
    font-size: 0.85rem;
  }
`;
