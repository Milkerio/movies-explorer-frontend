import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import './Movies.css';

function Movies() {
  return(
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <MoviesCardList />
        <button className="button movies__button" type='button'>Ещё</button>
      </main>
    </>
  )
}
export default Movies;