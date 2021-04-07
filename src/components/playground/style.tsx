import styled, { keyframes } from "styled-components";

export const UnderBar = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: transparent;
`;

export const WordInput = styled.input`
  width: 700px;
  border: none;
  border-bottom: 2px solid whitesmoke;
  padding: 15px 20px;
  font-size: 20px;
  background-color: transparent;
  color:whitesmoke;
`;

export const MatchWordContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MatchWord = styled.div`
  /* 맞출 단어 */
  font-size: 13vmin;
  color:pink;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 10px #fff, 0 0 20px #ff00de,
    0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 50px #ff00de, 0 0 50px #ff00de;
`;

const font = styled.b`
color:pink;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 10px #fff, 0 0 20px #ff00de,
    0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 50px #ff00de, 0 0 50px #ff00de;
`

export const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color:black;
`;

interface BCircle {
  x: string;
  y: string;
  color: string;
}

const CircleAnim = keyframes`
0%{
  margin:0;
}
20%{
  margin-top:3%;
  margin-left:3%;
}
40%{
  margin-top:3%;
  margin-left:6%;
}
60%{
  margin-top:-5%;
  margin-left:5%;
}
40%{
  margin-top:3%;
  margin-left:-3%;
}
100%{
  margin:0;
}
`


export const Circle = styled.div<BCircle>`
  width: 300px;
  height: 300px;
  background-color: ${(props: BCircle) => props.color};
  border-radius: 50%;
  transform: ${(props: BCircle) => `translate(${props.x}%,${props.y}%)`};
  position: absolute;
  box-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 10px #fff, 0 0 20px #ff00de,
    0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 50px #ff00de, 0 0 50px #ff00de;
    animation:${CircleAnim} 20s infinite;
`;

export const Header = styled.header`
  width: 70%;
  padding: 3% 15%;
  position: absolute;
  z-index: 100;
  display:flex;
  justify-content:space-between;
`;

export const HMenu = styled(font)`
font-size:1.7vmin;
`

const TimeAnim = keyframes`
0%{
  opacity:1;
}
100%{
  opacity:0;
}
`;

export const StartTime = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15vmin;
  z-index: 100;
  animation-iteration-count: 3;
  animation-duration: 1s;
  animation-name: ${TimeAnim};
  font-family: 나눔스퀘어;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 10px #fff, 0 0 20px #ff00de,
    0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 50px #ff00de, 0 0 50px #ff00de;
`;

export const Li = styled.li`
padding:7px 0;
`