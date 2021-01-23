(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e=function(){function e(t,n,o,r){var i=r.handleCardClick,a=r.handleLikeClick,u=r.handleDeleteClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._cadrId=t._id,this._ownerId=t.owner._id,this._userId=o,this._handleLikeClick=a,this._handleDeleteClick=u,this._template=document.querySelector(n),this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__photo"),this._handleCardClick=i,this._cardContent=this._element.querySelector(".element__name"),this._buttonDelete=this._element.querySelector(".element__button-delete"),this._buttonLike=this._element.querySelector(".element__button-like"),this._counter=this._element.querySelector(".element__button-like-counter")}var n,o;return n=e,(o=[{key:"_getTemplate",value:function(){return this._template.content.querySelector(".element").cloneNode(!0)}},{key:"createCard",value:function(){return this._cardContent.textContent=this._name,this._cardImage.alt=this._name,this._cardImage.src=this._link,this._setEventListeners(),this.setLikesStart(),this._element}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){return t._handleLikeClick(t._cadrId,t._checkLike())})),this._cardImage.addEventListener("click",(function(){return t._handleCardClick(t._link,t._name)})),this._ownerId===this._userId.id?this._buttonDelete.addEventListener("click",(function(){return t._handleDeleteClick(t._cadrId)})):this._buttonDelete.style.display="none"}},{key:"_checkLike",value:function(){return this._buttonLike.classList.contains("button-like_yes")}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"setLike",value:function(){this._buttonLike.classList.toggle("button-like_yes")}},{key:"setCounter",value:function(t){this._counter.textContent=t.length}},{key:"setLikesStart",value:function(){var t=this;this.setCounter(this._likes),this._likes.some((function(e){return e._id===t._userId.id}))?this._buttonLike.classList.add("button-like_yes"):this._buttonLike.classList.remove("button-like_yes")}}])&&t(n.prototype,o),e}();function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._input=e.inputSelector,this._buttomSave=e.sumbitButtomSelector,this._errorClass=e.inputInvalidClass,this._buttomDisabled=e.buttonInvalidClass,this._submitButton=this._form.querySelector(this._buttomSave),this._inputsList=Array.from(this._form.querySelectorAll(this._input))}var e,o;return e=t,(o=[{key:"_showError",value:function(t){this._form.querySelector("#".concat(t.id,"-error")).textContent=t.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideError",value:function(t){this._form.querySelector("#".concat(t.id,"-error")).textContent="",t.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideError(t):this._showError(t)}},{key:"_setButtonState",value:function(t,e){e?(t.classList.remove(this._buttomDisabled),t.disabled=!1):(t.classList.add(this._buttomDisabled),t.disabled=!0)}},{key:"resetValidation",value:function(){var t=this;this._inputsList.forEach((function(e){t._hideError(e)})),this._setButtonState(this._submitButton,this._form.checkValidity())}},{key:"_setEventListeners",value:function(){var t=this;this._inputsList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._setButtonState(t._submitButton,t._form.checkValidity())}))}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setButtonState(this._submitButton,this._form.checkValidity())}}])&&n(e.prototype,o),t}();function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputName=e,this._inputDescription=n,this._avatarImage=o}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{userInfoName:this._inputName.textContent,userInfoDescription:this._inputDescription.textContent}}},{key:"setUserInfo",value:function(t,e,n){this._inputName.textContent=t,this._inputDescription.textContent=e,this._userId=n}},{key:"setAvatar",value:function(t){this._avatarImage.style.background="url(".concat(t,") center")}},{key:"getUserId",value:function(){return{id:this._userId}}}])&&r(e.prototype,n),t}();function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var u=function(){function t(e,n){var o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=o,this._container=n}var e,n;return e=t,(n=[{key:"addItemStart",value:function(t){this._container.append(t)}},{key:"addItemEnd",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&a(e.prototype,n),t}();function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"_handleEscClose",(function(t){"Escape"==t.key&&n.close()})),s(this,"_handleOverlayClick",(function(t){t.target.classList.contains("popup")&&n.close()})),this._popup=e,this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__button-close").addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("mousedown",this._handleOverlayClick)}}])&&c(e.prototype,n),t}();function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(o);if(r){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return _(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._submitFormHandler=e,n._inputList=Array.from(n._popup.querySelectorAll(".popup__profile-input")),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;h(y(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitFormHandler(t._getInputValues()),t.close()}))}},{key:"close",value:function(){this._form.reset(),h(y(a.prototype),"close",this).call(this)}},{key:"setLoadButton",value:function(){this._popup.querySelector(".popup__button-save").textContent="Сохранение..."}},{key:"returnLoadBotton",value:function(){this._popup.querySelector(".popup__button-save").textContent="Сохранить"}}])&&p(e.prototype,n),a}(l);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function k(t,e,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(o);if(r){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return C(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._image=e._popup.querySelector(".popup__img"),e._signature=e._popup.querySelector(".popup__signature"),e.setEventListeners(),e}return e=a,(n=[{key:"open",value:function(t,e){k(L(a.prototype),"open",this).call(this),this._image.src=t,this._image.title=e,this._image.alt="Фотография: "+e,this._signature.textContent=e}}])&&b(e.prototype,n),a}(l);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function j(t,e,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(o);if(r){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return P(this,t)});function a(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,t)}return e=a,(n=[{key:"setEventListeners",value:function(){var t=this;j(I(a.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__button-save").addEventListener("click",(function(){t._handleSubmitCallback()}))}},{key:"setSubmitAction",value:function(t){this._handleSubmitCallback=t}}])&&E(e.prototype,n),a}(l);function D(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const R=function(){function t(e){var n=e.address,o=e.token;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._address=n,this._token=o}var e,n;return e=t,(n=[{key:"getUserData",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"uploadUserAvatar",value:function(t){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._address,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}},{key:"getCardLike",value:function(t){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: ".concat(t.status))}))}},{key:"remoteCardLike",value:function(t){return fetch("".concat(this._address,"/cards/likes/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}},{key:"setCardLikes",value:function(t){return fetch("".concat(this._address,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}},{key:"editProfile",value:function(t){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t["profile-name"],about:t["profile-profession"]})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}},{key:"createCard",value:function(t){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}))}}])&&D(e.prototype,n),t}();var T=document.querySelector(".profile__edit-button"),B=document.querySelector(".profile__add-button"),x=document.querySelector(".popup_add-card"),V=document.querySelector(".elements"),A=document.querySelector(".popup_edit-profile"),U=document.querySelector(".profile__name"),z=document.querySelector(".profile__subtitle"),N=document.getElementById("profile-name"),H=document.getElementById("profile-profession"),J=document.querySelector(".popup_delete-card"),F=document.querySelector(".popup_image"),M=document.querySelector(".profile__avatar"),G=new i(U,z,M),K=new S(F),Q=new q(J);Q.setEventListeners();var W=new v(document.querySelector(".popup_upload-avatar"),(function(t){W.setLoadButton(),tt.uploadUserAvatar(t["card-link"]).then((function(t){G.setAvatar(t.avatar)})).catch((function(t){console.log(t)})).finally((function(){W.returnLoadBotton(),W.close()}))}));W.setEventListeners(),M.addEventListener("click",(function(){W.open()}));var X=new v(A,(function(t){X.setLoadButton(),tt.editProfile(t).then((function(t){G.setUserInfo(t.name,t.about)})).catch((function(t){console.log(t)})).finally((function(){X.returnLoadBotton(),X.close()}))}));function Y(t){var n=new e(t,".card__template",G.getUserId(),{handleCardClick:function(t,e){K.open(t,e)},handleLikeClick:function(t,e){e?tt.remoteCardLike(t).then((function(t){n.setLike(),n.setCounter(t.likes)})).catch((function(t){console.log(t)})):tt.setCardLikes(t).then((function(t){n.setLike(),n.setCounter(t.likes)})).catch((function(t){console.log(t)}))},handleDeleteClick:function(t){Q.setSubmitAction((function(){tt.deleteCard(t).then((function(){n.deleteCard(),Q.close()})).catch((function(t){console.log(t)}))})),Q.open()}});return n.createCard()}X.setEventListeners(),T.addEventListener("click",(function(){X.open(),nt.resetValidation();var t=G.getUserInfo();N.value=t.userInfoName,H.value=t.userInfoDescription}));var Z=new v(x,(function(t){Z.setLoadButton(),tt.createCard({name:t["card-name"],link:t["card-link"]}).then((function(t){console.log(t);var e=Y(t);$.addItemEnd(e)})).catch((function(t){console.log(t)})).finally((function(){Z.returnLoadBotton()}))}));B.addEventListener("click",(function(){Z.open(),ot.resetValidation()})),Z.setEventListeners();var $=new u({renderer:function(t){var e=Y(t);$.addItemStart(e)}},V),tt=new R({address:"https://mesto.nomoreparties.co/v1/cohort-19",token:"d0d17317-fe5c-4341-9c10-713100a37209"});Promise.all([tt.getUserData(),tt.getInitialCards()]).then((function(t){var e=t[0],n=t[1];G.setUserInfo(e.name,e.about,e._id),G.setAvatar(e.avatar),$.renderItems(n)})).catch((function(t){console.log(t)}));var et={inputSelector:".popup__profile-input",sumbitButtomSelector:".popup__button-save",inputInvalidClass:"popup__profile-input_error",buttonInvalidClass:"popup__button-save_disabled"},nt=new o(et,document.querySelector(".popup__form_edit"));nt.enableValidation();var ot=new o(et,document.querySelector(".popup__form_add"));ot.enableValidation(),new o(et,document.querySelector(".popup__form-avatar")).enableValidation()})();
//# sourceMappingURL=main.js.map