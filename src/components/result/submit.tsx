import * as s from "./style";
import { useState, useEffect } from "react";
import { request } from "../axios";

export default function Submit({ func, level }: any) {
  let loc: string | null = localStorage.getItem("time");
  const [data, setData] = useState({
    nickname: "",
    description: "",
    passtime: 0,
    level: parseInt(level),
  });
  const InputSub = (e: { target: HTMLInputElement }) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const subData = () => {
    request("POST", "/record", data)
      .then((e) => {
        alert('등록되었습니다!');
        func();
      })
      .catch((err) => {
        alert('서버 에러...ㅠ');
        func();
      });
  };
  useEffect(() => {
    if (typeof loc === "string") {
      setData({
        ...data,
        passtime: parseFloat(loc),
      });
    }
  }, []);
  return (
    <s.SubmitWrapper>
      <s.SubmitContainer>
        <s.Input
          placeholder="이름을 입력하세요."
          name="nickname"
          onChange={InputSub}
          autoComplete="off"
        />
        <s.Input
          placeholder="설명을 입력하세요."
          name="description"
          onChange={InputSub}
          autoComplete="off"
        />
        <s.BtnBox>
          <s.Button onClick={func}>취소</s.Button>
          <s.Button onClick={subData}>등록</s.Button>
        </s.BtnBox>
      </s.SubmitContainer>
    </s.SubmitWrapper>
  );
}
