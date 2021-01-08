import {initialCards} from './initial-сards.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {UserInfo} from './UserInfo.js';
import Popup from './Popup.js';
import {Section} from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';

const openEditProfilePopupButton = document.querySelector('.profile__edit-button');
const openAddCardPopupButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_add-card');
const container = document.querySelector('.elements');
const cardTemplate = '.card__template';
const popupEditUserProfile = document.querySelector('.popup_edit-profile');
const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__subtitle');
const profileNameInput = document.getElementById('profile-name');
const profileDescriptionInput = document.getElementById('profile-profession');


const userInfo = new UserInfo(userName, userDescription);

const editPopupWithForm = new PopupWithForm(popupEditUserProfile, (formData) => { 
        userInfo.setUserInfo(formData['profile-name'], formData['profile-profession']); 
    });

editPopupWithForm.setEventListeners();

openEditProfilePopupButton.addEventListener('click', () => {
        editPopupWithForm.open();
        const userData = userInfo.getUserInfo();
        profileNameInput.value = userData.userInfoName;
        profileDescriptionInput.value = userData.userInfoDescription;
});

openAddCardPopupButton.addEventListener('click', () => addPopupWithForm.open());


const addPopupWithForm = new PopupWithForm(popupAddCard, (formData) => {
   const inputData = {name:formData['card-name'], link:formData['card-link']};
    const cardAdd = new Card(inputData, cardTemplate);
                const cardElement = cardAdd.createCard();
                cardList.addItem(cardElement);
});
addPopupWithForm.setEventListeners(); 

const cardList = new Section({
    items:  initialCards,
    renderer: (item) => {
        const cardStart = new Card(item, cardTemplate);
        const cardElement = cardStart.createCard();
        cardList.addItemStart(cardElement);
        }
    }, container
    );
cardList.renderItems();



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
