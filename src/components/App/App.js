import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';

function App() {
  return (
    <CurrentUserContext.Provider value={{}}>
      <BrowserRouter>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
      </div>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
