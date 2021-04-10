import styled from "styled-components";

export const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ResultMent = styled.b`
  font-size: 10vmin;
  color: pink;
  text-shadow: 0 0 1px #fff, 0 0 10px #fff, 0 0 1px #fff, 0 0 20px #ff00de,
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
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const SideBar = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 500;
  right: 0;
`;

export const Arrow = styled(ResultMent)`
  font-size: 7vmin;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const ResultRank = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 500;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  cursor: pointer;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RankTitle = styled(ResultMent)`
  margin-top: 12%;
  font-size: 5vmin;
  margin-bottom: 50px;
`;

export const PeopleList = styled.div`
  width: 500px;
  padding: 20px 50px;
  background-color: rgb(20, 20, 20, 0.7);
  margin-top: 30px;
  border-radius: 10px;
  :last-of-type {
    margin-bottom: 150px;
  }
`;

export const RankName = styled(ResultMent)`
  font-size: 2vmin;
  b {
    opacity: 0.6;
    font-size: 1.3vmin;
    margin-left: 5px;
  }
`;

export const RankDes = styled.p`
  color: white;
  margin-top: 15px;
  opacity: 0.5;
`;

export const SubmitContainer = styled.div`
  width: 400px;
  height: 250px;
  background-color: rgb(20, 20, 20, 0.9);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SubmitWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.7);
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  /* border:1px solid whitesmoke; */
  color: white;
  background-color: transparent;
  padding: 0 25px;
  margin-top: 15px;
  opacity: 0.8;
  border-radius: 5px;
`;

export const BtnBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 45%;
  height: 30px;
  margin-top: 20px;
  border: none;
  background-color: pink;
  color: #e908a6;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #ff00de,
    0 0 10px #ff00de, 0 0 3px #ff00de, 0 0 10px #ff00de, 0 0 10px #ff00de;
  :hover {
    opacity: 0.8;
  }
`;
