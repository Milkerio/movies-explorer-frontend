import Navigation from '../Navigation/Navigation';
import './Header.css';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return(
    <header className={location.pathname === '/' ? 'header' : 'header header_black'}>
      <Navigation />
    </header>
  )
}
export default Header;