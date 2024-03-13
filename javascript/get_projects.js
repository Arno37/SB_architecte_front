async function deleteItemFromApi (idPhoto) {
    const userToken = localStorage.getItem('token');
    
    const response = await fetch(`http://localhost:5678/api/works/${idPhoto}`,{
           method: 'DELETE',
           // envoi  d'une requête DELETE à l'API avec l'ID de la photo à supprimer et le token d'authentification de l'utilisateur.
           headers: {
               'Authorization': `Bearer ${userToken}`,
               //variable contenant le jeton d'authentification de l'utilisateur stocké localement dans le navigateur
               //Bearer indique au serveur qu'il s'agit d'un jeton d'accès au format JWT (JSON Web Token).
               'Content-Type': 'application/json'
               // indique au serveur que les données envoyées dans le corps de la requête seront au format JSON (JavaScript Object Notation)
           }
       });
       
       if (response.ok) {// vérification de la requête de connexion: statut HTTP 2OO OK)
         console.log('image supprimee')
       } else {
         console.log('un probleme est survenu lors de la suppression')
       }
}
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
            
            trashButton.addEventListener('click', async function() {  
                
                await deleteItemFromApi(this.id)
                
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