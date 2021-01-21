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


const userInfo = new UserInfo(userName, userDescription, document.querySelector('.profile__avatar'));

const imagePopup = new PopupWithImage(document.querySelector('.popup_image'));



const editPopupWithForm = new PopupWithForm(popupEditUserProfile, (formData) => { 
        api.editProfile(formData);
        userInfo.setUserInfo(formData['profile-name'], formData['profile-profession']); 
    });

editPopupWithForm.setEventListeners();

openEditProfilePopupButton.addEventListener('click', () => {
        editPopupWithForm.open();
        profilePopupFormValidation.resetValidation();
        const userData = userInfo.getUserInfo();
        // userInfo.setUserInfo(serData.userInfoName, userData.userInfoDescription);
        profileNameInput.value = userData.userInfoName;
        profileDescriptionInput.value = userData.userInfoDescription;
});

// create card

// function createCard(item) {
//     const cardAdd = new Card(item, cardTemplate, handleCardClick);
//     return cardAdd.createCard()
// }


function createCard(item) {
    const cardAdd = new Card(item, cardTemplate, userInfo.getUserId(), {
        handleCardClick: (link, name) => {
            imagePopup.open(link, name)
        }, 
        handleLikeClick: (id, isLiked) => {
            if (isLiked) {
                api.remoteCardLike(id)
                .then((res) => {
                    console.log(res);
                    cardAdd.setLike()
                })
                .catch((err) => {
                    console.log(err)
                })
            } else {
                api.setCardLikes(id)
                .then((res) => {
                    console.log(res);
                    cardAdd.setLike()
                })
                .catch((err) => {
                    console.log(err)
                })
            }

        }, 
        handleDeleteClick: (id) => {
            api.deleteCard(id);
            cardAdd.deleteCard();
        }
    });
    return cardAdd.createCard()
}


// колбеки для Card


const handleLikeClick = (id, isLiked) => {

}

// const handleDeleteClick = (id) => {
//     api.deleteCard(id);
//     cardAdd.deleteCard();
// }

// конец колбеков


const addPopupWithForm = new PopupWithForm(popupAddCard, (formData) => {

    api.createCard({name:formData['card-name'], link:formData['card-link']})
    .then((res)=>{
        console.log(res);
        const newCard = createCard(res);
        cardList.addItemEnd(newCard);
    //    console.log(userInfo.getUserId());
    })
    .catch((err)=>{     
          console.log(err);
    })
    // const cardAdd = createCard({name:formData['card-name'], link:formData['card-link']});

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
    //   console.log(user); 
      console.log(user._id);
      userInfo.setUserInfo(user.name, user.about, user._id);
      userInfo.setAvatar(user.avatar);
      cardList.renderItems(cards);
  //    console.log(userInfo.getUserId());
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