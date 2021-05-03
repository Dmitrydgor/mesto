let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_data_user-name');
let jobInput = document.querySelector('.popup__input_data_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
const openNewLocationButton = document.querySelector('.profile__add-button');
const newLocation = document.querySelector('.new-location');
const closeNewLocationButton = newLocation.querySelector('.popup__close');
const galleryList = document.querySelector('.gallery__elements');
const elementTemplate = document.querySelector('.template-element').content;
//массив имена фотографий и ссылок к ним
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
//вставка карточек при загрузке страницы
initialCards.forEach(insertingСards);
//заполняем карточки данными
function insertingСards(el) {
    const galleryElement = elementTemplate.cloneNode(true);
    galleryElement.querySelector('.element__photo').src = el.link;
    galleryElement.querySelector('.element__photo-title').textContent = el.name;
    galleryElement.querySelector('.element__photo').alt = el.name;
    
    galleryList.append(galleryElement);
}
//открываем и закрываем форму редактирования профиля
function togglePopupOpen() {
    popup.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function togglePopupClose() {
    popup.classList.toggle('popup_opened');
}
//сохранение с закрытием формы редактирования профиля
function formSubmitHandler(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopupClose();
}
//открываем и закрываем форму добавления фотографий
function newLocationOpen() {
    newLocation.classList.toggle('popup_opened');
}

function newLocationClose() {
    newLocation.classList.toggle('popup_opened');
}
//слушаем кнопки
openPopupButton.addEventListener('click', togglePopupOpen);
closePopupButton.addEventListener('click', togglePopupClose);
formElement.addEventListener('submit', formSubmitHandler);
openNewLocationButton.addEventListener('click', newLocationOpen);
closeNewLocationButton.addEventListener('click', newLocationClose);