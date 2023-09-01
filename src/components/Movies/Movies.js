import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import './Movies.css';

function Movies() {
  return(
    <>
      <Header />
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <button className="button movies__button" type='button'>Ещё</button>
      </section>
    </>
  )
}
export default Movies;