import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav>
          <Link className={css.link} to="/">Home</Link>
          <Link className={css.link} to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
