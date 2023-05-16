import styled from "styled-components";
const Heading=styled.h1`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color:#0D0D0D;
margin-bottom:5px;
`;
const Clock=styled.h1`
font-size:14px;
font-weight:400;
color:#888888;
font-family: 'Inter';
font-style: normal;
line-height: 17px;
`;

const Circle=styled.div`
background-color:#fff;
border:10px solid #20EEb0;
border-radius:50%;
transition:0.4s;
width:20px;
height:20px;

`;
const Active=styled.div`
background-color:#fff;
border:2px solid #20EEb0;
border-radius:50%;
background-image:url('../images/V.png');
background-repeat:no-repeat;
background-position:center;
transition:0.4s;
`;
const DeleteContainer =styled.div`
display:flex;
flex-direction:row;
align-items:center;
`;
const TodoContainer=styled.div`
display:flex;
justify-content:space-around;
margin-bottom:24px;
`;


const DeleteImg=styled.img`
width:20px;
height:20px;
margin-left:18px;
`;


export{Heading,Clock,Circle,Active,DeleteContainer,TodoContainer,DeleteImg}