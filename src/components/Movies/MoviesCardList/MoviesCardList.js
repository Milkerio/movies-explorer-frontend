import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import { cards, saveCards } from "../../utils/cards";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  const location = useLocation();
  const containerSave = (
    location.pathname === '/saved-movies' ? 'movies__container-save' : ''
  )
  return(
    <section className={`movies__container ${containerSave}`}>
      {location.pathname === '/movies' ? (
        <ul className="movies__list">
          {cards.map((movie, i) => (
            <MoviesCard
              movie={movie}
              key={i}
            />  
          ))}
        </ul>
      ) : (
        <ul className="movies__list">
          {saveCards.map((movie, i) => (
            <MoviesCard
              movie={movie}
              key={i}
            />  
          ))}
        </ul>
      )}
    </section>
  )
}
export default MoviesCardList;