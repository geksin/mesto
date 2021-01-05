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
const popupImage = document.querySelector('.popup_image');
const profileForm = document.querySelector('.popup__form_edit');
const popupAll = document.querySelectorAll('.popup');
const popupSignature = popupImage.querySelector('.popup__signature');
const imgpopupImage = popupImage.querySelector('.popup__img');
const container = document.querySelector('.elements');
const cardTemplate = '.card__template';




function fillProfileInputs() {
    profileNameInput.value = userName.textContent;
    profileDescriptionInput.value = userDescription.textContent;
}

function showEditUserProfilePopup(popup) {
    showPopup(popup);
    fillProfileInputs ();
}




openEditProfilePopupButton.addEventListener('click', () => showEditUserProfilePopup(popupEditUserProfile));
closeEditProfilePopupButton.addEventListener('click', () => hidePopup(popupEditUserProfile));


openAddCardPopupButton.addEventListener('click', () => showAddCardPopup(popupAddCard));
closeAddCardPopupButton.addEventListener('click', () => hidePopup(popupAddCard));

function showAddCardPopup(popup) {
    showPopup(popup)
    inputCardName.value = '';
    inputCardLink.value = '';
    cardPopupFormValidation.setButtonState(popup.querySelector('.popup__button-save'),null);
}



function profileFormSubmitHandler (evt) {
    evt.preventDefault(); 

     userName.textContent = profileNameInput.value;
     userDescription.textContent = profileDescriptionInput.value;
     hidePopup (popupEditUserProfile);
}

profileForm.addEventListener('submit', profileFormSubmitHandler);

popupAddCard.addEventListener('submit', addCardToContainerStart);







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
    const cardStart = new Card(item, cardTemplate, openImagePopup);
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
        const cardStart = new Card(item, cardTemplate, openImagePopup);
        const cardElement = cardStart.createCard();
        cardList.addItem(cardElement);
        }
    }, container
    );
cardList.renderItems();



// popup

function closePopupEsc(evt) {
    const popupOpen = document.querySelector('.popup_opened');
    if (evt.key == "Escape") {
        hidePopup (popupOpen);
}};


function hidePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc) 
}

function showPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
}


popupAll.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
        hidePopup (popup);
    }
})});

popupImage.querySelector('.popup__button-close').addEventListener('click',() => hidePopup(popupImage));

function openImagePopup (link, text) {
    imgpopupImage.src = link;
    imgpopupImage.title = text;
    imgpopupImage.alt = "Фотография: " + text;
    popupSignature.textContent = text;
    showPopup(popupImage);
}

class Popup {
    constructor(popuSelector) {
        this._popup = popuSelector;
    }
    open() {
        this._popup.classList.add('popup_opened');
    }
    close() {
        this._popup.classList.remove('popup_opened');
    }
    _handleEscClose(evt) {
        if (evt.key == "Escape") {
            close() 
        }
    }
    setEventListeners() {
        this._popup.querySelector('.popup__button-close').addEventListener('click',() => close());
    }
}

class PopupWithImage extends Popup {
    constructor(popuSelector) {
    super(popuSelector);
    }
    open(link, text) {
        const imgpopupImage = popupImage.querySelector('.popup__img');
        imgpopupImage.src = link;
        imgpopupImage.title = text;
        imgpopupImage.alt = "Фотография: " + text;
        popupImage.querySelector('.popup__signature').textContent = text;
        this._popup.classList.add('popup_opened');
    }
}

class PopupWithForm extends Popup {
    constructor(popuSelector, callBackSubbmitForm) {
    super(popuSelector);
    this._form = callBackSubbmitForm;
    }
    _getInputValues(){
        profileNameInput.value = userName.textContent;
        profileDescriptionInput.value = userDescription.textContent;
    }
    setEventListeners() {

    }
    close(){
        
    }
}
