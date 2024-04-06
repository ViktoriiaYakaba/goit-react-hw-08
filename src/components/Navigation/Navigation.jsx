import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css'

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
    <nav className={css.navigation}>
      <NavLink  className={css.nav} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.nav} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
    
}

