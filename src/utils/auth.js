class AuthUser {
  constructor(){
    this._url = 'https://api.mlkr.diplom.nomoredomainsicu.ru'
  }
  _checkStatus(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  };

  register = (name, email, password) => {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        name: name,
        email: email, 
        password: password
      })
    })
    .then(this._checkStatus)
  };
  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email: email, 
        password: password 
      })
    })
    .then(this._checkStatus)
  };
  getContent (token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkStatus)
  };
}

const authUser = new AuthUser();
export default authUser;