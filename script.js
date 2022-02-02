const buttons = document.querySelectorAll('.details-btn');
const modalOuter = document.querySelector('.modal-outer');
const closeModalButton = document.querySelector('.close-modal');
const modalInner = document.querySelector('.modal-inner');

// buttons.forEach( button =>
// button.addEventListener('click', () => {
//     modalOuter.classList.add('open');
// }));

function openModal(event) {
    const card = event.target.closest('.card');
    const cardImage = card.querySelector('img');
    const desc = card.dataset.description;
    const modalImage = modalInner.querySelector('img');
    modalImage.src = cardImage.src.replace('200','400');
    const modalDetails= modalInner.querySelector('.details');
    modalDetails.innerHTML = desc;
    modalOuter.classList.add('open');
}

function closeModal(){
    modalOuter.classList.remove('open');
}

function closeModalFromOverlay(event){
    const isClickExactlyOnOuter = !event.target.closest('.modal-inner');
    if(isClickExactlyOnOuter) modalOuter.classList.remove('open');
}
function closeModalByEsc(event){
    if(event.key === "Escape") {
        closeModal();
    }
}
buttons.forEach( button => button.addEventListener('click', openModal));

modalOuter.addEventListener('click', closeModalFromOverlay);
closeModalButton.addEventListener('click', closeModal);
window.addEventListener('keydown', closeModal);