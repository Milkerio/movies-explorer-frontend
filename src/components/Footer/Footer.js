import { Link } from "react-router-dom";
import './Footer.css';
import '../Button/Button.css';

function Footer() {
  return(
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
  )
}
export default Footer;