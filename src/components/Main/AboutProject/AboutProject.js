import './AboutProject.css';
import '../Title/Title.css';

function AboutProject() {
  return(
    <section className="project" id='about'>
      <h2 className='title'>
        О проекте
      </h2>
      <div className='project__container'>
        <div className='project__cell'>
          <h3 className='project__cell-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='project__cell-subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='project__cell'>
          <h3 className='project__cell-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='project__cell-subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div> 
      </div>
      <div className='project__weeks'>
        <p className='project__weeks-text'>1 неделя</p>
        <p className='project__weeks-text'>4 недели</p>
        <p className='project__weeks-description'>Back-end</p>
        <p className='project__weeks-description'>Front-end</p>
      </div>
    </section>
  )
}
export default AboutProject;