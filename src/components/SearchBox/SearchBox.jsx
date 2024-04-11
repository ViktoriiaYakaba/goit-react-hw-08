import { useDispatch, useSelector } from 'react-redux';
import { changeNameFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors'; 
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { Loader } from '../Loader/Loader';
import css from './SearchBox.module.css';


export const SearchBox = () => {
    const dispatch = useDispatch();
    const nameFilter = useSelector(selectNameFilter);
    const isLoading = useSelector(selectIsLoading); 
    const error = useSelector(selectError); 
    
    const handleChange = (e) => {
        dispatch(changeNameFilter(e.target.value));
    }; 
     
    return (
        <div className={css.container}>
            <h3 className={css.title}>Find contacts by name</h3>
        <input type="text"
          value={nameFilter}
          onChange={handleChange}
          placeholder="Search by name..." className={css.input } />
            {isLoading && !error && <b><Loader/></b>}
        </div>
    );
}


