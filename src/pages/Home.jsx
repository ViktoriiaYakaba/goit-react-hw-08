import { DocumentTitle } from '../components/DocumentTitle';
import css from './Pages.module.css';


 const Home = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>
          Contacts manager welcome page
        </h1>
      </div>
    </>
  );
}

export default Home;
