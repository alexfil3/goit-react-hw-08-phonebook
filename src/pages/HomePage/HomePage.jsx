import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <p className={css.text}>Working with contacts is easy</p>
      <Button colorScheme="telegram" variant="ghost" size="lg">
        <NavLink to="/contacts">Let's start</NavLink>
      </Button>
    </div>
  );
}
