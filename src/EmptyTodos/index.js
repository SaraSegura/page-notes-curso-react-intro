import React from "react";
import "./EmptyTodos.css";

function EmptyTodos() {
  return (
    <div>
      <p className="EmptyTodos-text"> ¡Vamos! , crea tu primera tarea.</p>
      <div className="EmptyTodos-circles">
        <span className="circle-one"></span>
        <span className="circle-two"></span>
        <span className="circle-three"></span>
      </div>
    </div>
  );
}

export { EmptyTodos };
