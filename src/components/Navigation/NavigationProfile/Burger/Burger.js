import './Burger.css';
import '../../../Button/Button.css';
import { Link, NavLink } from 'react-router-dom';
import icon from '../../../../images/userIcon.svg';

function Burger({ isOpen }) {
  return(
    <section className={`burger ${isOpen ? 'burger_active' : ''}`}>
      <div className={`burger__overlay ${isOpen ? 'burger__overlay_active' : ''}`}></div>
      <div className='burger__container'>
        <nav className='burger__navigation'>
          <NavLink className='button burger__link' to='/'>
            Главная
          </NavLink>
          <NavLink className='button burger__link' to='/movies'>
            Фильмы
          </NavLink>
          <NavLink className='button burger__link' to='/saved-movies'>
            Сохраненные фильмы
          </NavLink>
        </nav>
        <Link className='button burger__profile-link' to='/profile'>
          Аккаунт
          <div className='burger__profile-icon_container'>
            <img className='burger__profile-icon' src={icon} alt='Иконка профиля' />
          </div>
        </Link>
      </div>
    </section>
  )
}
export default Burger;