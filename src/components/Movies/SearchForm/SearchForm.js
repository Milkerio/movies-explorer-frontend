import './SearchForm.css';
import { useEffect } from "react";
import '../../Button/Button.css';
import useFormWithValidation from '../../../Validation/Validation';

function SearchForm({ search, setSearch, checkboxState, checkboxClick }) {
  const { values, handleChange, resetForm } = useFormWithValidation();
  function handleSearch(evt){
    evt.preventDefault();
    setSearch(values.movieName);
  }
  useEffect(() => {
    resetForm({ movieName: search })
  }, [search])
  return(
    <section className="movies__search">
      <form className="movies__search-form" onSubmit={handleSearch} noValidate>
        <input 
          className="movies__search-form-input" 
          placeholder='Фильм' 
          required 
          name='movieName'
          value={values.movieName || ''}
          onChange={handleChange}
        />
        <button className="button movies__search-form-button" type='submit'>
          Поиск
        </button>
      </form>
      <div className="movies__checkbox-container">
        <input
          className="movies__checkbox"
          type='checkbox'
          onChange={(evt) => checkboxClick(evt.target.checked)}
          checked={checkboxState}
        />
        <label className="movies__checkbox-text">Короткометражки</label>
      </div>
    </section>
  )
}
export default SearchForm;