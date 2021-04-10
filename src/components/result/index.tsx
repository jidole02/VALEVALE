import * as s from "./style";
import { useHistory } from "react-router-dom";
import { useEffect,useState } from "react";
import ResultRank from "./resultRank";
import Submit from "./submit";
import { request } from "../axios";

interface params {
  number: string
}
interface Data {
  id: number;
  description: string | null;
  passtime: number;
  level: number;
  nickname: string | null;
}
export default function Result({ number }: params) {
  const history = useHistory();
  const [Result,setResult] = useState<boolean>(false);
  const [submit,setSubmit] = useState<boolean>(false);
  const [data,setData] = useState<Data[]>([]);
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("ans", ".");
    }, 1000);
  }, []);
  const ResultShow=()=>{
      setResult(!Result);
  }
  const next = (lv: number) => {
    window.location.href = `/play/${lv}`;
  };
  const SubmitShow=()=>{
      setSubmit(!submit);
  }
  useEffect(()=>{
    request('get',`/record/level/${number}`,{})
    .then((e)=>{
      setData(e);
    })
  },[])
  return (
      <>
      {Result && <ResultRank ment={`lv.${number}를 클리어한 사람`} data={data} func={ResultShow}/>}
      {submit && <Submit func={SubmitShow} level={number}/>}
    <s.ResultWrapper>
      <s.SideBar style={{ left: 0 }}>
        <s.Arrow
          style={number === "1" ? { display: "none" } : {}}
          onClick={() => {
            next(parseInt(number) - 1);
          }}
        >
          ◀
        </s.Arrow>
      </s.SideBar>
      <s.SideBar>
        <s.Arrow
          style={number === "99" ? { display: "none" } : {}}
          onClick={() => {
            next(parseInt(number) + 1);
          }}
        >
          ▶
        </s.Arrow>
      </s.SideBar>
      <s.ResultMent>{localStorage.getItem("infor")}</s.ResultMent>
      <s.Ment>HOLY SHIT IS THIS RESULT!!</s.Ment>
      <s.ChoiceDiv>
        <s.SubMent onClick={ResultShow}>
          ▶ RANK
        </s.SubMent>
        <s.SubMent
          onClick={() => {
            history.push("/");
          }}
        >
          ▶ MENU
        </s.SubMent>
        {localStorage.getItem("infor") === "YOU WIN!" && (
          <s.SubMent onClick={SubmitShow}>
            ▶ 등록하기
          </s.SubMent>
        )}
      </s.ChoiceDiv>
    </s.ResultWrapper>
    </>
  );
}
