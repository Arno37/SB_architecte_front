async function getWorks() {
    //Définit une fonction asynchrone nommée getWorks() qui récupère des travaux à partir de l'API
    try { //Démarre un bloc de code qui sera susceptible de générer des erreurs avec le 'try'/'catch'
        const response = await fetch('http://localhost:5678/api/works/');    
//  Effectue une requête GET à l'URL spécifiée. La fonction fetch() retourne une promesse qui sera résolue une fois que la requête sera terminée. 
// L'opérateur await permet d'attendre que cette promesse se résolve avant de continuer l'exécution du code
        const dataWorks = await response.json();
        // en attente  que la promesse retournée par response.json() soit résolue, ce qui convertit le corps de la réponse HTTP en format JSON et le stocke dans la variable dataWorks.

        
        const gallery = document.querySelector('.gallery');
       //Sélectionne l'élément HTML ayant la classe CSS .gallery et le stocke dans la variable '.gallery'
        

      for (const currentWork of dataWorks) {
        //parcours tous les éléments itérablee du tableau JSON
            const figure = document.createElement('figure');
            // Création d'un nouvel élément HTML 'figure' et le stocke dans la variable figure
            figure.dataset.category = currentWork.categoryId
            //Ajout d'un attribut de données category à l'élément 'figure' pour stocker l'ID de la catégorie de l'œuvre actuelle. 
            //Cet attribut de données peut être utilisé pour filtrer ou classer les œuvres par catégorie.

            const image = document.createElement('img');
            image.src = currentWork.imageUrl
            //Définit l'attribut src de l'élément 'img' avec l'URL de l'image de l'œuvre actuelle, obtenue à partir des données JSON.
            image.alt = currentWork.title
            //Définit l'attribut alt de l'élément 'img' avec le titre de l'œuvre actuelle. Cet attribut est utilisé pour fournir une description textuelle de l'image pour l'accessibilité.

            const caption = document.createElement('figcaption');
            //Crée un nouvel élément HTML 'figcaption' et le stocke dans la variable caption. Cet élément représente la légende de l'image.
            caption.textContent = currentWork.title
            //Définit le contenu textuel de l'élément 'figcaption' avec le titre de l'œuvre actuelle

            figure.appendChild(image);
            //Ajout de l'élément 'img' à l'intérieur de l'élément 'figure'
            figure.appendChild(caption);
            // Ajout de l'élément 'figcaption' à l'intérieur de l'élément 'figure'
            gallery.appendChild(figure);
            // Ajout de l'élément 'figure' à l'intérieur de l'élément .gallery, affichant ainsi l'image dans la galerie.

        }

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}

async function getCategories() {
    // fonction asynchrone nommée 'getCategories' qui est utilisée pour récupérer les catégories à partir d'une API
    try {
        const filters = document.querySelector('.filters');
        // Sélection de l'élément HTML ayant la classe CSS '.filters' et le stocke dans la variable filters
        
        const button = document.createElement('button');
        //Création d'un nouvel élément 'button' 
        button.textContent = 'Tous';
        //Attribution du texte "Tous"
        button.addEventListener("click", () => setfilter(0));
        // Ajout d'un écouteur d'événements de clic au bouton, qui appelle la fonction setfilter(0) au click et toutes les images s'affichent
        filters.appendChild(button)
        //Ajout du bouton à l'intérieur de l'élément 'filters'


        const response = await fetch('http://localhost:5678/api/categories/');
        //Effectue une requête GET à l'URL et attend que la promesse soit résolue

        const dataCategories = await response.json();
        //Convertit le corps de la réponse HTTP en format JSON et le stocke dans la variable 'dataCategories'

        for (const currentCategory of dataCategories) {
        //Démarrage d'une boucle for qui itère à travers chaque élément (catégorie) dans le tableau dataCategories
            const button = document.createElement('button');
            //Création d'un nouvel élément 'button' et le stocke dans la variable button
            button.textContent = currentCategory.name;
            // Définit le texte du bouton avec le nom de la catégorie actuelle. Cela affichera le nom de la catégorie sur le bouton.
            button.addEventListener("click", () => setfilter(currentCategory.id))
            //Ajout d'un écouteur d'événements de clic au bouton. Lorsque le bouton est cliqué, la fonction setfilter() est appelée avec l'ID de la catégorie actuelle comme argument
            filters.appendChild(button)
            //Ajout du bouton à l'intérieur de l'élément HTML sélectionné par filters. Cet élément est le conteneur des filtres où tous les boutons de catégorie sont affichés.
        }

    } catch (error) {
//Gère les erreurs potentielles en affichant un message d'erreur dans la console si une erreur se produit lors de la récupération des catégories depuis l'API.
        console.error('Une erreur s\'est produite :', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Au chargement complet de la page HTML les travaux et les catégories sont récupérer
    getWorks();
    getCategories();
})



function setfilter(categoryId) {
    // fonction qui est utilisée pour filtrer les éléments de la galerie en fonction de leur catégorie
    const gallery = document.querySelector('.gallery');
    // sélection de l'élément HTML ayant la classe CSS .gallery et le stocke dans la variable gallery
    const figures = gallery.querySelectorAll('figure')
    // sélection de tous éléments 'figure' du HTML  et le stocke dans la variable gallery (figures enfant de gallery)

    for (const figure of figures) {
        //boucle qui itère sur chaque élément <figure> dans la liste figures

        if (figure.dataset.category == categoryId) {
            // condition qui vérifie si la valeur de l'élément 'figure' est égale à la catégorie 'categoryId'
            figure.style.display = 'block'
            // Si l'élément 'figure'correspond il est affiché
        }
        else if (categoryId == 0) {
            // Vérifie si la categoryId est égale à zéro. Cela représente l'option de filtre "Tous les éléments"
            figure.style.display = 'block'
            // Si la categoryId est égale à zéro, tous les éléments 'figure' sont affichés
        }
        else {
            figure.style.display = 'none'
            // Si la categoryId n'est pas égale à zéro, aucun éléments 'figure' ne sera affiché
        }
    }
}

