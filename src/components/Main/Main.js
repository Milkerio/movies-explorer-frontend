import AboutProject from './AboutProject/AboutProject';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Header from '../Header/Header';

function Main() {
  return(
    <>
      <Header />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
    </>
  )
}
export default Main;