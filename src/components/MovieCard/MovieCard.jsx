import style from './MovieCard.module.css'
import { PropTypes } from 'prop-types';

const MovieCard = ({ movie }) => {
    const { title, poster_path, vote_average, overview, genres } = movie;
    
    return (
        <div className={style.container}>
            <img 
                className={style.image} 
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={movie.title} />

            <ul className={style.list}>
                <li className={style.item}>
                    <h2 className={style.title}>{title}</h2>
                    <p>User score: {Math.ceil(vote_average * 10)}%</p>
                </li>

                <li className={style.item}>
                    <h3 className={style.title}>Overview</h3>
                    <p>{overview}</p>
                </li>

                <li className={style.item}>
                    <h3 className={style.title}>Genres</h3>
                    <p>{genres.map(el => el.name).join(', ')}</p>
                </li>
            </ul>
      </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        genres: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    }).isRequired
}

export default MovieCard;