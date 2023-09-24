import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import './SavedMovies.css';
import { useState, useEffect } from "react";
import { MESSAGE_ERROR, MESSAGE_NOT_FOUND } from "../../utils/messages";

function SavedMovies({savedMovies, onSave, onDelete, isSaved, allMovies}) {
  const [movies, setMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    shortMoviesFilter();
    searchMovies();
  },[search, checkbox, savedMovies]);
  function handleSearch(movies, keyword){
    return movies.filter((movie) => {
      const word = keyword.toLowerCase().trim();
      return movie.nameRU.toLowerCase().indexOf(word) !== -1 || movie.nameEN.toLowerCase().indexOf(word) !== -1
    })
  };
  async function searchMovies() {
    setIsLoading(true);
    setMovies([]);
    try {
      if(search.length >= 0) {
        const moviesToRender = await handleSearch(savedMovies, search);
        if(moviesToRender.length === 0 && search.length > 0) {
          setMessage(MESSAGE_NOT_FOUND);
        } else if(moviesToRender.length > 0 && search.length >= 0){
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
  function filterShortMovies(movies) {
    return movies.filter((movie) => {
      return movie.duration <= 40;
    });
  };
  function shortMoviesFilter(){
    setShortMovies(filterShortMovies(movies));
  };
  function handleCheckboxClick(value){
    setCheckbox(value);
  };
  return(
    <>
      <Header />
      <main className="saved-movies">
        <section className="movies">
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
            savedMovies={!search ? checkbox ? shortMovies : savedMovies : checkbox ? shortMovies : movies}
            onSave={onSave}
            onDelete={onDelete}
            isLoading={isLoading}
            isSaved={isSaved}
            allMovies={allMovies}
          />
        </section>
      </main>
    </>
  )
}
export default SavedMovies;