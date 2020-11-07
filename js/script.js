let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');
let popup = document.querySelector('.popup');
let textTitle = document.querySelector('.profile__name');
let textSubtitle = document.querySelector('.profile__subtitle');
let profileName = document.getElementById('profile-name');
let profileSubtitle = document.getElementById('profile-profession');

function fillProfileInputs() {
    profileName.value = textTitle.textContent;
    profileSubtitle.value = textSubtitle.textContent;
}

function showPopup() {
    popup.classList.add('popup_opened');
    fillProfileInputs ();
}

function hidePopup() {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', showPopup);

closeButton.addEventListener('click', hidePopup);


// созданение формы
let formElement = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

     textTitle.textContent = profileName.value;
     textSubtitle.textContent = profileSubtitle.value;
     hidePopup ();
}

formElement.addEventListener('submit', formSubmitHandler);
