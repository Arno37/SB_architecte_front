function openModal() {
    const modal = document.getElementById('modalContainer');
    modal.style.display = 'flex';

}

function closeModal() {
    const modal = document.getElementById('modalContainer'); 
    modal.style.display = 'none';
}

const openModalButton = document.getElementById('openModalButton');
openModalButton.addEventListener('click', function() {
    
    console.log('Le bouton a été cliqué !');
});


document.addEventListener('DOMContentLoaded', () => {
    
    const openModalButton = document.getElementById('openModalButton');
    openModalButton.addEventListener('click', openModal);

    const closeModalButton = document.getElementById('closeModalButton');
    closeModalButton.addEventListener('click', closeModal);
});


