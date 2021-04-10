import { useCallback, useEffect, useRef, useState } from "react";
import Result from "../result";
import Background from "./background";
import Header from "./header";
import * as s from "./style";
import namer from "korean-name-generator";

let i: number;
export default function PlayGround({ match }: any) {
  const [data, setData] = useState<string>("");
  const [check, setCheck] = useState<number>(0);
  const [arrNum, setArrNum] = useState<number>(0);
  const [end, setEnd] = useState<boolean>(false);
  const WordInput = useRef<HTMLDivElement | null>(null);
  const Input = useRef<HTMLInputElement | null>(null);
  const [time, setTime] = useState<number>(3);
  const [timeOut, setTimeOut] = useState<boolean>(false);
  const [wordArr] = useState<string[]>([]);

  useEffect(() => {
    for (let k = 0; k < 7; k++) {
      var name = namer.generate();
      wordArr.push(name);
    }
  }, []);
  const InputData = useCallback(
    (e: any): void => {
      const { value } = e.target;
      setData(value);
    },
    [data]
  );
  const WordAnim = (word: string) => {
    i = 0;
    if (WordInput.current !== null && WordInput.current !== undefined) {
      WordInput.current.style.fontSize = `${13}vmin`;
    }
    if (WordInput.current !== null) {
      WordInput.current.innerHTML = word;
    }
    var timer = setInterval(() => {
      i++;
      if (localStorage.getItem("ans") === word) {
        clearInterval(timer);
      }
      if (WordInput.current !== null && WordInput.current !== undefined) {
        WordInput.current.style.fontSize = `${13 - i / 10}vmin`;
      }
      if (13 - i / 10 === 0) {
        window.localStorage.setItem("infor", "GAME OVER...");
        setEnd(true); // 타임오버
        clearInterval(timer);
      }
    }, (150 / match.params.id) * 3);
  };
  useEffect(() => {
    if (wordArr.length === arrNum && wordArr.length > 0) {
      localStorage.setItem("ans", wordArr[arrNum - 1]);
      if (!end) {
        window.localStorage.setItem("infor", "YOU WIN!");
      }
      setEnd(true); // 클리어
    } else {
      if (arrNum === 0) {
        let i = 2;
        var a = setInterval(() => {
          setTime(i);
          i--;
          if (i === 0) {
            clearInterval(a);
          }
        }, 1000);
        // 처음 들어왔으면 ...
        setTimeout(() => {
          setTimeOut(true);
          WordAnim(wordArr[arrNum]);
          setArrNum(arrNum + 1);
        }, 3000);
      } else {
        // 두번째부터
        WordAnim(wordArr[arrNum]);
        setArrNum(arrNum + 1);
      }
    }
  }, [check]);
  useEffect(() => {
    localStorage.setItem("end", ".");
  }, []);
  const CheckWord = (e: any) => {
    if (e.key === "Enter") {
      if (wordArr[arrNum - 1] === data) {
        localStorage.setItem("ans", data);
        setCheck(check + 1);
        setData("");
      } else {
        setData("");
      }
    }
  };
  useEffect(() => {
    Input.current?.focus();
  }, [data]);
  return (
    <>
      {end && <Result number={match.params.id} />}
      <Background />
      {!timeOut && <s.StartTime>{time}</s.StartTime>}
      <Header gameState={end} level={match.params.id} />
      <s.MatchWordContainer>
        <s.MatchWord ref={WordInput}></s.MatchWord>
      </s.MatchWordContainer>
      <s.UnderBar>
        {end ? (
          <s.WordInput placeholder="단어를 입력하세요!!" readOnly />
        ) : (
          <s.WordInput
            placeholder="단어를 입력하세요!!"
            onChange={InputData}
            onKeyPress={CheckWord}
            value={data}
            ref={Input}
          />
        )}
      </s.UnderBar>
    </>
  );
}
