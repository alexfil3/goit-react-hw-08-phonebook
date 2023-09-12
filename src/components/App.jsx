import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactsPage } from 'pages/ContactsPage';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const { container, title } = css;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    // <div className={container}>
    //   <h1 className={title}>Phonebook</h1>
    //   <ContactForm />
    //   <h2 className={title}>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}
