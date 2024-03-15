async function deleteItemFromApi (idPhoto) {
    const userToken = localStorage.getItem('token');
    //récupération d'un token fourni par l'API web storage restant disponible après fermeture du navigateur
    const response = await fetch(`http://localhost:5678/api/works/${idPhoto}`,{
           method: 'DELETE',
           // envoi  d'une requête DELETE à l'API avec l'ID de la photo à supprimer 
           headers: {
               'Authorization': `Bearer ${userToken}`,
               //variable contenant le jeton d'authentification de l'utilisateur stocké localement dans le navigateur
               //Bearer indique au serveur qu'il s'agit d'un jeton d'accès au format JWT (JSON Web Token).
               'Content-Type': 'application/json'
               //indique au serveur que les données envoyées dans le corps de la requête seront au format JSON (JavaScript Object Notation)
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
        //extraction des données JSON en un objet JavaScript exploitable
        
        
        const modalContainer = document.getElementById("previewContainer");
       

        json.forEach(work => {
            // la variable json parcourt chaque élément JSON dans le tableau
            // pour chaque élément work du tableau JSON, le code crée un nouvel élément HTML (div)
            const divPhotoContainer = document.createElement("div");
            divPhotoContainer.className = 'photo-container';
            

            const divPhoto = document.createElement("div");
            divPhoto.className = 'photo'
            

            const trashButton = document.createElement("button");
            trashButton.className = 'trash-button';
            trashButton.id = work.id;
            //La valeur de l'attribut id est définie sur work.id, et représente une œuvre ou un élément récupéré de l'API
            // attribution d'une valeur à l'attribut id de l'élément <button>. 
            
            
            trashButton.addEventListener('click', async function() { 
                // ajout d'un écouteur d'événements de clic à l'élément trashButton 
                // Cela signifie que lorsque l'utilisateur clique sur ce bouton, la fonction 'anonyme' sera exécutée
                await deleteItemFromApi(this.id)
                //fonction asynchrone qui supprime un élément de l'API en utilisant l'ID fourni
                
                divPhoto.remove(); 
                //suppression de l'élément de la liste des photos affichées sur la page en temps réel
            });

            const trashImage = document.createElement("img");
            //création un nouvel élément <img> dans le document.
            trashImage.className = 'trash';
            //attribution d'une classe CSS
            trashImage.src = 'assets/icons/trash.svg';
            //définit l'URL source de l'image de trash
            trashImage.alt = 'supprimer';
            // texte affiché si l'image ne peut pas être chargée

            trashButton.appendChild(trashImage);
            //ajout de l'image 'trash''à l'intérieur du bouton de suppression
            divPhoto.appendChild(trashButton);
            //ajout du bouton de suppression à l'intérieur de la div de la photo

            const workImage = document.createElement("img");
            //crée un nouvel élément <img> pour afficher l'image de l'œuvre
            workImage.src = work.imageUrl;
            // définit l'URL source récupérée à partir des données de l'API (work.imageUrl)

            divPhoto.appendChild(workImage);
            // ajout de l'image de l'œuvre à l'intérieur de la div de la photo.Cela affiche visuellement l'image de l'œuvre à côté du bouton de suppression dans chaque conteneur de photo.
            divPhotoContainer.appendChild(divPhoto);
            // ajout du conteneur de photos avec l'image et le bouton de suppression à l'intérieur du conteneur
            modalContainer.appendChild(divPhotoContainer);
            // ajout du conteneur de photos avec toutes les images et les 'trash" de suppression à l'intérieur, au conteneur modal.
        });
       
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des photos :', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPhotosFromAPI();
});//une fois la page chargée,l'écouteur d'événements déclenche la fonction fetchPhotosFromAPI, qui est récupère les photos à partir de l'API et les affichent dans le navigateur