const editButtonElem = document.querySelector('.profile__edit-button');
const popupElem = document.querySelector('.popup');
const popupCloseElem = document.querySelector('.popup__close');

const onOpen = (popup) => {
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
  
  let nameInput = document.querySelector("input[name='name-input']").value;
  let jobInput = document.querySelector("input[name='job-input']").value;

  const titleElem = document.querySelector('.profile__title');
  const subtitleElem = document.querySelector('.profile__subtitle');

  titleElem.textContent = 'nameInput';
  subtitleElem.textContent = 'jobInput';

}
popupElem.addEventListener('submit', formSubmitHandler);


