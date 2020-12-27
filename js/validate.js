const profilePopupForm = document.querySelector('.popup_edit-profile');
const cardPopupForm = document.querySelector('.popup_add-card');

const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__profile-input", 
    sumbitButtomSelector: ".popup__button-save",
    inputInvalidClass: "popup__profile-input_error",
    buttonInvalidClass: "popup__button-save_disabled"
};

class FormValidator {
    constructor(form, config) {
        this.form = form;
//        this.input = input;
        this.config = config;
    }
    _showError() {
        const error = this.form.querySelector(`#${input.id}-error`);
        error.textContent = this.input.validationMessage;
        this.input.classList.add(this.config.inputInvalidClass);
    }

    _hideError() {
        const error = this.form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        this.input.classList.remove(this.config.inputInvalidClass);
    }

    _checkInputValidity () {
        if (!this.input.validity.valid) {
            this._showError();
        } else {
            this._hideError();
        }
    }

    _setButtonState(button, isActive) {
        if (isActive) {
            button.classList.remove(this.config.buttonInvalidClass);
            button.disabled = false;
        } else {
            button.classList.add(this.config.buttonInvalidClass);
            button.disabled = true;
        }
    };

    _setEventListeners () {

        const submitButton = this.form.querySelector(this.config.sumbitButtomSelector);
        const inputsList = this.form.querySelectorAll(this.config.inputSelector);
    
        inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity();
                this._setButtonState(submitButton, this.form.checkValidity());
            });
        });
    };

    enableValidation () {
        const submitButton = this.form.querySelector(this.config.sumbitButtomSelector);
        this._setEventListeners (submitButton);
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setButtonState(submitButton, this.form.checkValidity()); 
    }
}



const profilePopupFormValidation = new FormValidator(profilePopupForm, validationConfig);
profilePopupFormValidation.enableValidation();
const cardPopupFormValidation = new FormValidator(cardPopupForm,validationConfig);
cardPopupFormValidation.enableValidation();


