import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || phoneNumber.trim() === '') {
      console.log("Name and phone number are required."); 
    } else {
      dispatch(addContact({ name, phoneNumber }));
      setName('');
      setPhoneNumber('');
    }
  };
    
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"  />
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number"  />
        <button type="submit" >Add Contact</button>
      </form>
    </div>
  );
};


