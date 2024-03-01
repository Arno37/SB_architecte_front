function deleteProjectFromApi(idWork) {
    console.log(idWork)
try{
    const response = await fetch('http://localhost:5678/api/works/{id}',{
        method: 'DELETE',
        headers: {
            'accept: */*'
        }
    }
    
}

    // Le IdWork va contenir la valeur de l'id du projet à supprimer
    // Faire le fetch sur l'url delete en envoyant l id - regardes le swagger
  

}






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
        
        trashButton.addEventListener('click', function() {    
            // ICI l utilisateur vient de cliquer sur le bouton (pas n importe quelle poubelle celui là précisément
            // Le "this" te donne l'objet correspondant au bouton
            // On a mis dans chaque bouton un id avec la valeur de l'id du Work
            // Il suffit ici d'appeler la fonction delete Projects .... en envoyant l'id depuis ici...

            // je te montre avec le this.id comment récupérer le id du bouton précisément cliqué
            console.log('La poubelle est cliqué pour le projet ', this.id);
        });
            

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

 

document.addEventListener('DOMContentLoaded', () => {
    fetchPhotosFromAPI()
});