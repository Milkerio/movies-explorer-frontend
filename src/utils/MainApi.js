class MainApi{
  constructor(){
    this._url = 'https://api.mlkr.diplom.nomoredomainsicu.ru'
  };
  _checkStatus(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  };
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      //credentials: 'include',
    })
    .then((res) => this._checkStatus(res))
  };
  getSavedMovies() {
    return fetch(`${this._url}/movies`,{
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      //credentials: 'include',
    })
    .then((res) => this._checkStatus(res))
  };
  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
      //credentials: "include",
    })
    .then((res) => this._checkStatus(res))
  };
  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
    })
    .then((res) => this._checkStatus(res))
  };
  saveMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      //credentials: "include",
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration, 
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    })
    .then((res) => this._checkStatus(res))
  };
}

export const apiMain = new MainApi();
