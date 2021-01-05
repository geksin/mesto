import {initialCards} from './initial-сards.js'
import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'

console.log(initialCards);

const openEditProfilePopupButton = document.querySelector('.profile__edit-button');
const openAddCardPopupButton = document.querySelector('.profile__add-button');
const closeEditProfilePopupButton = document.querySelector('.popup__button-close');
const closeAddCardPopupButton = document.getElementById('popup-close-card');
const popupEditUserProfile = document.querySelector('.popup_edit-profile');
const popupAddCard = document.querySelector('.popup_add-card');
const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__subtitle');
const profileNameInput = document.getElementById('profile-name');
const profileDescriptionInput = document.getElementById('profile-profession');
const inputCardName = document.getElementById('card-name');
const inputCardLink = document.getElementById('card-link');
const profileForm = document.querySelector('.popup__form_edit');
const popupAll = document.querySelectorAll('.popup');
// const popupSignature = popupImage.querySelector('.popup__signature');
// const imgpopupImage = popupImage.querySelector('.popup__img');
const container = document.querySelector('.elements');
const cardTemplate = '.card__template';





class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
    }
    open() {
        this._popup.classList.add('popup_opened');
    }
    close() {
        this._popup.classList.remove('popup_opened');
    }
    _handleEscClose(evt) {
        if (evt.key == "Escape") {
            this.close() 
        }
    }
    setEventListeners() {
        this._popup.querySelector('.popup__button-close').addEventListener('click',() => this.close());
        this._popup.addEventListener('keydown', (evt) => this._handleEscClose(evt));
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close();
            }
        }); 
    }
}

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__img');
    }
    open(link, text) {
        console.log(link, text, this._popup);
        this._image.src = link;
        this._image.title = text;
        this._image.alt = "Фотография: " + text;
        this._popup.querySelector('.popup__signature').textContent = text;
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }
}

class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormHandler) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__container');
    this._submitFormHandler = submitFormHandler;
    this._inputList = Array.from(this._popupSelector.querySelectorAll('.popup__profile-input'));

    }
    _getInputValues(){
        this._formValues = {};
        this._inputList.forEach(input => {this._formValues[input.name] = input.value;});
        return this._formValues;
        // profileNameInput.value = userName.textContent;
        // profileDescriptionInput.value = userDescription.textContent;
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFormHandler(this._getInputValues())
//      userName.textContent = profileNameInput.value;
//      userDescription.textContent = profileDescriptionInput.value;
            this.close()
        })
    }
    close(){
        super.close();
        this._form.reset();
    }
}



// popupAll.forEach((popup) => {
//     popup.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('popup')) {
//         hidePopup (popup);
//     }
// })});


// const openPopupWithImage = new PopupWithImage(document.querySelector('.popup_image'), this._link, this._name);




// валидация

const validationConfig = {
    inputSelector: '.popup__profile-input', 
    sumbitButtomSelector: ".popup__button-save",
    inputInvalidClass: "popup__profile-input_error",
    buttonInvalidClass: "popup__button-save_disabled"
};

const profilePopupFormValidation = new FormValidator(validationConfig, document.querySelector('.popup__form_edit'));
profilePopupFormValidation.enableValidation();
const cardPopupFormValidation = new FormValidator(validationConfig, document.querySelector('.popup__form_add'));
cardPopupFormValidation.enableValidation();


// function createNewCard(item) {
//     const cardStart = new Card(item, cardTemplate, openImagePopup);
//     const cardElement = cardStart.createCard();
//     return cardElement;
// }

// initialCards.forEach((items)=> {
//     container.append(createNewCard(items));
// }); 

function addCardToContainerStart (evt) {
    evt.preventDefault();
    const cardData = {
        name: inputCardName.value,
        link: inputCardLink.value
     }
    container.prepend(createNewCard(cardData));
    hidePopup (popupAddCard);
}


const createNewCard = (item) => {
    const cardStart = new Card(item, cardTemplate) //, openPopupWithImage);
    const cardElement = cardStart.createCard();
    return cardElement;
}
class Section {
    constructor({items, renderer}, container){
        this._items = items;
        this._renderer = renderer;
        this._container = container;
    }
    addItem(element) {
        this._container.append(element);
    }
    renderItems() {
        this._items.forEach((item)=> {
            this._renderer(item);
        }); 

    }
}

const cardList = new Section({
    items:  initialCards,
    renderer: (item) => {
        const cardStart = new Card(item, cardTemplate) //openPopupWithImage);
        const cardElement = cardStart.createCard();
        cardList.addItem(cardElement);
        }
    }, container
    );
cardList.renderItems();



// popup

// function closePopupEsc(evt) {
//     const popupOpen = document.querySelector('.popup_opened');
//     if (evt.key == "Escape") {
//         hidePopup (popupOpen);
// }};


// function hidePopup(popup) {
//     popup.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closePopupEsc) 
// }

// function showPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keydown', closePopupEsc);
// }


// popupAll.forEach((popup) => {
//     popup.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('popup')) {
//         hidePopup (popup);
//     }
// })});

// popupImage.querySelector('.popup__button-close').addEventListener('click',() => hidePopup(popupImage));

// function openImagePopup (link, text) {
//     imgpopupImage.src = link;
//     imgpopupImage.title = text;
//     imgpopupImage.alt = "Фотография: " + text;
//     popupSignature.textContent = text;
//     showPopup(popupImage);
// }

// openEditProfilePopupButton.addEventListener('click', () => showEditUserProfilePopup(popupEditUserProfile));
// closeEditProfilePopupButton.addEventListener('click', () => hidePopup(popupEditUserProfile));


// openAddCardPopupButton.addEventListener('click', () => showAddCardPopup(popupAddCard));
// closeAddCardPopupButton.addEventListener('click', () => hidePopup(popupAddCard));

// function showAddCardPopup(popup) {
//     showPopup(popup)
//     inputCardName.value = '';
//     inputCardLink.value = '';
//     cardPopupFormValidation.setButtonState(popup.querySelector('.popup__button-save'),null);
// }



// function profileFormSubmitHandler (evt) {
//     evt.preventDefault();
//      userName.textContent = profileNameInput.value;
//      userDescription.textContent = profileDescriptionInput.value;
//      hidePopup (popupEditUserProfile);
// }

// profileForm.addEventListener('submit', profileFormSubmitHandler);

// popupAddCard.addEventListener('submit', addCardToContainerStart);

// function fillProfileInputs() {
//     profileNameInput.value = userName.textContent;
//     profileDescriptionInput.value = userDescription.textContent;
// }

// function showEditUserProfilePopup(popup) {
//     showPopup(popup);
//     fillProfileInputs ();
// }




