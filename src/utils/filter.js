export const findShortFilms = (films) => {
  return films.filter((film) => film.duration <= 40)
};
export const filterFilms = (search, movies) => {
  return movies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(search.toLowerCase())
  );
};
