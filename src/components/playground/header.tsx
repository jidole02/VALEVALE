import * as s from './style'
import { useHistory } from 'react-router-dom';

export default function Header() {
    const history = useHistory();
    window.onkeydown = function(e:any) {
        if(e.keyCode === 27){
            history.push('/');
        }
    }
    return(
        <s.Header>
            <s.HMenu>ESC - 나가기</s.HMenu>
            <s.HMenu>ESC : 나가기</s.HMenu>
            <s.HMenu>ESC : 나가기</s.HMenu>
        </s.Header>
    )
}