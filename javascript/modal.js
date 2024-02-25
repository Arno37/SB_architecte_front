const button = document.getElementById('button');


button.addEventListener('click', function() {
    
    console.log('Le bouton a été cliqué !');
   
    openModal();
});

function openModal() {
    
    const modal = document.getElementById('openModalButton');
    modal.style.display = 'block';
    

}

function closeModal() {
    const modal = document.getElementById('closeModalButton'); 
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('openModalButton');
    openModalButton.addEventListener('click', openModal);

    const closeModalButton = document.getElementById('closeModalButton');
    closeModalButton.addEventListener('click', closeModal);
});

