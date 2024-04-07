import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    
    return (
        <form onSubmit={handleSubmit} autoComplete='off' className={css.form} >
            <input type='text' name='name' placeholder='Username' className={css.file} />
            <input type='email' name='email' placeholder='Email' className={css.file} />
            <input type='password' name='password' placeholder='Password' className={css.file} />
            <button type='submit' className={css.btn} >Register</button>
        </form>
    )
};



