let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');

function togglePopup() {
    popup.classList.toggle('popup_opened');
}

openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);

let formElement = document.querySelector('.input');
let nameInput = document.querySelector('.input__name');
let jobInput = document.querySelector('.input__job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

function formSubmitHandler(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup();
}
formElement.addEventListener('submit', formSubmitHandler);