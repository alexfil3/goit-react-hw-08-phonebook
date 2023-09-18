import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import css from './UserMenu.module.css';
import { Icon } from '@chakra-ui/react';
import { ImExit } from 'react-icons/im';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name}</p>
      <button type="button" onClick={handleLogOut}>
        <Icon as={ImExit} color="white" />
      </button>
    </div>
  );
};
