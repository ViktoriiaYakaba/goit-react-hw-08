import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({contact}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));
    
     return (
    <li className={css.list}>
      <p className={css.text}> {contact.name}</p>
      <p className={css.text}> {contact.number}</p> 
      <button type='button' onClick={handleDelete} className={css.btn}>Delete</button>
    </li>
  );
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired, 
};
