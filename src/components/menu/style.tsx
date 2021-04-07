import styled from "styled-components";

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const font = styled.b`
  color: pink;
  text-shadow: 0 0 1px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 20px #ff00de,
    0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 50px #ff00de, 0 0 50px #ff00de;
`;

export const Title = styled(font)`
  font-size: 10vmin;
`;

export const SubTitle = styled(font)`
  font-size: 2vmin;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const menu = styled(font)`
  margin-top: 20px;
  font-size: 3vmin;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 170px 170px;
  place-items: center;
`;
