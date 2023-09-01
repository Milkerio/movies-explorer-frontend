import './Profile.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import '../Button/Button.css';

const Profile = () => {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru')
  return (
    <>
      <Header />
      <main className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>Привет, {name}!</h1>
          <form className='profile__form'>
            <label className='profile__input-container'>
              <p className='profile__input-text'>Имя</p>
              <input
                className='profile__input'
                type='text'
                placeholder={name}
                //value={name}
                onChange={(evt) => setName(evt.target.value)}
                minLength='2'
                maxLength='30'
              />
            </label>
            <label className='profile__input-container'>
              <p className='profile__input-text'>E-mail</p>
              <input
                className='profile__input'
                type='text'
                placeholder={email}
                //value={email}
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </label>
            <div className='profile__buttons'>
              <button className='button profile__button-submit' type='submit'>
                Редактировать
              </button>
              <Link className='button profile__button-exit' to='/signin'>
                Выйти из аккаунта
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Profile;