import styled from "styled-components";
const Heading=styled.h1`
font-size:18px;
line-height:21.78px;
font-weight:500;
color:#0D0D0D;
`;
const Clock=styled.h1`
font-size:14px;
line-height:16.94px;
font-weight:400;
color:#888888;

`;

const Circle=styled.div`
background-color:#fff;
border:2px solid #20EEb0;
border-radius:50%;
transition:0.4s;
`;
const Active=styled.div`
background-color:#20EEb0;
border:2px solid #20EEb0;
border-radius:50%;
background-image:url('../images/V.png');
background-repeat:no-repeat;
background-position:center;
transition:0.4s;
`;





export{Heading,Clock,Circle,Active}