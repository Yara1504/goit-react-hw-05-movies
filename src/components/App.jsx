import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';


const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Home = lazy(() => import('../components/pages/Home/Home'));
const Movies = lazy(() => import('../components/pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../components/pages/MovieDetails/MovieDetails'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App; 
