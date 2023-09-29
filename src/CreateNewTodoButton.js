import "./CreateNewTodoButton.css";
function CreateNewTodoButton() {
  return (
    <div className="containerCreateNewTodo">
      <h3 className="tasktitle">Nombre de la tarea</h3>
      <input className="input_Task" type="text" placeholder="tarea..."></input>
      <button className="buttonAdd">Agregar Tarea</button>
    </div>
  );
}

export { CreateNewTodoButton };
