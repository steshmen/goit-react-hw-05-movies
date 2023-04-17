import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import MovieCard from 'components/MovieCard/MovieCard';
import style from './MovieDetails.module.css'
import featchApi from 'services/fetchApi';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    featchApi
      .getMovieById(movieId)
      .then(data => setMovie(data))
      .catch(error => setError(error))
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <>
      <div>
      <Link to={backLinkRef.current} className={style.link}>Go back</Link>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {movie && <MovieCard movie={movie}/>}
      </div>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
