let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');
let popup = document.querySelector('.popup');
let textTitle = document.querySelector('.profile__name');
let textSubtitle = document.querySelector('.profile__subtitle');
let profileName = document.querySelector('.popup__profile-name');
let profileSubtitle = document.querySelector('.popup__profile-subtitile');

function fillProfileInputs() {
    profileName.value = textTitle.textContent;
    profileSubtitle.value = textSubtitle.textContent;
 //   profileName.innerHTML = '<input id="name" type="text" class="popup__profile-name" value="${textTitle.textContent}">';
 //   profileSubtitle.innerHTML = '<input id="subtitile" type="text" value="${textSubtitle.textContent}" class="popup__profile-subtitile">';
    console.log(profileName);
}

function showPopup() {
    popup.classList.add('popup__popup_opened');
    fillProfileInputs ()
}

function hidePopup() {
    popup.classList.remove('popup__popup_opened');
}

editButton.addEventListener('click', showPopup);

closeButton.addEventListener('click', hidePopup);


