
import './App.css';
// import Background from './components/Background';
import  GlobalStyled  from "./styled-components/Global.styled";
import BackgroundWithDate from './components/BackgroundWithDate';
import { useState,useEffect } from "react";

function App() {
 return(

  <>
  <GlobalStyled/>
  {/* <Background/> */}
  <BackgroundWithDate/>
  </>
 )
  
}

export default App;
