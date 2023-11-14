import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function NewTodoPage() {
  return (
    <TodoForm
      label="Escribe tu nueva tarea"
      submitText="Añadir"
      submitEvent={() => console.log("llamara addTodo")}
    />
  );
}

export { NewTodoPage };
