import * as s from './style'

export default function Result() {
    return(
        <s.ResultWrapper>
            <s.ResultMent>GAME OVER</s.ResultMent>
            <s.Ment>HOLY SHIT IS THIS RESULT!!</s.Ment>
            <s.ChoiceDiv>
                <s.SubMent>▶ RESTART</s.SubMent>
                <s.SubMent>▶ MENU</s.SubMent>
            </s.ChoiceDiv>
        </s.ResultWrapper>
    )
}