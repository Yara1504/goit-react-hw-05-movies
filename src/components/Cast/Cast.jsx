import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './Cast.module.css';
import Loader from 'components/Loader/Loader';
import { getCredits } from 'components/API/API';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function infoCredits() {
      try {
        setLoading(true);
        
      getCredits(movieId)
      .then(credits => {
      setCredits(credits);
      })
      }
      catch {
        return "error";
      }
      finally {
          setLoading(false);
        };
    };
    infoCredits();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ul className={css.list}>
        {credits.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              width="240px"
              src={`https://image.tmdb.org/t/p/w500${profile_path}`
              }
              alt={name}
            />
            <p className={css.text}>{name}</p>
            <p className={css.text}>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
