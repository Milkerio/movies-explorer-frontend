import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Navigation.css';
import NavigationAuth from './NavigationAuth/NavigationAuth';
import NavigationProfile from './NavigationProfile/NavigationProfile';
import '../Button/Button.css';

function Navigation() {
  const location = useLocation();
  return(
    <nav className="navigation">
      <Link to='/'>
        <img className='button navigation__logo' src={logo} alt="Логотип сайта" />
      </Link>
      <div className='navigation__container'>
        {location.pathname === '/' ? <NavigationAuth /> : <NavigationProfile />}
      </div>
    </nav>
  )
}
export default Navigation;