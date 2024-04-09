import Modal from 'react-modal';
import PropTypes from 'prop-types';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    width: '400px',
    height: '300px',
    backgroundColor: '#fff',
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px'
  }
};

Modal.setAppElement('#root');

export const ModalEdit = ({ isOpen, onRequestClose, contact, onSubmit, handleChange }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    onRequestClose();
  };

 
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Edit Contact Modal"
    >
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={contact.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input type="text" id="number" name="number" value={contact.number} onChange={handleChange} />
        </div>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
};

ModalEdit.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired, 
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};


