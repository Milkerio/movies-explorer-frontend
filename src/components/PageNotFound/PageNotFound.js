import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';
import '../Button/Button.css';

function PageNotFound() {
  const navigate = useNavigate();
  return(
    <main className='not-found'>
      <h1 className='not-found__title'>
        404
      </h1>
      <p className='not-found__subtitle'>
        Страница не найдена
      </p>
      <button type='button' className='button not-found__button' onClick={() => navigate(-1)}>
        Назад
      </button>
    </main>
  )
}
export default PageNotFound;