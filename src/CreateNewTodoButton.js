import React from "react";
import "./CreateNewTodoButton.css";
function CreateNewTodoButton() {
  return (
    <div className="containerCreateNewTodo">
      <h3 className="tasktitle">Nombre de la tarea</h3>
      <input className="input_Task" type="text" placeholder="tarea..."></input>
      <button
        className="buttonAdd"
        onClick={(event) => {
          console.log("Le diste click");
          console.log(event);
          console.log(event.target);
        }}
      >
        Agregar Tarea
      </button>
    </div>
  );
}

export { CreateNewTodoButton };
