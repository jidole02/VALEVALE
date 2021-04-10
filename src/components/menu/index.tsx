import * as s from "./style";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Video from "../IMG/BACKVIDEO.mp4";
import ResultRank from "../result/resultRank";
import { request } from "../axios";

export default function Menu() {
  const arr: any = [];
  const history = useHistory();
  const [LArr, setLArr] = useState<any>([]);
  const [load, setLoad] = useState<boolean>(false);
  const [rank, setRank] = useState<boolean>(false);
  const [Rdata, setRData] = useState<any>([]);
  const ShowRank = () => {
    setRank(!rank);
  };
  useEffect(() => {
    request("get", "/record?sort=time", {}).then((e) => {
      setRData(e);
    });
  }, []);
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
      {rank && (
        <ResultRank
          ment="최단시간 기록자들"
          func={ShowRank}
          data={Rdata}
        ></ResultRank>
      )}
      <s.Rank>
        <i className="fas fa-trophy" onClick={ShowRank}></i>
        <i
          className="fab fa-github"
          onClick={() => {
            window.open("https://github.com/jidole02");
          }}
        ></i>
      </s.Rank>
      <s.MenuWrapper
        style={
          load
            ? rank
              ? { backgroundColor: "rgb(0,0,0,0.8)", position: "fixed" }
              : { backgroundColor: "rgb(0,0,0,0.8)" }
            : {}
        }
      >
        <s.Video
          src={Video}
          autoPlay
          controls
          loop
          muted
          poster="aaa"
          preload="bbb"
        />
        <s.Title>VALE VALE</s.Title>
        <s.SubTitle>발레발레에서 새로운 타자게임을 경험해보세요!</s.SubTitle>
        <div id='mobonDivBanner_527486'><iframe name='ifrad' id='mobonIframe_527486' src='//www.mediacategory.com/servlet/adBanner?from="+escape(document.referrer)+"&s=527486&igb=75&iwh=468_60&cntad=1&cntsr=3' frameBorder='0' scrolling='no' style={{height:"60px", width:"468px",marginBottom:"50px",marginTop:"20px"}}></iframe></div>
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
