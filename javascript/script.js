async function getWorks() {
    try {
        const response = await fetch('http://localhost:5678/api/works/');
        const dataWorks = await response.json();

        const gallery = document.querySelector('.gallery');

        for (const currentWork of dataWorks) {
            const figure = document.createElement('figure');
           
            const image = document.createElement('img');
            image.src = currentWork.imageUrl
            image.alt = currentWork.title

            const caption = document.createElement('figcaption');
            caption.textContent = currentWork.title

            figure.appendChild(image);
            figure.appendChild(caption);

            gallery.appendChild(figure); 
        } 
        
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}

async function getCategories() {
    try {
        const response = await fetch('http://localhost:5678/api/categories/');
        const data = await response.json();// Affiche la réponse dans la console
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}
// Appel de la fonction fetchData dès que le document est chargé
document.addEventListener('DOMContentLoaded', () => {
    getWorks();
    getCategories();
})

