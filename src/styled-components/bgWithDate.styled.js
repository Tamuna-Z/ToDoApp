import styled from "styled-components";
import backgroundImage from "../images/Background.png";

const ContainerStyle = styled.div`
  
  width: 430px;
  // min-height: 636px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const BgImage=styled.div`
background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height:100%;
  border-radius: 10px 10px 0px 0px;

    
`;
const ClockDayWrapper=styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
margin: 131px 28px 13px 210px;


`;
const ClockWrapper =styled.div`
display:flex;
width:fit-content;

`;
const Clock = styled.p`
  // width: 92px;
  font-weight: 400;
  font-size: 48px;
  line-height: 57.84px;
  color: #ffffff;
  // margin:5px;
  
`;
const Pm = styled.p`
width: 92px;
font-weight: 400;
font-size: 48px;
line-height: 57.84px;
color: #ffffff;
margin-left: 10px;
width:fit-content;
`;

const Day=styled.p`
 width: 192px;
 text-align:right;
  height: 22px;
  font-family: Russo One;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.69px;
  color: #ffffff;

`;

export { Clock, ContainerStyle ,BgImage ,Day,Pm,ClockWrapper,ClockDayWrapper};
