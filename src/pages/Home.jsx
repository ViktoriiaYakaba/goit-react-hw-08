import DocumentTitle from '../components/DocumentTitle';
import ContactForm from '../components/ContactForm/ContactForm';


const Home=() =>{
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div >
        <h1>
          Contacts manager welcome page
        </h1>
        <ContactForm/>
      </div>
    </>
  );
}

export default Home;
