import * as s from "./style";

interface params{
    func? : any, // 선택적 매개 변수 -> 안 넣어줘도 상관 없음
    ment : string
}
export default function ResultRank({func,ment} : params) {
    return(
        <s.ResultRank onClick={func}>
            <s.RankTitle>{ment}</s.RankTitle>
            <s.PeopleList>
                <s.RankName>정지원<b>12초</b></s.RankName>
                <s.RankDes>대덕 소프트웨어 재학중이다 ㅆ발림들아</s.RankDes>
            </s.PeopleList>
            <s.PeopleList>
                <s.RankName>정지원<b>12초</b></s.RankName>
                <s.RankDes>대덕 소프트웨어 재학중이다 ㅆ발림들아</s.RankDes>
            </s.PeopleList>
            <s.PeopleList>
                <s.RankName>정지원<b>12초</b></s.RankName>
                <s.RankDes>대덕 소프트웨어 재학중이다 ㅆ발림들아</s.RankDes>
            </s.PeopleList>
            <s.PeopleList>
                <s.RankName>정지원<b>12초</b></s.RankName>
                <s.RankDes>대덕 소프트웨어 재학중이다 ㅆ발림들아</s.RankDes>
            </s.PeopleList>
        </s.ResultRank>
    )
}