import './AboutProject.css';
import '../Title/Title.css';
import '../Line/Line.css';

function AboutProject() {
  return(
    <section className="project">
      <h2 className='title'>
        О проекте
      </h2>
      <div className='line' />
      <div className='project__container'>
        <div className='project__cell'>
          <p className='project__container_title'>
            Дипломный проект включал 5 этапов
          </p>
          <p className='project__container_subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='project__cell'>
          <p className='project__container_title'>
            На выполнение диплома ушло 5 недель
          </p>
          <p className='project__container_subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div> 
      </div>
      <div className='project__weeks'>
        <p className='project__weeks_text'>1 неделя</p>
        <p className='project__weeks_text'>4 недели</p>
        <p className='project__weeks_description'>Back-end</p>
        <p className='project__weeks_description'>Front-end</p>
      </div>
    </section>
  )
}
export default AboutProject;