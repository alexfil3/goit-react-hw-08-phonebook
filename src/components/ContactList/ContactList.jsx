import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/selectors';
import { ContactListItem } from './ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = () => {
    if (contacts) {
      return contacts.filter(({ name }) =>
        name
          .split(' ')
          .join('')
          .toLocaleLowerCase()
          .includes(filter.toLocaleLowerCase())
      );
    }
  };

  return (
    <ul className={css.list}>
      {visibleContacts().map(({ name, number, id }) => {
        return <ContactListItem name={name} phone={number} key={id} id={id} />;
      })}
    </ul>
  );
};
