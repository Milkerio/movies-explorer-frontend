import './Login.css';
import Form from '../Form/Form';

function Login() {
  return(
    <main>
      <section className='login'>
        <Form
          title='Рады видеть!'
          buttonText='Войти'
          spanText='Ещё не зарегистрированы?'
          linkText='Регистрация'
          linkPath='/signup'
        >
          <label className='form__label'>E-mail</label>
          <input className='form__input' id='email' type='email' placeholder='Введите Вашу почту' minLength='4' required />
          <span className='form__span'>Что-то пошло не так</span>
          <label className='form__label'>Пароль</label>
          <input className='form__input' id='password' type='password' placeholder='Введите пароль' minLength='4' maxLength='16' required />
          <span className='form__span'>Что-то пошло не так</span>
        </Form>
      </section>
    </main>
  )
}
export default Login;