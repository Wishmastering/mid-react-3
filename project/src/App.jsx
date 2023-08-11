import "./App.css";
import results from "./mocks/with-response.json";

export default function App() {
  const movies = results.Search;

  const mappedMovies = movies?.map((movie) => ({
    poster: movie.Poster,
    title: movie.Title,
    type: movie.Type,
    year: movie.Year,
    id: movie.imdbID,
  }));

  return (
    <main>
      <h1>Movie Finder</h1>
      <div className="search">
        <form action="submit">
          <input type="text" />
          <button>Search Movie</button>
        </form>
      </div>
      {/* {hasMovies ? <Movies movies={movies} /> : <NoResults />} */}
      <Movies movies={mappedMovies} />}
    </main>
  );
}

function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return <>{hasMovies ? <ListOfMovies movies={movies} /> : <NoResults />}</>;
}

function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((item) => (
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
