const button = document.getElementById('button');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');
const galleryTitle = document.getElementById('galleryTitle');

button.addEventListener('click', function() {
    console.log('Le bouton a été cliqué !');
    openModal();
});

closeModalButton.addEventListener('click', function() {
    closeModal();
});

function openModal() {
    modal.style.display = 'block';
    galleryTitle.style.display = 'block'; 
}

function closeModal() {
    modal.style.display = 'none';
    galleryTitle.style.display = 'none'; 
}