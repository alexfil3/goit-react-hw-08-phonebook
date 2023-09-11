import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { selectFilter } from 'redux/selectors';
import { ContactListItem } from './ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = () => {
    return contacts.filter(({ name }) =>
      name
        .split(' ')
        .join('')
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase())
    );
  };

  return (
    <ul className={css.list}>
      {visibleContacts().map(({ name, phone, id }) => {
        return <ContactListItem name={name} phone={phone} key={id} id={id} />;
      })}
    </ul>
  );
};
