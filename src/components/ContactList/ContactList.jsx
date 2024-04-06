import { useSelector } from 'react-redux';
import {Contact} from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';


export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};


