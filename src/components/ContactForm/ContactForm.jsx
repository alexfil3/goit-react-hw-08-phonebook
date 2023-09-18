import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { Button, useToast } from '@chakra-ui/react';
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
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const { form, label, input } = css;

  const initialValues = {
    name: '',
    number: '',
  };

  const userSchema = object({
    name: string().required(),
    number: string().required(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const duplicate = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicate) {
      return alert(`${values.name} is already in contacts`);
    }
    setIsLoading(true);
    await dispatch(addContact(values));
    setIsLoading(false);
    toast({
      title: 'Contact added.',
      description: `${values.name} is in your Contacts now`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
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
        <Button
          isLoading={isLoading}
          loadingText="Submitting"
          colorScheme="telegram"
          variant="outline"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Formik>
  );
};
