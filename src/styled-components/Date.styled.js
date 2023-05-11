import styled from "styled-components";

const Container = styled.div`
  width: 430px;
  min-height:636px;
  border-radius: 10px 10px 0px 0px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column; 
`;
// const bgImage=styled.div`
// backgroundImage: url(${backgroundImage}),
// backgroundSize: 'cover',
// backgroundPosition: 'center',
// backgroundRepeat: 'no-repeat',
// `;

const Clock =styled.div`
width:192px;
font-weight:400;
font-size:48px;
line-height:57.84px;
color:#ffffff;

`;



export{Container,Clock}