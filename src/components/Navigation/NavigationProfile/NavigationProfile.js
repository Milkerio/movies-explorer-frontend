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
    <>
      {!isBurgerOpen ? (
        <button className='button navigation__burger' onClick={toggleBurger} />
      ) : (
        <button className='button navigation__burger_close' onClick={toggleBurger} />
      )}
      <Burger isOpen={isBurgerOpen} />
      <div className='navigation__links'>
        <Link to='/movies' className='button navigation__link_profile'>
          Фильмы
        </Link>
        <Link to='/saved-movies' className='button navigation__link_profile'>
          Сохраненные фильмы
        </Link>
      </div>
      <Link to='/profile' className='button navigation__profile-link'>
        Аккаунт
        <div className='navigation__profile-icon_container'>
          <img className='navigation__profile-icon' alt='Иконка профиля' src={icon} />
        </div>
      </Link>
    </>
  )
}
export default NavigationProfile;