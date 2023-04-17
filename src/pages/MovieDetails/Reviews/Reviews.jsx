import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from './Reviews.module.css'
import featchApi from "services/fetchApi";

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    featchApi.getMovieReviews(movieId)
      .then(data => setReviews(data.results))
      .catch(error => setError(error))
      .finally(setLoading(false));
}, [movieId])

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}

      {reviews.length > 0 ? (
        <ul className={style.list}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li className={style.item} key={id}>
                <h3 className={style.title}>Author: {author}</h3>
                <p>{content}</p>
              </li>
            )
          })}
        </ul>
      ) : <div>We don't have any reviews for this movie</div>}
    </div>

  );
};

export default Review;
