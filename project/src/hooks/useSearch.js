import { useState, useEffect, useRef } from "react";

export default function useSearch() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = input === "";
      return;
    }

    if (input === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }

    if (input.match(/^\d+$/)) {
      setError("Cant find a movie with only numbers");
      return;
    }

    if (input.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [input]);

  return { input, setInput, error };
}
