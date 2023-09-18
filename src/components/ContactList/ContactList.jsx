import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { ContactListItem } from './ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = ({ handleModal }) => {
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
      {visibleContacts().map(({ id, name, number }) => {
        return (
          <ContactListItem
            name={name}
            number={number}
            key={id}
            id={id}
            handleModal={handleModal}
          />
        );
      })}
    </ul>
  );
};
