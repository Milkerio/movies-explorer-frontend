import { Link } from 'react-router-dom';
import './NavigationProfile.css';
import icon from '../../../images/userIcon.svg';
import '../../Button/Button.css';
import { useState } from 'react';
import Burger from './Burger/Burger';

function NavigationProfile() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  function toggleBurger() {
    setIsBurgerOpen(!isBurgerOpen);
  }
  return(
    <nav className='nav'>
      {!isBurgerOpen ? (
        <button className='button navigation__burger' onClick={toggleBurger} type='button' />
      ) : (
        <button className='button navigation__burger-close' onClick={toggleBurger} type='button' />
      )}
      <Burger isOpen={isBurgerOpen} />
      <div className='navigation__links'>
        <Link to='/movies' className='button navigation__link-profile'>
          Фильмы
        </Link>
        <Link to='/saved-movies' className='button navigation__link-profile'>
          Сохраненные фильмы
        </Link>
      </div>
      <Link to='/profile' className='button navigation__profile-link'>
        Аккаунт
        <div className='navigation__profile-container'>
          <img className='navigation__profile-icon' alt='Иконка профиля' src={icon} />
        </div>
      </Link>
    </nav>
  )
}
export default NavigationProfile;