import { useEffect, useState } from 'react';
import { useLocation, useSearchParams} from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import Form from 'components/Form/Form';
import { getSearch } from 'components/API/API';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [queryParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchGet = new URLSearchParams(location.search).get('query');

    if (!searchGet) {
      return;
    }

    const onSubmit = () => {
      setLoading(true);
      getSearch(searchGet)
        .then(searchResults => {
          setSearch(searchResults);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    onSubmit();
  }, [location.search]);

  function onSubmit(value) {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('query', value);
    setSearchParams(newSearchParams);
  }

  return (
    <main>
      <Form onSubmit={onSubmit} />
      {loading && <Loader />}
      {search && <MoviesList movies={search} location={location}/>}
    </main>
  );
};
export default Movies;
