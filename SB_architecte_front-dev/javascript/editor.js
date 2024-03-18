
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
             // Stocke le token retourné par le serveur dans le stockage local du navigateur, ce qui permet de le récupérer et de l'utiliser ultérieurement pour authentifier les requêtes 
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


//bouton de retour vers la modale gelerie photos
    const backButton = document.createElement('button');
    backButton.id = 'backButton'
    backButton.addEventListener('click', function() {
        console.log(backButton)
        window.location.href = 'editor.html';
        //redirection vers editor.html
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
        //déclenchement au click d'accéder aux fichiers de l'ordinateur
        
    });
    



    const fileInput = document.createElement('input');
    fileInput.name = 'image';
    fileInput.type = 'file';
    fileInput.style.display='none'

    const addTextUploadMax = document.createElement('p');
    addTextUploadMax.textContent = "jpg, png : 4mo max";
    addTextUploadMax.classList.add("format");

    
    fileInput.accept = 'image/jpeg, image/png';
    fileInput.required = true;
    //nécessité de mettre fichier au format jpeg ou png

    containerNewPicture.appendChild(picturePlaceholder);
    containerNewPicture.appendChild(addPicButton);

    containerNewPicture.appendChild(addTextUploadMax);
    
    
    fileInput.addEventListener('change',function() {
        //fonction de rappel systématique dès changement de fichier
            if(this.files[0].size > 4 * 1024 * 1024){
                //fichiers premier de la liste
                alert('La taille maximum de la photo est supérieure à 4Mo')
                this.value = "";
            } else {
                
                containerNewPicture.innerHTML = "";
                // Supprimer le contenu actuel de containerNewPicture

                const selectedImage = document.createElement('img');
                selectedImage.src = URL.createObjectURL(this.files[0]);
                //creation URL local pour le fichier sélectionné
                // fait référence au premier fichier dans le champ de fichier 
                selectedImage.alt = "Photo chargée";
                
                selectedImage.style.maxHeight = "172px";
                
                validateButton.style.backgroundColor = "#1D6154";
                //changement de couleur dès chargement de la photo dans le placeholder
                
                containerNewPicture.appendChild(selectedImage);
                // Ajouter l'image à containerNewPicture
            }
        }
    )



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
    titleInput.required = true;
     //obligation de remplir le champs

    const categorySelect = document.createElement('select');
    categorySelect.className = 'rectangle';
    categorySelect.id = 'category';
    categorySelect.name = 'category';
   
    categorySelect.required = true;
    //obligation de remplir le champs
    

    const response = await fetch('http://localhost:5678/api/categories/');
    //Effectue une requête GET à l'URL et attend que la promesse soit résolue

    const dataCategories = await response.json();
    //Convertit le corps de la réponse HTTP en format JSON et le stocke dans la variable 'dataCategories'


    dataCategories.forEach(category => {
        //boucle sur chaque objet de catégories
        const optionCategory = document.createElement('option');
        optionCategory.value = category.id
        //assocation de l'id à la value
        optionCategory.textContent = category.name;
        //association du nom au text

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

    formAddProject.appendChild(fileInput);
    formAddProject.appendChild(titleLabel);
    formAddProject.appendChild(titleInput);  
    formAddProject.appendChild(categoryLabel);
    formAddProject.appendChild(categorySelect);    
    formAddProject.appendChild(separator);
    formAddProject.appendChild(validateButton);


    modalContent.appendChild(containerNewPicture)
    modalContent.appendChild(formAddProject)

//(formAddProject correspond au conteneur qui concerne la sélection du fichier)
    formAddProject.addEventListener('submit', async function (event) {
        //ajout d'un écouteur d'évènement à la soumission du formulaire puis la fonction anonyme est déclenchée
        event.preventDefault();
        //empêchement de recharger la page

        const formData = new FormData(this);
        //récupération de toutes les données du formulaire (champs de saisie et fichier téléchargé)

        try {
          const token = localStorage.getItem('token');
          //récupération du token dans le localstorage du navigateur
          const response =   await fetch('http://localhost:5678/api/works/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                 }, 
                body: formData
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


function checkAuthentification() {
    const token = localStorage.getItem('token');

    
    if (!token) {
        window.location.href = 'login.html';
        // Si le token n'est pas présent, rediriger vers la page login.html
    }
}



document.addEventListener('DOMContentLoaded', () => {
    
    
    checkAuthentification()
    // Vérification de l'autorisation d'accès à la page

    const uploadButton = document.querySelector('.add-photo-button');
    uploadButton.addEventListener('click', upload);

  
    
});
