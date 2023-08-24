import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Navigation.css';
import '../Button/Button.css';

function Navigation() {
  return(
    <nav className="navigation">
      <Link to='/'>
        <img className='navigation__logo' src={logo} alt="Логотип сайта" />
      </Link>
      <div className='navigation__auth'>
        <Link className="button navigation__reg navigation__link" to="/signup">
          Регистрация
        </Link>
        <Link className="button navigation__log navigation__link" to="/signin">
          Войти
        </Link>
      </div>
    </nav>
  )
}
export default Navigation;