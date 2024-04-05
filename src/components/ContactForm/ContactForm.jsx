import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || phoneNumber.trim() === '') {
      toast.error("Name and phone number are required."); 
    } else {
      dispatch(addContact({ name, phoneNumber }));
      setName('');
      setPhoneNumber('');
    }
  };
    
  return (
    <div>
      <ToastContainer /> 
      <form onSubmit={handleSubmit} >
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"  />
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number"  />
        <button type="submit" >Add Contact</button>
      </form>
    </div>
  );
};

export default ContactsForm;
