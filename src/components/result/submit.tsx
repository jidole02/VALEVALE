import * as s from "./style";

export default function Submit({ func }: any) {
  return (
    <s.SubmitWrapper>
      <s.SubmitContainer>
        <s.Input placeholder="이름을 입력하세요."></s.Input>
        <s.Input placeholder="설명을 입력하세요."></s.Input>
        <s.BtnBox>
          <s.Button onClick={func}>취소</s.Button>
          <s.Button>등록</s.Button>
        </s.BtnBox>
      </s.SubmitContainer>
    </s.SubmitWrapper>
  );
}
