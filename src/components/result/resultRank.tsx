import * as s from "./style";

interface data {
  id: number;
  description: string | null;
  passtime: number;
  level: number;
  nickname: string | null;
}

interface params {
  func?: any; // 선택적 매개 변수 -> 안 넣어줘도 상관 없음
  ment: string;
  data?: data[];
}
export default function ResultRank({ func, ment, data }: params) {
  console.log(data);
  return (
    <s.ResultRank onClick={func}>
      <s.RankTitle>{ment}</s.RankTitle>
      {data?.map((e: data, index: number) => {
        return (
          <s.PeopleList key={index}>
            <s.RankName>
              {e.nickname}
              <b>{e.passtime}초</b>
            </s.RankName>
            <s.RankDes>{e.description}</s.RankDes>
          </s.PeopleList>
        );
      })}
    </s.ResultRank>
  );
}
