import "./App.css";
import results from "./mocks/with-response.json";

export default function App() {
  const movies = results.Search;
  const hasMovies = movies?.length > 0;

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
      {hasMovies ? (
        <ul>
          {movies.map((item) => (
            <div key={item.imdbID}>
              <div>
                <h3>{item.Title} </h3>
                <h5> {item.Year}</h5>
              </div>
              <img src={item.Poster} alt={item.Title} />
            </div>
          ))}
        </ul>
      ) : (
        <h1>No Results</h1>
      )}
    </main>
  );
}

// function Movies({ movies }) {
//   return (
//     <ul>
//       {movies.map((movie) => (
//         <li>
//           <h3>{movie.}</h3>
//         </li>
//       ))}
//     </ul>
//   );
// }

// function NoResults() {
//   return (
//     <div>
//       <h1>Couldnt Find Any Movie With That Title</h1>
//     </div>
//   );
// }
