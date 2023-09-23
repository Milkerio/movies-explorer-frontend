import { useEffect, useState } from "react";
import './MoviesCard.css';
import '../../Button/Button.css';
import { useLocation } from 'react-router-dom';
import movieDuration from "../../../utils/movieDuration";

function MoviesCard({ movie, onSave, onDelete, savedMovies, allMovies}) {
  const location = useLocation();
  const [buttonText, setButtonText] = useState('');
  useEffect(() => {
    if(isSavedCheck()){
      setButtonText('')
    }
    else{
      setButtonText('Сохранить')
    }
  },[isSavedCheck])
  useEffect(() => {
    if(location.pathname === '/saved-movies'){
      setButtonText('×');
    } else if (location.pathname === '/movies'){
      setButtonText(!isSavedCheck() ? 'Сохранить' : '');
    }
  },[location.pathname])
  let filmId;
  const isSaved = (
    savedMovies.find((savedItem) => {
      if(savedItem.movieId === movie.movieId){
        filmId = savedItem._id;
        return true;
      }
      return false
    })
  )
  function isSavedCheck(){
    if(isSaved !== undefined){
      return true;
    }
    return false;
  }
  const handleClickButton = () => {
    if (location.pathname === '/movies') {
      if (!isSavedCheck()) {
        onSave(movie);
        setButtonText('');
      } else {
        onDelete(filmId);
        setButtonText('Сохранить');
      }
    } else if (location.pathname === '/saved-movies') {
      onDelete(movie._id);
    }
  };
  
  const isSavedPage = (location.pathname === '/saved-movies' ? 'button movie__button' : `button movie__button movie__button_like`);
  //const buttonText = (isSavedPage  ? '×' : isLiked ? '' : 'Сохранить');
  const likeMovieButton = (isSavedCheck() ? isSavedPage : 'button movie__button');
  const {nameRU, image, duration, trailerLink} = movie;
  const reworkedDuration = movieDuration(duration);
  return(
    <li className="movie">
      <div className="movie__info">
        <h2 className="movie__name">{nameRU}</h2>
        <p className="movie__duration">{reworkedDuration}</p>
      </div>
      <a className="movie__trailer-link button" target='_blank' href={trailerLink} rel="noreferrer">
        <img className="movie__picture" alt={`Постер фильма ${nameRU}`} src={image} />
      </a>
      <button className={likeMovieButton} type='button' onClick={handleClickButton}>
        {buttonText}
      </button>
    </li>
  )
}
export default MoviesCard;