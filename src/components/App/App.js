import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { apiMain } from '../../utils/MainApi';
import { apiMovies } from '../../utils/MoviesApi';
import authUser from '../../utils/auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import changeMovie from '../../utils/changedMovie';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') ||  false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if(token) {
      authUser.getContent(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser({
            name: res.name,
            email: res.email,
          });
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [navigate]);
  useEffect(() => {
    if(loggedIn) {
      Promise.all([apiMain.getUserInfo(),apiMain.getSavedMovies([])])
      .then(([user, movies]) => {
        setCurrentUser(user);
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [loggedIn]);
  function registerUser(name, email, password) {
    setIsLoading(true);
    authUser.register(name, email, password)
      .then((res) => {
        loginUser(email, password);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  };
  function loginUser(email, password) {
    setIsLoading(true);
    authUser.login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        navigate('/movies', {replace: true});
        localStorage.setItem('loggedIn', true);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  };
  function updateUser(data) {
    setIsLoading(true);
    apiMain
      .setUserInfo(data)
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }
  function getAllMovies() {
    setIsLoading(true);
    apiMovies.getMovies()
      .then((data) => {
        const changedMovies = changeMovie(data);
        localStorage.setItem('movies', JSON.stringify(changedMovies));
        setAllMovies(changedMovies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }
  function checkMoviesInLS(){
    const movies = localStorage.getItem('movies');
    if(movies){
      setAllMovies(JSON.parse(movies))
    } else {
      getAllMovies();
    }
  }
  useEffect(() => {
    checkMoviesInLS();
  }, []);
  function saveMovie(movie) {
    setIsLoading(true);
    apiMain.saveMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }
  function deleteMovie(_id) {
    setIsLoading(true);
    apiMain.deleteMovie(_id)
      .then(() => {
        setSavedMovies(savedMovies.filter((c) => c._id !== _id));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }
  function signout() {
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
    navigate('/', {replace: true});
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route
            path='/signin'
            element={<Login isLoading={isLoading} onLog={loginUser} />}
          />
          <Route
            path='/signup'
            element={<Register isLoading={isLoading} onReg={registerUser} />}
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
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                onDelete={deleteMovie}
                onSave={saveMovie}
                allMovies={allMovies}
                savedMovies={savedMovies}
              />
            }
          />
          <Route
              path='/saved-movies'
              element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                onSave={saveMovie}
                onDelete={deleteMovie}
                isSaved={true}
                allMovies={allMovies}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                isLoading={isLoading}
                signout={signout}
                onUpdateInfo={updateUser}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
