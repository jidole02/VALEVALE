import styled from "styled-components";

export const UnderBar = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const WordInput = styled.input`
  width: 700px;
  border: none;
  border-bottom: 2px solid black;
  padding: 15px 20px;
  font-size: 20px;
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
`;
