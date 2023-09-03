import './Register.css';
import Form from '../Form/Form';

function Register() {
  return(
    <main>
      <section className='register'>
        <Form
          title='Добро пожаловать!'
          buttonText='Зарегистрироваться'
          spanText='Уже зарегистрированы?'
          linkText='Войти'
          linkPath='/signin'
        >
          <label className='form__label'>Имя</label>
          <input className='form__input' type='text' id='name' placeholder='Введите Ваше имя' minLength='2' maxLength='30' required />
          <span className='form__span'>Что-то пошло не так...</span>
          <label className='form__label'>E-mail</label>
          <input className='form__input' id='email' type='email' placeholder='Введите Вашу почту' minLength='4' required />
          <span className='form__span'>Что-то пошло не так...</span>
          <label className='form__label'>Пароль</label>
          <input className='form__input form__input-error' id='password' type='password' placeholder='Введите пароль' minLength='4' maxLength='16' required />
          <span className='form__span'>Что-то пошло не так...</span>
        </Form>
      </section>
    </main>
  )
}
export default Register;