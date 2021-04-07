import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        ::-webkit-scrollbar{
            width:7px;
            background-color:black;
        }
        ::-webkit-scrollbar-thumb{
            background-color:pink;
            box-shadow: 0 0 1px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 20px #ff00de,
    0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 50px #ff00de, 0 0 50px #ff00de;
        }
    }
    *{
        -ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;
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
