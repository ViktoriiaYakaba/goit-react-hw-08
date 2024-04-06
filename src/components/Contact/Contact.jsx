import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';

export const Contact = ({contact}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));
    
     return (
    <li>
      <p>Name: {contact.name}</p>
      <p>Number: {contact.number}</p> 
      <button onClick={handleDelete} >Delete</button>
    </li>
  );
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired, 
};


