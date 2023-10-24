import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

import "./App.css";

// Componente de react JSX
// elementos de react va en minusculas
// Si comensaran en minusculas serian componentes de react

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
