function openModal() {
    const modal = document.getElementById('modalContainer');
    modal.style.display = 'flex';
    
}

function closeModal() {
    const modal = document.getElementById('modalContainer'); 
    modal.style.display = 'none';
    
}



document.addEventListener('DOMContentLoaded', () => {
    
    const openModalButton = document.getElementById('openModalButton');
    openModalButton.addEventListener('click', openModal);

    const closeModalButton = document.getElementById('closeModalButton');
    closeModalButton.addEventListener('click', closeModal);
});


