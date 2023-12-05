import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import Form from 'components/Form/Form';
import { getSearch } from 'components/API/API';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchGet = searchParams.get('query');

    if (!searchGet) {
      return;
    }

    const onSubmit = () => {
      setLoading(true);
      getSearch(searchGet)
        .then((searchResults) => {
          setSearch(searchResults);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    onSubmit();
  }, [searchParams]);

  function onSubmit(value) {
    setSearchParams({ query: value }); 
  }

  return (
    <div>
      <Form onSubmit={onSubmit} />
      {loading && <Loader />}
      {search && <MoviesList movies={search} location={location} />}
    </div>
  );
};

export default Movies;