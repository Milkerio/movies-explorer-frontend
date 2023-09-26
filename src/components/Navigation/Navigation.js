import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Navigation.css';
import NavigationAuth from './NavigationAuth/NavigationAuth';
import NavigationProfile from './NavigationProfile/NavigationProfile';
import '../Button/Button.css';

function Navigation() {
  const location = useLocation();
  const navigation_padding = (
    location.pathname === '/movies' ? 'navigation_padding' : ''
  );
  return(
    <nav className={`navigation ${navigation_padding}`}>
      <Link to='/'>
        <img className='button navigation__logo' src={logo} alt="Логотип сайта" />
      </Link>
      <div className='navigation__container'>
        {localStorage.getItem('loggedIn') === 'true' ? <NavigationProfile /> : <NavigationAuth />}
      </div>
    </nav>
  )
}

export default Navigation;
