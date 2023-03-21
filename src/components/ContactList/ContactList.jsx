import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

import { selectFilter, selectAllContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filterValue = useSelector(selectFilter).toLowerCase().trim();
  console.log(contacts);

  const visibleContacts = contacts.filter(item => {
    return item.name.toLowerCase().includes(filterValue);
  });

  console.log(visibleContacts);
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem name={name} number={number} id={id} />
        </li>
      ))}
      {visibleContacts.length === 0 && filterValue === '' && (
        <p>The phonebook is empty, please add a new contact</p>
      )}
      {visibleContacts.length === 0 && filterValue !== '' && (
        <p>Not found</p>
      )}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};
