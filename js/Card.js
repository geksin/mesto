import {openImagePopup} from './index.js';

export class Card {

    constructor(data, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = document.querySelector(template);
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__photo');
    }
    _getTemplate() {
        return this._template.content.cloneNode(true);
    }
    createCard() {
      this._element.querySelector('.element__name').textContent = this._name;
      this._cardImage.alt = this._name;
      this._cardImage.src = this._link;
      this._setEventListeners();
      return this._element;
    }
    _setEventListeners() {
      this._element.querySelector('.element__button-delete').addEventListener('click', evt => evt.target.parentElement.remove());
      this._element.querySelector('.element__button-like').addEventListener('click', evt => evt.target.classList.toggle('button-like_yes'));
      this._cardImage.addEventListener('click', () => openImagePopup(this._link, this._name));
    }
}

  