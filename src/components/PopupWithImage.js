import {Popup} from '../components/Popup.js';

export class PopupWithImage extends Popup {
    constructor(popup) {
    super(popup);
    this._image = this._popup.querySelector('.popup__img');
    this._signature = this._popup.querySelector('.popup__signature');
    this.setEventListeners();
    }
    open(link, text) {
        super.open()
        this._image.src = link;
        this._image.title = text;
        this._image.alt = "Фотография: " + text;
        this._signature.textContent = text;
    }
}