import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
//import { cards, saveCards } from "../../utils/cards";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from '../Preloader/Preloader';
import { useEffect } from "react";

function MoviesCardList({movies, onSave, onDelete, savedMovies, moviesCount, isLoading, isSaved, allMovies}) {
  const location = useLocation();
  const containerSave = (
    location.pathname === '/saved-movies' ? 'movies__container-save' : ''
  );
  return(
    <section className={`movies__container ${containerSave}`}>
      {
        location.pathname === '/movies' ? (
        <ul className="movies__list">
          {
            isLoading ? <Preloader /> :
            movies.map((movie, i) => (
              i < moviesCount &&
              <MoviesCard
                movie={movie}
                key={movie.movieId}
                onSave={onSave}
                onDelete={onDelete}
                savedMovies={savedMovies}
                allMovies={movies}
              />  
            ))
          }
        </ul>
      ) : (
        <ul className="movies__list">
          {
            isLoading ? <Preloader /> :
            savedMovies.map((movie) => (
              <MoviesCard
                movie={movie}
                key={movie.movieId}
                onSave={onSave}
                onDelete={onDelete}
                isSaved={isSaved}
                savedMovies={savedMovies}
                allMovies={allMovies}
              />  
            ))
          }
        </ul>
      )}
    </section>
  )
}
export default MoviesCardList;