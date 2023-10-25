import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  });

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

// localStorage.removeItem("TODOS_V1");
//  const defaultTodos = [
//   { text: "Hacer sopa", completed: false },
//   { text: "Estudiar en platzi ", completed: false },
//   { text: "lavar ropa", completed: false },
//   { text: "Hacer ejercicio", completed: false },
//   { text: "picar cebolla", completed: false },
//   { text: "hola cebolla", completed: false },
//   { text: "mi cebolla", completed: false },
//   { text: "mejor cebolla", completed: false },
//   { text: "caminar cebolla", completed: false },
//   { text: "Usar estados ", completed: false },
// ];

//  localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos))
