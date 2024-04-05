import { useDispatch, useSelector } from 'react-redux';
import { changeNameFilter } from '../../redux/filters/slice';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';

const SearchBox = () => {
    const dispatch = useDispatch();
    const nameFilter = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading); 
    const error = useSelector(selectError); 
    
    const handleChange = (e) => {
    dispatch(changeNameFilter(e.target.value));
  };
    
     return (
    <div >
      <h3 >Find contacts by name</h3>
      <input type="text"
        value={nameFilter}
        onChange={handleChange}
        placeholder="Search by name" />
      {isLoading && !error && <b >Request in progress...</b>}
    </div>
  );

}
export default SearchBox;
