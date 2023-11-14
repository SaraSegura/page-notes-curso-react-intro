import React from "react";
import "./TodoForm.css";
import { useNavigate } from "react-router-dom";

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const OnCancel = () => {
    navigate("/");
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    navigate("/");
    props.submitEvent(newTodoValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea
        placeholder="Cortar cebolla"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={OnCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {props.submitText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
