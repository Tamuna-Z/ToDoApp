import React from "react";
import {
  Heading,
  Clock,
  Circle,
  Active,
  DeleteContainer,
  TodoContainer,
  DeleteImg,
} from "../styled-components/Todo.styled";
import vIcon from "../images/V.png";

function Todos({
  todos,
  setTodos,
  todo,
  delImage,
  todoText,
  currentDate,
  completed,
}) {
  const activate = () => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return { ...element, completed: !element.completed };
        }
        return element;
      })
    );
  };
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  console.log(completed);
  return (
    <>
      <TodoContainer>
        <div>
          <Heading>{todoText}</Heading>
          <Clock>Today at {currentDate.toLocaleString()} </Clock>
        </div>

        <DeleteContainer>
          <Circle onClick={activate} completed={completed}>{completed && <img src={vIcon}  />}</Circle>
          <DeleteImg src={delImage} alt="delete" onClick={deleteHandler} />
        </DeleteContainer>
      </TodoContainer>
    </>
  );
}

export default Todos;
