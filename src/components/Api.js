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

  uploadUserAvatar(link) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          avatar: link,
      })
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

  deleteCard (id) {
        return fetch(`${this._address}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
            }
        })
            .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))
  }

  getCardLike(id){
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

  remoteCardLike(id){
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
          authorization: this._token,
      }
  })
      .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))
  }

  setCardLikes(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
    }
  })
      .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))
  }

  editProfile(data) {
    return fetch(`${this._address}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data['profile-name'],
            about: data['profile-profession']
        })
    })
        .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))
  }

  createCard(data) {
    return fetch(`${this._address}/cards`, {
        method: 'POST',
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            link: data.link
        })
    })
        .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))
  }

}

export default Api;


// removeMessage(id) {
//   return fetch(`${this._address}/messages/${id}`, {
//       method: 'DELETE',
//       headers: {
//           authorization: this._token,
//       }
//   })
//       .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))
// }