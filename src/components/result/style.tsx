import styled from "styled-components";

export const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.9);
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ResultMent = styled.b`
  font-size: 10vmin;
  color: pink;
  text-shadow: 0 0 1px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 20px #ff00de,
    0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 50px #ff00de, 0 0 50px #ff00de;
`;

export const Ment = styled.b`
  margin-top: 30px;
  font-size: 2.5vmin;
  color: pink;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 10px #fff, 0 0 20px #ff00de,
    0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 50px #ff00de, 0 0 50px #ff00de;
`;

export const SubMent = styled.b`
  margin-top: 30px;
  font-size: 2.5vmin;
  color: pink;
  cursor: pointer;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 10px #fff, 0 0 20px #ff00de,
    0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 50px #ff00de, 0 0 50px #ff00de;
  :hover {
    opacity: 0.7;
  }
`;

export const ChoiceDiv = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
