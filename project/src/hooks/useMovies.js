import { useState, useRef, useMemo, useEffect } from "react";

export default function useMovies({ input, sort }) {
  const [responseMovies, setResponseMovies] = useState([]);
  const [mappedMovies, setMappedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(input);

  const getMovies = async () => {
    if (input === previousSearch.current) return;
    // if (input === "") return null;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = input;
      const response = await fetch(
        `https://omdbapi.com/?apikey=e1f20ea6&s=${input}`
      );
      const json = await response.json();
      const movies = json.Search;
      const formattedMovies = movies?.map((movie) => ({
        poster: movie.Poster,
        id: movie.imdbID,
        year: movie.Year,
        title: movie.Title,
        type: movie.Type,
      }));
      setMappedMovies(formattedMovies);
      setResponseMovies(movies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("hola");
  }, [getMovies]);

  const sortedMovies = useMemo(() => {
    console.log("useMemo");
    return sort
      ? [...mappedMovies].sort((a, b) => a.title.localeCompare(b.title))
      : mappedMovies;
  }, [sort, mappedMovies]);

  return { movies: sortedMovies, getMovies, loading };
}
