import {PopupWithImage} from './index.js';

export class Card {

    constructor(data, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = document.querySelector(template);
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__photo');
        this._handleCardClick = new PopupWithImage(document.querySelector('.popup_image'));
    }
    _getTemplate() {
        return this._template.content.querySelector('.element').cloneNode(true);
    }
    createCard() {
        this._element.querySelector('.element__name').textContent = this._name;
        this._cardImage.alt = this._name;
        this._cardImage.src = this._link;
        this._setEventListeners();
        return this._element;
    }
    _setEventListeners() {
        this._element.querySelector('.element__button-delete').addEventListener('click', () => this.deleteCard());
        this._element.querySelector('.element__button-like').addEventListener('click', evt => this.like(evt));
        this._cardImage.addEventListener('click', () => this._handleCardClick.open(this._link, this._name));

    }
    like(evt){
        evt.target.classList.toggle('button-like_yes');
    }
    deleteCard(){
        this._element.remove()
        this._element = null;
    }
}  