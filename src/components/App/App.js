import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <CurrentUserContext.Provider value={{}}>
      <BrowserRouter>
      <div className='page'>
        <Routes>
          <Route
            path='/signin'
            element={<Login />}
          />
          <Route
            path='/signup'
            element={<Register />}
          />
          <Route
              path='*'
              element={<PageNotFound />}
            />
        </Routes>
        {/* <Footer /> */}
        {/*
        <Header />
        <Main />
         */}
      </div>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
