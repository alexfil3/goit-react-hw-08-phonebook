import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/" className={css.text}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={css.text}>
        Contacts
      </NavLink>
    </div>
  );
};
