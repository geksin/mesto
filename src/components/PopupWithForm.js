import {Popup} from '../components/Popup.js';

export class PopupWithForm extends Popup {
    constructor(popup, submitFormHandler) {
    super(popup);
    this._form = this._popup.querySelector('.popup__form');
    this._submitFormHandler = submitFormHandler;
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__profile-input'));
    }

    _getInputValues(){
        this._formValues = {};
        this._inputList.forEach(input => { 
            this._formValues[input.name] = input.value;
          });
        return this._formValues;
    }
    

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFormHandler(this._getInputValues());
            this.close()
        })
    }

    close(){
        this._form.reset();
        super.close();
    }

}
