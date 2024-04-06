import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../components/DocumentTitle';
import ContactList from '../components/ContactList/ContactList';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';

const Contacts =() =>{
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
    <>
      <DocumentTitle>Your contact</DocumentTitle>
            <div>{isLoading && 'Request in progress...'}</div>
            <ContactList/>
    </>
  );
}

export default Contacts;
