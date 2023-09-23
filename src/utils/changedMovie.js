const url = 'https://api.nomoreparties.co';

export default function changeMovie(movie) {
  return (
    movie.map((movie) => ({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${url}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${url}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }))
  )
}