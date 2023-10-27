import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";
function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p className="p-cambios">Hubo cambios!!</p>
        <button className="btn-recargar" onClick={() => toggleShow(false)}>
          Volver a cargar la información
        </button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
