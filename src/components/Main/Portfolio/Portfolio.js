import './Portfolio.css';
import { Link } from 'react-router-dom';
import '../../Button/Button.css';

function Portfolio() {
  return(
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
        <Link className='button portfolio__item-link' target="_blank" to={'https://github.com/Milkerio/how-to-learn'}>
          <p className='portfolio__item-name'>Статичный сайт</p>
          <span className='portfolio__item-icon'>↗</span>
        </Link>
        </li>
        <li className='portfolio__item'>
        <Link className='button portfolio__item-link' to={'https://milkerio.github.io/russian-travel/'} target="_blank">
          <p className='portfolio__item-name'>Адаптивный сайт</p>
          <span className='portfolio__item-icon'>↗</span>
        </Link>
        </li>
        <li className='portfolio__item'>
        <Link className='button portfolio__item-link' to={'https://milkerio.github.io/mesto/'} target="_blank">
          <p className='portfolio__item-name'>Одностраничное приложение</p>
          <span className='portfolio__item-icon'>↗</span>
        </Link>
        </li>
      </ul>
    </section>
  )
}
export default Portfolio;