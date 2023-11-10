//props son un objecto
import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <div>
      <h1 className={`h1 ${!!loading && "h1--loanding"}`}>
        Crea una nueva tarea
      </h1>
      <h2 className={`h2 ${!!loading && "h2--loanding"}`}>
        Has realizado <br></br> {completedTodos} de {totalTodos} TAREAS!!!
      </h2>
    </div>
  );
}

export { TodoCounter };
