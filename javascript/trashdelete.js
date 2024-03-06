
async function DeletePhoto(event) {
    const id = event.target.dataset.id;
    //event.target.dataset.id permet de récupérer la valeur de l'attribut data-id de l'élément HTML sur 
    //lequel un événement a été déclenché. Cette valeur est ensuite stockée dans la variable id, ce qui 
    //nous permet de savoir quel élément a été affecté par l'événement

    try {
        const response = await fetch(`http://localhost:5678/api/works/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log(`La photo avec l'ID ${id} a été supprimée avec succès.`);
            // Rafraîchir la galerie ou effectuer toute autre action nécessaire après la suppression
        } else {
            console.error('Erreur lors de la suppression de la photo.');
            // Gérer les erreurs selon vos besoins
        }
    } catch (error) {
        console.error('Erreur lors de la suppression de la photo:', error);
        // Gérer les erreurs selon vos besoins
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner la galerie de photos
    const gallery = document.getElementById("gallery1");
    
    // Liste des ID de photos
    const photoIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
   

    // Pour chaque ID de photo, générer un conteneur avec un bouton de suppression
    photoIds.forEach(id => {
        const photoContainer = document.createElement("div");
        photoContainer.classList.add("photo-item");

        const img = document.createElement("img");
        img.src = `./path/to/photo-${id}.jpg`; // Remplacez par le chemin réel de vos photos
        photoContainer.appendChild(img);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-photo-button");
        deleteButton.dataset.id = id;
        deleteButton.textContent = "Supprimer";
        deleteButton.addEventListener("click", DeletePhoto);
        photoContainer.appendChild(deleteButton);

        gallery.appendChild(photoContainer);
    });
});