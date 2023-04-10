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
    border-bottom: 1px solid rgba(0, 0, 0, 0.098);

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 400px;
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
/* font-size: .75rem;
font-weight: 200;
padding-left: .45em;
margin-bottom: 1em;
line-height: 1;
letter-spacing: 0.4em; */

`;

export const TitleAbout = styled(Title)`
  font-weight: 100;

  grid-area: title;
`;
export const SubtitleAbout = styled(Subtitle)`
  padding-left: 2em;

  @media screen and (min-width: 900px) {
    grid-column: 1 / -1;
    grid-row: 3;

    align-self: start;

    text-align: left;
    position: relative;
    left: -1.5em;
    width: calc(100% + 3.5em);
  }
`;

export const ImgAbout = styled(Img)`
  /* max-width: 400px; */
  grid-area: img;
  z-index: 10;
`;

export const ParagraphAbout = styled(Paragraph)`
  max-width: 600px;
  padding-left: .45em;

`;

export const ButtonAbout = styled(Button)``;
