const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* Elements */

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelectorAll(
  "#profile-description-input"
);

const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
cardListElement = document.querySelector(".cards__list");

const addNewCardButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#add-card-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const profileModalCloseButton = profileEditModal.querySelector(
  "#modal-close-button"
);
const addCardModalCloseButton = addCardModal.querySelector(
  "#modal-close-button"
);

const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);

const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

/* Functions */

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(
    ".card__description-title"
  );

  //find delete button
  // add the event listener to the delete button
  // cardElement.remove() when the delete button is clicked in event listener

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardTitleElement.textContent = cardData.name;
  cardImageElement.src = cardData.link;
  cardImageElement.alt = `Photo of ${cardData.name}`;
  return cardElement;
}
/* Event Handlers */

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardEditSubmit(evt) {
  evt.preventDefault();
  const titleValue = cardTitleInput.value;
  const urlValue = cardUrlInput.value;

  const cardElement = getCardElement({ name: titleValue, link: urlValue });
  cardListElement.prepend(cardElement);
  closePopup(addCardModal);
}

/* Event Listeners */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileModalCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

// add new card

addCardFormElement.addEventListener("submit", handleAddCardEditSubmit);
addNewCardButton.addEventListener("click", () => openModal(addCardModal));
addCardModalCloseButton.addEventListener("click", () =>
  closePopup(addCardModal)
);
initialCards.forEach(function (cardData) {
  const cardElement = getCardElement(cardData);
  cardListElement.append(cardElement);
});

const likeButtons = document.querySelectorAll(".like-button");
