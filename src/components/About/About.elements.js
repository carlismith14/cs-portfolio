import styled from "styled-components/macro";
import {
  TopLine,
  Section,
  Title,
  Subtitle,
  Button,
  Img,
  Paragraph,
} from "../../GlobalStyles.styles";

export const SectionAbout = styled(Section)`
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.098); */
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.098); */

/* height: 100vh;
display: grid;
place-items: center; */
  @media screen and (min-width: 960px) {
  

    display: grid;
    /* changed gtc 1.31 */
    grid-template-columns: 1fr 430px;
    /* grid-template-columns: 1fr 500px; */

    grid-template-areas:
      "about img"
      "title img"
      "subtitle img"
      "text img"
      "button img";
    grid-column-gap: 2em;

    button {
      max-width: 200px;
    }
  }
`;

export const TopLineAbout = styled(TopLine)`

`;

export const TitleAbout = styled(Title)`
  font-weight: 100;
  grid-area: title;
  @media screen and (max-width: 800px) {
    font-size: 2.5rem;
  }
`;
export const SubtitleAbout = styled(Subtitle)`
  padding-left: 2em;
  font-size: 1.09rem;
  font-family: var(--ff-secondary);
  color: #333;

  @media screen and (min-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 3;
    align-self: start;
    text-align: left;
    position: relative;
    left: -1.5em;
    width: calc(100% + 3em);

  }

  @media screen and (max-width: 899px) {
    padding-left: 0;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    padding-left: 0;
    font-size: 0.89rem;
    text-align: center;
  }
`;

export const ImgAbout = styled(Img)`
  grid-area: img;
  z-index: 10;
  @media screen and (max-width: 959px) {
    padding-left: 0;
    text-align: center;
    align-self: center;
    place-self: center;
    place-content: center;
    place-items: center;
    margin: 0 auto;
    max-height: 450px;
  }
`;

export const ParagraphAbout = styled(Paragraph)`
  font-family: var(--ff-primary);
  @media screen and (min-width: 959px) {
    max-width: 650px;
    padding-left: 0.45em;
  }


  @media screen and (max-width: 600px) {
    padding-left: 0.45em;
    font-size: 0.85rem;
  }
`;

export const ButtonAbout = styled(Button)``;
