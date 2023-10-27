import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";
function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
