import {initialCards} from './initial-сards.js'
import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'

console.log(initialCards);

const openEditProfilePopupButton = document.querySelector('.profile__edit-button');
const openAddCardPopupButton = document.querySelector('.profile__add-button');
const closeEditProfilePopupButton = document.querySelector('.popup__button-close');
const closeAddCardPopupButton = document.getElementById('popup-close-card');

const popupAddCard = document.querySelector('.popup_add-card');


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
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
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
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__profile-input'));
    }

    _getInputValues(){
        this._formValues = {};
        this._inputList.forEach(input => { // обхожу все инпуты и присваиваю им значения 
            this._formValues[input.name] = input.value;
          });
        return this._formValues;

    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFormHandler(_getInputValues()); //вот тут не уверен
            this.close()
        })
    }
    close(){
        super.close();
        this._form.reset(); //ругается почему-то? 
    }

}

class UserInfo {
    constructor(inputName, inputDescription) {
        this._inputName = inputName;
        this._inputDescription = inputDescription;
    }
    getUserInfo() {
        return {
            userInfoName: this._inputName.textContent,
            userInfoDescription: this._inputDescription.textContent
        }
    }
    setUserInfo(profileName, profileDescription) {
        profileName.value = this._inputName.textContent;
        profileDescription.value = this._inputDescription.textContent;
    }
}

const popupEditUserProfile = document.querySelector('.popup_edit-profile');
const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__subtitle');
const profileNameInput = document.getElementById('profile-name');
const profileDescriptionInput = document.getElementById('profile-profession');

const editPopupWithForm = new PopupWithForm(popupEditUserProfile, () => { //создаю новый попап
    const userInfo = new UserInfo(userName, userDescription); //передал селекторы
        const userData = userInfo.getUserInfo();  // получил значения 
        profileNameInput = userData.userInfoName;  // переписал в инпуты
        profileDescriptionInput = userData.userInfoDescription;
        userInfo.setUserInfo(profileNameInput, profileDescriptionInput); // вроде бы вернул значения в инпут, кажется это нужно сделать при закрытии попапа
});

editPopupWithForm.setEventListeners(); 

openEditProfilePopupButton.addEventListener('click', () => editPopupWithForm.open()); //по клику вызываю открытие попапа 

openAddCardPopupButton.addEventListener('click', () => addPopupWithForm.open());

const addPopupWithForm = new PopupWithForm(popupAddCard, () => {});
addPopupWithForm.setEventListeners(); 



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
    addItemStart(element) {
        this._container.append(element);
    }
    addItem(element) {
        this._container.prepend(element);
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
        cardList.addItemStart(cardElement);
        }
    }, container
    );
cardList.renderItems();


// function addCardToContainerStart (evt) {
//     evt.preventDefault();
    const cardData = {
        name: inputCardName.value,
        link: inputCardLink.value
     }
//     container.prepend(createNewCard(cardData));
//     hidePopup (popupAddCard);
// }

const addNewCard = new Section({
    items:  cardData,
    renderer: (item) => {
        const cardAdd = new Card(item, cardTemplate) //openPopupWithImage);
        const cardElement = cardAdd.createCard();
        addNewCard.addItem(cardElement);
        }
    }, container
    );  
// addNewCard.renderItems();

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




