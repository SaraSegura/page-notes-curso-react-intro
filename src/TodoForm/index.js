import React from "react";
import "./TodoForm.css";

function TodoForm() {
  return (
    <form>
      <label>Escribe tu nueva tarea</label>
      <textarea placeholder="Cortar cebolla" />
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
