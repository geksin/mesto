
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
const formElement = document.querySelector('.popup__form');
const popupAll = document.querySelectorAll('.popup');
const popupSignature = popupImage.querySelector('.popup__signature');
const imgpopupImage = popupImage.querySelector('.popup__img');
const container = document.querySelector('.elements');



function showPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
}


popupAll.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup')) {
        hidePopup (popup);
    }
}
)});

function fillProfileInputs() {
    profileNameInput.value = userName.textContent;
    profileDescriptionInput.value = userDescription.textContent;
}

function showEditUserProfilePopup(popup) {
    showPopup(popup);
    fillProfileInputs ();
}


function hidePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc) 
}



openEditProfilePopupButton.addEventListener('click', () => showEditUserProfilePopup(popupEditUserProfile));
closeEditProfilePopupButton.addEventListener('click', () => hidePopup(popupEditUserProfile));


openAddCardPopupButton.addEventListener('click', () => showAddCardPopup(popupAddCard));
closeAddCardPopupButton.addEventListener('click', () => hidePopup(popupAddCard));

function showAddCardPopup(popup) {
    showPopup(popup)
    inputCardName.value = '';
    inputCardLink.value = '';
}


popupImage.querySelector('.popup__button-close').addEventListener('click',() => hidePopup(popupImage));


function formSubmitHandler (evt) {
    evt.preventDefault(); 

     userName.textContent = profileNameInput.value;
     userDescription.textContent = profileDescriptionInput.value;
     hidePopup (popupEditUserProfile);
}

formElement.addEventListener('submit', formSubmitHandler);


initialCards.forEach((items)=> {
    const card = new Card(items); 
    const cardElement = card.createCard();
    container.append(cardElement);
}); 


function addCardToContainerStart (evt) {
    evt.preventDefault();
    const cardData = {
        name: inputCardName.value,
        link: inputCardLink.value
     }
    const cardStart = new Card(cardData);
    const cardElement = cardStart.createCard();
    container.prepend(cardElement);
    hidePopup (popupAddCard);
}

popupAddCard.addEventListener('submit', addCardToContainerStart);


function closePopupEsc(evt) {
    const popupOpen = document.querySelector('.popup_opened');
    if (evt.key == "Escape") {
        hidePopup (popupOpen);
}};


export function openImagePopup (link, text) {
    imgpopupImage.src = link;
    imgpopupImage.title = text;
    imgpopupImage.alt = "Фотография: " + text;
    popupSignature.textContent = text;
    showPopup(popupImage);
}

// валидация

const validationConfig = {
    profilePopupForm: document.querySelector('.popup__form_edit'),
    cardPopupForm: document.querySelector('.popup__form_add'),
    inputSelector: '.popup__profile-input', 
    sumbitButtomSelector: ".popup__button-save",
    inputInvalidClass: "popup__profile-input_error",
    buttonInvalidClass: "popup__button-save_disabled"
};

const profilePopupFormValidation = new FormValidator(validationConfig, validationConfig.profilePopupForm);
profilePopupFormValidation.enableValidation();
const cardPopupFormValidation = new FormValidator(validationConfig, validationConfig.cardPopupForm);
cardPopupFormValidation.enableValidation();

import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './initial-сards.js';