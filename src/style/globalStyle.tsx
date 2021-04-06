import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        font-family:나눔스퀘어;
    }
    a{
        text-decoration:none;
    }
    button{
        outline:none;
        cursor:pointer;
    }
    input{
        outline:none;
    }
`;

export default GlobalStyle;