fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards', {
  headers: {
    authorization: 'd0d17317-fe5c-4341-9c10-713100a37209'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });





// const { Input } = require("postcss");

// class Api {
//     constructor({addres}) {

//     }

//     getMassages() {
//         return fetch(input)
//     }

// }