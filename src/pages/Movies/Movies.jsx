import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import featchApi from "services/fetchApi";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const search = searchParams.get('query') ?? '';

  useEffect(() => {
    if(search === '') {
      return;
    }
    setLoading(true);
    featchApi.getMoviesBySearch(search)
      .then(data => setMovies(data.results))
      .catch(error => setError(error))
      .finally(setLoading(false))
  }, [search]);

  const handleSubmint = e => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    setSearchParams({ query: value });
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmint}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title })=> (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
