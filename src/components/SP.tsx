import styled from "styled-components";
import Logo from '../assets/logo.svg?react'
const SP = () => {
  return (
    <Box>
        <Logo />
    </Box>
  )
}

export default SP

const Box = styled.div`

  body{
    background: #000;
  }
  svg path{
            fill-opacity: 0;
            stroke: white;
            stroke-dasharray: 1405;
            stroke-dashoffset: 1405;
            animation: sp 4s ease-in-out 1 forwards ;
        }

        @keyframes sp {
            0% {
                fill-opacity: 0;
                stroke-dashoffset: 1405;
            }
            90%{
                stroke : white;
            }
            100% {
                 /* fill: #9155fd; */
                 fill-opacity: 1;
                stroke-dashoffset: 0;
                stroke : transparent;
            }
        }
`;