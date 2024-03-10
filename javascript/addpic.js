function upload() {
    const modalContent = document.getElementById('modal-main-content');
    
    modalContent.innerHTML = "";

    const arrow = document.createElement('img');
    arrow.src = "./assets/icons/arrow-left.svg";
    arrow.alt = "arrow_pic";
    arrow.classList.add("arrow-img");
    modalContent.appendChild(arrow);
   
    const newTitle = document.createElement('h3');
    newTitle.textContent = "Ajout photo";
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
    picture.textContent = "+ Ajouter photo";
    modalContent.appendChild(picture);


    const format = document.createElement('p');
    format.textContent = "jpg, png : 4mo max";
    modalContent.appendChild(format);

    const line = document.createElement('img');
    line.src = "./assets/icons/Line 1.svg";
    line.alt = "line_pic";
    line.classList.add("line-pic");
    modalContent.appendChild(line);


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
titleInput.value = '';
;

const categoryInput = document.createElement('input');
categoryInput.className = 'rectangle';
categoryInput.id = 'category';
categoryInput.name = 'category-input';



const validateButton = document.createElement('button');
validateButton.type = 'button';
validateButton.className = 'validate-button';
validateButton.textContent = 'valider';


modalContent.appendChild(titleLabel);
modalContent.appendChild(titleInput);
modalContent.appendChild(categoryLabel);
modalContent.appendChild(categoryInput);
modalContent.appendChild(validateButton);

   
}

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


const categoryInput = document.createElement('inp');
categoryInput.className = 'rectangle';
categoryInput.id = 'category';
categoryInput.name = 'category-input';
categoryInput.i = 'fas-chevron-down';

const chevronIcon = document.createElement('i');
chevronIcon.classList.add('fas', 'fa-chevron-down');

categoryInput.insertAdjacentElement('afterend', chevronIcon);


const validateButton = document.createElement('button');
validateButton.type = 'button';
validateButton.className = 'validate-button';
validateButton.textContent = 'valider';


    document.addEventListener('DOMContentLoaded', () => {
        
        const uploadButton = document.querySelector('.add-photo-button');
        uploadButton.addEventListener('click', upload);
        console.log(uploadButton)
        
    
        const backButton = document.getElementById('backButton');
        backButton.addEventListener('click', () => { 
            window.location.href = 'editor.html';   
            
        });
    
        const arrow = document.querySelector('.arrow-img');
        arrow.addEventListener('click', () => {
            
        });
    });





   


