let popup = document.querySelector('#popup');
let openEditBtn = document.querySelector('.profile__edit-button');
let closeEditBtn = document.querySelector('.popup__button_close');
let getName = document.querySelector ('.profile__name');
let getJob = document.querySelector ('.profile__job');
let editForm = document.querySelector ('.popup__container');
let nameInput = editForm.querySelector ('.popup__input_name');
let jobInput =  editForm.querySelector ('.popup__input_job');
let likeBtn = document.querySelector('.element__like');

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = getName.textContent;
    jobInput.value = getJob.textContent;
}

function closePopup ()  {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    getName.textContent = `${nameInput.value}`;
    getJob.textContent = `${jobInput.value}`;
    closePopup ();
}

function likeAction () {
    likeBtn.classList.toggle('element__like_active');
}

openEditBtn.addEventListener('click', openPopup);
closeEditBtn.addEventListener ('click', closePopup);
editForm.addEventListener('submit', formSubmitHandler);
likeBtn.addEventListener('click', likeAction);


