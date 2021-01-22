export class Card {

    constructor(data, template, userId, {handleCardClick, handleLikeClick, handleDeleteClick}) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._cadrId = data._id;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteClick = handleDeleteClick;
        this._template = document.querySelector(template);
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__photo');
        this._handleCardClick = handleCardClick;
        this._cardContent = this._element.querySelector('.element__name');
        this._buttonDelete = this._element.querySelector('.element__button-delete');
        this._buttonLike = this._element.querySelector('.element__button-like');
        this._counter = this._element.querySelector('.element__button-like-counter');
    }
    _getTemplate() {
        return this._template.content.querySelector('.element').cloneNode(true);
    }
    createCard() {
        this._cardContent.textContent = this._name;
        this._cardImage.alt = this._name;
        this._cardImage.src = this._link;
        this._setEventListeners();
        this.setLikesStart();
        return this._element;
    }
    _setEventListeners() {
        
        this._buttonLike.addEventListener('click', () => this._handleLikeClick(this._cadrId, this._checkLike()));
        this._cardImage.addEventListener('click', () => this._handleCardClick(this._link, this._name));
        if (this._ownerId === this._userId.id) {
            this._buttonDelete.addEventListener('click', () => this._handleDeleteClick(this._cadrId));
        } else {
            this._buttonDelete.style.display = 'none';
        }
    }
    _checkLike() {
        return this._buttonLike.classList.contains("button-like_yes")
    }

    deleteCard(){
        this._element.remove()
    }
    setLike() {
        this._buttonLike.classList.toggle('button-like_yes');
    }

    setCounter(arr){
        this._counter.textContent = arr.length;
    }

    setLikesStart() {
        this.setCounter(this._likes);
        if (this._likes.some((element) => element._id === this._userId.id)) {
            this._buttonLike.classList.add('button-like_yes');
        } else {
            this._buttonLike.classList.remove('button-like_yes');
        }
    }
}  