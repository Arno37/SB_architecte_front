function upload() {
    const modalContent = document.getElementById('modal-main-content');
    // Efface le contenu précédent de la modale
    modalContent.innerHTML = "";

    // Crée les éléments HTML à afficher dans la modale
    const newTitle = document.createElement('h3');
    newTitle.textContent = "Ajout photo";
    
    // Ajoute les éléments créés à la modale
    modalContent.appendChild(newTitle);

    const newImage = document.createElement('img');
    newImage.src = "./assets/icons/Rectangle 21.svg";
    newImage.alt = "add_pic";
    newImage.classList.add("rectangle-img");
    modalContent.appendChild(newImage);

    const newlogo = document.createElement('img')
    newlogo.src = "./assets/icons/picture-svgrepo-com 1.svg";
    newlogo.alt = "new_pic";
    newlogo.classList.add("logo-pic");
    modalContent.appendChild(newlogo);

    const picture = document.createElement('h4');
    picture.textContent = "+ Ajouter une photo";
    modalContent.appendChild(picture);


    const format = document.createElement('p');
    format.textContent = "jpg, png : 4mo max";
    modalContent.appendChild(format);


const titleLabel = document.createElement('label');
titleLabel.setAttribute('for', 'title-input');
titleLabel.textContent = 'Titre';

const categoryLabel = document.createElement('label');
categoryLabel.setAttribute('for', 'category-input');
categoryLabel.textContent = 'Catégorie';

// Création des éléments input
const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.className = 'rectangle';
titleInput.id = 'title';
titleInput.name = 'title-input';
titleInput.value = '';
;

const categoryInput = document.createElement('input');
categoryInput.type = 'text';
categoryInput.className = 'rectangle';
categoryInput.id = 'category';
categoryInput.name = 'category-input';
categoryInput.value = '';


// Création du bouton
const validateButton = document.createElement('button');
validateButton.type = 'button';
validateButton.className = 'validate-button';
validateButton.textContent = 'valider';

// Ajout des éléments à la section
modalContent.appendChild(titleLabel);
modalContent.appendChild(titleInput);
modalContent.appendChild(categoryLabel);
modalContent.appendChild(categoryInput);
modalContent.appendChild(validateButton);
   
   
}

document.addEventListener('DOMContentLoaded', () => {
    const uploadButton = document.querySelector('.add-photo-button');
    uploadButton.addEventListener('click', upload);
});

const section = document.getElementById('newmodal');

const titleLabel = document.createElement('label');
titleLabel.setAttribute('for', 'title-input');
titleLabel.textContent = 'Titre';

const categoryLabel = document.createElement('label');
categoryLabel.setAttribute('for', 'category-input');
categoryLabel.textContent = 'Catégorie';

// Création des éléments input
const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.className = 'rectangle';
titleInput.id = 'title';
titleInput.name = 'title-input';
titleInput.value = '';
;

const categoryInput = document.createElement('input');
categoryInput.type = 'text';
categoryInput.className = 'rectangle';
categoryInput.id = 'category';
categoryInput.name = 'category-input';
categoryInput.value = '';


// Création du bouton
const validateButton = document.createElement('button');
validateButton.type = 'button';
validateButton.className = 'validate-button';
validateButton.textContent = 'valider';

// Ajout des éléments à la section
section.appendChild(titleLabel);
section.appendChild(titleInput);
section.appendChild(categoryLabel);
section.appendChild(categoryInput);
section.appendChild(validateButton);
   


