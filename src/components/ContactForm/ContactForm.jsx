import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <p className={css.errorText}>{message}</p>}
    />
  );
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const { form, label, input, button } = css;

  const initialValues = {
    name: '',
    number: '',
  };

  const userSchema = object({
    name: string().required(),
    number: string().required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    const duplicate = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicate) {
      return alert(`${values.name} is already in contacts`);
    }
    console.log(values);
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form className={form}>
        <label className={label}>
          Name
          <Field className={input} type="text" name="name" />
          <FormError name="name" />
        </label>
        <label className={label}>
          Number
          <Field className={input} type="tel" name="number" />
          <FormError name="number" />
        </label>
        <button type="submit" className={button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
