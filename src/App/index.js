import React, { useState, useEffect } from "react";
import { useTodos } from "./useTodos";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import TodoHeader from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import "./App.css";

// Componente de react JSX
// elementos de react va en minusculas
// Si comensaran en minusculas serian componentes de react

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  // Estado para controlar el tamaño de la pantalla
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false); // Add this line

  useEffect(() => {
    // Verificar el tamaño de la ventana al cargar la página
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsSmallScreen(windowWidth < 769);
      setIsMediumScreen(windowWidth >= 769 && windowWidth < 1024); // Update this line
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
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

        <CreateTodoButton
          setOpenModal={setOpenModal}
          isVisible={!isSmallScreen}
          isVisibleMediumScreen={!isMediumScreen}
        />

        {!isSmallScreen && !isMediumScreen && !openModal && <TodoForm />}

        {(openModal || isMediumScreen) && (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
