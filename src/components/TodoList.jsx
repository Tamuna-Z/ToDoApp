import React from "react";
import delImage from "../images/delete.png";
import Todos from "../components/Todos";

function TodoList({ todos, setTodos, currentDate}) {
  return (
    <div>
      {todos.map((todo) => (
        <Todos
          key={todo.id} // Add a unique key prop
          setTodos={setTodos}
          todoText={todo.text}
          delImage={delImage}
          todos={todos}
          todo={todo}
          currentDate={currentDate}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;
