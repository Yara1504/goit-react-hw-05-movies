import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './Reviews.module.css';
import Loader from 'components/Loader/Loader';
import { getReviews } from 'components/API/API';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function infoReviews() {
      try {
        setLoading(true);

        getReviews(movieId)
        .then(reviews => {
          setReviews(reviews);
        })
      }
      catch {
        return "error";
      }
      finally {
          setLoading(false);
        };
    };
    infoReviews();
  }, [movieId]);

  return (
<>
  {loading && <Loader />}
  {reviews.length !== 0 ? (
    <ul>
      {reviews.map(review => (
        <li className={css.li} key={review.id}>
          <h2>Author: {review.author}</h2>
          <p className={css.text}>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className={css.text}>We don't have any reviews for this movie</p>
  )}
</>
  );
};

export default Reviews;
