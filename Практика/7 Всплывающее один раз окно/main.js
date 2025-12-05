const modal = document.querySelector('.modal');
const closeModal = modal.querySelector('.modal__close');

closeModal.onclick = function () {
    modal.classList.remove('modal_active');
    document.cookie = 'closedModal=modalIsClosed';
}

if (!document.cookie.includes('closedModal=modalIsClosed')) {
    modal.classList.add('modal_active');
}