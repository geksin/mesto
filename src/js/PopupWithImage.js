import {Popup} from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__img');
    }
    open(link, text) {
        this._image.src = link;
        this._image.title = text;
        this._image.alt = "Фотография: " + text;
        this._popup.querySelector('.popup__signature').textContent = text;
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }
}