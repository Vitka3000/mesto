const editButtonElem = document.querySelector('.profile__edit-button');
const popupElem = document.querySelector('.popup');
const popupCloseElem = document.querySelector('.popup__close');


const nameInput = document.querySelector('.block__element');
const jobInput = document.querySelector('.block__element_key_value');
const titleElem = document.querySelector('.profile__title');
const subtitleElem = document.querySelector('.profile__subtitle');


const onOpen = (popup) => {
  nameInput.value = titleElem.textContent;
  jobInput.value = subtitleElem.textContent;
  popup.classList.add('popup_opened');
}

const onClose = (popup) => {
  popup.classList.remove('popup_opened');
}

editButtonElem.addEventListener('click', () => {
  onOpen(popupElem);
});

popupCloseElem.addEventListener('click', () => {
  onClose(popupElem);
});


function formSubmitHandler(evt) {
  evt.preventDefault();  
  titleElem.textContent = titleElem.value;
  subtitleElem.textContent = subtitleElem.value;
}
popupElem.addEventListener('submit', formSubmitHandler);


