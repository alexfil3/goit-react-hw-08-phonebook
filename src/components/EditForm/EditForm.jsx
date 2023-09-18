import { Icon } from '@chakra-ui/react';
import { ImCross, ImUser, ImPhone } from 'react-icons/im';
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';
import css from './EditForm.module.css';

export const EditForm = ({ handleModal, contactId }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    const foundContact = contacts.find(contact => contact.id === contactId);

    setName(foundContact.name);
    setNumber(foundContact.number);
  }, [contacts, contactId]);

  const handleSubmit = e => {
    e.preventDefault();
    const foundContact = contacts.find(contact => contact.id === contactId);
    const filterContacts = contacts.filter(contact => contact.id !== contactId);
    const sameNameContact = filterContacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (foundContact.name === name && foundContact.number === number) {
      handleModal();
      return;
    }
    if (sameNameContact) {
      return alert(`${sameNameContact.name} is already in Contacts`);
    }
    dispatch(updateContact({ contactId, name, number }));
    handleModal();
  };

  const handleButtonClick = () => {
    handleModal();
  };

  const handleInputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className={css.fixedOverlay}>
      <div className={css.modal}>
        <div className={css.modalContainer}>
          <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.text}>
              <Icon className={css.icon} as={ImUser} color="blue" boxSize={4} />
              Name
              <input
                className={css.input}
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </label>
            <label className={css.text}>
              <Icon
                className={css.icon}
                as={ImPhone}
                color="blue"
                boxSize={4}
              />
              Number
              <input
                className={css.input}
                type="tel"
                name="number"
                value={number}
                onChange={handleInputChange}
              />
            </label>
            <Button
              type="submit"
              colorScheme="telegram"
              variant="ghost"
              size="md"
            >
              Save
            </Button>
            <button
              className={css.closeButton}
              type="button"
              onClick={handleButtonClick}
            >
              <Icon as={ImCross} color="blue" boxSize={4} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
