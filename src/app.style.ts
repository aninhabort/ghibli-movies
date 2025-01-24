import { styled } from "styled-components";

export const MainComponent = styled.div`
  background-color: rgba(255,255,255, 0.3);
  margin: 30px;
  border-radius: 20px;
  height: 90vh;

  @media (width: 425px) {
    margin: 20px;
    height: 92vh;
  }
`;

export const HeaderComponent = styled.header`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 10px 0 0 30px;

  @media (width: 425px) {
    justify-content: center;
    margin: 10px;
    padding: 10px;
  }
`;

export const NavComponent = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  background-color: rgba(255,255,255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.35);
  border-radius: 16px;
  padding: 10px 20px;
  gap: 16px;
  padding: 14px 20px;
`;