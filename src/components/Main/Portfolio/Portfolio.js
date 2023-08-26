import './Portfolio.css';
import { Link } from 'react-router-dom';
import '../../Button/Button.css';

function Portfolio() {
  return(
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <Link className='button portfolio__link' target="_blank" to={'https://github.com/Milkerio/how-to-learn'}>
          <li className='portfolio__item'>Статичный сайт</li>
          <span className='portfolio__icon'>↗</span>
        </Link>
        <Link className='button portfolio__link' to={'https://milkerio.github.io/russian-travel/'} target="_blank">
          <li className='portfolio__item'>Адаптивный сайт</li>
          <span className='portfolio__icon'>↗</span>
        </Link>
        <Link className='button portfolio__link' to={'https://milkerio.github.io/mesto/'} target="_blank">
          <li className='portfolio__item'>Одностраничное приложение</li>
          <span className='portfolio__icon'>↗</span>
        </Link>
      </ul>
    </section>
  )
}
export default Portfolio;