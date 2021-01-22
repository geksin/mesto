import {Popup} from '../components/Popup.js';

export class PopupConfirm extends Popup {
    constructor(popup) {
    super(popup);
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.querySelector('.popup__button-save').addEventListener('click', () => {
            this._handleSubmitCallback();
        })
    }

    setSubmitAction(submitAction) {
        this._handleSubmitCallback = submitAction;
      }

}
