import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { ModalDelete } from './ModalDelete';
import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";
import { ModalEdit } from './ModalEdit';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedContact, setEditedContact] = useState({ ...contact });

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
      .then((response) => {
        console.log('Contatto eliminato con successo:', response);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error('Errore durante l\'eliminazione del contatto:', error);
      });
  };

  const handleEdit = () => {
    dispatch(updateContact({ contactId: editedContact.id, updatedData: editedContact }))
      .then((response) => {
        console.log('Contatto aggiornato con successo:', response);
        setIsEditModalOpen(false);
      })
      .catch((error) => {
        console.error('Errore durante l\'aggiornamento del contatto:', error);
      });
  };

  const handleChange = (e) => {
    console.log('worl')
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  return (
    <li className={css.list}>
      <p className={css.text}>{contact.name}</p>
      <p className={css.text}>{contact.number}</p>
      <div className={css.wrap}>
        <button type='button' className={css.btn} onClick={() => setIsEditModalOpen(true)}>
          <BiSolidEditAlt className={css.icon} />
        </button>
        <button type="button" onClick={() => setIsModalOpen(true)} className={css.btn}>
          <RiDeleteBin6Line className={css.icon} />
        </button>
      </div>
      <ModalDelete
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onDelete={handleDelete} 
      />
      <ModalEdit
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        contact={editedContact}
        handleChange={handleChange}
        onSubmit={handleEdit}
      />
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired, 
};





