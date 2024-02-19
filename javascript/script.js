async function getWorks() {
    try {
        const response = await fetch('http://localhost:5678/api/works/');
        const data = await response.json();// Affiche la réponse dans la console
        console.log('recup works');
    
    // selectionne la div avec la class gallery
    const gallery = document.querySelector('.gallery');
    //depuis les data recuperon va les traiter une par une
    data.forEach(work => {
       // on creeun element <figure>
        const figure = document.createElement('figure');
        // on cree un element <img>
        const img = document.createElement('img');
        // on deffinit ses proprietes avec les elemendu work de data qu on traite
        img.src = work.imageUrl;
        img.alt = work.title;
        // on creé un element <figcaption>
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = project.title;
        
        // on ajoute à <figure> le <img> qu on a cree au dessus
        figure.appendChild(img);
        // on ajoute a <figure le <figcaption> qu on a cree au dessus
        figure.appendChild(figcaption);
        // on ajoute à la div avec .gallery le <figure> qui contient vu ce qu on a mis au dessus le <img> et le <figcaption>
        gallery.appendChild(figure);
        // on passe au work suivant
      });
    
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}

async function getCategories() {
    try {
        const response = await fetch('http://localhost:5678/api/categories/');
        const data = await response.json();
        console.log('recup categories');
        console.log(data); // Affiche la réponse dans la console
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}
// Appel de la fonction fetchData dès que le document est chargé
document.addEventListener('DOMContentLoaded', () => {
    getWorks();
    getCategories();
})

