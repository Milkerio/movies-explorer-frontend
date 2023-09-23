import './Login.css';
import Form from '../Form/Form';
import useFormWithValidation from '../../Validation/Validation';
import { useEffect } from 'react';

function Login({ onLog, isLoading}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  function handleSubmit(evt) {
    evt.preventDefault();
    onLog(values.email, values.password)
  };
useEffect(() => {
  resetForm();
}, [resetForm]);
  return(
    <main>
      <section className='login'>
        <Form
          title='Рады видеть!'
          buttonText='Войти'
          spanText='Ещё не зарегистрированы?'
          linkText='Регистрация'
          linkPath='/signup'
          onSubmit={handleSubmit}
          isValid={isValid}
        >
          <label className='form__label'>E-mail</label>
          <input 
            className='form__input' 
            id='email' 
            type='email' 
            name='email' 
            placeholder='Введите Вашу почту' 
            minLength='4' 
            required 
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className={`form__span ${!isValid && errors.email ? 'form__span_active' : ''}`}>{errors.email || ''}</span>
          <label className='form__label'>Пароль</label>
          <input 
            className='form__input' 
            id='password' 
            type='password' 
            name='password' 
            placeholder='Введите пароль' 
            minLength='4' 
            maxLength='16' 
            required 
            value={values.password || ''}
            onChange={handleChange}
          />
          <span className={`form__span ${!isValid && errors.password ? 'form__span_active' : ''}`}>{errors.password || ''}</span>
        </Form>
      </section>
    </main>
  )
}
export default Login;