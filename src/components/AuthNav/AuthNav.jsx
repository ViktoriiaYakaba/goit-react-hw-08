import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.link}>
      <NavLink  className={css.item} to="/register">
        Register
      </NavLink>
      <NavLink className={css.item} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

