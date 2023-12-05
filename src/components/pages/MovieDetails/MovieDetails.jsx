import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getDetails } from 'components/API/API';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);

  useEffect(() => {

    async function getDetailsMovies() {
      try {
        setLoading(true);
        const detail = await getDetails(movieId);
        setInfo(detail);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getDetailsMovies();
  }, [movieId]);

    if (!info) {
    return; 
  }

  const { poster_path, title, popularity, overview, genres } = info;

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <button className={css.button} type="button">
          Go back</button>
      </Link>
      {loading && <Loader />}

      {info && (
        <div className={css.container}>
          <img width="250px" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
          <div>
            <h1>{title}</h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
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
        <Outlet />
        </div>
    </>
  );
};

export default MovieDetails;