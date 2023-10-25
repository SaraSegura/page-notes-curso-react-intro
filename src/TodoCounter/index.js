//props son un objecto
import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <div>
      <h1>Crea una nueva tarea</h1>
      <h2>
        Has realizado <br></br> {completedTodos} de {totalTodos} TAREAS!!!
      </h2>
    </div>
  );
}

export { TodoCounter };
