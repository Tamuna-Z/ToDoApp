import styled from "styled-components";
const SearchContainer = styled.div`
  width: 430px;
  min-height: 434px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;
const InputBoxWrapper = styled.div`
  position: relative;
  width: 275px;
  height: 49px;
  border-radius: 5px;
  margin: 23px 10px 36px 29px;
`;

const InputBox = styled.input`
  width: 275px;
  height: 49px;
  border-radius: 5px;
  padding:14px 12px 15px 16px;
  /* margin: 23px 10px 36px 29px; */
  background-color: #ebeff2;
  border: none;
  padding-left: 53px;
  ::placeholder {
    width: 38px;
    height: 19px;
    font-size: 16px;
    line-height: 19.36px;
  }
`;

const ButtonDiv = styled.button`
  width: 88px;
  height: 49px;
  border-radius: 5px;
  margin-top: 23px;
  background-color: #20eeb0;
  border: none;
`;
const VImgWrapper = styled.div`
  background-color: #20eeb0;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  position: absolute;
  top: 14px;
  left: 16px;
`;
const VImg = styled.img`
  width: 9px;
  height: 7px;
  position: absolute;
  top: 6px;
  left: 6px;
`;

export {
  SearchContainer,
  InputBox,
  ButtonDiv,
  InputWrapper,
  VImg,
  VImgWrapper,
  InputBoxWrapper,
};
