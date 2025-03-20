
import styled from 'styled-components';
import MAHADEV from '../assets/mahakal.svg?react';
const Mahadev = () => {
  return (
    <Box>
        <MAHADEV />
    </Box>
  )
}

export default Mahadev


const Box = styled.div`

  svg path{
            fill-opacity: 0;
            stroke: black;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: sp 15s ease-in-out 1 forwards ;
        }

        @keyframes sp {
            0% {
                fill-opacity: 0;
                stroke-dashoffset: 1000;
            }
            90%{
                /* stroke : white; */
            }
            100% {
                 /* fill: #9155fd; */
                 fill-opacity: 1;
                stroke-dashoffset: 0;
                stroke : transparent;
            }
        }
`;