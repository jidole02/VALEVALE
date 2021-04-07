import * as s from './style'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export default function Result() {
    const history = useHistory();
    useEffect(()=>{
        setTimeout(()=>{
            localStorage.setItem("ans",'.');
        },1000)
    },[])
    return(
        <s.ResultWrapper>
            <s.ResultMent>{localStorage.getItem("infor")}</s.ResultMent>
            <s.Ment>HOLY SHIT IS THIS RESULT!!</s.Ment>
            <s.ChoiceDiv>
                <s.SubMent onClick={()=>{
                    window.location.reload();
                }}>▶ RESTART</s.SubMent>
                <s.SubMent onClick={()=>{history.push('/')}}>▶ MENU</s.SubMent>
            </s.ChoiceDiv>
        </s.ResultWrapper>
    )
}