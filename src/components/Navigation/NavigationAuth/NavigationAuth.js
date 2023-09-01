import { Link } from 'react-router-dom';
import './NavigationAuth.css';
import '../../Button/Button.css';

function NavigationAuth() {
  return(
    <nav className='nav'>
      <Link className="button navigation__reg navigation__link" to="/signup">
        Регистрация
      </Link>
      <Link className="button navigation__log navigation__link" to="/signin">
        Войти
      </Link>
    </nav>
  )
}
export default NavigationAuth;