import React from "react";

function Todos({ todos, setTodos, todo, delImage, todoText ,currentDate}) {

  const active = () => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return { ...element, completed: !element.completed };
        }
        return element;
      })
    );
  };
console.log(todos);
  return (
    <>
      <div>
         <h1>{todoText}</h1>
        <h1>Today at {currentDate.toLocaleString()} </h1>
      </div>

      <div>
        <div onClick={active}></div>
        <img src={delImage} alt="delete" />
      </div>
    </>
  );
}

export default Todos;
