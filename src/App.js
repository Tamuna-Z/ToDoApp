
import './App.css';
import  GlobalStyled  from "./styled-components/Global.styled";
import BackgroundWithDate from './components/BackgroundWithDate';
import SearchTodo from './components/SearchTodo';
import { useState,useEffect } from "react";

function App() {
    const [inputValue, setInputValue] =useState('');
    const [todos,setTodos] =useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
 return(

  <>
  <GlobalStyled/>
  <BackgroundWithDate currentDate={currentDate} setCurrentDate={setCurrentDate}/>
  <SearchTodo inputValue={inputValue} setInputValue={setInputValue} todos={todos} setTodos={setTodos} currentDate={currentDate} setCurrentDate={setCurrentDate} />
  
  </>
 )
  
}

export default App;
