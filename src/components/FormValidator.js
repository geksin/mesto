export class FormValidator {
    constructor(config, form) {
        this._form = form;
        this._input = config.inputSelector;
        this._buttomSave = config.sumbitButtomSelector;
        this._errorClass = config.inputInvalidClass;
        this._buttomDisabled = config.buttonInvalidClass;
        this._submitButton = this._form.querySelector(this._buttomSave);
        this._inputsList = Array.from(this._form.querySelectorAll(this._input));
    }
    _showError(inputElement) {
        const error = this._form.querySelector(`#${inputElement.id}-error`);
        error.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._errorClass);
    }

    _hideError(inputElement) {
        const error = this._form.querySelector(`#${inputElement.id}-error`);
        error.textContent = '';
        inputElement.classList.remove(this._errorClass);
    }

    _checkInputValidity (inputElement) {
        if (!inputElement.validity.valid) {
            this._showError(inputElement);
        } else {
            this._hideError(inputElement);
        }
    }

    _setButtonState(submitButton, isActive) {
        if (isActive) {
            submitButton.classList.remove(this._buttomDisabled);
            submitButton.disabled = false;
        } else {
            submitButton.classList.add(this._buttomDisabled);
            submitButton.disabled = true;
        }
    };
    resetValidation() {
        this._inputsList.forEach((inputElement) => { 
            this._hideError(inputElement);
        });
        this._setButtonState(this._submitButton, this._form.checkValidity());
    }

    _setEventListeners () {
        this._inputsList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._setButtonState(this._submitButton,this._form.checkValidity());
            });
        });
    };

    enableValidation () {
        this._setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
       this._setButtonState(this._submitButton, this._form.checkValidity()); 
    }
}