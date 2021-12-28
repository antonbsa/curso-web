import '../styles/Main.css';
import Header from './Header';

function Main(props) {
  return (
    <>
      <Header />
      <main className='content'>
        Conteúdo
      </main>
    </>
  );
}

export default Main;
