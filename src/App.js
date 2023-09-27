import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateNewTodoButton } from "./CreateNewTodo-Button";
import React from "react";
import "./App.css";

// Componente de react JSX
// elementos de react va en minusculas
// Si comensaran en minusculas serian componentes de react

const defaultTodos = [
  { text: "Hacer sopa", completed: false },
  { text: "Estudiar en platzi ", completed: false },
  { text: "lavar ropa", completed: false },
  { text: "Hacer ejercicio", completed: false },
  { text: "picar cebolla", completed: false },
  { text: "hola cebolla", completed: false },
  { text: "mi cebolla", completed: false },
  { text: "mejor cebolla", completed: false },
  { text: "caminar cebolla", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />

      <TodoSearch />
      <>
        <div className="container">
          <TodoList>
            {defaultTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>
          <CreateNewTodoButton />
        </div>
      </>
    </>
  );
}

export default App;
