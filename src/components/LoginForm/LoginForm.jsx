import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });

    form.reset();
  };
    
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form} >
        <input type="email" name="email" placeholder='Email' className={css.file} />
        <input type="password" name="password" placeholder='Password' className={css.file} />
      <button type="submit" className={css.btn} >Log In</button>
    </form>
  );
};

