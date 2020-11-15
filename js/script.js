let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let closeButton = document.querySelector('.popup__button-close');
let closeButtonAddCard = document.getElementById('popup-close-card');
let popup = document.querySelector('.popup');
let popupAdd = document.getElementById('popup-add-card');
let textTitle = document.querySelector('.profile__name');
let textSubtitle = document.querySelector('.profile__subtitle');
let profileName = document.getElementById('profile-name');
let profileSubtitle = document.getElementById('profile-profession');
const addCardName = document.getElementById('card-name');
const addCardLink = document.getElementById('card-link');



// Попап редактирования
function showPopup() {
    popup.classList.add('popup_opened');
    fillProfileInputs ();
}

function hidePopup() {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', hidePopup);

// Попап добавления

addButton.addEventListener('click', showPopupAdd);
closeButtonAddCard.addEventListener('click', hidePopupAdd);

function showPopupAdd() {
    popupAdd.classList.add('popup_opened');
    addCardName.value = '';
    addCardLink.value = '';
}

function hidePopupAdd() {
    popupAdd.classList.remove('popup_opened');
}

// попап картинки 
const popupImage = document.querySelector('.popup_image');

function showPopupImage() {
    popupImage.classList.add('popup_opened');
}

function hidePopupImage() {
    popupImage.classList.remove('popup_opened');
}
popupImage.querySelector('.popup__button-close').addEventListener('click',hidePopupImage);


// созданение формы

function fillProfileInputs() {
    profileName.value = textTitle.textContent;
    profileSubtitle.value = textSubtitle.textContent;
}

const formElement = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

     textTitle.textContent = profileName.value;
     textSubtitle.textContent = profileSubtitle.value;
     hidePopup ();
}

formElement.addEventListener('submit', formSubmitHandler);


// loading 6 card 
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// функция добавления 6 карточек
const container = document.querySelector('.elements');

function createCard(data) {
    const cardElement = document.querySelector(".card__template").content.cloneNode(true);
    cardElement.querySelector('.element__name').textContent = data.name;
    cardElement.querySelector('.element__photo').src = data.link;
    cardElement.querySelector('.element__button-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle("button-like_yes");
    });
    cardElement.querySelector('.element__button-delete').addEventListener('click', function (evt) {
        evt.target.parentElement.remove(); // функция удаления
    });
    cardElement.querySelector('.element__photo').addEventListener('click', () => openImagePopup (data.link, data.name));
    return cardElement;
}

// Открытие попапа с картинкой
function openImagePopup (link,text) {
    const popupImage = document.querySelector('.popup_image');
    popupImage.querySelector('.popup__img').src = link;
    popupImage.querySelector('.popup__img').title = text;
    popupImage.querySelector('.popup__signature').textContent = text;
    popupImage.classList.add('popup_opened');
}

// закрытие попапа с картинкой

function closeImagePopup () {
    popupImage.classList.remote('popup_opened');
}

function addCardToContainer(data) {
    const cardElement = createCard(data); 
    container.append(cardElement);
}

initialCards.forEach(addCardToContainer); 

// функция добавления карточки

function addCard (evt) {

    evt.preventDefault(); 
    const cardElement = document.querySelector('.card__template').content.cloneNode(true); 
    const cardName = cardElement.querySelector('.element__name').textContent = addCardName.value;
    const cardLink = cardElement.querySelector('.element__photo').src = addCardLink.value;
    // функция лайка
    cardElement.querySelector('.element__button-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle("button-like_yes");
    });
    // функция удаления
    cardElement.querySelector('.element__button-delete').addEventListener('click', function (evt) {
        evt.target.parentElement.remove();
    });
    // попап при нажатии 
    cardElement.querySelector('.element__photo').addEventListener('click', (evt) => openImagePopup (cardLink, cardName));

    container.prepend(cardElement);
    hidePopupAdd ();
}

popupAdd.addEventListener('submit', addCard);







