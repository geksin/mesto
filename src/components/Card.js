export class Card {

    constructor(data, template, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._template = document.querySelector(template);
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__photo');
        this._handleCardClick = handleCardClick;
        this._cardContent = this._element.querySelector('.element__name');
        this._buttonDelete = this._element.querySelector('.element__button-delete');
        this._buttonLike = this._element.querySelector('.element__button-like');
    }
    _getTemplate() {
        return this._template.content.querySelector('.element').cloneNode(true);
    }
    createCard() {
        this._cardContent.textContent = this._name;
        this._cardImage.alt = this._name;
        this._cardImage.src = this._link;
        this._setEventListeners();
        return this._element;
    }
    _setEventListeners() {
        this._buttonDelete.addEventListener('click', () => this._deleteCard());
        this._buttonLike.addEventListener('click', this._like);
        this._cardImage.addEventListener('click', () => this._handleCardClick(this._link, this._name));
    }
    _like = (evt) => {
        evt.target.classList.toggle('button-like_yes');
    }

    _deleteCard(){
        this._element.remove()
    }
}  