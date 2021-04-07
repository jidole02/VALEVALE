import * as s from "./style";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

interface Params{
    gameState : boolean
}

export default function Header({gameState}:Params){
  const history = useHistory();
  const [time, setTime] = useState<number>(0);
  const [STime, setSTime] = useState<number>(0);
  if(gameState){
      localStorage.setItem('end','true');
  }
  window.onkeydown = function (e: any) {
    if (e.keyCode === 27) {
      history.push("/");
    }
    if (e.keyCode === 17) {
      window.location.reload();
    }
  };
  useEffect(() => {
    let i = 0;
    let j = 0;
    setTimeout(() => {
      var a = setInterval(() => {
        if(localStorage.getItem('end') === 'true'){
            clearInterval(a);
        }
        if(gameState){
            clearInterval(a);
        }
        if (i % 10 == 9) {
          j++;
          setSTime(j);
        }
        i++;
        setTime(i % 10);
      }, 100);
    }, 3000);
  }, []);
  return (
    <s.Header>
      <ul>
        <s.Li>
          <s.HMenu>ESC - 나가기</s.HMenu>
        </s.Li>
        <s.Li>
          <s.HMenu>CTRL - 재시작</s.HMenu>
        </s.Li>
      </ul>
      <ul>
        <s.Li>
          <s.HMenu>{`${STime}.${time} 초`}</s.HMenu>
        </s.Li>
      </ul>
    </s.Header>
  );
}
