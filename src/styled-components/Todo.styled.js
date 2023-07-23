import styled from "styled-components";
const Heading = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #0d0d0d;
  margin-bottom: 5px;
`;
const Clock = styled.h1`
  font-size: 14px;
  font-weight: 400;
  color: #888888;
  font-family: "Inter";
  font-style: normal;
  line-height: 17px;
`;

const Circle = styled.div`
  border: 2px solid #20eeb0;
  border-radius: 50%;
  transition: 0.4s;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${(props)=>props.completed ? "#20eeb0" :"#fff"};
  
`;
const Active = styled.div`
  background-color: #fff;
  border: 2px solid #20eeb0;
  border-radius: 50%;
  background-image: url("../images/V.png");
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.4s;
`;
const DeleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TodoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;
`;

const DeleteImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 18px;
`;
// const WhiteBg=styled.div`
// background-color: #fff;
// border-radius: 50%;
//   transition: 0.4s;
//   width: 10px;
//   height: 10px;

// `;

export {
  Heading,
  Clock,
  Circle,
  Active,
  DeleteContainer,
  TodoContainer,
  DeleteImg,
  
};
