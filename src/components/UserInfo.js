export class UserInfo {
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
        this._inputName.textContent = profileName;
        this._inputDescription.textContent = profileDescription;
    }
}
