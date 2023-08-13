import { useEffect, useState, useRef } from "react";
import "./App.css";
import useMovies from "./hooks/useMovies";
import useSearch from "./hooks/useSearch";

import debounce from "just-debounce-it";

export default function App() {
  const [sort, setSort] = useState(false);
  const { input, setInput, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ input, sort });

  const debouncedMovies = debounce((input) => {
    console.log(input);
  }, 500);

  const handleSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(input);
    getMovies({ input });
  };

  const handleChange = (e) => {
    const newInput = e.target.value;
    if (newInput.startsWith(" ")) return;
    setInput(newInput);
    debouncedMovies();
  };

  return (
    <div className="page">
      <h1>Movie Finder</h1>
      <header className="search">
        <form action="submit" onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={input} />
          <input type="checkbox" onClick={handleSort} checked={sort} />
          <button type="submit">Search Movie</button>
          {error && <p style={{ color: "red" }}> {error}</p>}
        </form>
      </header>
      {/* {hasMovies ? <Movies movies={movies} /> : <NoResults />} */}
      <main className="container">
        {loading ? <p>Loading your results...</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return <>{hasMovies ? <ListOfMovies movies={movies} /> : <NoResults />}</>;
}

function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies?.map((item) => (
        <li key={item.id}>
          <h3>{item.title} </h3>
          <h5> {item.year}</h5>
          <img src={item.poster} alt={item.title} />
        </li>
      ))}
    </ul>
  );
}

function NoResults() {
  return (
    <div>
      <h1>Couldnt Find Any Movie With That Title</h1>
    </div>
  );
}
