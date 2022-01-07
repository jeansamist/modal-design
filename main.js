const modalContainer = document.querySelector(".modals");
const modalBg = document.querySelector(".modals-bg");
/**
 *
 * @param { String } modalSelector
 */
const openModal = (modalSelector) => {
  const modal = document.getElementById(modalSelector);
  if (!modal.classList.contains("active")) {
    modalContainer.classList.add("active");
    modalBg.classList.add("active");
    modal.classList.add("active");
  }
};

/**
 *
 * @param { String } modalSelector
 */
const closeModal = (modalSelector) => {
  const modal = document.getElementById(modalSelector);
  if (modal.classList.contains("active")) {
    modalContainer.classList.remove("active");
    modalBg.classList.remove("active");
    modal.classList.remove("active");
  }
};

document.querySelectorAll("#modalBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal(btn.dataset.modal);
  });
});

document.querySelectorAll("#modalBtnClose").forEach((btn) => {
  btn.addEventListener("click", () => {
    closeModal(btn.dataset.modal);
  });
});
