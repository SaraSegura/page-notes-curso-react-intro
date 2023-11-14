import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function EditTodoPage() {
  return (
    <TodoForm
      label="Edita tu tarea"
      submitText="Editar"
      submitEvent={() => console.log("llamara editTodo")}
    />
  );
}

export { EditTodoPage };
