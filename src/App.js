
import './App.css';
// import Background from './components/Background';
import  GlobalStyled  from "./styled-components/Global.styled";
import CurrentDate from './components/CurrentDate';
import { useState,useEffect } from "react";

function App() {
 return(

  <>
  <GlobalStyled/>
  {/* <Background/> */}
  <CurrentDate/>
  </>
 )
  
}

export default App;
