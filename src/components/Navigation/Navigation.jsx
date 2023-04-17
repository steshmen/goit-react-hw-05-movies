import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const getActiveStyle = ({ isActive }) => {
  return isActive ? `${style.active} ${style.link}` : `${style.link}`;
};

const Navigation = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <NavLink className={getActiveStyle} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={getActiveStyle} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
