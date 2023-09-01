import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import './SavedMovies.css';

function SavedMovies() {
  return(
    <>
      <Header />
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList />
      </section>
    </>
  )
}
export default SavedMovies;