//props son un objecto
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <div>
      <h1>Crea una nueva tarea</h1>
      <h2>
        Has realizado <br></br> {completed} de {total} TODOS!!!
      </h2>
    </div>
  );
}

export { TodoCounter };
