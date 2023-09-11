import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const { item, text, span, button } = css;

  const deleteHandle = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li id={id} className={item}>
      <p className={text}>
        {name}:<span className={span}>{phone}</span>
      </p>
      <button className={button} onClick={deleteHandle}>
        Delete
      </button>
    </li>
  );
};
