import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import featchApi from 'services/fetchApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    featchApi
      .getTrendingMovies()
      .then(data => setMovies(data.results))
      .catch(error => setError(error))
      .finally(setLoading(false));
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title ?? movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
