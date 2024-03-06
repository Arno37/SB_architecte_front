async function fetchPhotosFromAPI() {
    try {
        const response = await fetch('http://localhost:5678/api/works/');
        const json = await response.json();
        
        const modalContainer = document.getElementById("previewContainer");

        json.forEach(work => {
            const divPhotoContainer = document.createElement("div");
            divPhotoContainer.className = 'photo-container';
            

            const divPhoto = document.createElement("div");
            divPhoto.className = 'photo'
            

            const trashButton = document.createElement("button");
            trashButton.className = 'trash-button';
            trashButton.id = work.id;
            
            trashButton.addEventListener('click', function() {   
                divPhoto.remove(); 
            });

            const trashImage = document.createElement("img");
            trashImage.className = 'trash';
            trashImage.src = 'assets/icons/trash.svg';
            trashImage.alt = 'supprimer';

            trashButton.appendChild(trashImage);
            divPhoto.appendChild(trashButton);

            const workImage = document.createElement("img");
            workImage.src = work.imageUrl;

            divPhoto.appendChild(workImage);
            divPhotoContainer.appendChild(divPhoto);
            modalContainer.appendChild(divPhotoContainer);
        });
       
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des photos :', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPhotosFromAPI();
});