//DAM
async function fetchPhotosFromAPI() {
try{
    const response =  await fetch('http://localhost:5678/api/works/');
    const dataWorks = await response.json();
    const modalPreviewContainer = document.getElementById("previewContainer");

    dataWorks.forEach(work => {
        console.log(work)
        const img = document.createElement("img");
        img.src = work.imageUrl; 
        modalPreviewContainer.appendChild(img);
    });

    }
    catch(e) {
        console.error('Une erreur s\'est produite lors de la récupération des photos :', error);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const openModalButton = document.getElementById("openModalButton");
    const closeModalButton = document.getElementById("closeModalButton");

    //DAM
    //default none on loaded dom
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