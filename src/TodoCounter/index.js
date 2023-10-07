//props son un objecto
import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <div>
      <h1>Crea una nueva tarea</h1>
      <h2>
        Has realizado <br></br> {completedTodos} de {totalTodos} TODOS!!!
      </h2>
    </div>
  );
}

export { TodoCounter };
