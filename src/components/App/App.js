import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

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
          <Route
            path='/'
            element={<Main />}
          />
          <Route
            path='/movies'
            element={<Movies />}
          />
          <Route
              path='/saved-movies'
              element={<SavedMovies />}
          />
          <Route
            path='/profile'
            element={<Profile />}
          />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
