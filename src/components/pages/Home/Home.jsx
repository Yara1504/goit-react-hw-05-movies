import React, { useEffect, useState } from 'react';
import { getTrending } from 'components/API/API';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';


export default function Home () {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const trendMovies = () => {
      getTrending()
        .then(trendingMovies => {
          setMovies(trendingMovies);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    trendMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
      {loading && <Loader />}
    </div>
  );
};
