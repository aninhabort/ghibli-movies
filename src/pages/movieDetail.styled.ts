import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MoviePage = styled.div`
  position: relative;
`;

export const MovieComponent = styled.div`
  display: flex;
  flex-flow: row;
  gap: 10px;
  justify-content: space-evenly;
  height: auto;
  margin: 10px;

  @media (width: 425px) {
    flex-flow: column;
    align-items: center;
    padding: 20px 20px 30px 20px;
    height: 480px;

    overflow-y: auto;
    overflow-x: hidden;
    white-space: nowrap;
    scrollbar-color: #658292 rgba(255, 255, 255, 0);
    scrollbar-gutter: stable both-edges;
  }
`;

export const BaseForImg = styled.img`
  height: fit-content;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.35);
`;

export const Img = styled(BaseForImg)`
  width: 360px;
  height: auto;

  @media (width: 425px) {
    width: 300px;
  }
`;

export const ImgBanner = styled(BaseForImg)`
  width: 540px;

  @media (width: 425px) {
    width: 326px;
  }
`;

export const DescriptionComponent = styled.div`
  display: flex;
  flex-flow: column;

  @media (width: 425px) {
    align-items: center;
    gap: 10px;
  }
`;

export const DescriptionTexts = styled.div`
  margin-left: 5px;

  @media (width: 425px) {
    padding-top: 10px;
    width: 42vh;
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
  }
`;

export const DescriptionSubtitles = styled.h3`
  width: fit-content;
  font-weight: 400;
`;

export const BackIcon = styled(Link)`
  position: fixed; 
  bottom: 70px; 
  right: 70px; 
  background-color: #658292; 
  color: white;
  border-radius: 50%; 
  padding: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #415b68; 
  }
`;
