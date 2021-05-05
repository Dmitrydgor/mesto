const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close'); 
const editForm = document.querySelector('.edit-profile__form');
const newLocationForm = document.querySelector('.new-location__form');
const nameInput = document.querySelector('.popup__input_data_user-name');
const jobInput = document.querySelector('.popup__input_data_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const openNewLocationButton = document.querySelector('.profile__add-button');
const newLocation = document.querySelector('.new-location');
const closeNewLocationButton = newLocation.querySelector('.popup__close');
const galleryList = document.querySelector('.gallery__elements');
const elementTemplate = document.querySelector('.template-element').content;
const locationName = document.querySelector('.popup__input_data_location-name');
const locationLink = document.querySelector('.popup__input_data_link');
const viewPhoto = document.querySelector('.popup-photo');
const closePhotoButton = viewPhoto.querySelector('.popup__close');
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
  const elementLike = galleryElement.querySelector('.element__like');
  elementLike.addEventListener('click', () => elementLike.classList.toggle('element__like_active'));
  const trashElement = galleryElement.querySelector('.element__trash');
  trashElement.addEventListener('click', deleteElement);
  const openPhotoButton = galleryElement.querySelector('.element__photo');
  function viewPhotoOpen() {
    viewPhoto.classList.add('popup_opened');
    viewPhoto.querySelector('.popup__photo').src = el.link;
    viewPhoto.querySelector('.popup-photo__title').textContent = el.name;
    viewPhoto.querySelector('.popup__photo').alt = el.name;
  }
  openPhotoButton.addEventListener('click', viewPhotoOpen);
  closePhotoButton.addEventListener('click', viewPhotoClose);
  galleryList.append(galleryElement);
}
//открываем и закрываем фото
function viewPhotoClose() {
  viewPhoto.classList.remove('popup_opened');
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
function profileFormSubmitHandler(event) {
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
//сохранение с закрытием формы добавления фото
function newLocationFormSubmitHandler(event) {
  event.preventDefault();
  const newGalleryElement = elementTemplate.cloneNode(true);
  newGalleryElement.querySelector('.element__photo').src = locationLink.value;
  newGalleryElement.querySelector('.element__photo-title').textContent = locationName.value;
  newGalleryElement.querySelector('.element__photo').alt = locationName.value;
  galleryList.append(newGalleryElement);
  event.target.reset();
  newLocationClose();
}
//ставим лайк
function likeElement() {
  elementLike.target.classList.toggle('element__like_active');
  console.log(likeElement);
}
//удаление карточки
function deleteElement(e) {
  e.target.closest('.element').remove();
}
//слушаем кнопки
openPopupButton.addEventListener('click', togglePopupOpen);
closePopupButton.addEventListener('click', togglePopupClose);
editForm.addEventListener('submit', profileFormSubmitHandler);
openNewLocationButton.addEventListener('click', newLocationOpen);
closeNewLocationButton.addEventListener('click', newLocationClose);
newLocationForm.addEventListener('submit', newLocationFormSubmitHandler);
