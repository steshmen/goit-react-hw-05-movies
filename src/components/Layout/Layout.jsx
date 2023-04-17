import { Outlet } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';
import style from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
