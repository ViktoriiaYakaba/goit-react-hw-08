import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegisterForm = () => {
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
        <form onSubmit={handleSubmit} autoComplete='off'>
            <label>
                Username
                <input type='text' name='name' placeholder='Username'/>
            </label>
            <label>
                Email
                <input type='email' name='email' placeholder='Email' />
            </label>
            <label>
                Password
                <input type='password' name='password' placeholder='Password' />
            </label>
            <button type='submit'>Register</button>
        </form>
    )

    
}

export default RegisterForm;
