
// const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-19';
// const key = 'd0d17317-fe5c-4341-9c10-713100a37209';

class Api {
  constructor({address, token}) {
  this._address = address; 
  this._token = token; 
  }

  getUserData() {
      return fetch(`${this._address}/users/me`, {
        headers: {
          authorization: this._token
        }
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
  }

  getInitialCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

}

export default Api;