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

function fillProfileInputs() {
    profileName.value = textTitle.textContent;
    profileSubtitle.value = textSubtitle.textContent;
}


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
    fillProfileInputs ();
}

function hidePopupAdd() {
    popupAdd.classList.remove('popup_opened');
}


// созданение формы
let formElement = document.querySelector('.popup__form');

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


const container = document.querySelector('.elements');

function createCard(data) {
    const cardElement = document.querySelector(".card__template").content.cloneNode(true); //создаем элемент из темплейта
    cardElement.querySelector('.element__name').textContent = data.name; //вставляем данные в карточки беря их из объекта data
    cardElement.querySelector('.element__photo').src = data.link; //вставляем данные в карточки беря их из объекта data
    //навешивание обработчиков
    return cardElement;
}

function addCardToContainer(data) { //data - это элемент массива
    const cardElement = createCard(data); 
    container.append(cardElement);
}

initialCards.forEach(addCardToContainer);  //функция addCard будет вызвана для каждого элемента массива (forEach так и переводится "для каждого")


const button = document.querySelector('.button');

// функция удаления

