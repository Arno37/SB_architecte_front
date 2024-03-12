

function upload() {
    const modalContent = document.getElementById('modal-main-content');
    
    modalContent.innerHTML = "";

    const arrow = document.createElement('img');
    arrow.src = "./assets/icons/arrow-left.svg";
    arrow.alt = "arrow_pic";
    arrow.classList.add("arrow-img");
    modalContent.appendChild(arrow);
    arrow.style.display = 'block';


   
    const newTitle = document.createElement('h3');
    newTitle.textContent = "Ajout photo";
    modalContent.appendChild(newTitle);

    const newImage = document.createElement('img');
    newImage.src = "./assets/icons/Rectangle 21.svg";
    newImage.alt = "add_pic";
    newImage.classList.add("rectangle-img");
    modalContent.appendChild(newImage);

    const newlogo = document.createElement('img');
    newlogo.src = "./assets/icons/picture-svgrepo-com 1.svg";
    newlogo.alt = "new_pic";
    newlogo.classList.add("logo-pic");
    modalContent.appendChild(newlogo);

    const rectangleImg = document.querySelector('.rectangle-img');

    const addPicButton = document.createElement('button');
    addPicButton.textContent = "+ Ajouter une photo";
    modalContent.appendChild(addPicButton);

    addPicButton.addEventListener('click', function() {
        console.log(addPicButton, 'ok')
        addPicButton.addEventListener('click', function() {

            fileInput.click();
        });

    
        
    });

    rectangleImg.parentNode.appendChild(addPicButton);

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

    const categoryInput = document.createElement('input');
    categoryInput.type = 'text';
    categoryInput.className = 'rectangle';
    categoryInput.id = 'category';
    categoryInput.name = 'category-input';

    const validateButton = document.createElement('button');
    validateButton.type = 'button';
    validateButton.className = 'validate-button';
    validateButton.textContent = 'Valider';

    modalContent.appendChild(titleLabel);
    modalContent.appendChild(titleInput);
    modalContent.appendChild(categoryLabel);
    modalContent.appendChild(categoryInput);
    modalContent.appendChild(validateButton);
}

document.addEventListener('DOMContentLoaded', () => {
    
    const uploadButton = document.querySelector('.add-photo-button');
    uploadButton.addEventListener('click', upload);

    const button = document.getElementById('backButton');
    button.addEventListener('click', function() {
        console.log(button)
        window.location.href = 'editor.html';
    });
   
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