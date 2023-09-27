import './Profile.css'
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import '../Button/Button.css';
import useFormWithValidation from '../../Validation/Validation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Profile = ({ signout, onUpdateInfo, profileMessage, isLoading }) => {
  const { values, handleChange,  isValid, resetForm } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);
  const { name, email } = values;
  const [isDisabled, setIsDisabled] = useState(false);
  function handleSubmit(evt){
    evt.preventDefault();
    onUpdateInfo({ name, email });
  }
  useEffect(() => {
    resetForm({
      name: currentUser.name,
      email: currentUser.email,
    })
  }, [currentUser])
  useEffect(() => {
    let isChanged = (currentUser.name !== values.name) || (currentUser.email !== values.email);
    setIsDisabled(isChanged);
  }, [values, currentUser, isValid]);
  return (
    <>
      <Header />
      <main>
        <section className='profile'>
          <div className='profile__container'>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            <form className='profile__form' onSubmit={handleSubmit}>
              <div className='profile__input-container'>
                <p className='profile__input-text'>Имя</p>
                <input
                  className='profile__input'
                  type='text'
                  name='name'
                  placeholder={name}
                  value={values.name || ''}
                  onChange={handleChange}
                  minLength='2'
                  maxLength='30'
                  disabled={isLoading}
                />
              </div>
              <div className='profile__input-container'>
                <p className='profile__input-text'>E-mail</p>
                <input
                  className='profile__input'
                  type='text'
                  name='email'
                  placeholder={email}
                  value={values.email || ''}
                  onChange={handleChange}
                  pattern="[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-z]{2,4}$"
                  disabled={isLoading}
                />
              </div>
              <div className='profile__buttons'>
                <span className='profile__text'>{profileMessage}</span>
                <button className='button profile__button-submit' type='submit' disabled={!isValid || !isDisabled || isLoading}>
                  Редактировать
                </button>
                <Link className='button profile__button-exit' onClick={signout}>
                  Выйти из аккаунта
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;