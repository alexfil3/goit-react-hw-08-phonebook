import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Button } from '@chakra-ui/react';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input className={css.input} type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input className={css.input} type="password" name="password" />
      </label>
      <Button type="submit" colorScheme="telegram" variant="ghost" size="md">
        Sign Up
      </Button>
    </form>
  );
};
