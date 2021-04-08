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
    func();
    request("POST", "/record", data)
      .then((e) => {
        console.log(e);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (typeof loc === "string") {
      setData({
        ...data,
        passtime: parseInt(loc),
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
