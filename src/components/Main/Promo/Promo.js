import '../../Button/Button.css';
import './Promo.css';
import { Link } from 'react-scroll';
import logoMain from '../../../images/logoMain.svg';

function Promo() {
  return(
    <section className="promo">
      <div className='promo__container'>
        <div className='promo__text-container'>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className='promo__subtitle'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <Link className='button promo__link' to='about' smooth={true}>
            Узнать больше
          </Link>
        </div>
        <img src={logoMain} alt='Веб глобус' className='promo__img' />
      </div>
    </section>
  )
}
export default Promo;