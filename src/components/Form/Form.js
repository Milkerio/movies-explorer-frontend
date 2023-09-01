import './Form.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../Button/Button.css';

function Form({ title, children, buttonText, spanText, linkText, linkPath }) {
  const location = useLocation();
  return(
    <form className="form">
      <Link className='form__link' to={'/'}>
        <img src={logo} alt='Логотип' className='form__logo' />
      </Link>
      <h1 className='form__title'>
        {title}
      </h1>
      {children}
      <button className={`button form__button ${location.pathname === '/signin' ? 'form__button-login' : ''}`} type='submit'>
        {buttonText}
      </button>
      <span className='form__text'>
        {spanText}
        <Link className='button form__text_link' to={linkPath}>
          {linkText}
        </Link>
      </span>
    </form>
  )
}
export default Form;