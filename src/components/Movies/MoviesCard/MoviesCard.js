import { useState } from "react";
import './MoviesCard.css';
import '../../Button/Button.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie }) {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();
  const buttonText = (location.pathname === '/movies' ? 'Сохранить' : '×');
  const likeCard = () => {
    setIsLiked(!isLiked);
  }
  const likeMovieButton = (
    location.pathname === '/movies' ? `button movie__button ${isLiked && 'movie__button_like'}` : 'button movie__button'
  )
  return(
    <li className="movie">
      <div className="movie__info">
        <h2 className="movie__name">{movie.name}</h2>
        <p className="movie__duration">{movie.duration}</p>
      </div>
      <img className="movie__picture" alt="Постер фильма" src={movie.src} />
      <button className={likeMovieButton} type='button' onClick={likeCard}>{isLiked ? null : buttonText}</button>
    </li>
  )
}
export default MoviesCard;