
async function fetchPhotosFromAPI() {
try{
    const response =  await fetch('http://localhost:5678/api/works/');
    
    const dataWorks = await response.json();
    const modalPreviewContainer = document.getElementById("previewContainer");
    

    dataWorks.forEach(work => {
        const divPhotoContainer = document.createElement("div");
        divPhotoContainer.className='photo-container'
        
        

        const divPhoto = document.createElement("div");
        divPhoto.className='photo'
        

        const trashButton = document.createElement("button");
        trashButton.className='trash-button'
        trashButton.id=work.id
        
       

        const trashImage =  document.createElement("img");
        trashImage.className='trash';
        trashImage.src = 'assets/icons/trash.svg';
        trashImage.alt = 'supprimer'
        
        

        const workImage = document.createElement("img");
        workImage.src = work.imageUrl; 
 
        trashButton.appendChild(trashImage)

        divPhoto.appendChild(trashButton);
        divPhoto.appendChild(workImage);

        divPhotoContainer.appendChild(divPhoto);
        
        modalPreviewContainer.appendChild(divPhotoContainer)
    });

    }
    catch(e) {
        console.error('Une erreur s\'est produite lors de la récupération des photos :', error);
    }
}


function deleteprojects() {
    const projects = document.getElementById('photocontainer')

}

const deletebutton = document.getElementById('trash_button')
deletebutton.addEventListener('click', function() {
    
    console.log('Le bouton a été cliqué !');
});


document.addEventListener('DOMContentLoaded', () => {
    
    const deletetrash = document.getElementById('trash_picture');
    deletetrash.addEventListener('click', deleteproject);

});