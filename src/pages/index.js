import '../pages/index.css';
import {initialCards} from '../utils/initial-сards.js';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {UserInfo} from '../components/UserInfo.js';
import {Section} from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import Api from '../components/Api.js';

import {openEditProfilePopupButton,
 openAddCardPopupButton, 
 popupAddCard,
 container,
 cardTemplate,
 popupEditUserProfile,
 userName,
 userDescription,
 profileNameInput,
 profileDescriptionInput} from '../utils/constants.js';
// import { from } from 'webpack-sources/lib/CompatSource';


const userInfo = new UserInfo(userName, userDescription);

const imagePopup = new PopupWithImage(document.querySelector('.popup_image'));

const handleCardClick = (link, name) => {
    imagePopup.open(link, name)
}

const editPopupWithForm = new PopupWithForm(popupEditUserProfile, (formData) => { 
        userInfo.setUserInfo(formData['profile-name'], formData['profile-profession']); 
    });

editPopupWithForm.setEventListeners();

openEditProfilePopupButton.addEventListener('click', () => {
        editPopupWithForm.open();
        profilePopupFormValidation.resetValidation();
        const userData = userInfo.getUserInfo();
        profileNameInput.value = userData.userInfoName;
        profileDescriptionInput.value = userData.userInfoDescription;
});


function createCard(item) {
    const cardAdd = new Card(item, cardTemplate, handleCardClick);
    return cardAdd.createCard()
}


const addPopupWithForm = new PopupWithForm(popupAddCard, (formData) => {
    const cardAdd = createCard({name:formData['card-name'], link:formData['card-link']});
    cardList.addItemEnd(cardAdd);
});

openAddCardPopupButton.addEventListener('click', () => { 
    addPopupWithForm.open();
    cardPopupFormValidation.resetValidation();
});
addPopupWithForm.setEventListeners();


const cardList = new Section({
    renderer: (item) => {
        const cardStart = createCard(item);
        cardList.addItemStart(cardStart);
        }
    }, container
);

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-19',
    token: 'd0d17317-fe5c-4341-9c10-713100a37209'
});

Promise.all([     
    api.getUserData(),
    api.getInitialCards()
  ])
  .then((values)=>{
      const user = values[0];
      const cards = values[1];
      console.log(user); 
      console.log(cards);
      userInfo.setUserInfo(user.name, user.about);
      cardList.renderItems(cards);
  })
  .catch((err)=>{     
        console.log(err);
  })



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