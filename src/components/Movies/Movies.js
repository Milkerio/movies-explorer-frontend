import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import './Movies.css';
import { useEffect, useState } from "react";
import useWidth from "../../utils/windowSize";
import { MESSAGE_NOT_FOUND, MESSAGE_ERROR } from "../../utils/messages";

function Movies({onDelete, onSave, allMovies, savedMovies}) {
  const [movies, setMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [nextMovies, setNextMovies] = useState({current: 0, next: 0});
  const {width} = useWidth();

  useEffect(() => {
    shortMoviesFilter();
    searchMovies();
  },[search, checkbox]);
  useEffect(() => {
    resizeWidth();
  }, [width]);
  useEffect(() => {
    checkRequests();
  }, []);
  
  function resizeWidth(){
    if(width >= 1050){
      setNextMovies({current: 12, next: 3})
    } else if (width < 680){
      setNextMovies({current: 5, next: 2})
    } else {
      setNextMovies({current: 8, next: 2})
    }
  };
  function clickMore(){
    setNextMovies({current: nextMovies.current + nextMovies.next, next: nextMovies.next});
  }
  function setPreviousRequest(item, value){
    localStorage.setItem(item, JSON.stringify(value));
  }
  function getPreviousRequest(item){
    return JSON.parse(localStorage.getItem(item));
  }
  async function searchMovies() {
    setIsLoading(true);
    setMovies([]);
    try {
      if(search.length >= 0) {
        const moviesToRender = await handleSearch(allMovies, search);
        if(moviesToRender.length === 0 && search.length > 0) {
          setMessage(MESSAGE_NOT_FOUND);
        } else if (moviesToRender.length > 0){
          setPreviousRequest('lastRequest', search);
          setPreviousRequest('lastMovies', moviesToRender);
          setPreviousRequest('lastCheckbox', checkbox);
          setMovies(moviesToRender);
          setMessage('');
        }
      }
      return
    } catch(err) {
      console.log(err);
      setMessage(MESSAGE_ERROR);
    } finally {
      setIsLoading(false);
    }
  }
  function checkRequests(){
    const lastRequest = localStorage.getItem('lastRequest');
    const lastMovies = localStorage.getItem('lastMovies');
    const lastCheckbox = localStorage.getItem('lastCheckbox');
    if(lastRequest){
      setSearch(getPreviousRequest('lastRequest'));
    }
    if(lastMovies){
      setMovies(getPreviousRequest('lastMovies'));
    }
    if(lastCheckbox){
      setCheckbox(getPreviousRequest('lastCheckbox'));
    }
    return
  };
  function handleSearch(movies, keyword){
    return movies.filter((movie) => {
      const word = keyword.toLowerCase().trim();
      return movie.nameRU.toLowerCase().indexOf(word) !== -1 || movie.nameEN.toLowerCase().indexOf(word) !== -1
    })
  }
  function filterShortMovies(movies) {
    return movies.filter((movie) => {
      return movie.duration <= 40;
    });
  }
  function shortMoviesFilter(){
    setShortMovies(filterShortMovies(movies));
  }
  function handleCheckboxClick(value){
    setCheckbox(value);
  }
  return(
    <>
      <Header />
      <main className="movies">
        <SearchForm 
          search={search}
          setSearch={setSearch}
          checkboxState={checkbox}
          checkboxClick={handleCheckboxClick}
        />
        {message && 
          <p className={`${movies ? 'movies__message_active' : 'movies__message'}`}>{message}</p>
        }
        <MoviesCardList 
          movies={checkbox ? shortMovies : movies}
          onSave={onSave}
          onDelete={onDelete}
          moviesCount={nextMovies.current}
          isLoading={isLoading}
          savedMovies={savedMovies}
        />
        {
          (movies.length > nextMovies.current) && (
            <button className="button movies__button" type='button' onClick={clickMore}>Ещё</button>
          )
        }
      </main>
    </>
  )
}
export default Movies;