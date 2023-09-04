import { Link } from "react-router-dom";
import './Footer.css';
import '../Button/Button.css';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  return(
    <>
      {location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' ? (
        <footer className="footer">
        <p className="footer__name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
          <span className="footer__year">&#169; 2023</span>
          <ul className="footer__links">
            <li>
              <Link className="button footer__link" target="_blank" to={'https://practicum.yandex.ru/'}>
                Яндекс.Практикум
              </Link>
            </li>
            <li>
              <Link className="button footer__link" target="_blank" to={'https://github.com/Milkerio'}>
                Github
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      ) : (
        <>
        </>
      )}
    </>
  )
}
export default Footer;