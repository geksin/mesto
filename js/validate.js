const profilePopupForm = document.querySelector('.popup__form_edit');
const cardPopupForm = document.querySelector('.popup__form_add');

const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: '.popup__profile-input', 
    sumbitButtomSelector: ".popup__button-save",
    inputInvalidClass: "popup__profile-input_error",
    buttonInvalidClass: "popup__button-save_disabled"
};

class FormValidator {
    constructor(config, form) {
        this._form = form;
        this._input = config.inputSelector;
        this._buttomSave = config.sumbitButtomSelector;
        this._errorClass = config.inputInvalidClass;
        this._buttomDisabled = config.buttonInvalidClass;
    }
    _showError(inputElement) {
        const error = this._form.querySelector(`#${inputElement.id}-error`);
        error.textContent = this._input.validationMessage;
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

    _setEventListeners () {

        const inputsList = Array.from(this._form.querySelectorAll(this._input));
        
        inputsList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                const submitButton = this._form.querySelector(this._buttomSave);
                this._setButtonState(submitButton,this._form.checkValidity());
            });
        });
    };

    enableValidation () {
        this._setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const submitButton = this._form.querySelector(this._buttomSave);
       this._setButtonState(submitButton, this._form.checkValidity()); 
    }
}

const profilePopupFormValidation = new FormValidator(validationConfig, profilePopupForm);
profilePopupFormValidation.enableValidation();
const cardPopupFormValidation = new FormValidator(validationConfig, cardPopupForm);
cardPopupFormValidation.enableValidation();


/*
исходный код 
function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputInvalidClass);
}

function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputInvalidClass);
}

function checkInputValidity (form, input, config) {
    if (!input.validity.valid) {
        showError(form, input, config);
    } else {
        hideError(form, input, config);
    }
}

function setButtonState(button, isActive, config) {
    if (isActive) {
        button.classList.remove(config.buttonInvalidClass);
        button.disabled = false;
    } else {
        button.classList.add(config.buttonInvalidClass);
        button.disabled = true;
    }
};


function setEventListeners (form, config) {

    const submitButton = form.querySelector(config.sumbitButtomSelector);
    const inputsList = form.querySelectorAll(config.inputSelector);

    inputsList.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(form, input, config);
            setButtonState(submitButton, form.checkValidity(), config);
        });
    });
};


function enableValidation (config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach((form) => {
        setEventListeners (form, config);
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const submitButton = form.querySelector(config.sumbitButtomSelector);
        setButtonState(submitButton, form.checkValidity(), config);
    });
}

const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__profile-input", 
    sumbitButtomSelector: ".popup__button-save",
    inputInvalidClass: "popup__profile-input_error",
    buttonInvalidClass: "popup__button-save_disabled"
};


enableValidation(validationConfig); 


*/