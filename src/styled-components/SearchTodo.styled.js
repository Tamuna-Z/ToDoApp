import styled from "styled-components";
const SearchContainer=styled.div`
width: 430px;
min-height: 434px;
background-color: #ffffff;
display: flex;
flex-direction: column`;

const InputWrapper=styled.div`
position:relative;
display:flex;
`;
const InputBoxWrapper = styled.div`
  position: relative;
`;

const InputBox=styled.input`
// position:relative;
width:275px;
height:49px;
border-radius:5px;
margin:23px 10px 36px 29px;
background-color:#EBEFF2;
border:none;
padding-left:26px;
::placeholder {
    width:38px;
    height:19px;
    font-size:16px;
    line-height:19.36px;    
}
`;

const ButtonDiv=styled.button`
width:88px;
height:49px;
border-radius:5px;
margin-top:23px;
background-color:#20EEB0;
border:none;
`;
const VImgWrapper=styled.div`
// position:relative;
background-color:#20EEB0;
width:20px;
height:20px;
border-radius:50px;
position:absolute;
top:2px;
left:2px;
`;
const VImg=styled.img`
width:9px;
height:7px;
position:absolute;
top:6px;
left:6px;
`;



export{SearchContainer,InputBox,ButtonDiv,InputWrapper,VImg,VImgWrapper,InputBoxWrapper}