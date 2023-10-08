// CreateTodoButton.js
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal, isVisible, isVisibleMediumScreen }) {
  return (
    (isVisible || isVisibleMediumScreen) && (
      <button
        className="CreateTodoButton"
        onClick={() => {
          setOpenModal((state) => !state);
        }}
      >
        +
      </button>
    )
  );
}

export { CreateTodoButton };
