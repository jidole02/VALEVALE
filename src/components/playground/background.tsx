import * as s from './style'

export default function Background() {
    return(
        <s.BackgroundWrapper>
            <s.Circle color="pink" x="-40" y="20"></s.Circle>
            <s.Circle color="pink" x="490" y="280"></s.Circle>
            <s.Circle color="pink" x="580" y="20"></s.Circle>
            <s.Circle color="pink" x="20" y="320"></s.Circle>
        </s.BackgroundWrapper>
    )
}