
async function fetchPhotosFromAPI() {

try{
    const response =  await fetch('http://localhost:5678/api/works/');
    const dataWorks = await response.json();
    const modalPreviewContainer = document.getElementById("previewContainer");
    

    const icon = document.getElementById('trash_button')
    const picture = document.getElementById('trash_picture')
   
    
    

    dataWorks.forEach(work => {
        
        const img = document.createElement("img");
        img.src = work.imageUrl; 
        modalPreviewContainer.appendChild(img);

        const icon = document.createElement('icon')
        trash_button.appendChild(icon)
       
        const picture = document.createElement('picture')
        trash_picture.appendChild(picture);
    });

    }
    catch(e) {
        console.error('Une erreur s\'est produite lors de la récupération des photos :', error);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const openModalButton = document.getElementById("openModalButton");
    const closeModalButton = document.getElementById("closeModalButton");

   
    const modalContainer = document.getElementById("modalContainer");
    modalContainer.style.display = "none";


    openModalButton.addEventListener("click", function() {
        modalContainer.style.display = "flex";
        fetchPhotosFromAPI();
    });

    closeModalButton.addEventListener("click", function() {
        modalContainer.style.display = "none";
    });
  
});