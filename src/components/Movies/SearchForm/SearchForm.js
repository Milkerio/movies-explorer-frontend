import './SearchForm.css';
import { useState } from "react";
import '../../Button/Button.css';

function SearchForm() {
  const [checkbox, setCheckbox] = useState();
  return(
    <section className="movies__search">
      <form className="movies__search-form">
        <input className="movies__search-form-input" placeholder='Фильм' />
        <button className="button movies__search-form-button">
          Поиск
        </button>
      </form>
      <div className="movies__checkbox-container">
        <input
          className="movies__checkbox"
          type='checkbox'
          checked={checkbox}
          onChange={() => { setCheckbox(!checkbox) }}
        />
        <label className="movies__checkbox-text">Короткометражки</label>
      </div>
    </section>
  )
}
export default SearchForm;