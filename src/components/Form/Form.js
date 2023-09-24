import './Form.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../Button/Button.css';
import useFormWithValidation from '../../Validation/Validation';

function Form({ title, children, buttonText, spanText, linkText, linkPath, isValid, onSubmit, isLoading, formMessage }) {
  const location = useLocation();
  const { errors } = useFormWithValidation();
  return(
    <form className="form" onSubmit={onSubmit} noValidate>
      <Link className='form__link' to={'/'}>
        <img src={logo} alt='Логотип' className='form__logo' />
      </Link>
      <h1 className='form__title'>
        {title}
      </h1>
      {children}
      <span className='form__error'>{formMessage}</span>
      <button 
        className={`button form__button ${location.pathname === '/signin' ? 'form__button-login' : ''} ${(!isValid && errors) || isLoading ? 'form__button_disabled' : ''}`} 
        type='submit'
        disabled={!isValid}
      >
        {buttonText}
      </button>
      <span className='form__text'>
        {spanText}
        <Link className='button form__text-link' to={linkPath}>
          {linkText}
        </Link>
      </span>
    </form>
  )
}
export default Form;