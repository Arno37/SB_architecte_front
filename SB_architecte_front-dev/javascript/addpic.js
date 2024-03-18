
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




async function upload() {
    const modalContent = document.getElementById('modal-main-content');
    
    modalContent.innerHTML = "";


   
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
    addPicButton.type='button';
    addPicButton.textContent = "+ Ajouter une photo";
    addPicButton.classList.add("add-picture");
    addPicButton.addEventListener('click', function() {
        fileInput.click();
        
    });
    
    const fileInput = document.createElement('input');
    fileInput.name = 'image';
    fileInput.type = 'file';
    
    fileInput.accept= 'image/*';

        

    const addTextUploadMax = document.createElement('p');
    addTextUploadMax.textContent = "jpg, png : 4mo max";
    addTextUploadMax.classList.add("format");


    containerNewPicture.appendChild(picturePlaceholder);
    containerNewPicture.appendChild(addPicButton);
    containerNewPicture.appendChild(fileInput);
    containerNewPicture.appendChild(addTextUploadMax);




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
    titleInput.name = 'title';

    const categorySelect = document.createElement('select');
    categorySelect.className = 'rectangle';
    categorySelect.id = 'category';
    categorySelect.name = 'category';
    

    const response = await fetch('http://localhost:5678/api/categories/');
    //Effectue une requête GET à l'URL et attend que la promesse soit résolue

    const dataCategories = await response.json();
    //Convertit le corps de la réponse HTTP en format JSON et le stocke dans la variable 'dataCategories'

    console.log(dataCategories)

    dataCategories.forEach(category => {
        console.log(category)
        const optionCategory = document.createElement('option');
        optionCategory.value = category.id
        optionCategory.textContent = category.name;

        categorySelect.appendChild(optionCategory)
    })

    const separator = document.createElement('hr');
    separator.className = 'separator-min';
    
    const validateButton = document.createElement('button');
    validateButton.type = 'submit';
    validateButton.className = 'validate-button';
    validateButton.textContent = 'Valider';


    const formAddProject = document.createElement('form');
    formAddProject.id = 'form-add-work'
    formAddProject.enctype= 'multipart/form-data'


    formAddProject.appendChild(containerNewPicture)
    formAddProject.appendChild(titleLabel);
    formAddProject.appendChild(titleInput);  
    formAddProject.appendChild(categoryLabel);
    formAddProject.appendChild(categorySelect);    
    formAddProject.appendChild(separator);
    formAddProject.appendChild(validateButton);

    modalContent.appendChild(formAddProject)


    formAddProject.addEventListener('submit', async function (event) {
        event.preventDefault();
        console.log(this)

        const formData = new FormData(this);

        try {
          const userToken = localStorage.getItem('token');
          const response =   await fetch('http://localhost:5678/api/works/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                },                body: formData
            })

            if (response.ok) {
                console.log('Projet ajouté avec succès')
         
            } else {
                console.log('Problème lors de l ajout du projet')
            }
            
        } catch (error) {
            console.error('Erreur:', error);
        }


    })



}

document.addEventListener('DOMContentLoaded', () => {
    
    const uploadButton = document.querySelector('.add-photo-button');
    uploadButton.addEventListener('click', upload);


  
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