import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import { cards, saveCards } from "../../utils/cards";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  const location = useLocation();
  return(
    <section className="movies__container">
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