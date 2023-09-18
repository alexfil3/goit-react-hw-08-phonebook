import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { EditForm } from 'components/EditForm/EditForm';
import { Spinner } from '@chakra-ui/react';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactId, setContactId] = useState('');
  const isLoading = useSelector(selectIsLoading);

  const handleToggleModal = contactId => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      console.log(contactId);
      setContactId(contactId);
    }
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <ContactForm />
      <Filter />
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          className={css.spinner}
        />
      ) : (
        <ContactList handleModal={handleToggleModal} />
      )}

      {isModalOpen && (
        <EditForm handleModal={handleToggleModal} contactId={contactId} />
      )}
    </div>
  );
}
