export class UserInfo {
    constructor(inputName, inputDescription, avatarImage) {
        this._inputName = inputName;
        this._inputDescription = inputDescription;
        this._avatarImage = avatarImage;
    }
    getUserInfo() {
        return {
            userInfoName: this._inputName.textContent,
            userInfoDescription: this._inputDescription.textContent
        }
    }
    setUserInfo(profileName, profileDescription, userId) {
        this._inputName.textContent = profileName;
        this._inputDescription.textContent = profileDescription;
        this._userId = userId;
    }
    setAvatar(avatar) {
        this._avatarImage.src = avatar;
    }

    getUserId() {
        return {
            id: this._userId
        }
    }
}