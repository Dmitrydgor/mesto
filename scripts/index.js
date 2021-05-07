const openProfileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeProfileEditButton = document.querySelector('.popup__close');
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
const initialCards = [{
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
//заполняем карточки данными
function createCard(el) {
    const galleryElement = elementTemplate.cloneNode(true);
    galleryElement.querySelector('.element__photo').src = el.link;
    galleryElement.querySelector('.element__photo-title').textContent = el.name;
    galleryElement.querySelector('.element__photo').alt = el.name;

    const elementLike = galleryElement.querySelector('.element__like');
    elementLike.addEventListener('click', () => elementLike.classList.toggle('element__like_active'));

    const trashElement = galleryElement.querySelector('.element__trash');
    trashElement.addEventListener('click', deleteElement);

    const openPhotoButton = galleryElement.querySelector('.element__photo');
    openPhotoButton.addEventListener('click', function viewPhotoOpen() {
        viewPhoto.querySelector('.popup__photo-img').src = el.link;
        viewPhoto.querySelector('.popup__caption').textContent = el.name;
        viewPhoto.querySelector('.popup__photo-img').alt = el.name;
        togglePopup(viewPhoto);
    });
    return galleryElement;
}
closePhotoButton.addEventListener('click', () => togglePopup(viewPhoto));
//вставка карточек при загрузке страницы
initialCards.forEach(function(currentItem) {
    const newCard = createCard(currentItem);
    galleryList.append(newCard);
});

function togglePopup(popup) {
    popup.classList.toggle('popup_opened');
}
//сохраняет и закрывает форму редактирования профиля
function profileFormSubmitHandler(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup(popup);
}
//сохраняет и закрывает форму добавления фото
function newLocationFormSubmitHandler(event) {
    event.preventDefault();
    const newCard = {
        name: locationName.value,
        link: locationLink.value
    };
    const card = createCard(newCard);

    galleryList.prepend(card);
    event.target.reset();
    togglePopup(newLocation);
}
//удаление карточки
function deleteElement(e) {
    e.target.closest('.element').remove();
}
//открывает форму редактирования профиля и заполняет из html
openProfileEditButton.addEventListener('click', function copyProfile() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    togglePopup(popup);
});
//закрывает форму редактирования профиля
closeProfileEditButton.addEventListener('click', () => togglePopup(popup));
//сохраняет форму редактирования профиля
editForm.addEventListener('submit', profileFormSubmitHandler);
//открывает форму добавления места
openNewLocationButton.addEventListener('click', () => togglePopup(newLocation));
//закрывает форму добавления места
closeNewLocationButton.addEventListener('click', () => togglePopup(newLocation));
//сохраняет форму добавления места
newLocationForm.addEventListener('submit', newLocationFormSubmitHandler);