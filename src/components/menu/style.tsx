import styled from "styled-components";

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 2s;
`;

const font = styled.b`
  color: pink;
  text-shadow: 0 0 1px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 20px #ff00de,
    0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 50px #ff00de, 0 0 50px #ff00de;
`;

export const Title = styled(font)`
  font-size: 10vmin;
  margin-top: 10%;
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
  margin-bottom: 10px;
  :last-of-type {
    margin-bottom: 100px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 170px 170px;
  place-items: center;
`;

export const Video = styled.video`
  position: fixed;
  width: 130%;
  z-index: -1;
  top: 0;
`;

export const Rank = styled.div`
  width: 10%;
  height: 100vh;
  position: fixed;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity:0.6;
  i{
    color:pink;
    font-size:3vmin;
    cursor:pointer;
    :hover{
      opacity:0.4;
    }
  }
`;