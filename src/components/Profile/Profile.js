import './Profile.css'
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import '../Button/Button.css';
import useFormWithValidation from '../../Validation/Validation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Profile = ({ isLoading, signout, onUpdateInfo }) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
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
            <h1 className='profile__title'>Привет, {name}!</h1>
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
                />
              </div>
              <div className='profile__buttons'>
                <button className='button profile__button-submit' type='submit' disabled={!isValid || !isDisabled}>
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