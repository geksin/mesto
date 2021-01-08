import '../pages/index.css';
import {initialCards} from '../utils/initial-сards.js';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {UserInfo} from '../components/UserInfo.js';
import {Section} from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';

import {openEditProfilePopupButton,
 openAddCardPopupButton, 
 popupAddCard,
 container,
 cardTemplate,
 popupEditUserProfile,
 userName,
 userDescription,
 profileNameInput,
 profileDescriptionInput} from '../utils/constants.js' 


const userInfo = new UserInfo(userName, userDescription);
const handleCardClick = new PopupWithImage(document.querySelector('.popup_image'));

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

openAddCardPopupButton.addEventListener('click', () => {addPopupWithForm.open();
    addPopupWithForm.setEventListeners();});


const addPopupWithForm = new PopupWithForm(popupAddCard, (formData) => {
   const inputData = {name:formData['card-name'], link:formData['card-link']};
    const cardAdd = new Card(inputData, cardTemplate, handleCardClick);
                const cardElement = cardAdd.createCard();
                cardList.addItem(cardElement);
});
 

const cardList = new Section({
    items:  initialCards,
    renderer: (item) => {
        const cardStart = new Card(item, cardTemplate, handleCardClick);
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