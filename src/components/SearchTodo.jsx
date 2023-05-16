import React from "react";
import {
  SearchContainer,
  InputBox,
  ButtonDiv,
  InputWrapper,
  VImg,
  VImgWrapper,
  InputBoxWrapper,
} from "../styled-components/SearchTodo.styled";
import plus from "../images/plus.png";
import vIcon from "../images/V.png";
import TodoList from "../components/TodoList";

const SearchTodo = ({
  inputValue,
  setInputValue,
  todos,
  setTodos,
  currentDate,
}) => {
  function AddTodo(event) {
    setInputValue(event.target.value);
  }

  function submitTodo(e) {
    e.preventDefault();
    if (inputValue !== "") {
      setTodos([
        ...todos,
        {
          text: inputValue,
          date: currentDate,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    }

    setInputValue("");
  }

  return (
    <SearchContainer>
      <form onSubmit={submitTodo}>
        <InputWrapper>
          <InputBoxWrapper>
            <VImgWrapper>
              <VImg src={vIcon} />
            </VImgWrapper>
            <InputBox
              placeholder="Note"
              type="text"
              value={inputValue}
              onChange={AddTodo}
              required
            />
          </InputBoxWrapper>

          <ButtonDiv onClick={submitTodo} type="submit">
            <i>
              <img src={plus} alt="plus" />
            </i>
          </ButtonDiv>
        </InputWrapper>
      </form>
      <TodoList todos={todos} setTodos={setTodos} currentDate={currentDate} />
    </SearchContainer>
  );
};

export default SearchTodo;
