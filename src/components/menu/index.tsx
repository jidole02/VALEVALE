import * as s from "./style";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Video from "../IMG/BACKVIDEO.mp4";
import ResultRank from "../result/resultRank";

export default function Menu() {
  const arr: any = [];
  const history = useHistory();
  const [LArr, setLArr] = useState<any>([]);
  const [load, setLoad] = useState<boolean>(false);
  const [rank, setRank] = useState<boolean>(false);
  const ShowRank = () => {
    setRank(!rank);
  };
  useEffect(() => {
    for (let i = 1; i < 100; i++) {
      arr.push(i);
    }
    setLArr(arr);
    localStorage.setItem("ans", "."); // 답 맞추는거 초기화
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);
  const ChoiceLv = (e: number) => {
    history.push(`/play/${e}`);
  };
  const a = (e: any) => {
    e.target.innerHTML = `▶ ${e.target.innerHTML}`;
  };
  const b = (e: any) => {
    e.target.innerHTML = `level ${e.target.id}`;
  };
  return (
    <>
    {rank && <ResultRank ment="최단시간 기록자들" func={ShowRank}></ResultRank>}
      <s.Rank>
        <i className="fas fa-trophy" onClick={ShowRank}></i>
        <i
          className="fab fa-github"
          onClick={() => {
            window.open("https://github.com/jidole02");
          }}
        ></i>
      </s.Rank>
      <s.MenuWrapper style={load ? { backgroundColor: "rgb(0,0,0,0.8)" } : {}}>
        <s.Video
          src={Video}
          autoPlay
          controls
          loop
          muted
          poster="aaa"
          preload="bbb"
        />
        <s.Title>GG ONLINE</s.Title>
        <s.SubTitle>새로운 타자게임을 경험해보세요!</s.SubTitle>
        <s.GridContainer>
          {LArr.map((e: number, index: number) => {
            let strID: string = e.toString();
            return (
              <s.menu
                key={index}
                onClick={() => {
                  ChoiceLv(e);
                }}
                onMouseOver={a}
                onMouseOut={b}
                id={strID}
              >
                level {e}
              </s.menu>
            );
          })}
        </s.GridContainer>
      </s.MenuWrapper>
    </>
  );
}
