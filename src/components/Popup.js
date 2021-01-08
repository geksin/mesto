export class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
    }
    open() {
        this._popup.classList.add('popup_opened');
    }
    close() {
        this._popup.classList.remove('popup_opened');
    }
    handleEscClose(evt) {
        if (evt.key == "Escape") {
            this.close();
            document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
        }
    }
    setEventListeners() {
        this._popup.querySelector('.popup__button-close').addEventListener('click',() => this.close());
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close();
            }
        }); 
    }
}
