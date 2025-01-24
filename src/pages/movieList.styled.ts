import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MovieListComponent = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: baseline;
  gap: 10px;

  margin-left: 20px;
  margin-right: 30px;
  height: 74%;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-color: #658292 rgba(255,255,255, 0.0);
  scrollbar-gutter: stable both-edges;

  @media (width: 425px) {
    align-items: center;
    justify-content: center;
    scroll-margin: 10px;
  }
`;

export const SearchComponent = styled.div`
  margin: 0 0 10px 34px;
  padding: 10px;
  background-color: white;
  width: 260px;
  height: 28px;
  display: flex;
  flex-flow: row;
  align-items: center;
  border-radius: 8px;
`;

export const Input = styled.input`
  background: none;
  background-color: none;
  border-radius: 10px;
  padding: 10px;
  border: none;
  width: 220px;
  height: 20px;
`;

export const ButtonSearch = styled.button`
  background: none;
  border: none;
`;

export const MovieComponent = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 20px;
  width: 260px;
`;

export const LinkComponent = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const Img = styled.img`
  width: 250px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.35);
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-flow: row;
  gap: 10px;

  .divider {
    color: rgba(255,255,255, 0.3);
  }
`;

export const TextTemplateStyle = styled.h3`
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 0;
`;

export const Title = styled(TextTemplateStyle)`
  padding-left: 4px;
`;
