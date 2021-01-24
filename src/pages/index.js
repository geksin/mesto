import '../pages/index.css';
// import {initialCards} from '../utils/initial-сards.js';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {UserInfo} from '../components/UserInfo.js';
import {Section} from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupConfirm} from '../components/PopupConfirm.js';
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
 selectorDeletePopup,
 selectorImagePopup,
 selectorImageAvatar,
 profileDescriptionInput} from '../utils/constants.js';
// import { from } from 'webpack-sources/lib/CompatSource';


const userInfo = new UserInfo(userName, userDescription, selectorImageAvatar);

const imagePopup = new PopupWithImage(selectorImagePopup);

const popupConfirm = new PopupConfirm(selectorDeletePopup);
popupConfirm.setEventListeners();


const popupUploadAvatar = new PopupWithForm(document.querySelector('.popup_upload-avatar'), (data) => { 
    popupUploadAvatar.setLoadButton();
    api.uploadUserAvatar(data['card-link'])
    .then((data) => {
        userInfo.setAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupUploadAvatar.returnLoadBotton();
        popupUploadAvatar.close();
      })
});
popupUploadAvatar.setEventListeners();

selectorImageAvatar.addEventListener('click', () => {
    popupUploadAvatar.open();
});


const editPopupWithForm = new PopupWithForm(popupEditUserProfile, (formData) => { 
        editPopupWithForm.setLoadButton();
        api.editProfile(formData)
        .then((data) => {
            userInfo.setUserInfo(data.name, data.about);
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            editPopupWithForm.returnLoadBotton();
            editPopupWithForm.close();
          })
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
    const cardAdd = new Card(item, cardTemplate, userInfo.getUserId(), {
        handleCardClick: (link, name) => {
            imagePopup.open(link, name)
        }, 
        handleLikeClick: (id, isLiked) => {
            if (isLiked) {
                api.remoteCardLike(id)
                .then((res) => {
                    cardAdd.setLike();
                    cardAdd.setCounter(res.likes)
                })
                .catch((err) => {
                    console.log(err)
                })
            } else {
                api.setCardLikes(id)
                .then((res) => {
                    cardAdd.setLike();
                    cardAdd.setCounter(res.likes)
                })
                .catch((err) => {
                    console.log(err)
                })
            }

        }, 
        handleDeleteClick: (id) => {
            popupConfirm.setSubmitAction(()=> {
              api.deleteCard(id)
              .then(() => {
                 cardAdd.deleteCard();
                 popupConfirm.close() 
              })
              .catch((err) => {
                console.log(err)
            })
            });
            popupConfirm.open();
          }
        });
    return cardAdd.createCard()
}



const addPopupWithForm = new PopupWithForm(popupAddCard, (formData) => {
    addPopupWithForm.setLoadButton()
    api.createCard({name:formData['card-name'], link:formData['card-link']})
    .then((res)=>{
        console.log(res);
        const newCard = createCard(res);
        cardList.addItemEnd(newCard);
    })
    .catch((err)=>{     
          console.log(err);
    })
    .finally(() => {
        addPopupWithForm.returnLoadBotton();
        addPopupWithForm.close();
    })

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
      userInfo.setUserInfo(user.name, user.about, user._id);
      userInfo.setAvatar(user.avatar);
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

const avatarPopupFormValidation = new FormValidator(validationConfig, document.querySelector('.popup__form-avatar'));
avatarPopupFormValidation.enableValidation();