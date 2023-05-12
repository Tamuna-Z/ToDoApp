import styled from "styled-components";
import backgroundImage from "../images/Background.png";

const ContainerStyle = styled.div`
  
  width: 430px;
  min-height: 636px;
  border-radius: 10px 10px 0px 0px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const BgImage=styled.div`
background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
    
`;

const Clock = styled.div`
  width: 92px;
  font-weight: 400;
  font-size: 48px;
  line-height: 57.84px;
  color: #ffffff;
`;

export { Clock, ContainerStyle ,BgImage };
