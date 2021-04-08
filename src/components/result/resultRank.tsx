import * as s from "./style";

interface params{
    func : any,
    lv : string
}
export default function ResultRank({func,lv} : params) {
    return(
        <s.ResultRank onClick={func}>
            <s.RankTitle>lv.{lv}을 클리어한 사람</s.RankTitle>
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