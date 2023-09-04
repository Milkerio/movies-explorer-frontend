import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import './SavedMovies.css';

function SavedMovies() {
  return(
    <>
      <Header />
      <main className="saved-movies">
        <section className="movies">
          <SearchForm />
          <MoviesCardList />
        </section>
      </main>
    </>
  )
}
export default SavedMovies;