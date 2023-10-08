// AppUI.js
import React, { useState, useEffect } from "react";
import "./App.css";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  // Estado para controlar el tamaño de la pantalla
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    // Verificar el tamaño de la ventana al cargar la página
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsSmallScreen(windowWidth < 769); // Pantallas pequeñas (teléfonos celulares)
      setIsMediumScreen(windowWidth >= 769 && windowWidth < 1024); // Pantallas medianas (tabletas)
    };

    handleResize(); // Comprobar el tamaño de la ventana al cargar la página

    // Agregar un event listener para seguir el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

        {/* Controla la visibilidad del botón en función del tamaño de la pantalla */}
        <CreateTodoButton
          setOpenModal={setOpenModal}
          isVisible={!isSmallScreen}
          isVisibleMediumScreen={!isMediumScreen}
        />

        {/* Renderiza el contenido del formulario en lugar del modal en pantallas grandes */}
        {!isSmallScreen && !isMediumScreen && !openModal && <TodoForm />}

        {/* Renderiza el modal solo en pantallas pequeñas y medianas */}
        {(openModal || isMediumScreen) && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </div>
    </>
  );
}

export { AppUI };
