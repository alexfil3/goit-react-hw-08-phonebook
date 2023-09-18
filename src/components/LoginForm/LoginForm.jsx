import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Button } from '@chakra-ui/react';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input className={css.input} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input className={css.input} type="password" name="password" />
      </label>
      <Button type="submit" colorScheme="telegram" variant="ghost" size="md">
        Log In
      </Button>
    </form>
  );
};
