class MoviesApi {
  constructor(){
    this._url = 'https://api.nomoreparties.co/beatfilm-movies';
  };
  _checkStatus(res){
    if(res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  };
  getMovies(){
    return fetch(this._url, {
      headers: {
        "Content-Type": "application/json",
      },
      //credentials: 'include',
    })
    .then((res) => this._checkStatus(res));
  };
}

export const apiMovies = new MoviesApi();
