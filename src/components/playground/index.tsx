import { useCallback, useEffect, useRef, useState } from "react";
import Result from "../result";
import Background from "./background";
import * as s from "./style";

let i: number;
export default function PlayGround() {
  const [data, setData] = useState<string>("");
  const [check, setCheck] = useState<number>(0);
  const [arrNum, setArrNum] = useState<number>(0);
  const [end,setEnd] = useState<boolean>(false);
  const WordInput = useRef<HTMLDivElement | null>(null);
  const Input = useRef<HTMLInputElement | null>(null);
  const wordArr = ["정지원", "박동행", "김동씹", "안병헌", "박승준"];
  const InputData = useCallback(
    (e: any): void => {
      const { value } = e.target;
      setData(value);
    },
    [data]
  );
  const WordAnim = (word: string) => {
    i = 0;
    console.log(word);
    if (WordInput.current !== null && WordInput.current !== undefined) {
      WordInput.current.style.fontSize = `${13}vmin`;
    }
    if (WordInput.current !== null) {
      WordInput.current.innerHTML = word;
    }
    var timer = setInterval(() => {
      i++;
      if (WordInput.current !== null && WordInput.current !== undefined) {
        WordInput.current.style.fontSize = `${13 - i / 10}vmin`;
      }
      if (13 - i / 10 === 0) {
        setEnd(true); // 타임오버
        clearInterval(timer);
      }
    }, 50 * (arrNum + 1));
  };
  useEffect(() => {
    if (wordArr.length === arrNum) {
      setEnd(true); // 클리어
    } else {
      WordAnim(wordArr[arrNum]);
      setArrNum(arrNum + 1);
    }
  }, [check]);
  const CheckWord = (e: any) => {
    if (e.key === "Enter") {
      if (wordArr[arrNum - 1] === data) {
        setCheck(check + 1);
        setData("");
      }
    }
  };
  useEffect(() => {
    Input.current?.focus();
  }, [data]);
  return (
    <>
    {end && <Result/>}
      <Background />
      <s.MatchWordContainer>
        <s.MatchWord ref={WordInput}></s.MatchWord>
      </s.MatchWordContainer>
      <s.UnderBar>
        <s.WordInput
          placeholder="단어를 입력하세요!!"
          onChange={InputData}
          onKeyPress={CheckWord}
          value={data}
          ref={Input}
        />
      </s.UnderBar>
    </>
  );
}
