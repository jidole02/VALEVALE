import * as s from './style'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

interface params{
    number : string
}
export default function Result({number} : params) {
    const history = useHistory();
    useEffect(()=>{
        setTimeout(()=>{
            localStorage.setItem("ans",'.');
        },1000)
    },[])
    const next=(lv : number)=>{
        window.location.href = `/play/${lv}`
    }
    return(
        <s.ResultWrapper>
            <s.SideBar style={{left:0}}>
                <s.Arrow onClick={()=>{next(parseInt(number)-1)}}>◀</s.Arrow>
            </s.SideBar>
            <s.SideBar>
                <s.Arrow onClick={()=>{next(parseInt(number)+1)}}>▶</s.Arrow>
            </s.SideBar>
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