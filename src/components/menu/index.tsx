import * as s from "./style";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

export default function Menu() {
  const arr: any = [];
  const history = useHistory();
  const [LArr, setLArr] = useState<any>([]);
  useEffect(() => {
    for (let i = 1; i <= 10; i++) {
      arr.push(i);
    }
    setLArr(arr);
  }, []);
  const ChoiceLv=(e : number)=>{
      history.push(`/play/${e}`)
  }
  return (
    <s.MenuWrapper>
      <s.Title>PLAY GAME</s.Title>
      <s.SubTitle>새로운 타자게임을 경험해보세요!</s.SubTitle>
      <s.GridContainer>
        {LArr.map((e: number, index: number) => {
          return <s.menu 
          key={index}
          onClick={()=>{
              ChoiceLv(e)
          }}
          >level {e}</s.menu>;
        })}
      </s.GridContainer>
    </s.MenuWrapper>
  );
}
