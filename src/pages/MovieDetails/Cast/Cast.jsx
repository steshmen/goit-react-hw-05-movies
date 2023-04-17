import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from './Cast.module.css'
import featchApi from "services/fetchApi";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        featchApi.getMovieCast(movieId)
            .then(data => {
                setCast(data.cast)
            })
            .catch(error => setError(error))
            .finally(setLoading(false));
    }, [movieId])

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {cast.length > 0 && (
                <ul className={style.list}>
                    {cast.map(({ id, name, character, profile_path }) => {
                        return (
                            <li key={id} className={style.item}>
                                {profile_path && <img 
                                    loading="lazy"
                                    className={style.image}
                                    src={`https://image.tmdb.org/t/p/w500${profile_path}`} 
                                    alt={name}/>}
                                <p>{name}</p>
                                <p>{character}</p>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
};

export default Cast;
