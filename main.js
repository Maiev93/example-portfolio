const btnFooter = document.querySelector('.footer__btn')
const modalContacts = document.querySelector('#contact-modal')


btnFooter.addEventListener('click', openModal)

function openModal () {
  modalContacts.classList.add('active')
}

const btnClose = document.querySelector('.modal__close')

btnClose.addEventListener('click', closeModal)

function closeModal () {
  modalContacts.classList.remove('active')
}