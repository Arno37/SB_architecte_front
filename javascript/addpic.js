
async function postNewPicture(imageValue, titleValue, categoryId) {
    //fonction asynchrone nommée postNewPicture qui prend 3 paramètres : imageValue, titleValue, categoryId
    try { //bloc Try/Catch est utilisée pour gérer les erreurs potentielles//
         const response = await fetch('http://localhost:5678/api/works/', {
            //Utilisation de l'API Fetch pour envoyer une requête POST à l'URL spécifiée (http://localhost:5678/api/works/)
             method: 'POST',
             //demande au serveur de créer une nouvelle demande/ressource
             headers: {
                //en-tête de la requête 
                 'Content-Type': 'application/json'
                 // le contenu de la requête est au format JSON.
             },
             body: JSON.stringify({
                 //Convertit les données passées en JSON à l'aide de JSON.stringify et les fournit en tant que corps de la requête
                 image: imageValue,
                 title: titleValue,
                 category: categoryId
                //Les données envoyées sont l'image, le titre et la catégorie de la nouvelle image.
             })
         });

         if (response.ok) {
            // Bloc IF/ELSE Vérifie si la réponse du serveur indique que la requête a réussi (statut de réponse dans la plage 200-299)
             const data = await response.json(); 
             // extraction des données JSON de la réponse de la requête HTTP.
             const token = data.token; 
             //le token d'authentification est extrait de la réponse JSON//
             localStorage.setItem('token', token);
             // Stocke le token retourné par le serveur dans le stockage local du navigateur, ce qui permet de le récupérer et de l'utiliser ultérieurement pour authentifier les requêtes. 
             window.location.href = "editor.html"; 
             //puis redirection vers la page "editor.html" //
         } 
         else {
             alert('La combinaison email/mot de passe est incorrecte. Veuillez réessayer.');
         }
 
     } catch (error) {
         console.error('Erreur lors de la connexion:', error);
     }
 }




function upload() {
    const modalContent = document.getElementById('modal-main-content');
    
    modalContent.innerHTML = "";


    /* Add back button */
    const backButton = document.createElement('button');
    backButton.id = 'backButton'
    backButton.addEventListener('click', function() {
        console.log(backButton)
        window.location.href = 'editor.html';
    });

    const backImage = document.createElement('img');
    backImage.src='./assets/icons/arrow-left.svg';
    backImage.alt='retour'
    backImage.classList.add("arrow-img")

    backButton.appendChild(backImage)
    modalContent.appendChild(backButton)


   /* Add Title */
    const newTitle = document.createElement('h3');
    newTitle.textContent = "Ajout photo";
    modalContent.appendChild(newTitle);



    const containerNewPicture =document.createElement('div');
    containerNewPicture.id = "container-new-pic";

    const picturePlaceholder = document.createElement('img');
    picturePlaceholder.src = "./assets/icons/placeholder.svg";
    picturePlaceholder.alt = "ajouter une photo";
    picturePlaceholder.classList.add("picture-placeholder");


    const addPicButton = document.createElement('button');
    addPicButton.textContent = "+ Ajouter une photo";
    addPicButton.classList.add("add-picture");

    /* Action upload de fichier 
    <input type="file" id="fileInput" style="display: none;">
    addPicButton.addEventListener('click', function() {
        console.log(addPicButton, 'ok')
        addPicButton.addEventListener('click', function() {

            fileInput.click();
        });
       
    });*/

    const addTextUploadMax = document.createElement('p');
    addTextUploadMax.textContent = "jpg, png : 4mo max";
    addTextUploadMax.classList.add("format");

    containerNewPicture.appendChild(picturePlaceholder);
    containerNewPicture.appendChild(addPicButton);
    containerNewPicture.appendChild(addTextUploadMax);


    modalContent.appendChild(containerNewPicture)





    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title-input');
    titleLabel.textContent = 'Titre';

    const categoryLabel = document.createElement('label');
    categoryLabel.setAttribute('for', 'category-input');
    categoryLabel.textContent = 'Catégorie';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.className = 'rectangle';
    titleInput.id = 'title';
    titleInput.name = 'title-input';

    const categoryInput = document.createElement('input');
    categoryInput.type = 'text';
    categoryInput.className = 'rectangle';
    categoryInput.id = 'category';
    categoryInput.name = 'category-input';

    const separator = document.createElement('hr');
    separator.className = 'separator-min';
    
    const validateButton = document.createElement('button');
    validateButton.type = 'button';
    validateButton.className = 'validate-button';
    validateButton.textContent = 'Valider';

    modalContent.appendChild(titleLabel);
    modalContent.appendChild(titleInput);
    
    modalContent.appendChild(categoryLabel);
    modalContent.appendChild(categoryInput);
    
    modalContent.appendChild(separator);
   
    modalContent.appendChild(validateButton);
}

document.addEventListener('DOMContentLoaded', () => {
    
    const uploadButton = document.querySelector('.add-photo-button');
    uploadButton.addEventListener('click', upload);

    /* Exemple envoie de données pour l'image dans la base de données via l api POST

    uploadButton.addEventListener('click', async function {
        await    postNewPicture(..., ... , ...)
    }); 
    */


  
});
const modal = document.getElementById('modalContainer');
const closeButton = document.getElementById('closeModalButton');


function closeModal() {
    modal.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);


document.addEventListener('click', function(event) {
    
    if (event.target === modal) {
        closeModal(); 
    }
});