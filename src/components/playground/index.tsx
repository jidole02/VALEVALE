import { useCallback, useEffect, useRef, useState } from "react";
import * as s from "./style";

export default function PlayGround() {
  const [data, setData] = useState<string>();
  const [check, setCheck] = useState<number>(0);
  const [arrNum, setArrNum] = useState<number>(0);
  const WordInput = useRef<HTMLDivElement | null>(null);
  const wordArr = ["정지원", "이주열", "김재현", "김지민", "안병헌", "손채건"];
  const InputData = useCallback(
    (e: any): void => {
      const { value } = e.target;
      setData(value);
    },
    [data]
  );
  const [answerAlarm,setAnswerAlarm] = useState<number | null>(null);
  const WordAnim = (word: string) => {
    let i = 0;
    console.log(i);
    if (WordInput.current !== null && WordInput.current !== undefined) {
        WordInput.current.style.fontSize = `${13}vmin`;
    }
    if (WordInput.current !== null) {
      WordInput.current.innerHTML = word;
    }
    var timer = setInterval(() => {
        console.log(wordArr[arrNum]);
      i++;
      if (WordInput.current !== null && WordInput.current !== undefined) {
        WordInput.current.style.fontSize = `${13 - i / 10}vmin`;
      }
      if(answerAlarm === arrNum){
          console.log("확인")
          clearInterval(timer);
      }
      if (13 - i / 10 === 0) {
        alert("타임오버!");
        clearInterval(timer);
      }
    }, 30);
  };
  useEffect(() => {
    if (wordArr.length === arrNum) {
      alert("클리어!");
    }
    WordAnim(wordArr[arrNum]);
    setArrNum(arrNum + 1);
  }, [check]);
  const CheckWord = (e: any) => {
    if (e.key === "Enter") {
      if (wordArr[arrNum - 1] === data) {
        setCheck(check + 1);
        setData('');
        setAnswerAlarm(arrNum);
      } else {
        alert("아쉽지만 틀렸네요...");
      }
    }
  };
  return (
    <>
      <s.MatchWordContainer>
        <s.MatchWord ref={WordInput}></s.MatchWord>
      </s.MatchWordContainer>
      <s.UnderBar>
        <s.WordInput
          placeholder="단어를 입력하세요!!"
          onChange={InputData}
          onKeyPress={CheckWord}
          value={data}
        />
      </s.UnderBar>
    </>
  );
}
