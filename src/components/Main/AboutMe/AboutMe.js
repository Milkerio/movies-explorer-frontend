import '../Title/Title.css';
import '../Line/Line.css';
import '../../Button/Button.css';
import './AboutMe.css';
//import photo from '../../../images/student.png';
import photo from '../../../images/studPhoto.svg';
import { Link } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return(
    <section className='student'>
      <h2 className='title'>Студент</h2>
      <div className='line' />
      <div className='student__container'>
        <h3 className='student__name'>Виталий</h3>
        <h4 className='student__job'>Фронтенд-разработчик, 30 лет</h4>
        <p className='student__about'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <Link className='button student__github' to={'https://github.com/Milkerio'} target='_blank'>Github</Link>
        <img className='student__photo' alt='Фото студента' src={photo} />
      </div>
      <Portfolio />
    </section>
  )
}
export default AboutMe;