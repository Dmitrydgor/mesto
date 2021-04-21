let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_data_user-name');
let jobInput = document.querySelector('.popup__input_data_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function togglePopupOpen() {
    popup.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function togglePopupClose() {
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopupClose();
}

openPopupButton.addEventListener('click', togglePopupOpen);
closePopupButton.addEventListener('click', togglePopupClose);
formElement.addEventListener('submit', formSubmitHandler);