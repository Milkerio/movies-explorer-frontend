import './Techs.css';
import '../Title/Title.css';
import '../Line/Line.css';

function Techs() {
  return(
    <section className='techs'>
      <h2 className="title">
      Технологии
      </h2>
      <div className='line' />
      <div className='techs__text_container'>
        <h3 className='techs__text_title'>
          7 технологий
        </h3>
        <p className='techs__text_subtitle'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>
      <ul className='techs__list'>
        <li className='techs__item'>HTML</li>
        <li className='techs__item'>CSS</li>
        <li className='techs__item'>JS</li>
        <li className='techs__item'>React</li>
        <li className='techs__item'>Git</li>
        <li className='techs__item'>Express.js</li>
        <li className='techs__item'>mongoDB</li>
      </ul>
    </section>
  )
}
export default Techs;