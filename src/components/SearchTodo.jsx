import React from "react";
import { SearchContainer } from "../styled-components/SearchTodo.styled";
import plus from "../images/plus.png";

const SearchTodo = ({
  inputValue,
  setInputValue,
  todos,
  setTodos,
  currentDate,
  setCurrentDate,
}) => {
  const addTodo = (e) => {
    setInputValue(e.target.value);
  };

  const submitTodo = (e) => {
    
    e.preventDefault();
      if(inputValue === ""){
        return
      }
      setTodos([
        ...todos,
        {
          text: inputValue,
          date: currentDate,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    
    setInputValue("");
  };

 

  return (
    <SearchContainer>
      <form onSubmit={submitTodo}>
        <input
          placeholder="Note"
          type="text"
          value={inputValue}
          onChange={addTodo}
          required
        />
        <button 
        onClick={submitTodo}
        type="submit">
          <i>
            <img src={plus} alt="plus" />
          </i>
        </button>
      </form>
    </SearchContainer>
  );
};

export default SearchTodo;