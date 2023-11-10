import React from "react";

import "./ChangeAlert.css";
import { useStorageListener } from "./useStorageListener";
function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>
            Parece que hiciste algunos cambios en otra pestaña o ventana del
            navegador.
          </p>
          <p>¿Quieres sincronizar tus cambios?</p>
          <button
            className="TodoForm-button  TodoForm-button--add"
            onClick={() => toggleShow(false)}
          >
            si!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
