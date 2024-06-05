import styled from "styled-components/macro";

export const ProjectItem = styled.div`
  background-color: white;
  padding: 2em;
  border-radius: 10px;
  z-index: -1000;

  margin-bottom: 2em;
  /* margin-top: 3em; */
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-areas:
      "img text";
    gap: 2em;

    grid-template-columns: 2fr 1fr;
    /* margin-top: 2em; */
  }
`;

export const ProjectText = styled.div`
  grid-area: text;
  align-self: center;

  @media screen and (max-width: 800px) {
    margin-top: 2em;
  }
`;

export const ProjectImg = styled.img`
  grid-area: img;
`;

export const ProjectTitle = styled.h3``;

export const ProjectDescript = styled.p``;
