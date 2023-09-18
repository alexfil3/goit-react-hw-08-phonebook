import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Button, Icon, useToast } from '@chakra-ui/react';
import { ImBin2, ImPencil } from 'react-icons/im';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, handleModal }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const { item, text, span } = css;

  const handleIsModalOpen = () => {
    handleModal(id);
  };

  const deleteHandle = async () => {
    setIsLoading(true);
    await dispatch(deleteContact(id));
    setIsLoading(false);

    toast({
      title: 'Contact deleted.',
      description: `${name} is removed from your Contacts`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <li id={id} className={item}>
      <div className={css.wrapper}>
        <p className={text}>{name}</p>
        <p className={span}>{number}</p>
      </div>
      <div>
        <Button
          onClick={handleIsModalOpen}
          type="submit"
          colorScheme="telegram"
          variant="ghost"
          size="sm"
        >
          <Icon as={ImPencil} boxSize={4} />
        </Button>
        <Button
          onClick={deleteHandle}
          isLoading={isLoading}
          type="submit"
          colorScheme="telegram"
          variant="ghost"
        >
          <Icon as={ImBin2} boxSize={4} />
        </Button>
      </div>
    </li>
  );
};
