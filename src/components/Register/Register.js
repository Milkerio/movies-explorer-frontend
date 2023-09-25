import './Register.css';
import Form from '../Form/Form';
import useFormWithValidation from '../../Validation/Validation';
import React, { useEffect } from 'react';

function Register({ onReg, isLoading, formMessage }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onReg(values.name, values.email, values.password)
  };
  useEffect(() => {
    resetForm();
  }, [resetForm]);
  useEffect(() => {
    console.log(isLoading);
  })
  return(
    <main>
      <section className='register'>
        <Form
          title='Добро пожаловать!'
          buttonText='Зарегистрироваться'
          spanText='Уже зарегистрированы?'
          linkText='Войти'
          linkPath='/signin'
          onSubmit={handleSubmit}
          isValid={isValid}
          isLoading={isLoading}
          formMessage={formMessage}
        >
          <label className='form__label'>Имя</label>
          <input 
            className='form__input' 
            type='text'
            id='name' 
            name='name'
            placeholder='Введите Ваше имя' 
            minLength='2' 
            maxLength='30' 
            required
            pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
            value={values.name || ''}
            onChange={handleChange}
            disabled={isLoading}
          />
          <span className={`form__span ${!isValid && errors.name ? 'form__span_active' : ''}`}>{errors.name || ''}</span>
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
            pattern="[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-z]{2,4}$"
            disabled={isLoading}
          />
          <span className={`form__span ${!isValid && errors.email ? 'form__span_active' : ''}`}>{errors.email || ''}</span>
          <label className='form__label'>Пароль</label>
          <input 
            className={`form__input ${!isValid && errors.password ? 'form__input-error' : ''}`} 
            id='password' 
            type='password' 
            name='password'
            placeholder='Введите пароль' 
            minLength='4' 
            maxLength='16' 
            required 
            value={values.password || ''}
            onChange={handleChange}
            disabled={isLoading}
          />
          <span className={`form__span ${!isValid && errors.password ? 'form__span_active' : ''}`}>{errors.password}</span>
        </Form>
      </section>
    </main>
  )
}
export default Register;