import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const { container, title } = css;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={container}>
      <h1 className={title}>Phonebook</h1>
      <ContactForm />
      <h2 className={title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
