import React from "react";
import "./App.css";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateNewTodoButton } from "../CreateNewTodoButton";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateNewTodoButtonLoading } from "../CreateNewTodoButtonLoading";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <div className="container">
        <TodoList>
          {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {error && <TodosError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodos />}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {loading ? <CreateNewTodoButtonLoading /> : <CreateNewTodoButton />}
      </div>
    </>
  );
}

export { AppUI };
