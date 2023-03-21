import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { selectLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Form />
      <Filter />
      <div>{isLoading && 'Виконується запит...'}</div>
      <ContactList />
    </>
  );
};
export default ContactsPage;
