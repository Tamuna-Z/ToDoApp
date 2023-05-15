import React from "react";
import {Heading,Clock,Circle, Active} from '../styled-components/Todo.styled';

function Todos({ todos, setTodos, todo, delImage, todoText ,currentDate}) {

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
const deleteHandler=()=>{
  setTodos(todos.filter((element)=> element.id !==todo.id));
};
  return (
    <>
      <div>
         <Heading>{todoText}</Heading>
        <Clock>Today at {currentDate.toLocaleString()} </Clock>
      </div>

      <div>
        <div onClick={activate} ></div>
        <img src={delImage} alt="delete"  onClick={deleteHandler}/>
      </div>


    </>
  );
}

export default Todos;
